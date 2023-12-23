import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { App } from "@/components/App";
import { About } from "@/pages/about";
import { Shop } from "@/pages/shop";

const root = document.getElementById("root");

if (!root) throw new Error("root not found");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={"Загрузка..."}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={"Загрузка..."}>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(root).render(<RouterProvider router={router} />);
