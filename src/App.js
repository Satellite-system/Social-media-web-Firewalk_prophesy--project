import React from "react";
import useStyles from './style.js';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from './components/Posts/posts.js'
import Form from './components/Form/form.js'
import memories from "./resources/img/memories.png";

function App() {
  const classes = useStyles();
  return (
    <Container maxidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar} >
        <Typography variant="h2" align="center" className={classes.heading}>
          Firewalk Prophesy
        </Typography>
        <img src={memories} alt="Firewalk" height='60' className={classes.image}/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing = {3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
