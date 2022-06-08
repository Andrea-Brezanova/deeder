import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function Protected() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
        { isAuthenticated ? <Outlet /> : <Navigate to="/signin"/> }
    </div>
  );
}
export default Protected;
