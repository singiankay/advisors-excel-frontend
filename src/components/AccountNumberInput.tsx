import { useState } from "react";
const AccountNumberInput = () => {
  const [accountNumber, setAccountNumber] = useState("");

  return (
    <div>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Bank Account Number
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your Bank Account Number"
          onChange={(e) => setAccountNumber(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </div>
    </div>
  );
};

export { AccountNumberInput };
