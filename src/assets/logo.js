import React from 'react'
import { withTheme } from 'styled-components'

const Logo = ({ theme: { blue, green }, ...rest }) => (
  <svg {...rest} viewBox="0 0 1000 1000">
    <clipPath id="a">
      <path
        clipRule="evenodd"
        d="m722.901 530.845-416.082-471.965-484.609 427.229 416.081 471.965z"
      />
    </clipPath>
    <g clipPath="url(#a)">
      <path
        d="m381.531 589.282c48.849-43.065 53.545-117.687 10.48-166.536l-77.387-87.781c-43.065-48.849-117.687-53.544-166.536-10.479l-50.185 44.242c-48.849 43.065-53.545 117.687-10.48 166.536l77.387 87.781c43.065 48.849 117.687 53.545 166.536 10.48z"
        fill={blue}
        stroke={green}
        strokeWidth=".01"
      />
      <path
        d="m116.57 376.298c-35.952.324-71.976 13.146-101.186 38.897l-8.138 7.173c-4.291 25.793-6.549 51.884-6.753 78.031.229 120.941 44.4 237.772 124.243 328.613 18.372-6.446 35.854-16.479 51.403-30.186l99.849-88.026c64.463-56.831 70.608-154.479 13.777-218.943l-55.438-62.884c-31.08-35.254-74.366-53.066-117.757-52.675z"
        fill="#003090"
        stroke={green}
        strokeWidth=".01"
      />
      <path
        d="m314.334 626.151c-17.663.754-48.526 28.24-79.342 70.903-33.582 46.491-67.032 111.517-86.371 157.691 7.993 7.97 16.255 15.667 24.77 23.076 27.466-27.488 65.864-70.135 105.866-121.029 25.72-32.724 30.98-43.553 41.902-62.27 14.067-48.892 8.76-69.037-6.825-68.371z"
        fill={green}
      />
      <path
        d="m495.646 281.505 81.513 223.674c2.903 7.967-.83 11.258-8.371 7.379l-211.69-108.91c-7.541-3.88-15.949-13.418-18.853-21.385l-81.513-223.674c-2.904-7.968.829-11.259 8.37-7.379l211.691 108.91c7.541 3.879 15.949 13.417 18.853 21.385z"
        fill={blue}
      />
      <g fill={green}>
        <path d="m330.322 244.493c83.192 30.906 136.025 93.628 162.339 184.142l-77.851 68.278c-23.148-92.581-80.194-150.312-161.458-183.144z" />
        <path d="m225.665 546.354c9.941-16.45 11.394-33.99 2.032-44.609-9.387-10.648-27.045-11.379-44.665-3.506l-5.775 47.843z" />
        <path d="m72.536 375.381c-17.474-.272-40.559 5.428-58.42 11.458-6.878 29.57-11.044 59.706-12.447 90.033 57.295-43.088 103.263-84.032 91.983-95.463-4.507-4.14-12.053-5.887-21.116-6.028z" />
      </g>
      <path
        d="m427.565 455.857c37.921 43.014 33.786 108.722-9.228 146.643-43.013 37.92-108.722 33.785-146.642-9.228-37.921-43.014-33.786-108.722 9.228-146.643 43.014-37.92 108.722-33.785 146.642 9.228z"
        fill="#fff"
      />
      <path
        d="m258.66 582.748c-11.882-19.996-17.088-41.248-15.655-63.912 1.353-21.409 8.431-40.518 21.593-58.297 7.358-9.94 21.523-22.397 32.527-28.606 18.5-10.439 39.579-14.49 60.381-13.937 11.74.312 41.401 4.545 77.201 35.627 0 0 24.528 3.447 33.13 10.093 17.902 10.064 25.31 15.53 26.645 17.785 1.335 2.256-3.403 1.299-9.792-1.482l-36.219-12.782 9.029 17.208c23.787 10.55 38.232 8.744 91.468 36.608 10.906 5.964 1.848 5.656-16.663-.139-15.408-4.824-38.872-14.619-48.861-16.93-9.363-2.166-23.851-3.799-23.851-3.799-2.222 7.96-.384 5.617 2.287 8.243 24.716 21.519 56.402 34.508 94.404 38.699 8.641.953 12.161 2.317 15.37 5.958 4.928 5.59.857 8.117-11.454 7.109-25.325-2.073-54.237-9.679-76.408-20.101-8.843-4.157-22.163-11.657-23.602-13.289-.43-.488-.864-.814-.966-.724-.102.089-.43 3.347-.729 7.24-2.543 33.041-20.498 64.148-47.328 81.993-20.931 13.921-43.205 20.018-67.538 18.487-19.502-1.227-37.955-7.724-54.993-19.361-9.228-6.302-24.456-22.401-29.976-31.691zm38.577 10.068c20.81 17.698 52.809 24.045 79.276 15.725 44.094-13.861 69.283-59.675 57.235-104.101-9.904-36.522-40.827-61.452-78.831-63.552-16.378-.905-32.125 2.734-46.497 10.745-7.742 4.315-20.89 15.848-25.901 22.718-16.067 22.031-21.046 48.276-14.046 74.039 4.953 18.226 13.526 31.467 28.764 44.426z"
        fill={blue}
        stroke="#fff"
        strokeWidth=".01"
      />
      <path d="m379.53 503.036c11.656 13.222 10.436 33.376-2.724 44.977-13.16 11.602-33.308 10.286-44.964-2.936-11.657-13.222-10.437-33.376 2.723-44.978 13.16-11.601 33.308-10.286 44.965 2.937z" />
      <path
        d="m360.893 484.282c4.437 5.033 4.094 12.597-.766 16.881-4.859 4.284-12.406 3.676-16.843-1.357s-4.094-12.597.765-16.881c4.86-4.284 12.407-3.676 16.844 1.357z"
        fill="#fff"
      />
      <path
        d="m292.43 302.571c-37.921-43.013-103.629-47.148-146.643-9.228-43.014 37.921-47.148 103.629-9.228 146.643 37.921 43.013 103.629 47.148 146.643 9.228 43.013-37.921 47.148-103.629 9.228-146.643z"
        fill="#fff"
      />
      <path
        d="m145.366 454.237c18.348 14.295 38.78 22.124 61.445 23.544 21.41 1.341 41.255-3.285 60.544-14.114 10.784-6.055 24.918-18.546 32.458-28.685 12.676-17.045 19.337-37.45 21.397-58.157 1.162-11.687.68-41.644-25.669-81.059 0 0-.345-24.766-5.859-34.133-7.741-19.023-12.236-27.058-14.306-28.665s-1.715 3.213.244 9.901l8.14 37.535-15.94-11.115c-7.485-24.922-3.882-39.026-24.853-95.336-4.549-11.568-5.38-2.542-1.951 16.549 2.854 15.892 9.631 40.398 10.672 50.598.975 9.561.778 24.139.778 24.139-8.175 1.207-5.62-.322-7.891-3.302-18.251-27.218-27.165-60.283-26.559-98.511.138-8.691-.774-12.355-3.984-15.995-4.928-5.591-7.946-1.868-8.489 10.472-1.118 25.385 2.803 55.023 10.364 78.325 3.016 9.295 8.786 23.449 10.226 25.082.43.488.699.96.597 1.049-.102.09-3.375.007-7.274-.184-33.1-1.62-66.212 12.295-87.28 36.676-16.435 19.02-25.277 40.354-26.808 64.687-1.227 19.502 2.905 38.624 12.314 56.987 5.096 9.945 19.159 27.071 27.684 33.712zm-5.153-39.535c-14.949-22.864-17.235-55.407-5.663-80.622 19.28-42.008 67.889-61.255 110.455-43.733 34.993 14.404 55.849 48.209 53.168 86.176-1.155 16.363-6.74 31.529-16.489 44.784-5.252 7.139-18.342 18.738-25.785 22.848-23.872 13.179-50.534 14.828-75.216 4.653-17.461-7.198-29.524-17.364-40.47-34.106z"
        fill={blue}
        stroke="#fff"
        strokeWidth=".01"
      />
      <path d="m239.602 344.314c-11.657-13.222-31.805-14.538-44.965-2.936-13.16 11.601-14.38 31.755-2.723 44.977 11.656 13.223 31.804 14.538 44.964 2.937 13.16-11.602 14.38-31.756 2.724-44.978z" />
      <path
        d="m223.021 327.892c-4.437-5.032-11.985-5.64-16.844-1.357-4.859 4.284-5.202 11.848-.765 16.881s11.984 5.641 16.843 1.357c4.86-4.284 5.202-11.848.766-16.881z"
        fill="#fff"
      />
    </g>
    <g fill={green}>
      <path d="m654.056 493.93c70.179 2.112 116.685-33.938 142.6-101.601l41.544 61.805-140.496 100.94z" />
      <path d="m651.959 545.098-46.701-41.466c-5.025-5.611-9.084-11.173 2.962-15.91l73.339 9.587z" />
      <path
        d="m898.72 463.861c-27.806-38.951-82.004-48-120.955-20.194l-69.994 49.966c-38.952 27.806-48 82.004-20.194 120.955l28.566 40.016c27.805 38.951 82.003 48 120.955 20.194l69.994-49.966c38.951-27.806 47.999-82.004 20.194-120.955z"
        stroke={green}
        strokeWidth=".01"
      />
      <path
        d="m886.561 502.294c-22.832.057-45.889 6.986-65.968 21.319l-50.142 35.795c-51.402 36.694-63.244 107.615-26.55 159.017l56.837 79.617c15.841 22.191 38.063 37.001 62.339 43.723 70.497-75.091 116.056-170.191 130.395-272.185l-13.862-19.419c-22.361-31.323-57.43-47.956-93.049-47.867z"
        stroke={green}
        strokeWidth=".01"
      />
    </g>
    <path
      d="m939.333 508.802c-34.599.45-12.26 34.859 36.167 68.827 4.828 3.386 9.941 6.765 15.226 10.113 3.405-19.444 5.654-39.072 6.734-58.782-9.581-6.386-15.987-9.701-24.697-14.623-14.428-3.936-25.445-5.639-33.43-5.535z"
      fill="#003090"
    />
    <path
      d="m748.976 904.246c-13.141 9.686-38.365-39.612-48.188-64.622-15.767-40.142-20.553-100.555-13.919-128.631 6.285-19.088 26.683-58.228 48.973-61.468 38.68-4.245 21.307 245.918 13.134 254.721z"
      fill="#003090"
    />
    <path
      d="m682.419 507.42c-34.298 24.484-42.266 72.208-17.782 106.506 24.485 34.298 72.208 42.266 106.506 17.782 34.299-24.484 42.266-72.208 17.782-106.506s-72.208-42.266-106.506-17.782z"
      fill="#fff"
    />
    <path
      d="m782.224 626.342c11.831-12.337 19.092-26.685 21.836-43.146 2.591-15.551.703-30.407-5.762-45.322-3.614-8.339-11.682-19.612-18.527-25.887-11.506-10.549-25.922-16.954-40.904-20.018-8.456-1.729-30.392-3.631-61.188 12.664 0 0-11.827 12.492-16.417 19.705-5.553 8.724-10.281 12.304-13.183 28.085.057.081-.25 2.467-.683 5.304-3.674 24.074 4.005 49.328 20.243 66.564 12.668 13.446 27.598 21.515 45.271 24.465 14.165 2.365 28.455.784 42.586-4.713 7.654-2.977 21.232-11.969 26.729-17.701zm-29.289.792c-17.839 9.208-41.801 8.429-59.363-1.928-29.259-17.255-39.671-54.239-23.659-84.037 13.164-24.497 39.446-37.2 67-32.382 11.874 2.076 22.541 7.299 31.497 15.424 4.824 4.376 12.318 14.819 14.762 20.569 7.838 18.443 7.037 38.058-2.258 55.336-6.577 12.223-14.916 20.276-27.979 27.018z"
      fill={blue}
      stroke="#fff"
      strokeWidth=".01"
    />
    <path d="m708.959 549.181c-10.543 7.526-13.022 22.156-5.531 32.649s22.132 12.902 32.676 5.376c10.543-7.526 13.021-22.156 5.53-32.65-7.491-10.493-22.132-12.902-32.675-5.375z" />
    <path
      d="m695.706 560.066c-4.013 2.865-5.025 8.336-2.259 12.211s8.269 4.695 12.282 1.83c4.014-2.865 5.026-8.337 2.26-12.211-2.766-3.875-8.27-4.695-12.283-1.83z"
      fill="#fff"
    />
    <path
      d="m843.606 408.744-24.046-57.638c-3.675-6.576-7.616-12.222-16.009-2.368l-14.758 72.476z"
      fill={green}
    />
    <path
      d="m807.238 419.15c-34.298 24.485-42.266 72.208-17.782 106.506 24.484 34.299 72.208 42.266 106.506 17.782s42.266-72.208 17.782-106.506-72.208-42.266-106.506-17.782z"
      fill="#fff"
    />
    <path
      d="m907.043 538.073c11.831-12.338 19.092-26.685 21.835-43.147 2.592-15.551.704-30.406-5.761-45.322-3.614-8.339-11.682-19.612-18.527-25.887-11.507-10.549-25.922-16.954-40.905-20.018-8.455-1.729-30.391-3.631-61.187 12.665 0 0-11.827 12.491-16.417 19.704-5.553 8.725-10.281 12.304-13.184 28.085.058.081-.249 2.468-.682 5.304-3.675 24.075 4.005 49.328 20.243 66.564 12.668 13.446 27.598 21.515 45.271 24.466 14.165 2.364 28.454.783 42.586-4.714 7.654-2.977 21.232-11.969 26.728-17.7zm-29.289.791c-17.84 9.208-41.801 8.43-59.363-1.927-29.259-17.256-39.671-54.239-23.659-84.037 13.164-24.497 39.446-37.2 66.999-32.383 11.875 2.076 22.542 7.3 31.498 15.424 4.824 4.377 12.318 14.819 14.762 20.569 7.838 18.443 7.037 38.058-2.259 55.336-6.576 12.223-14.915 20.276-27.978 27.018z"
      fill={blue}
      stroke="#fff"
      strokeWidth=".01"
    />
    <path d="m833.778 460.911c-10.544 7.526-13.022 22.156-5.531 32.649 7.491 10.494 22.132 12.903 32.675 5.376 10.544-7.526 13.022-22.156 5.531-32.649-7.491-10.494-22.132-12.902-32.675-5.376z" />
    <path
      d="m820.525 471.796c-4.013 2.865-5.025 8.337-2.259 12.211 2.766 3.875 8.269 4.695 12.282 1.83s5.026-8.336 2.26-12.211-8.27-4.695-12.283-1.83z"
      fill="#fff"
    />
    <path
      d="m883.103 555.991c-8.881 4.486-24.766 8.841-35.17 8.613-11.251-.247-24.028-4.257-33.174-8.966-2.038-1.05-6.045-6.567-9.167-8.731l-5.677-3.935 4.072 6.212c.766 2.344 1.881 7.397 2.479 11.229 3.358 21.53.788 37.91-13.199 56.306-3.925 5.163-9.816 10.187-21.314 18.356-11.273 8.01-12.714 9.084-18.589 11.055-22.496 7.544-44.101 5.962-63.916-4.681-31.456-16.896-47.738-52.384-40.904-88.84.714-3.809 2.087-8.98 3.05-11.49 3.199-8.333 14.78-28.942 21.147-33.487 5.673-4.05 33.453-16.049 43.432-17.619 19.832-3.12 39.096 4.38 55.939 16.365 3.318 2.361 4.071 2.648 3.743 1.427-3.661-13.62-7.886-18.497-7.264-29.186.914-15.702 3.281-26.615 11.318-38.399 6.014-8.819 21.067-24.313 24.021-26.421 6.102-4.356 23.481-7.948 34.184-9.622 22.02-3.444 43.899 2.346 62.376 16.507 5.147 3.945 6.056 4.979 13.514 15.374 6.968 9.709 8.275 11.901 10.171 17.039 10.037 27.199 5.666 55.805-12.017 78.645-3.673 4.743-3.642 8.26-11.935 14.416-5.24 3.89-14.911 8.717-17.12 9.833zm15.614-32.996c3.818-4.667 8.983-13.868 11.299-20.129 5.88-15.898 4.141-36.187-4.39-51.206-9.478-16.687-24.243-27.457-42.477-30.985-18.444-3.569-34.504-.197-49.226 10.334-7.681 5.495-12.096 10.07-16.808 17.421-11.192 17.463-13.222 38.797-5.505 57.859 3.261 8.055 10.541 18.235 17.17 24.012 13.535 11.793 32.249 17.184 50.343 14.503 8.11-1.201 10.883-2.006 17.67-5.128 6.172-2.84 17.902-11.764 21.923-16.68zm-127.155 90.743c13.522-14.508 19.638-35.282 16.136-54.806-1.7-9.476-4.571-16.027-10.918-24.918-4.062-5.69-6.646-8.652-10.085-11.556-18.474-15.6-44.621-19.296-67.052-9.476-2.646 1.158-7.574 4.081-10.953 6.496-20.063 14.344-29.778 38.474-25.373 63.023 3.061 17.065 13.747 32.687 28.815 42.128 16.911 10.595 41.13 12.024 59.38 3.504 6.661-3.11 15.339-9.34 20.05-14.395z"
      fill={green}
      stroke={green}
      strokeWidth="1.12"
    />
    <path
      d="m772.252 634.302c.529-.444 1.393-1.061 1.921-1.369.527-.309.094.055-.963.808-1.056.753-1.488 1.006-.958.562z"
      fill={green}
    />
    <path
      d="m764.951 639.09c-1.188.692-2.427 1.392-2.753 1.557-.325.165 3.967-2.958 9.539-6.94 6.719-4.8 9.853-6.942 9.31-6.357-1.13 1.216-13.442 10.197-16.096 11.74z"
      fill={green}
    />
    <path
      d="m817.403 595.771c5.132 6.931 15.257 9.488 31.49 8.293 5.822-13.015 8.407-25.07 2.573-32.581-6.828-10.625-21.054-8.738-28.554-3.12-6.918 5.183-12.32 18.032-5.509 27.407z"
      fill="#003090"
    />
  </svg>
)

export default withTheme(Logo)
