import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

const Home = ({ isAuthenticated, login }: any) => {
  const navigate = useNavigate();
  const [accountNumber, setAccountNumber] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(accountNumber);
    try {
      const result = await axios.post("/api/auth", {
        account_number: accountNumber,
      });
      if (result) {
        login();
      } else {
      }
    } catch (error) {}
  };

  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      navigate("navigation");
    }
  }, [navigate, isAuthenticated]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-white-700 text-sm font-bold mb-2"
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
    </form>
  );
};

export { Home };
