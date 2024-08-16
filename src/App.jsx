import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UserDashBoard from "./pages/UserDashBoard";
import Layout from "./component/Layout";
import UsepProfileCard from "./component/UsepProfileCard";
import Userupdateprofile from "./component/Userupdateprofile";
import Userapplication from "./pages/Userapplication";
import Sidebarlayout from "./component/Sidebarlayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route  element={<Sidebarlayout />}>
          <Route path="userdashboard" element={<UserDashBoard />}></Route>
          <Route path="usepProfileCard" element={<UsepProfileCard />}></Route>
          <Route
            path="userupdateprofile"
            element={<Userupdateprofile />}
          ></Route>
          <Route path="userapplication" element={<Userapplication />}></Route>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
