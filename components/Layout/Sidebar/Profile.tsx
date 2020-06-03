import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Typography } from "@material-ui/core";
import clsx from "clsx";
import Link from "next/link";
import { AppContext } from "../../../lib/context";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content"
  },
  avatar: {
    width: 60,
    height: 60,
    flexShrink: 0,
    flexGrow: 0
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

export default ({ ...rest }) => {
  const classes = useStyles();
  const { state } = React.useContext(AppContext);
  const user = {
    avatar: "/images/avatars/avatar_11.png",
    bio: "ademcaglin"
  };

  return (
    <div {...rest} className={classes.root}>
      <Link href="/profile" passHref>
        <Avatar className={classes.avatar} src={user.avatar} />
      </Link>
      <Typography className={classes.name} variant="h4">
        {state.currentUser?.displayName}
      </Typography>
      <Typography variant="body2">{state.currentUser?.username}</Typography>
    </div>
  );
};
