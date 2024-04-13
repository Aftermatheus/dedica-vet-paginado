import Image from "next/image";
import { Tabs } from "@mui/material";

import * as S from "./styles";

export const Header: React.FC = () => (
  <S.Container role="header">
    <Image src="/images/logo.png" width={222} height={100} alt="Dedica, Vet" />

    <Tabs value="home" role="navigation">
      <S.TabItem href="/" value="home" label="Home" />
      <S.TabItem href="/animais" value="animals" label="Animais Domésticos" />
    </Tabs>
  </S.Container>
);
