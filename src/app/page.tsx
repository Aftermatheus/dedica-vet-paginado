import Image from "next/image";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Page } from "src/components/core/Page";
import { Header } from "src/components/core/Header";
import { HomeCover } from "src/components/Home/HomeCover";
import { PageContent } from "src/components/core/PageContent";

import * as S from "./page.styles";

const HomePage: React.FC = () => (
  <Page>
    <Header />

    <PageContent>
      <HomeCover />

      <S.Container>
        <Box>
          <Image
            src="/images/logo.png"
            alt="Dedica, Vet"
            width={150}
            height={130}
          />

          <Image
            src="/images/partners/logo-unifacig-short.png"
            alt="UNIFACIG"
            width={150}
            height={130}
          />
        </Box>

        <Typography
          lineHeight={1.4}
          variant="h3"
          fontWeight={900}
          width={"70%"}
        >
          Guia de Doenças e Ferramenta Auxiliar de Diagnóstico Veterinário
          (FAD-Vet)
        </Typography>

        <Typography
          marginBlock={3}
          lineHeight={1.4}
          variant="h6"
          fontWeight={400}
          width="70%"
        >
          Otimize sua rotina clínica e amplie seus conhecimentos com{" "}
          <strong>FAD-Vet</strong> e nossos <strong>Guias</strong>.
        </Typography>

        <Box>
          <Button variant="outlined" size="large" color="secondary">
            ACESSE JÁ
          </Button>
        </Box>
      </S.Container>
    </PageContent>
  </Page>
);

export default HomePage;
