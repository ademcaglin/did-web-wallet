import React from "react";
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import useAccount from "../lib/useAccount";

export default function Index() {
  useAccount("/create", false);
  return (
    <Layout>
      <Profile />
    </Layout>
  );
}

