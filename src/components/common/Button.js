import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  font-size: 30px;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: black;
  outline: none;
  cursor: pointer;

  background: white;
  &:hover {
    background: #bcbcbc;
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 80%;
      font-size: 1.125rem;
    `};
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
