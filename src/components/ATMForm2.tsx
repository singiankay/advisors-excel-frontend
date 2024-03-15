// import React, { useState } from 'react';

// const ATMForm = ({ performWithdrawal, performDeposit, checkBalance }) => {
//     const [accountNumber, setAccountNumber] = useState('');
//     const [action, setAction] = useState('');

//     const handleAccountNumberChange = (event) => {
//         setAccountNumber(event.target.value);
//     };

//     const handleActionChange = (event) => {
//         setAction(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Perform action based on the selected option
//         switch (action) {
//             case 'withdrawal':
//                 performWithdrawal(accountNumber);
//                 break;
//             case 'deposit':
//                 performDeposit(accountNumber);
//                 break;
//             case 'balanceCheck':
//                 checkBalance(accountNumber);
//                 break;
//             default:
//                 // Handle unsupported action
//                 break;
//         }
//         // Clear form after submission
//         setAccountNumber('');
//         setAction('');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="accountNumber">Account Number:</label>
//                 <input
//                     type="text"
//                     id="accountNumber"
//                     value={accountNumber}
//                     onChange={handleAccountNumberChange}
//                 />
//             </div>
//             <div>
//                 <label htmlFor="action">Select Action:</label>
//                 <select id="action" value={action} onChange={handleActionChange}>
//                     <option value="">Select...</option>
//                     <option value="withdrawal">Withdrawal</option>
//                     <option value="deposit">Deposit</option>
//                     <option value="balanceCheck">Balance Check</option>
//                 </select>
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default ATMForm;
export {}