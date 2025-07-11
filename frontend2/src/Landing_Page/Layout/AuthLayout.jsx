import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div >
      {/* No Navbar or Footer here */}
      <Outlet />
    </div>
  );
}

export default AuthLayout;
