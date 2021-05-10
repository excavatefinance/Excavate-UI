import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <path
        d="M 480.422 401.39 l -27.485 -108.684 l -95.729 -93.994 L 303.331 80.61 L 144.13 130.143 l -33.909 114.795 l -41.71 10.409 L 31.578 401.39 H 0 v 30 h 512 v -30 H 480.422 z M 139 363 H 179 l -6 -226 l 30 0 L 204 363 H 244 L 186 422 z M 320 418 l -31 0 l -3 -235 H 251 l 44 -61 l 39 61 H 302 z"
      />
    </Svg>
  );
};

export default Icon;
