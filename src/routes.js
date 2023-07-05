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
 
  {
    path: "/tables",
    name: "Configurations",
    icon: "	far fa-edit",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Payment Approval",
    icon: "	far fa-edit",
    component: <Login />,
    layout: "/auth",
  },
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
