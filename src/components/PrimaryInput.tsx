"use client";

import styled from "styled-components";
import { SeachIcon } from "./icons/SearchIcon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
  width: 100%;

  border-radius: 8px;
  padding: 10px 16px;
  border: none;
  background-color: var(--bg-secundary);

  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: var(--text-dark);

  @media (min-width: ${(props) => props.theme.desktopBreakPoint}) {
    font-size: 14px;
    line-height: 22px;
  }
`;

const InputContainer = styled.div`
  width: 250px;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  @media (min-width: ${(props) => props.theme.desktopBreakPoint}) {
    width: 352px;
  }
`;

interface PrimaryInputWithSearchProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export function PrimaryInputWithSearch({
  value,
  handleChange,
  ...props
}: PrimaryInputWithSearchProps) {
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(event) => handleChange(event.target.value)}
        {...props}
      />
      <SeachIcon />
    </InputContainer>
  );
}
