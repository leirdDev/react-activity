import { useState } from "react";
import ActivityCard from "../components/ActivityCard";
import Input from "../components/Input";
import Button from "../components/Button";

export default function GradeEvaluation() {
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState("");
  const [grade, setGrade] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    setGrade(null);

    const name = studentName.trim();
    const value = Number(score);

    if (!name) {
      setError("Please enter a student name.");
      return;
    }

    if (!score || value < 0 || value > 100) {
      setError("Please enter a valid score.");
      return;
    }

    let remark;

    if (value >= 90) {
      remark = "Excellent";
    } else if (value >= 80) {
      remark = "Very Good";
    } else if (value >= 75) {
      remark = "Passed";
    } else {
      remark = "Failed";
    }

    setGrade({
      name,
      score: value,
      remark,
    });
  };

  const clearFields = () => {
    setStudentName("");
    setScore("");
    setGrade(null);
    setError("");
  };

  return (
    <ActivityCard
      title="Student Grade Evaluation"
      subtitle="Activity 2"
      color="bg-blue-300"
    >
      <Input
        label="Student Name"
        placeholder="Enter student name"
        value={studentName}
        onChange={setStudentName}
      />

      <Input
        label="Score"
        placeholder="Enter score"
        type="number"
        value={score}
        onChange={setScore}
      />

      {error && <p className="font-medium text-red-500">{error}</p>}

      <div className="flex gap-2">
        <Button onClick={handleSubmit}>Evaluate</Button>

        <Button variant="secondary" onClick={clearFields}>
          Clear
        </Button>
      </div>

      {grade && (
        <div
          className={`mt-4 overflow-hidden rounded-2xl border ${
            grade.remark === "Failed" ? "bg-red-50" : "bg-green-50"
          }`}
        >
          <div className="p-4">
            <p className="flex justify-between">
              <span>Student Name</span>
              <span>{grade.name}</span>
            </p>

            <p className="flex justify-between">
              <span>Score</span>
              <span>{grade.score}</span>
            </p>

            <p
              className={`mt-4 flex justify-between text-lg font-medium ${
                grade.remark === "Failed" ? "text-red-600" : "text-green-600"
              }`}
            >
              <span>Grade</span>
              <span>{grade.remark}</span>
            </p>
          </div>
        </div>
      )}
    </ActivityCard>
  );
}
