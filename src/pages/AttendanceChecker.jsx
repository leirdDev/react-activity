import { useState } from "react";
import ActivityCard from "../components/ActivityCard";
import Input from "../components/Input";
import Button from "../components/Button";

export default function AttendanceChecker() {
  const [employeeName, setEmployeeName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [attendance, setAttendance] = useState(null);

  const handleSubmit = () => {
    setError("");
    setIsSubmitted(false);

    const name = employeeName.trim();
    const time = Number(timeIn);

    if (!name) {
      setError("Please enter an employee name.");
      return;
    }

    if (!timeIn || time < 0 || time > 24) {
      setError("Invalid time.");
      return;
    }

    let status;
    let message;

    if (time <= 8) {
      status = "On Time";
      message = "Status: On Time - Good job!";
    } else if (time <= 9) {
      status = "Late";
      message = "Status: Late - Please be on time tomorrow.";
    } else {
      status = "Very Late";
      message = "Status: Very Late - Report to your supervisor.";
    }

    setAttendance({
      name,
      time,
      status,
      message,
    });

    setIsSubmitted(true);
  };

  const clearFields = () => {
    setError("");
    setEmployeeName("");
    setTimeIn("");
    setIsSubmitted(false);
    setAttendance(null);
  };

  const formatTime = (time) => {
    const hour = Math.floor(time);
    const minutes = Math.round((time - hour) * 60);

    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;

    return `${displayHour}:${String(minutes).padStart(2, "0")} ${period}`;
  };

  return (
    <ActivityCard
      title="Attendance Checker"
      subtitle="Activity 5"
      color="bg-blue-300"
    >
      <Input
        label="Employee Name"
        placeholder="Enter employee name"
        value={employeeName}
        onChange={setEmployeeName}
      />

      <Input
        label="Time In"
        placeholder="Enter time (e.g. 8.5 or 21.12)"
        value={timeIn}
        onChange={setTimeIn}
        type="number"
      />

      {error && <p className="text-red-500 font-medium">{error}</p>}

      <div className="flex gap-2">
        <Button onClick={handleSubmit}>Check Attendance</Button>

        <Button variant="secondary" onClick={clearFields}>
          Clear
        </Button>
      </div>

      {isSubmitted && attendance && (
        <div className="mt-4 overflow-hidden rounded-2xl border bg-slate-50">
          <div className="p-6">
            <p className="flex justify-between">
              <span>Employee Name</span>
              <span>{attendance.name}</span>
            </p>

            <p className="flex justify-between">
              <span>Time In</span>
              <span>{formatTime(attendance.time)}</span>
            </p>

            <p className="flex justify-between">
              <span>Status</span>
              <span>{attendance.status}</span>
            </p>
          </div>

          <p
            className={`p-6 text-center text-lg font-medium ${
              attendance.status === "On Time"
                ? "bg-green-50 text-green-600"
                : attendance.status === "Late"
                  ? "bg-yellow-50 text-yellow-600"
                  : "bg-red-50 text-red-600"
            }`}
          >
            {attendance.message}
          </p>
        </div>
      )}
    </ActivityCard>
  );
}
