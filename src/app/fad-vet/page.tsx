import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Page } from "src/components/core/Page";
import { Header } from "src/components/core/Header";
import { PageContent } from "src/components/core/PageContent";
import { DiseasesTable } from "src/components/FadVet/DiseasesTable";
import { SymptomsSearch } from "src/components/FadVet/SymptomsSearch";
import { Container } from "@mui/material";

const FadVetPage: React.FC = () => (
  <Page>
    <Header />

    <PageContent>
      <Box marginBlock={5}>
        <Typography mb={3} variant="h4" textAlign="center" fontWeight="500">
          Ferramenta Auxiliar de Diagnóstico Veterinário | FAD-Vet
        </Typography>

        <Typography variant="body1" textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi alias
          incidunt harum nostrum ab ea quibusdam delectus nam molestiae! Aperiam
          aspernatur consectetur voluptas, quisquam aut tenetur perferendis
          mollitia placeat unde.
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <DiseasesTable />
      </Container>
    </PageContent>
  </Page>
);

export default FadVetPage;
