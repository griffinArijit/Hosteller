import ListPage from "./routes/listPage/ListPage"
import Homepage from "./routes/homepage/Homepage"
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage"
import ProfilePage from "./routes/profilePage/profilePage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";

function App() {
  

  const router = createBrowserRouter([
    {
      path: "/",
      element : (
      <Layout/>
    ),
    children: [
      {
        path: "/",
        element: <Homepage/>
      },
      {
        path: "/list",
        element: <ListPage />
      },
      {
        path: "/:id",
        element: <SinglePage/>
      },
      {
        path: "/profile",
        element: <ProfilePage />
      }
    ]
  }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App