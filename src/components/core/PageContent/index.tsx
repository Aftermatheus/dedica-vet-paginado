import Container from "@mui/material/Container";

interface PageProps {
  children: React.ReactNode;
}

export const PageContent: React.FC<PageProps> = ({ children }) => (
  <Container
    maxWidth="xl"
    sx={{
      flex: 1,
      display: "flex",
      position: "relative",
      flexDirection: "column",
    }}
  >
    {children}
  </Container>
);
