import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { MakeWithdrawal, MakeDeposit, CheckBalance, Home } from "./index";
const Navigation = ({ isAuthenticated, toggleAuth }: any) => {
  return (
    <header className="bg-white py-4">
      <div className="flex flex-col">
        <div>
          <p className="p-4 hover:text-blue-400">
            <Link to="/make-withdrawal">Make Withdrawal</Link>
          </p>
        </div>

        <p className="p-4 hover:text-blue-400">
          <Link to="/make-deposit">Make Deposit</Link>
        </p>
        <p className="p-4 hover:text-blue-400">
          <Link to="/check-balance">Check Balance</Link>
        </p>
        <p className="p-4 hover:text-blue-400">
          <Link to="/logout">Exit</Link>
        </p>
      </div>
    </header>
  );
};
export { Navigation };
