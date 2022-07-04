import React, { useState } from "react";
import Grid  from "@mui/material/Grid";
import { withStyles } from "@mui/styles";
import Header from "./Header";
import content from "../lib/content";

const styles = {
  root: {
    backgroundColor: '#DCD7C9',
    height: '100%',
  },
  contentGrid: {
    padding: "3%",
    backgroundColor: '#DCD7C9',
  },
  title: {
    fontSize: 36,
    letterSpacing: 1.5,
    fontWeight: 600,
    textAlign: "center",
    margin: 0,
    color: "#795c45",
    
  },
  subtitle: {
    fontSize: 22,
    letterSpacing: 1.3,
    textAlign: "center",
  },
  content: {
    padding: '3% 3% 0% 3%'
  },
  columnLeft: {
    paddingRight: 20
  },
  columnRight: {
    paddingLeft: 20,
  },
  image: {
    maxWidth: '59%',
    paddingTop: '16px 0px'
  },
  subHeading: {
    fontSize: 18,
    margin: 0,
    padding: '10px 0px',
    fontStyle: 'italic'
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 1.4,
    margin: 0,
    paddingBottom: '10px'
  },
  description: {
    fontSize: 16,
    lineHeight: 1.4,
    letterSpacing: 1.1,
    padding: '0% 3%'
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

        {data.subTitle && (
          <Grid item xs={12}>
            <p className={props.classes.subtitle}>
              {data.subTitle}
            </p>
          </Grid>
        )}

        {data.description && (
          <Grid item xs={12}>
            <p className={props.classes.description}>
              {data.description}
            </p>
          </Grid>
        )}

        <Grid item container direction="row" xs={12} className={props.classes.content} spacing={3}>
          <Grid item container xs={6} direction="column" spacing={1} className={props.classes.columnLeft}>
            {data.leftColumn.map((m) => {
              return (
                <Grid item container direction="column" spacing={1} >
                  {m.image && <Grid item justifyContent={m.title === "Aakriti Barat" ? "center": "flex-start"}><img alt="me" className={props.classes.image} src={m.image} /></Grid>}

                    {m.subHeading && <Grid item >
                      <p className={props.classes.subHeading}>
                        {m.subHeading}
                      </p>
                    </Grid>}
                    {m.text && <Grid item>
                    <p className={props.classes.bodyText}>
                      {m.text}
                    </p>
                  </Grid>}          
                </Grid>
              );
            })}
          </Grid>
          <Grid item container xs={6} direction="column" spacing={1} className={props.classes.columnRight}>
            {data.rightColumn.map((m) => {
              return (
                <Grid item container direction="column" spacing={1}>
                  {m.image && <Grid item container justifyContent={id === 1 ? "center": "flex-start"}><img alt="stuff" className={props.classes.image} src={m.image} /></Grid>}
                  {m.subHeading && 
                    <Grid item>
                      <p className={props.classes.subHeading}>
                        {m.subHeading}
                      </p>
                    </Grid>
                  }
                  {m.text && 
                  <Grid item>
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
