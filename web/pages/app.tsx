import Layout from "@components/Layout";
import PrivateRoute from "@components/PrivateRoute";
import App from "@containers/App";
import UserProvider from "@utils/userContext";
import Head from "next/head";

const AppPage = () => {
  return (
    <>
      <Head>
        <title>App - Wedding gift planner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserProvider>
        <Layout>
          <PrivateRoute>
            <App />
          </PrivateRoute>
        </Layout>
      </UserProvider>
    </>
  );
};

export default AppPage;
