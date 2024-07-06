import type { FC, SVGAttributes } from "react";
import { useId } from "react";

export type HumeLogoProps = SVGAttributes<SVGSVGElement>;

const HumeLogo: FC<HumeLogoProps> = (props) => {
  const id = useId();

  const gradientId = `hume-logo-gradient-${id}`;

  return (
    <svg
    </svg>
  );
};

export default HumeLogo;
