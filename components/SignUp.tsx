import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Checkbox,
  Typography
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const schema = {
  firstName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 32
    }
  },
  lastName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 32
    }
  },
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 128
    }
  },
  policy: {
    presence: { allowEmpty: false, message: "is required" },
    checked: true
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100%"
  },
  grid: {
    height: "100%",
    alignItems: "center"
  },
  quoteContainer: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "url(/images/auth.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  quoteInner: {
    textAlign: "center",
    flexBasis: "600px"
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
  contentContainer: {},
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  contentHeader: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center"
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  policy: {
    marginTop: theme.spacing(1),
    display: "flex",
    alignItems: "center"
  },
  policyCheckbox: {
    marginLeft: "-14px"
  },
  signUpButton: {
    margin: theme.spacing(2, 0)
  }
}));

const SignUp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.content} item xs={12}>
          <div className={classes.content}>
            <div className={classes.contentHeader}>
              <IconButton>
                <ArrowBackIcon />
              </IconButton>
            </div>
            <div className={classes.contentBody}>
              <form className={classes.form} onSubmit={() => {}}>
                <Typography className={classes.title} variant="h2">
                  Create new account
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Use your email to create new account
                </Typography>
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="First name"
                  name="firstName"
                  type="text"
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Last name"
                  name="lastName"
                  type="text"
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Email address"
                  name="email"
                  type="text"
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                />
                <div className={classes.policy}>
                  <Checkbox
                    className={classes.policyCheckbox}
                    color="primary"
                    name="policy"
                  />
                  <Typography
                    className={classes.policyText}
                    color="textSecondary"
                    variant="body1"
                  >
                    I have read the{" "}
                  </Typography>
                </div>
                <Button
                  className={classes.signUpButton}
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign up now
                </Button>
                <Typography color="textSecondary" variant="body1">
                  Have an account?{" "}
                </Typography>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
