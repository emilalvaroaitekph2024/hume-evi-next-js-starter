import type { FC, SVGAttributes } from "react";
import { useId } from "react";

export type HumeLogoProps = SVGAttributes<SVGSVGElement>;

const HumeLogo: FC<HumeLogoProps> = (props) => {
  const id = useId();

  const gradientId = `hume-logo-gradient-${id}`;

  return (
    <svg
      width="106"
      height="25"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 106 25"
      {...props}
    >
      <linearGradient
        id={gradientId}
        gradientUnits="userSpaceOnUse"
        x1="21.58783"
        y1="6.94375"
        x2="22.83713"
        y2="11.14995"
        gradientTransform="matrix(1 0 0 -1 1.324843e-07 23.88861)"
      >
        <stop offset="0.2656" stopColor="#FFB7B2" />
        <stop offset="0.5781" stopColor="#AB9EFC" />
      </linearGradient>
    </svg>
  );
};

export default HumeLogo;
