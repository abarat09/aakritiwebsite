import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import Header from "./Header";
import content from "../lib/content";

const styles = {
  root: {
    backgroundColor: '#DCD7C9',
    height: '100%'
  },
  contentGrid: {
    padding: "3%",
  },
  title: {
    fontSize: 36,
    letterSpacing: 1.5,
    fontWeight: 500,
    textAlign: "center",
    margin: 0,
  },
  subtitle: {
    fontSize: 28,
    letterSpacing: 1.3,
    textAlign: "center"
  },
  content: {
    padding: '5% 3%'
  },
  image: {
    width: "60%",
    paddingTop: '16px 0px'
  },
  subHeading: {
    fontSize: 20
  },
  bodyText: {
    fontSize: 18,
    lineHeight: 1.5,
    letterSpacing: 1.1,
  }
};

const HomePage = (props) => {
  const [onScreenComponent, setComponent] = useState(1);

  const handleButton = (button) => {
    setComponent(button);
  };

  const renderContent = (id) => {
    const data = content[id];
    return (
      <Grid container direction="column" xs={12} justifyContent="space-around">
        {data.title && (
          <Grid item xs={12}>
            <p className={props.classes.title}>
              {data.title}
            </p>
          </Grid>
        )}

        {data.subtitle && (
          <Grid item xs={12}>
            <Typography className={props.classes.subtitle}>
              {data.subtitle}
            </Typography>
          </Grid>
        )}

        <Grid item container direction="row" xs={12} className={props.classes.content} spacing={3}>
          <Grid item container xs={6} direction="column" spacing={1}>
            {data.leftColumn.map((m) => {
              return (
                <Grid item container direction="column" spacing={1}>
                  {m.image && <Grid item justifyContent="center"><img className={props.classes.image} src={m.image} /></Grid>}
                  {m.subHeading && 
                    <Grid item xs={12}>
                      <p className={props.classes.subHeading}>
                        {m.subHeading}
                      </p>
                    </Grid>
                  }
                  {m.text && 
                  <Grid item xs={12}>
                    <p className={props.classes.bodyText}>
                      {m.text}
                    </p>
                  </Grid>
                  }
                </Grid>
              );
            })}
          </Grid>
          <Grid item container xs={6} direction="column" spacing={1}>
            {data.rightColumn.map((m) => {
              return (
                <Grid item container direction="column" spacing={1}>
                  {m.image && <Grid item container justifyContent="center"><img className={props.classes.image} src={m.image} /></Grid>}
                  {m.subHeading && 
                    <Grid item xs={12}>
                      <p className={props.classes.subHeading}>
                        {m.subHeading}
                      </p>
                    </Grid>
                  }
                  {m.text && 
                  <Grid item xs={12}>
                    <p className={props.classes.bodyText}>
                      {m.text}
                    </p>
                  </Grid>
                  }
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid className={props.classes.root} direction="column">
      <Header handleButton={handleButton} />
      <Grid item container className={props.classes.contentGrid} direction="column" >
        {renderContent(onScreenComponent)}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(HomePage);
