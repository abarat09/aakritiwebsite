import React, { useState } from "react";
import { Grid, Button, createTheme, ThemeProvider } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = {
  header: {
    height: 70,
    backgroundColor: "#2C3639",
  },
  title: {
    color: "#fff",
    fontSize: "36px",
    paddingLeft: 25,
    margin: 0,
  },
  button: {
    color: "#fff",
    fontSize: 16,
    cursor: "pointer",
    width: 100
  },
};

const theme = createTheme({
  palette: {
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    active: {
      main: "",
    },
  },
});

const Header = (props) => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButton = (button) => {
    setActiveButton(button);
    props.handleButton(button);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        className={props.classes.header}
        item
        container
        direction="row"
        xs={12}
        justify="space-evenly"
      >
        <Grid
          item
          container
          xs={6}
          justifyContent="flex-start"
          alignItems="center"
        >
          <p className={props.classes.title}>ɅɅKRITI BɅRɅT</p>
        </Grid>
        <Grid
          item
          container
          xs={6}
          justifyContent="space-evenly"
          alignContent="center"
        >
          <Grid container item xs={2} alignContent="center">
            <Button
              color="neutral"
              variant="text"
              onClick={() => handleButton(1)}
              className={props.classes.button}
            >
              Home
            </Button>
          </Grid>
          <Grid container item xs={2} alignContent="center">
            <Button
              color="neutral"
              variant="text"
              onClick={() => handleButton(2)}
              className={props.classes.button}
            >
              About
            </Button>
          </Grid>
          <Grid container item xs={2} alignContent="center">
            <Button
              color="neutral"
              variant="text"
              onClick={() => handleButton(3)}
              className={props.classes.button}
            >
              Roles
            </Button>
          </Grid>
          <Grid container item xs={2} alignContent="center">
            <Button
              color="neutral"
              variant="text"
              onClick={() => handleButton(4)}
              className={props.classes.button}
            >
              Activities
            </Button>
          </Grid>
          <Grid container item xs={2} alignContent="center">
            <Button
              color="neutral"
              variant="text"
              onClick={() => handleButton(5)}
              className={props.classes.button}
            >
              Contact
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default withStyles(styles)(Header);
