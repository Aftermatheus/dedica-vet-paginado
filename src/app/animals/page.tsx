import Box from "@mui/material/Box";

import { Page } from "src/components/core/Page";
import { routes } from "src/constants/routes";
import { Header } from "src/components/core/Header";
import { PageContent } from "src/components/core/PageContent";
import { AnimalsSlide } from "src/components/Animals/AnimalsSlide";

const AnimalsPage: React.FC = () => (
  <Page>
    <Header route={routes.Animals} />

    <PageContent>
      <Box pt={10}>
        <AnimalsSlide />
      </Box>
    </PageContent>
  </Page>
);

export default AnimalsPage;
