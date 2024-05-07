import Link from "next/link";
import Image from "next/image";

import Box from "@mui/material/Box";

import { routes } from "src/constants/routes";
import { FlattenValues } from "src/types/FlattenValues";

import * as S from "./styles";
import { HeaderMenu } from "./HeaderMenu";

interface HeaderProps {
  route?: FlattenValues<typeof routes>;
}

export const Header: React.FC<HeaderProps> = ({ route }) => (
  <S.MainBox role="header">
    <S.Container maxWidth="xl">
      <Link href={routes.Home}>
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
      </Link>

      <Box>
        <HeaderMenu value={route ?? false} />
      </Box>
    </S.Container>
  </S.MainBox>
);
