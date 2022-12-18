import { useState } from "react";
import { signInAsync } from "../lib/api/auth";

export const Login = () => {
  const [isSigninLoading, setIsSigninLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSigninLoading(true);

    const successLogin = await signInAsync(username, password);
    setLoginFailed(!successLogin);

    setIsSigninLoading(false);

    setUsername("");
    setPassword("");
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <form className="gap-2 flex flex-col" onSubmit={submitLogin}>
          <input
            type="email"
            placeholder="Username..."
            className="input input-bordered input-accent w-full max-w-xs"
            onInput={(e: any) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="password"
            placeholder="Password..."
            className="input input-bordered input-accent w-full max-w-xs"
            onInput={(e: any) => setPassword(e.target.value)}
            value={password}
          />

          <div className="card-actions justify-end">
            <button
              type="submit"
              className={`btn btn-primary ${isSigninLoading && "loading"}`}
              disabled={!username && !password}
            >
              Sign in!
            </button>
          </div>
          {loginFailed && !isSigninLoading && (
            <p className="text-red-400 text-center">
              Username or password wrong
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
