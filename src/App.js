import React, {useEffect} from "react";
import useStyles from './style.js';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from './components/Posts/posts.js'
import Form from './components/Form/Form.js'
import memories from "./resources/img/memories.png";
import {useDispatch} from 'react-redux';
import { getPosts } from './action_creator/posts';

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit"  >
        <Typography className={classes.heading} variant="h2" align="center">
          Firewalk Prophesy
        </Typography>
        <img className={classes.image} src={memories} alt="Firewalk" height='60'/>
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
