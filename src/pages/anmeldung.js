import Airtable from 'airtable'
import PageBody from 'components/PageBody'
import PageTitle from 'components/PageTitle'
import { graphql } from 'gatsby'
import React, { useEffect, useCallback } from 'react'
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { Text, Input, Submit, ButtonGroup, Switch } from 'components/styles/forms'
import { useSessionStorage } from 'hooks'
import { globalHistory } from '@reach/router'

const RadioButtons = ({ options, name, register, initial, ...rest }) => (
  <ButtonGroup {...rest}>
    {options.map(({ label, value }) => (
      <label key={label}>
        <input
          type="radio"
          {...{ name, value }}
          ref={register}
          defaultChecked={value === initial}
        />
        <span>{label}</span>
      </label>
    ))}
  </ButtonGroup>
)

const trim = str => str.trim()
const parseSnippets = html => {
  const snippets = html.split(`<!--`).map(s =>
    s
      .split(/-->|::/)
      .map(trim)
      .filter(str => str)
  )
  return Object.fromEntries(snippets)
}

const airtable = new Airtable({
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
})

export default function SignupPage({ data, location }) {
  let { cover, form, studentForm, pupilForm } = data
  const [storedData, setStoredData] = useSessionStorage(`formData`)

  const { register, errors, control, getValues, ...rhf } = useForm({
    defaultValues: storedData,
  })

  const leaveListener = useCallback(() => {
    setStoredData(getValues())
  }, [setStoredData, getValues])

  // For domain changes and page reloads (site-external navigation)
  useEffect(() => {
    window.addEventListener(`beforeunload`, leaveListener)
    return () => window.removeEventListener(`beforeunload`, leaveListener)
  }, [getValues, leaveListener, setStoredData])

  // For Gatsby route changes (site-internal navigation)
  // https://github.com/reach/router/issues/262
  // globalHistory.listen returns an unsubscribe function
  useEffect(() => globalHistory.listen(leaveListener), [leaveListener])

  const { updatedAt } = form // save the value of updatedAt before we reassign form
  form = form.text.remark.html
    .replace(/(^<!--|-->$)/g, ``) // remove html comments at start and end
    .split(/-->\n?\n?<!--/) // split at all middle html comments
    .map(s => s.split(`::`).map(s => s.split(`;`).map(trim)))
  form = Object.fromEntries(form)

  const baseKeys = Object.fromEntries(form.baseKeys.map(s => s.split(`:`).map(trim)))
  form.chapters = Object.keys(baseKeys).filter(
    key => ![`test`, `register`].includes(key)
  )
  delete form.baseKeys

  // initChapter should remain between parsing `form` above and turning items
  // into { label, value } objects below for chapters.includes to work.
  const urlParams = new URLSearchParams(location.search)
  // Student should be the default type if no other valid type was specified.
  const initType =
    storedData?.type ||
    (/sch(ue|ü)ler/i.test(urlParams.get(`type`)) ? `Schüler` : `Student`)

  let initChapter = urlParams.get(`chapter`)

  initChapter = form.chapters.includes(initChapter) && {
    label: initChapter,
    value: initChapter,
  }

  const type = rhf.watch(`type`, initType)

  let snippets = parseSnippets(
    (type === `Student` ? studentForm : pupilForm).text.remark.html
  )

  for (const key in form) {
    form[key] = form[key].map(x => ({ value: x, label: x }))
  }

  const selectProps = {
    onChange: ([selected]) => selected,
    control,
    as: Select,
  }

  const Error = ({ name }) =>
    errors[name]?.type === `required` && <Text error>{snippets.required}</Text>

  const onSubmit = async data => {
    const table = data.type === `Student` ? `Studenten` : `Schüler`
    const globalTable = airtable.base(baseKeys.register)(table)
    const chapterTable = airtable.base(baseKeys[data.chapter?.value])(table)

    if (data.age) {
      // convert pupil age to approximate birthday (assuming today's day and month)
      const date = new Date()
      date.setFullYear(date.getFullYear() - data.age)
      data.birthDate = date
    }
    const fields = {
      'Vor- und Nachname': data.fullname, // for students
      Vorname: data.firstname, // for pupils
      Telefon: data.phone, // for students
      'E-Mail': data.email,
      Bemerkung: data.remarks,
      'Geografische Präferenz': data.place,
      Klassenstufen: data.levels, // for students
      Klassenstufe: data.level, // for pupils
      Fächer: data.subjects?.map(x => x.value),
      Schulform: data.schoolTypes?.map(x => x.value) || data.schoolType?.value, // for pupils
      Werbemaßnahme: data.discovery?.value,
      Geschlecht: data.gender,
      'Semester Anmeldung': Number(data.semester) || undefined, // for students
      // pass undefined in case Number(data.semester) is NaN
      Studienfach: data.studySubject, // for students
      Geburtsort: data.birthPlace, // for students
      // Manual conversion of date string into iso format (yyyy-mm-dd). Only necessary
      // in Safari. Should do nothing in other browsers.
      Geburtsdatum:
        typeof data.birthDate === `string`
          ? data.birthDate.split(`.`).reverse().join(`-`)
          : data.birthDate,
      Datenschutz: data.dataProtection,
      Kontaktperson: data.nameContact, // for pupils
      'E-Mail Kontaktperson': data.emailContact, // for pupils
      'Telefon Kontaktperson': data.phoneContact, // for pupils
      'Organisation Kontaktperson': data.orgContact, // for pupils
    }

    // Certain chapters organize contact persons a bit different to others
    if (data.chapter?.value === `Halle` && table === `Schüler`) {
      fields.Kontaktperson = `${data.nameContact}; ${data.orgContact}; ${data.emailContact}; ${data.phoneContact}`
      fields[`E-Mail Kontaktperson`] = undefined
      fields[`Telefon Kontaktperson`] = undefined
      fields[`Organisation Kontaktperson`] = undefined
    }
    try {
      const source = [`source`, `chapter`, `type`]
        .map(key => `${key}: ${urlParams.get(key)}`)
        .join(`, `)

      // fields not present in individual chapter tables
      const globalFields = {
        Standort: data.chapter?.value,
        Quelle: `landing: ${location.origin}${window.locations[1]}, prev: ${document.referrer}, ${source}`,
        Spur: window.locations.join(`,\n`),
      }

      // use Promise.all to fail fast if one record creation fails
      await Promise.all([
        globalTable.create([{ fields: { ...fields, ...globalFields } }], {
          typecast: true,
        }),
        // Create new link to Kontaktpersonen table
        chapterTable.create(
          [{ fields: { ...fields, Kontaktpersonen: data.nameContact } }],
          { typecast: true }
        ),
      ])
      alert(snippets.success)
      // Reset form fields and localStorage.
      setStoredData({})
      rhf.reset(null)
      // Second reset needed to clear controlled react-select fields.
      rhf.reset({
        chapter: ``,
        subjects: ``,
        schoolTypes: ``,
        schoolType: null,
        discovery: null,
      })
    } catch (err) {
      alert(snippets.error + `\n\n` + JSON.stringify(err, null, 4))
    }
  }

  return (
    <>
      <PageTitle cover={cover}>
        <h1>{snippets.pageTitle}</h1>
      </PageTitle>
      <PageBody
        as="form"
        onSubmit={rhf.handleSubmit(onSubmit)}
        updatedAt={updatedAt}
        title={snippets.pageTitle}
      >
        <RadioButtons
          options={form.types}
          register={register({ required: true })}
          name="type"
          initial={type}
          css="margin: 0 auto 4em;"
        />
        <Error name="type" />

        <Text as="section" html={snippets.infoText} />
        <Text required as="h2">
          {snippets.chapterTitle}
        </Text>
        <Text description html={snippets.chapter} />
        <Controller
          {...selectProps}
          name="chapter"
          options={form.chapters}
          rules={{ required: true }}
          defaultValue={initChapter}
        />
        <Text as="h2" required>
          {snippets.genderTitle}
        </Text>
        <RadioButtons options={form.genders} register={register} name="gender" />
        <Error name="gender" />

        {type === `Student` && (
          <>
            <Text as="h2" required>
              {snippets.fullnameTitle}
            </Text>
            <Input type="text" name="fullname" ref={register({ required: true })} />
            <Error name="fullname" />

            <Text as="h2" required>
              {snippets.phoneTitle}
            </Text>
            <Text description html={snippets.phone} />
            <Input type="phone" name="phone" ref={register({ required: true })} />
            <Error name="phone" />

            <Text as="h2" required>
              {snippets.emailTitle}
            </Text>
            <Text description html={snippets.email} />

            <Input type="email" name="email" ref={register({ required: true })} />
            <Error name="email" />

            <Text as="h2">{snippets.studySubjectTitle}</Text>
            <Text description html={snippets.studySubject} />
            <Input type="text" name="studySubject" ref={register} />

            <Text as="h2">{snippets.semesterTitle}</Text>
            <Text description html={snippets.semester} />
            <Input type="number" name="semester" ref={register} min="1" />

            <Text as="h2">{snippets.birthPlaceTitle}</Text>
            <Text description html={snippets.birthPlace} />
            <Input type="text" name="birthPlace" ref={register} />

            <Text as="h2">{snippets.birthDateTitle}</Text>
            <Text description html={snippets.birthDate} />
            <Input type="date" name="birthDate" ref={register} />

            <Text as="h2" required>
              {snippets.subjectsTitle}
            </Text>
            <Text description html={snippets.subjects} />
            <Controller
              {...selectProps}
              name="subjects"
              options={form.subjects}
              isMulti={true}
              rules={{ required: true }}
            />
            <Error name="subjects" />

            <Text as="h2" required>
              {snippets.schoolTypesTitle}
            </Text>
            <Controller
              {...selectProps}
              name="schoolTypes"
              options={form.schoolTypes}
              isMulti={true}
              rules={{ required: true }}
            />
            <Error name="schoolTypes" />

            <Text as="h2">{snippets.levelsTitle}</Text>
            <Text description html={snippets.levels} />
            <Input type="text" name="levels" ref={register} />

            <Text as="h2" required>
              {snippets.placeTitle}
            </Text>
            <Text description html={snippets.place} />
            <Input type="text" name="place" ref={register({ required: true })} />
            <Error name="place" />

            <Text as="h2">{snippets.remarksTitle}</Text>
            <Text description html={snippets.remarks} />
            <Input type="text" name="remarks" ref={register} />

            <Text as="h2" required>
              {snippets.discoveryTitle}
            </Text>
            <Text description html={snippets.discovery} />
            <Controller
              {...selectProps}
              name="discovery"
              options={form.discoveries}
              rules={{ required: true }}
            />
            <Error name="discovery" />

            <Text as="h2" required>
              {snippets.agreementTitle}
            </Text>
            <Text description html={snippets.agreement} />
            <Switch name="agreement" register={register({ required: true })} />
            <Error name="agreement" />
          </>
        )}
        {type === `Schüler` && (
          <>
            <Text as="h2" required>
              {snippets.firstnameTitle}
            </Text>
            <Text description html={snippets.firstname} />
            <Input type="text" name="firstname" ref={register({ required: true })} />
            <Error name="firstname" />

            <Text as="h2" required>
              {snippets.schoolTypeTitle}
            </Text>
            <Text description html={snippets.schoolType} />
            <Controller
              {...selectProps}
              name="schoolType"
              options={form.schoolTypes}
              rules={{ required: true }}
            />
            <Error name="schoolType" />

            <Text as="h2" required>
              {snippets.levelTitle}
            </Text>
            <Text description html={snippets.level} />
            <Input type="text" name="level" ref={register({ required: true })} />

            <Text as="h2" required>
              {snippets.subjectsTitle}
            </Text>
            <Text description html={snippets.subjects} />
            <Controller
              {...selectProps}
              name="subjects"
              options={form.subjects}
              isMulti={true}
              rules={{ required: true }}
            />
            <Error name="subjects" />

            <Text as="h2" required>
              {snippets.placeTitle}
            </Text>
            <Text description html={snippets.place} />
            <Input type="text" name="place" ref={register({ required: true })} />
            <Error name="place" />

            <Text as="h2">{snippets.remarksTitle}</Text>
            <Text description html={snippets.remarks} />
            <Input type="text" name="remarks" ref={register} />

            <Text as="h2">{snippets.ageTitle}</Text>
            <Text description html={snippets.age} />
            <Input type="number" name="age" ref={register} min="1" />

            <Text as="h2" required>
              {snippets.nameContactTitle}
            </Text>
            <Text description html={snippets.nameContact} />
            <Input
              type="text"
              name="nameContact"
              ref={register({ required: true })}
            />
            <Error name="nameContact" />

            <Text as="h2" required>
              {snippets.phoneContactTitle}
            </Text>
            <Text description html={snippets.phoneContact} />
            <Input
              type="phone"
              name="phoneContact"
              ref={register({ required: true })}
            />
            <Error name="phoneContact" />

            <Text as="h2" required>
              {snippets.emailContactTitle}
            </Text>
            <Text description html={snippets.emailContact} />
            <Input
              type="email"
              name="emailContact"
              ref={register({ required: true })}
            />
            <Error name="emailContact" />

            <Text as="h2" required>
              {snippets.orgContactTitle}
            </Text>
            <Text description html={snippets.orgContact} />
            <Input
              type="text"
              name="orgContact"
              ref={register({ required: true })}
            />
            <Error name="orgContact" />
          </>
        )}
        <Text as="h2" required>
          {snippets.dataProtectionTitle}
        </Text>
        <Text description html={snippets.dataProtection} />
        <Switch name="dataProtection" register={register({ required: true })} />
        <Error name="dataProtection" />

        {type === `Schüler` && (
          <>
            <Text as="h2" required>
              {snippets.needTitle}
            </Text>
            <Text description html={snippets.need} />
            <Switch name="need" register={register({ required: true })} />
            <Error name="need" />
          </>
        )}
        <Text as="h2">{snippets.submitTitle}</Text>
        <Text description html={snippets.submit} />
        <Submit disabled={rhf.formState.isSubmitting}>Anmeldung abschicken</Submit>
      </PageBody>
    </>
  )
}

export const query = graphql`
  fragment microcopy on ContentfulMicrocopy {
    text {
      remark: childMarkdownRemark {
        html
      }
    }
    updatedAt(formatString: "D. MMM YYYY", locale: "de")
  }
  {
    cover: contentfulAsset(title: { eq: "Welcome Mat" }) {
      ...image
    }
    studentForm: contentfulMicrocopy(title: { eq: "StudentForm" }) {
      ...microcopy
    }
    pupilForm: contentfulMicrocopy(title: { eq: "PupilForm" }) {
      ...microcopy
    }
    form: contentfulMicrocopy(title: { eq: "SignupFormOptions" }) {
      ...microcopy
    }
  }
`
