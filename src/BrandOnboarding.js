import React, { useState } from 'react';
import signup2 from './signup-2.jpg';
import signup3 from './signup-3.jpg';
import { AddCircle, Close } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import SimplePopover from './SimplePopover';
import OnboardingHeader from './OnboardingHeader';
import OnboardingFooter from './OnboardingFooter';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Paper, Grid, Button, TextField, Switch } from '@material-ui/core';
import validateEmail from './validateEmail';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiTextField-root': {
      width: '100%',
    },
    '& .MuiButton-root': {
      textTransform: "none"
    },
  },
  formBtn: {
    width: "100%",
    height: "50px",
    backgroundColor: "rgb(255,252,250)",
    borderRadius: "8px"
  },
  paper: {
    margin: "auto",
    width: 500,
    padding: theme.spacing(2),
    textAlign: "left",
  },
  vertical: {
    display: "flex",
    height: "100%"
  },
  uploadBox: {
    width: 130,
    height: 100,
    backgroundColor: "rgb(246,246,246)",
    borderRadius: "16px"
  },
  addIcon: {
    paddingLeft: "49px",
    paddingTop: "34px",
    fill: "#FB8333"
  },
  logo: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    [theme.breakpoints.down('sm')]: {
      display: "none",
    },
  },
  email: {
    border: "1px solid #D3D3D3",
    marginBottom: "5px",
    borderRadius: "4px",
  },
}));

export default function BrandOnboarding() {
  const [onboardingState, setOnboardingState] = useState(1);
  const [email, setEmail] = useState('');
  const [emailList, setEmailList] = useState([]);
  const [emailError, setEmailError] = useState(false);

  const classes = useStyles();

  function incrementOnboarding() {
    if (onboardingState < 3) {
      setOnboardingState(onboardingState => onboardingState + 1)
    }
  }

  function decrementOnboarding() {
    if (onboardingState > 1) {
      setOnboardingState(onboardingState => onboardingState - 1)
    }
  }

  function handleFinishOnboarding() {}
   
  function handleAccessLocation() {}

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setEmailList([...emailList, email]);
      setEmail('');
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    if (value === '') setEmailError(false);
  };

  const emailErrorMsg = () => {
    if (emailError) {
      return 'Please enter a valid email.';
    } else {
      return '';
    }
  };
  
  const businessEmailList = emailList.map((email, i) => (
    <ListItem key={'email' + i} className={classes.email}>
      <ListItemText primary={email} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <Close />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ));

  function industryForm() {
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <div className={classes.vertical}>
              <Paper elevation={0} className={classes.paper}>
                <OnboardingHeader
                  title="What industry are you in?"
                  backAction={decrementOnboarding}
                  onboardingState={onboardingState}
                />
                <form className={classes.root} noValidate autoComplete="off">
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField id="industry" label="Type Here..." variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <Button className={classes.formBtn} variant="outlined">Creative</Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Button className={classes.formBtn} variant="outlined">IT/Software</Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Button className={classes.formBtn} variant="outlined">Hospitality and Tourism</Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Button className={classes.formBtn} variant="outlined">Business</Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Button className={classes.formBtn} variant="outlined">Real Estate</Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Button className={classes.formBtn} variant="outlined">Healthcare</Button>
                    </Grid>
                    <OnboardingFooter
                      laterAction={handleFinishOnboarding}
                      nextAction={incrementOnboarding}
                    />
                  </Grid>
                </form>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={false} md={4}>
            <img src={signup2} className={classes.logo} alt="logo"/> 
          </Grid>
        </Grid>
      </div>
    );
  };
  
  function profileForm() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <div className={classes.vertical}>
            <Paper elevation={0} className={classes.paper}>
              <OnboardingHeader
                  title="Build the brand's profile"
                  backAction={decrementOnboarding}
                  onboardingState={onboardingState}
              />
              <form className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <p>Upload the brand's profile picture</p>
                    <Paper elevation={0} className={classes.uploadBox}>
                      <AddCircle className={classes.addIcon}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <p>Add a brief bio</p>
                    <TextField id="industry" label="Type Here..." variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <p>Add/Link portfolio</p>
                    <TextField id="industry" label="Type Here..." variant="outlined" />
                  </Grid>
                 <OnboardingFooter
                      laterAction={handleFinishOnboarding}
                      nextAction={incrementOnboarding}
                  />
                </Grid>
              </form>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={false} md={4}>
          <img src={signup2} className={classes.logo} alt="logo"/> 
        </Grid>
      </Grid>
    );
  };

  function teamForm() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <div className={classes.vertical}>
            <Paper elevation={0} className={classes.paper}>
              <OnboardingHeader
                  title="Add your team"
                  backAction={decrementOnboarding}
                  onboardingState={onboardingState}
              />
              <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmitEmail}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <p>Select location</p>
                    <SimplePopover 
                      className={classes.popover}
                      label="Type or select location" 
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <span>Allow access to my current location</span>
                  </Grid>
                  <Grid item xs={2} />
                  <Grid item xs={2}>
                    <Switch
                      defaultChecked
                      onChange={handleAccessLocation}
                      name="locationAccess"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p>Enter business email(s)</p>
                    <List>
                      {businessEmailList}
                    </List>
                    <TextField
                      id="email"
                      label="Type Here..."
                      variant="outlined"
                      value={email}
                      onChange={handleEmailChange}
                      error={emailError}
                      helperText={emailErrorMsg()}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button className={classes.formBtn} variant="outlined">Invite from Contacts</Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button className={classes.formBtn} variant="outlined">Invite from Google Contacts</Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button className={classes.formBtn} variant="outlined">Create invite link</Button>
                  </Grid>
                  <OnboardingFooter
                      laterAction={handleFinishOnboarding}
                      nextAction={incrementOnboarding}
                  />
                </Grid>
              </form>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={false} md={4}>
          <img src={signup3} className={classes.logo} alt="logo"/> 
        </Grid>
      </Grid>
    );
  };


  return ( 
   <div className={classes.root}>
    {
      {
        1: industryForm(),
        2: profileForm(),
        3: teamForm()
      }[onboardingState]
    }
    </div> 
  );
};
