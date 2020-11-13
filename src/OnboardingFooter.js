import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headerText: {
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "20px",
    lineHeight: "28px",
  },
  nextBtn: {
    color: "rgb(255,255,255)",
    backgroundColor: "rgb(31,31,31)",
    fontSize: "16px",
    height: "50px",
    width: "100%"
  },
  laterBtn: {
    color: "rgb(31,31,31)",
    fontSize: "16px"
  },
  gridContainer: {
    marginTop: "40px",
  },
}));


export default function OnboardingFooter(props) {
  const classes = useStyles();
  
  return (
    <Grid container spacing={3} className={classes.gridContainer}>
      <Grid item xs={5}>
        <Button 
          className={classes.laterBtn} 
          onClick={props.laterAction}
        >
          {"Finish Later"}
        </Button>        
      </Grid>
      <Grid item xs={7}>
        <Button
          className={classes.nextBtn}
          onClick={props.nextAction}
          variant="contained"
        >
          {"Next"}
        </Button>
      </Grid>
    </Grid>
  );
}
