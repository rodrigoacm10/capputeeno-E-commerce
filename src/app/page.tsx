"use client";

import { FilterBar } from "@/components/FilterBar";
import styles from "./page.module.css";
import { ProductsList } from "@/components/productsList";

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar />
      <ProductsList />
    </main>
  );
}
