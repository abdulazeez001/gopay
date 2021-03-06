/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import {benefitsIcon,
        companyIcon,  
        dashboardIcon, 
        employeeIcon1,  
        logo, 
        payrollIcon, 
        reportIcon, 
        settingsIcon, 
        walletIcon 
    } from '../../assets';
import { useLocation } from 'react-router';
import styled from 'styled-components';


const StyledSideBar = styled.div`
      padding:var(--mm);
      background-color:white;
      height:100vh;
      overflow-y:scroll;
      width:max-content;
      font-size:.9rem;
      font-weight:500;
      

      & li{
          margin-top:1rem;
          margin-bottom:1rem;
          
      }

      & li>a{
          display:grid;
          grid-template-columns:1fr 4fr;
          align-items:center;
          padding:1rem;
          color:grey;
      }

      & .active{
          background-color:rgb(208, 236, 245);
          border-radius:.2rem;
          position:relative;
          outline:none;
          color:darkblue;
          
      }
      & .active path{
        fill:darkblue;
      }

      & .active::after{
          content:' ';
          position:absolute;
          width:3px;
          height:100%;
          background-color:darkblue;
          right:-1rem;
      }

`

const SideBar = () =>{
    const location = useLocation()
    return(
        <StyledSideBar className="side__bar">
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <nav>
                     <ul>
                         <li>
                             <Link to="/" className={location.pathname==='/'?'active':null}>
                             <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M12.5 0C12.9167 0 13.2708 0.145833 13.5625 0.4375C13.8542 0.729167 14 1.08333 14 1.5V12.5C14 12.9167 13.8542 13.2708 13.5625 13.5625C13.2708 13.8542 12.9167 14 12.5 14H1.5C1.08333 14 0.729167 13.8542 0.4375 13.5625C0.145833 13.2708 0 12.9167 0 12.5V1.5C0 1.08333 0.145833 0.729167 0.4375 0.4375C0.729167 0.145833 1.08333 0 1.5 0H12.5ZM12.5 12.5V1.5H1.5V12.5H12.5ZM3.75 11C3.60417 11 3.47917 10.9583 3.375 10.875C3.29167 10.7708 3.25 10.6458 3.25 10.5V6.5C3.25 6.35417 3.29167 6.23958 3.375 6.15625C3.47917 6.05208 3.60417 6 3.75 6H4.25C4.39583 6 4.51042 6.05208 4.59375 6.15625C4.69792 6.23958 4.75 6.35417 4.75 6.5V10.5C4.75 10.6458 4.69792 10.7708 4.59375 10.875C4.51042 10.9583 4.39583 11 4.25 11H3.75ZM6.75 11C6.60417 11 6.47917 10.9583 6.375 10.875C6.29167 10.7708 6.25 10.6458 6.25 10.5V3.5C6.25 3.35417 6.29167 3.23958 6.375 3.15625C6.47917 3.05208 6.60417 3 6.75 3H7.25C7.39583 3 7.51042 3.05208 7.59375 3.15625C7.69792 3.23958 7.75 3.35417 7.75 3.5V10.5C7.75 10.6458 7.69792 10.7708 7.59375 10.875C7.51042 10.9583 7.39583 11 7.25 11H6.75ZM9.75 11C9.60417 11 9.47917 10.9583 9.375 10.875C9.29167 10.7708 9.25 10.6458 9.25 10.5V8.5C9.25 8.35417 9.29167 8.23958 9.375 8.15625C9.47917 8.05208 9.60417 8 9.75 8H10.25C10.3958 8 10.5104 8.05208 10.5938 8.15625C10.6979 8.23958 10.75 8.35417 10.75 8.5V10.5C10.75 10.6458 10.6979 10.7708 10.5938 10.875C10.5104 10.9583 10.3958 11 10.25 11H9.75Z" fill="#8181A5"/>
                             </svg>
                                <p>Overview</p>
                             </Link>
                         </li>
                         <li>
                             <Link to="/dashboard" className={location.pathname==='/dashboard'?'active':null}>
                                <img src={dashboardIcon} alt="" />
                                <p>Dashboard</p>
                             </Link>
                         </li>
                         <li>
                             <Link to="/employee" className={location.pathname.split('/')[1]==='employee'?'active':null}>
                                <img src={employeeIcon1} alt="" />
                                <p>Employee</p>
                             </Link>
                         </li>
                         <li>
                             <Link to="/payroll" className={location.pathname.split('/')[1]==='payroll'?'active':null}>
                                <img src={payrollIcon} alt="" />
                                <p>Payroll</p>
                             </Link>
                         </li>
                         <li>
                             <Link to="/benefits" className={location.pathname==='/benefits'?'active':null}>
                                <img src={benefitsIcon} alt="" />
                                <p>Benefits</p>
                             </Link>
                         </li>
                         <li>
                             <Link to="/reports" className={location.pathname==='/reports'?'active':null}>
                                <img src={reportIcon} alt="" />
                                <p>Reports</p>
                             </Link>
                         </li>
                         <li>
                             <Link to="/details" className={location.pathname==='/details'?'active':null}>
                                <img src={companyIcon} alt="" />
                                <p>Company Details</p>
                             </Link>
                         </li>
                         <li>
                             <Link to="/wallet" className={location.pathname==='/wallet'?'active':null}>
                                <img src={walletIcon} alt="" />
                                <p>Wallet</p>
                             </Link>
                         </li>
                         <li>
                             <Link to="/settings" className={location.pathname==='/settings'?'active':null}>
                                <img src={settingsIcon} alt="" />
                                <p>Settings</p>
                             </Link>
                         </li>
                     </ul>
                </nav>
            </div>
        </StyledSideBar>
    )
}

export default SideBar