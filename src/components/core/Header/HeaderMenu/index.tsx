"use client";
import React from "react";
import Link from "next/link";

import Tabs from "@mui/material/Tabs";

import { routes } from "src/constants/routes";
import { FlattenValues } from "src/types/FlattenValues";

import * as S from "./styles";

interface HeaderMenuProps {
  value: FlattenValues<typeof routes> | boolean;
}

interface HeaderMenuTabs {
  href: FlattenValues<typeof routes>;
  label: string;
}

const tabs: HeaderMenuTabs[] = [
  {
    href: routes.Home,
    label: "Home",
  },
  {
    href: routes.Animals,
    label: "Animais",
  },
];

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ value }) => (
  <Tabs value={value} sx={{ flex: 1 }} role="navigation">
    {tabs.map(({ href, label }) => (
      <S.TabItem
        key={label}
        href={href}
        value={href}
        label={label}
        LinkComponent={Link}
      />
    ))}
  </Tabs>
);
