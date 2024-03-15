import { useState } from "react";
import { AccountTypes } from "../enums/AccountTypes";
import { getEnumKeys } from "../utils/helpers";

const AccountTypeSelect = () => {
  const [currentAccount, setCurrentAccount] = useState<AccountTypes>(
    AccountTypes.SAVINGS
  );

  return (
    <div className="mb-4">
      <label
        htmlFor="role"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Account Type
      </label>
      <select
        id="role"
        name="role"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={currentAccount}
        onChange={(e) => {
          setCurrentAccount(
            AccountTypes[e.target.value as keyof typeof AccountTypes]
          );
        }}
      >
        {getEnumKeys(AccountTypes).map((key, index) => (
          <option key={index} value={AccountTypes[key]}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};

export { AccountTypeSelect };
