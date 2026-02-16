import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  },
]);


const App = () => {
  return <RouterProvider router={router} />
}

export default App