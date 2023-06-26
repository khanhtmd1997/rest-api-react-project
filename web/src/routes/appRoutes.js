import { Navigate, useRoutes } from "react-router-dom";
import ErrorPages from "../pages/error";
import DashboardPages from "../pages/public/dashboard";
import DashboardPrivatePages from "../pages/private/dashboard";
import LayoutPublicPages from "../pages/public/layout";
import LayoutPrivatePages from "../pages/private/layout";
import LoginPages from "../pages/public/login";
import UnauthorizePages from "../pages/unauthorize";
import DetailPages from "../pages/public/detail";
import { PATH } from "../constants";
import TestPages from "../pages/private/test";

function AppRoutes() {
  const element = [
    {
      path: PATH.LOGIN,
      element: <LoginPages />,
    },
    {
      element: (
        <PublicPages private={false}>
          <LayoutPublicPages />
        </PublicPages>
      ),

      children: [
        {
          path: PATH.DASHBOARD,
          element: <DashboardPages />,
        },
        {
          path: PATH.DETAIL,
          element: <DetailPages />,
        },
      ],
    },
    {
      element: (
        <PrivatePages isAuth={true}>
          <LayoutPrivatePages layoutAuth />
        </PrivatePages>
      ),
      children: [
        {
          path: `${PATH.ADMIN}`,
          element: <DashboardPrivatePages />,
        },
        {
          path: `${PATH.ADMIN}/test`,
          element: <TestPages />,
        },
      ],
    },

    {
      path: PATH.UNAUTHORIZE,
      element: <UnauthorizePages />,
    },

    { path: PATH.ERRORS, element: <ErrorPages /> },
    { path: PATH.ALL, element: <Navigate replace to={PATH.ERRORS} /> },
  ];

  return useRoutes(element);
}

const PrivatePages = (props) => {
  return props.isAuth ? props.children : <Navigate to={PATH.UNAUTHORIZE} />;
};

const PublicPages = (props) => {
  return !props.private ? props.children : <Navigate to={PATH.ERRORS} />;
};
export default AppRoutes;
