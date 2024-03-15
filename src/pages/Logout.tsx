import { useNavigate } from "react-router-dom";
const Logout = ({ isAuthenticated, logout }: any) => {
  const navigate = useNavigate();
  setTimeout(() => {
    logout();
    navigate("/");
  }, 5000);
  return (
    <div>
      <p>Thank you for using our Service! You will be redirected in s.</p>
    </div>
  );
};
export { Logout };
