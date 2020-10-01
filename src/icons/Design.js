import * as React from "react";

function SvgDesign(props) {
  return (
    <svg width={46} height={46} fill="none" {...props}>
      <circle cx={24} cy={5} r={3} fill="#fff" />
      <g clipPath="url(#design_svg__clip0)">
        <path
          d="M20.103 37.872L25.65 38a1.38 1.38 0 001.404-1.348l.418-19.601L24.6 12.23a1.373 1.373 0 00-2.116-.28 1.427 1.427 0 00-.207.199l-3.11 4.74-.412 19.578a1.38 1.38 0 001.348 1.405zm.376-20.578l2.985-4.371 2.666 4.482-.33 14.648-5.655-.116.334-14.643zm-.31 15.958l5.656.117-.076 3.27-5.608-.162.029-3.224z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="design_svg__clip0">
          <path
            fill="#fff"
            transform="rotate(136.178 14.272 22.19)"
            d="M0 0h24v24H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgDesign;
