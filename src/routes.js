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

import AssignBatches from "views/examples/AssignBatches.js";
import ApproveLectures from "views/examples/ApproveLectures.js";
import ApprovedLectures from "views/examples/ApprovedLectures.js";

import Configurations from "views/examples/Configurations.js";

import LectureCoverages from "views/examples/LectureCoverages.js";
import ManageCourses from "views/examples/ManageCourses.js";
import ManageLecturers from "views/examples/ManageLecturers.js";
import ManageBatches from "views/examples/ManageBatches.js";
import ManageStudents from "views/examples/ManageStudents.js";
import ManageBranches from "views/examples/ManageBranches.js";


import PaymentApproval from "views/examples/PaymentApproval.js";
import ApprovedPayment from "views/examples/ApprovedPayment.js";
import RollbackApprovedPayments from "views/examples/RollbackApprovedPayments.js";


import PaymentReports from "views/examples/PaymentReports.js";
import FinalizedPayments from "views/examples/FinalizedPayments.js";
import GenerateReports from "views/examples/GenerateReports.js";


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
    path: "/LectureCoverages",
    name: "Lecture Coverages",
    icon: "fa fa-desktop",
    component: <LectureCoverages />,
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
    path: "/Configurations",
    name: "Configurations",
    icon: "	far fa-edit",
    component: <Configurations />,
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
    path: "/PaymentApproval",
    name: "Payment Approval",
    icon: "	far fa-edit",
    component: <PaymentApproval/>,
    layout: "/admin",
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
    path: "/PaymentReports",
    name: "Payment Reports",
    icon: "	far fa-edit",
    component: <PaymentReports />,
    layout: "/admin",
  },

  // drag drop payment reports
  {
    path: "/FinalizedPayments",
    name: "Finalized Payments",
    icon: "	",
    component: <FinalizedPayments />,
    layout: "/admin",
  },
  {
    path: "/GenerateReports",
    name: "Generate Reports",
    icon: "	",
    component: <GenerateReports/>,
    layout: "/admin",
  },

  //

  {
    path: "/user-profile",
    name: "View User Login",
    icon: "ni ni-single-02 text-black",
    component: <Profile />,
    layout: "/admin",
  },
  
];
export default routes;
