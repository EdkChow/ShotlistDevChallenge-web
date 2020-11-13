import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ProgressBar from './ProgressBar';

const useStyles = makeStyles((theme) => ({
  headerText: {
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "20px",
    lineHeight: "28px",
  },
  backBtn: {
    color: "rgb(175,175,175)",
    fontSize: "16px",
  },
  title: {
    textAlign: "center",
  }
}));


export default function OnboardingHeader({ onboardingState, backAction, title }) {
  const classes = useStyles();
  
  return (
    <Grid container spacing={3} alignItems={'center'}>
      <Grid item xs={4} lg={4}>
        <Button className={classes.backBtn} onClick={backAction}>
          {"< Back"}
        </Button>        
      </Grid>
      <Grid item xs={4} lg={4}>
        <ProgressBar
          color='#FFA500'
          onboardingState={onboardingState}
          numOnboardingPages={3}
        />
      </Grid>
      <Grid item xs={12} lg={12}>
        <h3 className={classes.title}>{title}</h3>
      </Grid>      
    </Grid>
  );
}
