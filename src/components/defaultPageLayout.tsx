"use client";

import styled from "styled-components";

export const DefaultPageLayout = styled.div`
  min-height: 100vh;
  background-color: #f0f0f5;

  padding: 12px 20px;

  @media (min-width: ${(props) => props.theme.desktopBreakPoint}) {
    padding: 34px 160px;
  }
`;
