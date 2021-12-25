import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const title = "내 블로그";

const theme = createTheme();

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const AppLayout: React.FC<LayoutProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="lg">
      <Header title={title} sections={sections} />
      {children}
    </Container>
    <Footer
      title="Footer"
      description="Something here to give the footer a purpose!"
    />
  </ThemeProvider>
);

export default AppLayout;
