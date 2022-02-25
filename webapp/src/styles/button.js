import { css } from "@emotion/core";

export const button = css`
  padding: 4px 12px;
  border-radius: 8px;
  background: var(--primary);
  border: none;
  color: white;
  text-transform: uppercase;
  transition: .3s;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 4px black;
    transform: translate(-2px, -2px)
  }
`