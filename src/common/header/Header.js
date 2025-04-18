import React from "react";

export default function Header() {
  return (
    <AppBar position="static" className="header">
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 6, md: 6 }}>
          <img src="../../assets/logo.jpeg" className="header-logo" />
          <span className="app-name">Doctor Finder</span>
        </Grid2>
      </Grid2>
    </AppBar>
  );
}
