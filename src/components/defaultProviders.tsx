"use client";

import { FilterContextProvider } from "@/contexts/FilterContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
  children: ReactNode;
}

export function DefaultProviders({ children }: DefaultProvidersProps) {
  const client = new QueryClient();

  const theme = {
    desktopBreakPoint: "968px",
    tabletBreakPoint: "768px",
  };

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <FilterContextProvider>{children}</FilterContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
const client = new QueryClient();
