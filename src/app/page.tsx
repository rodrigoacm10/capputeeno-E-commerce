"use client";

import { FilterBar } from "@/components/FilterBar";
import styles from "./page.module.css";
import { ProductsList } from "@/components/productsList";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f5;

  padding: 12px 20px;

  @media (min-width: ${(props) => props.theme.desktopBreakPoint}) {
    padding: 34px 160px;
  }
`;

export default function Home() {
  return (
    // <main className={styles.main}>
    <PageWrapper>
      <FilterBar />
      <ProductsList />
    </PageWrapper>
    // </main>
  );
}
