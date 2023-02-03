import { Center, Text } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataProcessing } from "./pages/DataProcessing";
import { Home } from "./pages/Home";
import { HeaderLayout } from "./pages/layouts/HeaderLayout";
import { OnlineSurvey } from "./pages/OnlineSurvey";
import { Papers } from "./pages/Papers";

const router = createBrowserRouter(
  [
    {
      element: <HeaderLayout />,
      errorElement: (
        <Center height="100vh" flexDir={"column"}>
          <Text fontSize={"6xl"}>404</Text>
          <Text>Woops! You seem lost.</Text>
        </Center>
      ),
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
  ],
  {
    basename: "/co-explore-study",
  }
);

export const Routes = () => <RouterProvider router={router} />;
