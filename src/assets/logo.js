import React from 'react'
import { withTheme } from 'styled-components'

const Logo = ({
  className,
  width,
  height,
  theme: { mainBlue, darkBlue, mainGreen },
}) => (
  <svg
    className={className}
    clipRule="evenodd"
    fillRule="evenodd"
    viewBox="0 0 132 166"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width, height }}
  >
    <g transform="translate(-4.328 -11.764)">
      <g fillRule="nonzero">
        <path
          d="m131.226 51.79c-7.556 7.474-18.276 12.313-28.855 10.755 13.011-1.956 24.322-11.821 30.514-23.046 1.644-2.981-3.862-.849-4.756.775-5.967 10.822-17.006 19.55-30.004 18.233-1.247-.125-3.57 1.702-4.175 3.008-1.727 1.029-3.256 2.975-1.971 3.486 14.972 5.955 31.48-1.186 42.22-11.811 2.942-2.91-.932-3.419-2.973-1.4z"
          fill={mainBlue}
        />
        <path
          d="m9.572 51.79c7.557 7.474 18.276 12.313 28.855 10.755-13.01-1.956-24.322-11.821-30.512-23.046-1.646-2.981 3.86-.849 4.755.775 5.968 10.822 17.006 19.55 30.004 18.233 1.248-.125 3.569 1.702 4.177 3.008 1.726 1.029 3.255 2.975 1.97 3.486-14.974 5.955-31.481-1.186-42.222-11.811-2.94-2.91.932-3.419 2.973-1.4z"
          fill={mainBlue}
        />
        <path
          d="m18.18 176.369v-57.294c0-31.486 14.187-52.133 26.089-63.909 12.892-12.757 25.974-18.146 26.104-18.199l.188-.076.188.076c.13.053 13.212 5.442 26.104 18.199 11.901 11.776 26.088 32.423 26.088 63.909v57.294z"
          fill={darkBlue}
        />
        <path
          d="m70.561 37.43s51.88 21.027 51.88 81.645v56.794h-51.88-51.881v-56.794c0-60.618 51.881-81.645 51.881-81.645m0-1.079-.375.152c-.537.218-13.305 5.479-26.269 18.307-11.969 11.843-26.237 32.606-26.237 64.264v57.794h105.761v-1-56.794c0-31.658-14.268-52.421-26.237-64.265-12.963-12.827-25.73-18.088-26.267-18.306z"
          fill={darkBlue}
        />
        <path d="m48.899 26.008h43.325v25.027h-43.325z" fill={mainGreen} />
        <path
          d="m91.724 26.508v24.027h-42.325v-24.027zm1-1h-1-42.325-1v26.027h44.325v-1-24.027z"
          fill={darkBlue}
        />
        <path
          d="m33.825 22.874 38.09-10.214 38.231 10.25-38.092 10.213z"
          fill={darkBlue}
        />
      </g>
      <circle
        cx="44.762"
        cy="84.123"
        fill="#fff"
        r="23.483"
        stroke={mainBlue}
        strokeWidth="2"
      />
      <circle
        cx="96.36"
        cy="84.123"
        fill="#fff"
        r="23.484"
        stroke={mainBlue}
        strokeWidth="2"
      />
      <path
        d="m18.68 119.074s41.231-16.11 0 56.794"
        fill={mainBlue}
        fillRule="nonzero"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="m122.441 119.074s-41.23-16.11 0 56.794"
        fill={mainBlue}
        fillRule="nonzero"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="m70.531 124.977-9.816-9.817c-.684 1.955-1.076 4.13-1.076 6.44 0 8.255 4.889 14.949 10.922 14.949 6.031 0 10.924-6.693 10.924-14.949 0-2.326-.4-4.52-1.093-6.484z"
        fill={mainGreen}
        fillOpacity=".8"
        fillRule="nonzero"
      />
      <path
        d="m80.392 115.116c-1.765-5.004-5.498-8.467-9.831-8.467-4.345 0-8.087 3.483-9.846 8.511l9.816 9.817z"
        fill={mainGreen}
        fillRule="nonzero"
      />
      <ellipse cx="96.36" cy="84.123" fill={darkBlue} rx="1.5" ry="17.5" />
      <ellipse cx="43.763" cy="84.123" fill={darkBlue} rx="1.5" ry="17.5" />
    </g>
  </svg>
)

export default withTheme(Logo)
