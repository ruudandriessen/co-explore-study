import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataProcessing } from "./pages/DataProcessing";
import { Home } from "./pages/Home";
import { HeaderLayout } from "./pages/layouts/HeaderLayout";
import { OnlineSurvey } from "./pages/OnlineSurvey";
import { Papers } from "./pages/Papers";

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/data",
        element: <DataProcessing />,
      },
      {
        path: "/survey",
        element: <OnlineSurvey />,
      },
      {
        path: "/papers",
        element: <Papers />,
      },
    ],
  },
]);

export const Routes = () => <RouterProvider router={router} />;
