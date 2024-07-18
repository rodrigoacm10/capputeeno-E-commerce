"use client";

import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputWithSearch } from "./PrimaryInput";
import { CartControl } from "./CartControl";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
  backgroun-color: white;

  > div {
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`;

export function Header() {
  return (
    <TagHeader>
      <Logo className={`${sairaStencil.className}`}>capputeeno</Logo>
      <div>
        <PrimaryInputWithSearch placeholder="Procurando por algo específico?" />
        <CartControl />
      </div>
    </TagHeader>
  );
}
