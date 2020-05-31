import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Badge, Hidden, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Link from "next/link";
import SyncIcon from '@material-ui/icons/Sync';
import SyncDisabledIcon from '@material-ui/icons/SyncDisabled';
import SyncProblemIcon from '@material-ui/icons/SyncProblem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IAccountItem from "../../lib/viewmodels/IAccountItem";

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none"
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  logoButton: {}
}));

export default ({ className, onSidebarOpen, ...rest }) => {
  const classes = useStyles();
  //let accounts: Array<IAccountItem> = [];
  const [notifications] = useState([]);
  useEffect(() => {
     
  })
  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <Link href="/" passHref>
          <IconButton
            className={classes.logoButton}
            style={{ color: "#ffffff" }}
          >
            <AccountBalanceWalletIcon />
          </IconButton>
        </Link>
        <Typography style={{ color: "#ffffff" }} variant="h4">
          DID Web Wallet
        </Typography>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <AccountCircleIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <SyncIcon />
            </Badge>
          </IconButton>
          <IconButton className={classes.signOutButton} color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
