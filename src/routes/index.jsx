import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import CheckEmailPage from "../pages/CheckEmailPage.jsx";
import CheckPasswordPage from "../pages/CheckPasswordPage.jsx";
import MessagePage from "../components/MessagePage.jsx";
import AuthLayout from "../layout/index";
import ForgotPassword from "../pages/ForgotPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "register",
        element: (
          <AuthLayout>
            <RegisterPage />
          </AuthLayout>
        ),
      },
      {
        path: "email",
        element: (
          <AuthLayout>
            <CheckEmailPage />
          </AuthLayout>
        ),
      },
      {
        path: "password",
        element: (
          <AuthLayout>
            <CheckPasswordPage />
          </AuthLayout>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <AuthLayout>
            <ForgotPassword />
          </AuthLayout>
        ),
      },
      {
        path: "",
        Component: HomePage,
        children: [
          {
            path: ":userId",
            Component: MessagePage,
          },
        ],
      },
    ],
  },
]);

export default router;
