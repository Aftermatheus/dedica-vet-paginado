import SickIcon from "@mui/icons-material/Sick";
import BiotechIcon from "@mui/icons-material/Biotech";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import * as S from "./styles";
import Image from "next/image";

interface AnimalCardProps {
  isSelected: boolean;
}

export const AnimalCard: React.FC<AnimalCardProps> = ({ isSelected }) => (
  <Card
    variant="elevation"
    elevation={5}
    sx={{ padding: "1rem", width: "30rem" }}
  >
    <Box
      height={500}
      display="flex"
      alignItems="center"
      justifyContent={"center"}
    >
      <S.CardMedia>
        <Image
          src="/images/illustrations/dog.svg"
          alt="Dog"
          width={300}
          height={300}
        />
      </S.CardMedia>
    </Box>

    <Collapse in={isSelected} timeout={"auto"} unmountOnExit>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BiotechIcon />
            </ListItemIcon>
            <ListItemText primary="FAD-VET" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CoronavirusIcon />
            </ListItemIcon>
            <ListItemText primary="Guia de Doenças" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SickIcon />
            </ListItemIcon>
            <ListItemText primary="Guia de Sintomas" />
          </ListItemButton>
        </ListItem>
      </List>
    </Collapse>
  </Card>
);
