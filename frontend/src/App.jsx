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
import UsepProfileCard from "./pages/UsepProfileCard";
import Userupdateprofile from "././pages/Userupdateprofile";
import Userapplication from "./pages/Userapplication";
import Sidebarlayout from "./component/Sidebarlayout";
import Addjob from "./component/Addjob";
import Managejob from "./component/Managejob";
import Recuiterupdaterofile from "./pages/Recuiterupdaterofile";
import RecuiterProfileCard from "./pages/RecuiterProfileCard";
import Recuiterapplication from "./pages/Recuiterapplication";
import JobDetail from "./component/JobDetail";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import AdminProfileCard from "./pages/AdminProfileCard";
import AdminUpdateProfile from "./pages/AdminUpdateProfile";
import ManageUsers from "./pages/ManageUsers";
import Admin from "./pages/Admin";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/jobdetail" element={<JobDetail />}></Route>
        <Route  element={<Sidebarlayout />}>

        {/* user */}
          <Route path="userdashboard" element={<UserDashBoard />}></Route>
          <Route path="usepProfileCard" element={<UsepProfileCard />}></Route>
          <Route
            path="userupdateprofile"
            element={<Userupdateprofile />}
          ></Route>
          <Route path="userapplication" element={<Userapplication />}></Route>




          {/* Recuiter */}
          
          {/* <Route path="recuiterdashboard" element={<RecuiterDashBoard/>}></Route> */}
          <Route path="addjob" element={<Addjob/>}></Route>
          <Route path="manageJobs" element={<Managejob/>}></Route>
          <Route path="recuiterProfileCard" element={<RecuiterProfileCard />}></Route>
          <Route
            path="recuiterupdateprofile"
            element={<Recuiterupdaterofile />}
          ></Route>
          <Route path="recuiterapplication" element={<Recuiterapplication />}></Route>


          
        {/* Admin */}
        <Route path="adminprofilecard" element={<AdminProfileCard />}></Route>
        <Route path="adminupdateprofile" element={<AdminUpdateProfile />}></Route>
        <Route path="manageUsers" element={<ManageUsers />}></Route>
        <Route path="admin" element={<Admin />}></Route>




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
