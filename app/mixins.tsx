import { css } from "styled-components";

const breakpoints = {
  xs: "0",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

export const at =
  (breakpoint: keyof typeof breakpoints) =>
  (...args: any[]) =>
    css`
      @media (min-width: ${breakpoints[breakpoint]}) {
        // @ts-ignore: A spread argument must either have a tuple type or be passed to a rest parameter.
        ${css(...args)}
      }
    `;
