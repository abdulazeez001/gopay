// import React from 'react';
// import SignUp from './Signup';
// import SignIn from './Signin';





import Overview from './Overview/overview';
import Dashboard from './Dashboard/dashboard';


import Employee from './Employee/employee';
import EmployeeOnboard from "./Employee/employeeonboard";
import EmployeeNew from "./Employee/employeenew";


import Payroll from "./Payroll/payroll";
// import PayrollQuickPay from "./Payroll/payrollquickpay";
import PayrollStepOne from "./Payroll/payrollstepone";
// import PayrollHistory from "./Payroll/payrollhistory";
// import PayrollSecond from "./Payroll/payrollsecond";


import Benefits from "./Benefits/benefits";

import Reports from "./Reports/reports";
// import Corehr from "./Corehr/corehr";
import Hire from "./Hire/hire";
import Company from "./Company/company";
import Wallet from "./Wallet/wallet";
import Settings from "./Settings/settings";
// import Contact from "./Contact/contact";
import ViewEmployee from './Employee/ViewEmployee/viewEmployee';

const routes = {
  private: [

  ],
  public: [
    {
      component: Dashboard,
      exact: true,
      path: '/dashboard',
    },
    {
        component: Overview ,
        exact: true,
        path: '/',
      },
    {
      component: Employee,
      exact: true,
      path: '/employee',
    },
    {
      component: ViewEmployee,
      exact: true,
      path: '/employee/:id',
    },
    {
      component: EmployeeOnboard,
      exact: true,
      path: 'employee/emp_onboard',
    },
    {
      component: EmployeeNew,
      exact: true,
      path: 'employee/emp_new',
    },

    // {
    //   component: SignUp,
    //   exact: true,
    //   path: '/',
    // },
    // {
    //   component: SignUp,
    //   exact: true,
    //   path: '/sign_up',
    // },
    // {
    //   component: SignIn,
    //   exact: true,
    //   path: '/sign_in',
    // },
    // {
    // component: Login,
    // exact: true,
    // path: '/login',
    // },
    // {
    //   component: Registration,
    //   exact: true,
    //   path: '/reg',
    // },
    // {
    //   component: SignupTest,
    //   exact: true,
    //   path: '/test',
    // },
    {
      component: Payroll,
      exact: true,
      path: '/payroll',
    },
    // {
    //   component: PayrollQuickPay,
    //   exact: true,
    //   path: '/pay_quick',
    // },
    {
      component: PayrollStepOne,
      exact: true,
      path: '/payroll/pay_step1',
    },
    // {
    //   component: PayrollHistory,
    //   exact: true,
    //   path: '/pay_history',
    // },
    // {
    //   component: PayrollSecond,
    //   exact: true,
    //   path: '/pay_second',
    // },
    {
      component: Benefits,
      exact: true,
      path: '/benefits',
    },
    // {
    //   component: Hmo,
    //   exact: true,
    //   path: '/hmo',
    // },
    {
      component: Reports,
      exact: true,
      path: '/reports',
    },
    // {
    //   component: Corehr,
    //   exact: true,
    //   path: '/corehr',
    // },
    // {
    //   component: Hire,
    //   exact: true,
    //   path: '/hire',
    // },
    {
      component: Company,
      exact: true,
      path: '/details',
    },
    {
      component: Wallet,
      exact: true,
      path: '/wallet',
    },
    {
      component: Settings,
      exact: true,
      path: '/settings',
    },
    // {
    //   component: Contact,
    //   exact: true,
    //   path: '/contact',
    // },
  ],
};

export default routes;
