"use client";

import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputWithSearch } from "./PrimaryInput";
import { CartControl } from "./CartControl";
import { useFilter } from "@/hooks/useFilter";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  backgroun-color: white;

  > div {
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakPoint}) {
    padding: 20px 160px;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  text-decoration: none;

  @media (min-width: ${(props) => props.theme.tabletBreakPoint}) {
    font-size: 24px;
  }

  @media (min-width: ${(props) => props.theme.desktopBreakPoint}) {
    font-size: 40px;
  }
`;

export function Header() {
  const { setSearch, search } = useFilter();

  return (
    <TagHeader>
      <Logo href="/" className={`${sairaStencil.className}`}>
        capputeeno
      </Logo>
      <div>
        <PrimaryInputWithSearch
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </div>
    </TagHeader>
  );
}
