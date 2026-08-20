import { useState } from "react";
import ActivityCard from "../components/ActivityCard";
import Input from "../components/Input";
import Button from "../components/Button";

export default function ElectricityBill() {
  const [customerName, setCustomerName] = useState("");
  const [electConsumption, setElectConsumption] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [bill, setBill] = useState(null);

  const multiplier = (value) => {
    if (value <= 100) {
      return 10;
    } else if (value <= 200) {
      return 12;
    } else if (value <= 300) {
      return 15;
    } else {
      return 18;
    }
  };

  const handleSubmit = () => {
    setError("");
    setIsSubmitted(false);

    const name = customerName.trim();
    const consumption = Number(electConsumption);

    if (!name) {
      setError("Please enter a customer name.");
      return;
    }

    if (!consumption) {
      setError("Please enter electricity consumption.");
      return;
    }

    if (!electConsumption || consumption < 0) {
      setError("Please enter a valid electricity consumption.");
      return;
    }

    const rate = multiplier(consumption);
    const total = consumption * rate;

    setBill({
      name,
      consumption,
      rate,
      total,
    });

    setIsSubmitted(true);
  };

  const clearFields = () => {
    setError("");
    setCustomerName("");
    setElectConsumption("");
    setIsSubmitted(false);
    setBill(null);
  };

  return (
    <ActivityCard
      title="Electricity Bill Calculator"
      subtitle="Activity 4"
      color="bg-orange-300"
    >
      <Input
        label="Customer Name"
        placeholder="Enter customer name"
        value={customerName}
        onChange={setCustomerName}
      />

      <Input
        label="Electricity Consumption (kWh)"
        placeholder="Enter consumption in kWh"
        value={electConsumption}
        onChange={setElectConsumption}
        type="number"
      />

      {error && <p className="text-red-500 font-medium">{error}</p>}

      <div className="flex gap-2">
        <Button onClick={handleSubmit}>Calculate Bill</Button>

        <Button variant="secondary" onClick={clearFields}>
          Clear
        </Button>
      </div>

      {isSubmitted && bill && (
        <div className="mt-4  border bg-slate-50 overflow-hidden">
          <div className="p-6">
            <p className="flex justify-between">
              <span>Customer Name</span>
              <span>{bill.name}</span>
            </p>

            <p className="flex justify-between">
              <span>Consumption</span>
              <span>{bill.consumption} kWh</span>
            </p>

            <p className="flex justify-between">
              <span>Rate</span>
              <span>₱{bill.rate} / kWh</span>
            </p>

            <p className="flex justify-between">
              <span>Total Bill</span>
              <span className="text-xl font-bold text-violet-600">
                ₱{bill.total}
              </span>
            </p>
          </div>

          <p
            className={`p-6 text-center text-lg font-medium ${
              bill.total > 5000
                ? "bg-red-50 text-red-600"
                : "bg-green-50 text-green-600"
            }`}
          >
            {bill.total > 5000
              ? "High Electricity Usage"
              : "Normal Electricity Usage"}
          </p>
        </div>
      )}
    </ActivityCard>
  );
}
