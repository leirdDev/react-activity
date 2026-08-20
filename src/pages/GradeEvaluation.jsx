import { useState } from "react";
import ActivityCard from "../components/ActivityCard";
import Input from "../components/Input";
import Button from "../components/Button";

export default function GradeEvaluation() {
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState(0);
  const [grade, setGrade] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    setGrade("");
    const inputStudentName = studentName.trim();

    if (!inputStudentName) {
      setError("Please enter the student name.");
      return;
    }

    const inputScore = Number(score);

    if (inputScore < 0 || inputScore > 100) {
      setError("Invalid score. Score must be between 0 and 100.");
      return;
    }

    if (inputScore >= 90) {
      setGrade("Very Excellent");
    } else if (inputScore >= 85) {
      setGrade("Very Good");
    } else if (inputScore >= 80) {
      setGrade("Good");
    } else if (inputScore >= 75) {
      setGrade("Passed");
    } else {
      setGrade("Failed");
    }
  };

  const clearFields = () => {
    setStudentName("");
    setScore("");
  };

  return (
    <>
      <ActivityCard
        title="Student Grade Evaluation"
        subtitle="Activity 2"
        color="bg-red-400"
      >
        <Input
          label="Student Name"
          onChange={setStudentName}
          value={studentName}
          placeholder="Enter student name"
        />
        <Input
          label="Score"
          onChange={setScore}
          value={score}
          placeholder="Enter score (0-100)"
          type="number"
        />
        {error && <p className="text-red-500 font-medium">{error}</p>}
        {grade && <p className="text-green-500 font-medium">{grade}</p>}

        <div className="flex gap-2">
          <Button onClick={handleSubmit}>Evaluate</Button>
          <Button variant="secondary" onClick={clearFields}>
            Clear
          </Button>
        </div>
      </ActivityCard>
    </>
  );
}
