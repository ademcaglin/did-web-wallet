import React from "react";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import useRedirectToLogin from "../lib/useRedirectToLogin";

export default function Index() {
  const s = useRedirectToLogin();
  if (s == "loading") {
    return <div>loading</div>
  } else if (s == "no_account") {
    return <div>"redirecting"</div>;
  }
  return (
    <Layout>
      <Profile />
    </Layout>
  );
}

