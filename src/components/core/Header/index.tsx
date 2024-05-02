import Image from "next/image";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";

import * as S from "./styles";

export const Header: React.FC = () => (
  <S.MainBox role="header">
    <S.Container maxWidth="xl">
      <div>
        <Image
          src="/images/logo.png"
          width={100}
          height={100}
          alt="Dedica, Vet"
        />
        <Image
          src="/images/logo-full.png"
          width={222}
          height={100}
          alt="Dedica, Vet"
        />
      </div>

      <Box>
        <Tabs value="home" role="navigation" sx={{ flex: 1 }}>
          <S.TabItem href="/" value="home" label="Home" />
          <S.TabItem
            href="/animals"
            value="animals"
            label="Animais Domésticos"
          />
        </Tabs>
      </Box>
    </S.Container>
  </S.MainBox>
);
