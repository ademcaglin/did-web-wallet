import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import { CreateModel } from "../lib/viewmodels/CreateModel";
import { AppContext } from "../lib/context";
import Router from "next/router";
import { User } from "../lib/types/User";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        DID Web Wallet
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn() {
  const { dispatch } = React.useContext(AppContext);

  //useAccount("/", true);
  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm<CreateModel>();
  async function create(model: CreateModel) {
    // create an rsa key(store it in state)
    let av = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
    console.log(av); 
    let user: User = {
      id: "1",
      displayName: model.displayName,
      username: model.username,
      operations: [],
      publicKeys: []
    }
    dispatch({ type: "create_user", newUser: user });
    let challenge = new Uint8Array(32);
    window.crypto.getRandomValues(challenge);

    let userID = model.username;
    var id = Uint8Array.from(window.atob(userID), c => c.charCodeAt(0));

    var publicKey: PublicKeyCredentialCreationOptions = {
      challenge: challenge,

      rp: {
        name: "Example Inc."
      },

      user: {
        id: id,
        name: model.username,
        displayName: model.displayName
      },

      pubKeyCredParams: [
        { type: "public-key", alg: -7 },
        { type: "public-key", alg: -257 }
      ]
    };
    try {
      let credential: PublicKeyCredential = await navigator.credentials
        .create({ publicKey: publicKey }) as PublicKeyCredential;
     
      console.log(credential?.rawId);
    } catch (err) {

    }

    //Router.push("/");
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create DID
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(create)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            inputRef={register}
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            inputRef={register}
            fullWidth
            name="displayName"
            label="Dispalay Name"
            id="displayName"
          />
          <Button
            type="submit"
            fullWidth
            size="large"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/import" variant="body1">
                Have an account ? Import
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
