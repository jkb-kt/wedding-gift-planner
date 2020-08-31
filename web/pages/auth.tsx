import Layout from "@components/Layout";
import PublicRoute from "@components/PublicRoute";
import Auth from "@containers/Auth";
import UserProvider from "@utils/userContext";
import Head from "next/head";

const AuthPage = () => {
  return (
    <>
      <Head>
        <title>Wedding gift planner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserProvider>
        <Layout>
          <PublicRoute>
            <Auth />
          </PublicRoute>
        </Layout>
      </UserProvider>
    </>
  );
};

export default AuthPage;
