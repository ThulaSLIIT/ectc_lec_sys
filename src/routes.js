/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";

import AssignBatches from "views/examples/AssignBatches.js";
import ApproveLectures from "views/examples/ApproveLectures.js";
import ApprovedLectures from "views/examples/ApprovedLectures.js";

import ManageCourses from "views/examples/ManageCourses.js";
import ManageLecturers from "views/examples/ManageLecturers.js";
import ManageBatches from "views/examples/ManageBatches.js";
import ManageStudents from "views/examples/ManageStudents.js";
import ManageBranches from "views/examples/ManageBranches.js";

import ApprovedPayment from "views/examples/ApprovedPayment.js";
import RollbackApprovedPayments from "views/examples/RollbackApprovedPayments.js";

import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "fa fa-home" ,
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Approve Lecture Coverages",
    icon: "fa fa-desktop",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Lecture Coverages",
    icon: "fa fa-desktop",
    component: <Maps />,
    layout: "/admin",
  },

  //drag drop lecture coverages

  {
    path: "/AssignBatches",
    name: "Assign Batches",
    icon: "",
    component: <AssignBatches/>,
    layout: "/admin",
  },
  {
    path: "/ApproveLectures",
    name: "Approve Lectures",
    icon: "",
    component: <ApproveLectures />,
    layout: "/admin",
  },
  {
    path: "/ApprovedLectures",
    name: "Approved Lectures",
    icon: "",
    component: <ApprovedLectures />,
    layout: "/admin",
  },


//


  {
    path: "/tables",
    name: "Configurations",
    icon: "	far fa-edit",
    component: <Tables />,
    layout: "/admin",
  },

  //drag drop configurations
  {
    path: "/ManageCourses",
    name: "Manage Courses",
    icon: "	",
    component: <ManageCourses />,
    layout: "/admin",
  },
  {
    path: "/ManageLecturers",
    name: "Manage Lecturers",
    icon: "	",
    component: <ManageLecturers/>,
    layout: "/admin",
  },
  {
    path: "/ManageBatches",
    name: "Manage Batches",
    icon: "	",
    component: <ManageBatches />,
    layout: "/admin",
  },
  {
    path: "/ManageStudents",
    name: "Manage Students",
    icon: "	",
    component: <ManageStudents />,
    layout: "/admin",
  },
  {
    path: "/ManageBranches",
    name: "Manage Branches",
    icon: "	",
    component: <ManageBranches />,
    layout: "/admin",
  },

//

  {
    path: "/login",
    name: "Payment Approval",
    icon: "	far fa-edit",
    component: <Login />,
    layout: "/auth",
  },

  // drag drop Payment approval
  {
    path: "/ApprovedPayment",
    name: "Approve Payment ",
    icon: "	",
    component: <ApprovedPayment />,
    layout: "/admin",
  },
  {
    path: "/RollbackApprovedPayments",
    name: "Rollback Approved Payments",
    icon: "	",
    component: <RollbackApprovedPayments />,
    layout: "/admin",
  },

  // 

  {
    path: "/register",
    name: "Payment Reports",
    icon: "	far fa-edit",
    component: <Register />,
    layout: "/auth",
  },
  {
    path: "/user-profile",
    name: "View User Login",
    icon: "ni ni-single-02 text-black",
    component: <Profile />,
    layout: "/admin",
  },
  
];
export default routes;
