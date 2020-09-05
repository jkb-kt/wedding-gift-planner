import { useLoginMutation } from "@codegen/generated/graphql";
import Dot from "@components/Dot";
import Input from "@components/Input";
import firebase from "@utils/firebase";
import { UserContext } from "@utils/userContext";
import { get as getCookie } from "js-cookie";
import Link from "next/link";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

interface LoginValues {
  email: string;
  password: string;
}

const Login = () => {
  const [login] = useLoginMutation();
  const { refetchUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const { handleSubmit, register } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const handleLogin = async ({ email, password }: LoginValues) => {
    let idToken;
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      idToken = await userCredential.user?.getIdToken();
    } catch (e) {
      setError("Oops! Incorrect email or password!");
    }

    const csrfToken = getCookie("csrfToken");

    if (idToken && csrfToken) {
      await login({
        variables: { idToken, csrfToken },
      });
      await refetchUser();
    }
  };

  return (
    <main className="flex flex-col mt-16 w-1/5 mx-auto">
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="text-center text-error font-corsiva text-xl mb-12">{error}</div>
        <h3 className="font-corsiva text-center mb-10 text-2xl">Log in</h3>
        <div className="my-1 flex flex-col items-center">
          <Input name="email" placeholder="email" ref={register()} />
        </div>
        <div className="mt-1 flex flex-col items-center">
          <Input name="password" placeholder="password" type="password" ref={register()} />
        </div>
        <Link href="/forgot-password">
          <div className="font-corsiva underline mb-8 cursor-pointer text-lg">
            Forgot your password?
          </div>
        </Link>
        <button className="flex flex-col items-center mx-auto focus:outline-none" type="submit">
          <span className="font-corsiva text-3xl">Proceed</span>
          <div className="flex">
            <Dot className="h-1 w-1" />
            <Dot className="h-1 w-1 mx-2" />
            <Dot className="h-1 w-1" />
          </div>
        </button>
        <div className="text-center font-corsiva text-xl mt-12">
          Oh no! That's not what you wanted?
        </div>
        <Link href="/auth">
          <div className="text-center font-corsiva text-xl underline cursor-pointer">Go back</div>
        </Link>
      </form>
    </main>
  );
};

export default Login;