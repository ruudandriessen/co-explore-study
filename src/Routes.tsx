import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataProcessing } from "./pages/DataProcessing";
import { OnlineSurvey } from "./pages/OnlineSurvey";

const router = createBrowserRouter([
  {
    path: "/data",
    element: <DataProcessing />,
  },
  {
    path: "/",
    element: <OnlineSurvey />,
  },
]);

export const Routes = () => <RouterProvider router={router} />;
