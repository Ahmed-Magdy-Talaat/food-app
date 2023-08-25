import { Customer } from "./pages/Customer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashbord/Dashboard";
import Analytics from "./pages/analytics/Analytics";
import Message from "./pages/message/Message";
import Setting from "./pages/setting/Setting";
import Logout from "./pages/logout/Logout";
import Login from "./pages/login/Login";
import Root from "./layout/Root";

import "./App.css";
/* import "./css/Analystic.css"; */

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/analystic", element: <Analytics /> },
        { path: "/customer", element: <Customer /> },
        { path: "/message", element: <Message /> },
        { path: "/setting", element: <Setting /> },
      ],
    },
    { path: "/logout", element: <Logout /> },
    { path: "/login", element: <Login /> },
  ]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
