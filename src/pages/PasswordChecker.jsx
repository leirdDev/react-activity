import { useState } from "react";
import ActivityCard from "../components/ActivityCard";
import Input from "../components/Input";
import Button from "../components/Button";

export default function PasswordChecker() {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passwordLength, setPasswordLength] = useState(0);

  const handleSubmit = () => {
    setError("");
    setIsSubmitted(false);

    const userInput = password.trim();

    if (!userInput) {
      setError("Please enter a password.");
      return;
    }

    setPasswordLength(userInput.length);
    setIsSubmitted(true);
  };

  const clearFields = () => {
    setError("");
    setPassword("");
    setPasswordLength(0);
    setIsSubmitted(false);
  };

  return (
    <ActivityCard
      title="Password Strength Checker"
      subtitle="Activity 3"
      color="bg-green-300"
    >
      <div className="flex flex-col">
        <Input
          label="Password"
          placeholder="Enter password"
          value={password}
          onChange={setPassword}
        />
        <span className="text-xs">Character count: {password.length}</span>
      </div>

      {error && <p className="text-red-500 font-medium">{error}</p>}

      <div className="flex gap-2">
        <Button onClick={handleSubmit}>Check Password</Button>

        <Button variant="secondary" onClick={clearFields}>
          Clear
        </Button>
      </div>
      {isSubmitted && !error && (
        <>
          {passwordLength < 6 && (
            <>
              <p className="text-red-500 font-medium mt-2 text-xl">
                Weak Password
              </p>
              <p>Please create a stronger password.</p>
            </>
          )}

          {passwordLength >= 6 && passwordLength <= 9 && (
            <>
              <p className="text-yellow-500 font-medium mt-2  text-xl">
                Medium Password
              </p>
              <p>Consider creating a longer password.</p>
            </>
          )}

          {passwordLength >= 10 && (
            <>
              <p className="text-green-500 font-medium  text-xl mt-2">
                Strong Password
              </p>
              <p>You can use this password.</p>
            </>
          )}
        </>
      )}
    </ActivityCard>
  );
}
