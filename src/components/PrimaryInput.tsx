"use client";

import styled from "styled-components";
import { SeachIcon } from "./icons/SearchIcon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  padding: 10px 16px;
  border: none;
  background-color: var(--bg-secundary);

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
`;

const InputContainer = styled.div`
  width: 352px;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
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
