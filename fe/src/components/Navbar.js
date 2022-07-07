import React from "react";
import { AppBar, Toolbar, Stack, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Stack spacing={2} direction="row" end>
          <Button href="/students" variant="contained">
            Students
          </Button>
          <Button href="/books" variant="contained">
            Books
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
