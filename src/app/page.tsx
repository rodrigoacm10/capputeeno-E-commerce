"use client";

import { FilterBar } from "@/components/FilterBar";
import styles from "./page.module.css";
import { ProductsList } from "@/components/productsList";
import styled from "styled-components";
import { DefaultPageLayout } from "@/components/defaultPageLayout";
import { PaginationList } from "@/components/PaginationList";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    // <main className={styles.main}>
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <PaginationList />
        <ProductsList />
      </PageWrapper>
    </DefaultPageLayout>

    // </main>
  );
}
