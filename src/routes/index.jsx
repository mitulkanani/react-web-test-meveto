import DashLayout from "containers/dashlayout/DashLayout";
import SignUp from "containers/auth/SignUp";
import SignIn from "containers/auth/SignIn";

const indexRoutes = [
  { path: "/signup", component: SignUp },
  { path: "/login", component: SignIn },
  { path: "/", component: DashLayout }
];

export default indexRoutes;
