const Add = () => {
return (
  <svg
    width={69}
    height={68}
    viewBox="0 0 69 68"
    fill="none"
    id="addIcon"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_6:1217)">
      <rect x="10.5" y={6} width={48} height={48} rx={24} fill="#FEFCF3" />
      <path
        d="M34.5 6C21.2668 6 10.5 16.7658 10.5 30C10.5 43.2342 21.2668 54 34.5 54C47.7332 54 58.5 43.2342 58.5 30C58.5 16.7658 47.7332 6 34.5 6ZM46.0385 31.8462H36.3462V42C36.3462 43.0191 35.5191 43.8462 34.5 43.8462C33.4809 43.8462 32.6538 43.0191 32.6538 42V31.8462H22.9615C21.9425 31.8462 21.1154 31.0191 21.1154 30C21.1154 28.9809 21.9425 28.1538 22.9615 28.1538H32.6538V18.9231C32.6538 17.904 33.4809 17.0769 34.5 17.0769C35.5191 17.0769 36.3462 17.904 36.3462 18.9231V28.1538H46.0385C47.0575 28.1538 47.8846 28.9809 47.8846 30C47.8846 31.0191 47.0575 31.8462 46.0385 31.8462Z"
        fill="#774992"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_6:1217"
        x="0.5"
        y={0}
        width={68}
        height={68}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_6:1217"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_6:1217"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
}
export {Add}