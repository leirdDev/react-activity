import { useState } from "react";
import ActivityCard from "../components/ActivityCard";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Login() {
  const usernameCredentials = "admin";
  const passwordCredentials = "12345";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errors, setErrors] = useState([]);

  const submitLogin = () => {
    setErrors([]);

    const usernameInput = username.trim();
    const passwordInput = password.trim();

    if (!usernameInput && !passwordInput) {
      setErrors(["Please enter your username and password."]);
      return;
    }

    if (!usernameInput) {
      setErrors(["Please enter your username."]);
      return;
    }

    if (!passwordInput) {
      setErrors(["Please enter your password."]);
      return;
    }

    if (
      usernameInput === usernameCredentials &&
      passwordInput === passwordCredentials
    ) {
      setIsLoggedIn(true);

      //login success
    } else {
      setErrors(["Invalid username or password."]);
    }
  };

  return (
    <div>
      <ActivityCard
        title={"Login Authentication"}
        subtitle={"Activity 1"}
        color="bg-amber-200"
      >
        {isLoggedIn ? (
          <>
            <h1 className="text-2xl font-semibold text-center text-green-700 my-2">
              Login Succesful!
            </h1>
            <h1 className="text-2xl font-semibold text-center py-4 bg-blue-200  rounded-sm border-2">
              Welcome back, Admin
            </h1>
            <Button onClick={() => setIsLoggedIn(false)} variant="danger">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Input
              label="Username"
              placeholder="Enter your username"
              onChange={setUsername}
              value={username}
            />
            <Input
              label={"Password"}
              placeholder="Enter your password"
              onChange={setPassword}
              value={password}
              type="password"
            />
            {errors.length > 0 && (
              <p className="text-red-500 font-medium">{errors[0]}</p>
            )}
            <Button onClick={submitLogin}>Login</Button>
            <p className="text-xs text-center mt-2">
              Sample credentials — Username: admin, Password: 12345
            </p>
          </>
        )}
      </ActivityCard>
    </div>
  );
}
