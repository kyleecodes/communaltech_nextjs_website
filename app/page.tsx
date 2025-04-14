"use client";

import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import ProfileCard from "./components/ProfileCard";
import Header from "./components/Header";
import SkillsCard from "./components/SkillsCard";
import TestimonialCard from "./components/TestimonialCard";
import CompanyLogos from "./components/CompanyLogos";
import ConnectCard from "./components/ConnectCard";

export default function Page() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const itemsToShow = isMobile ? 1 : 2;

  return (
    <Container maxWidth="md">
      <Header />
      <ProfileCard />
      <ConnectCard />
      <SkillsCard />
      <TestimonialCard />
      <CompanyLogos />
    </Container>
  );
}
