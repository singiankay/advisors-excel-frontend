import { useEffect } from "react";
import { AccountTypeSelect } from "../components/AccountTypeSelect";

const CheckBalance = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Check Balance</h1>
      <div className="mb-4">
        <p className="text-lg text-gray-700 mb-6">Your account balance is: </p>
      </div>
    </div>
  );
};

export { CheckBalance };
