import { createBrowserRouter } from "react-router-dom";

import "./App.scss";

import { ROUTES } from "./constants";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import { Landing } from "./pages/Landing/Landing";
import { CreateVoucher } from "./pages/CreateVoucher/CreateVoucher";
import { Layout } from "./components/Layout/Layout";

// Use it for delay requests or responses
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// For testing route loading
const commonRouteLoader = async () => {
  await delay(3000);

  return null;
};

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: ROUTES.CREATE_VOUCHER,
        loader: commonRouteLoader,
        element: <CreateVoucher />,
        async lazy() {
          const { CreateVoucher } = await import("./pages/CreateVoucher/CreateVoucher");
          return { loader: commonRouteLoader, Component: CreateVoucher };
        },
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);
