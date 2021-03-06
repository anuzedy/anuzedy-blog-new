import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

const PlainLink = styled(RouterLink)`
  text-decoration: none;
`;

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <PlainLink to="/">{title}</PlainLink>
        </Typography>
        <PlainLink to="/signin">
          <Button variant="outlined" size="small">
            로그인
          </Button>
        </PlainLink>
        &nbsp;
        <PlainLink to="/signup">
          <Button variant="outlined" size="small">
            회원가입
          </Button>
        </PlainLink>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <PlainLink to="/board">{section.title}</PlainLink>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
