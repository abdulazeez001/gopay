import React, { useState } from 'react'; 
import Header from '../../../components/Header';
import SideBar from '../../../components/SideBar';
import { useLocation } from 'react-router';
import EmployeeList from '../employeeList';
import EmployeeInfo from '../../../components/Employees/ViewEmployee/employeeInfo';

import { companyIcon, hireIcon, managepayrollicon, planbillingicon } from "../../../assets";
import StyledViewEmpSide from '../../../components/Employees/ViewEmployee/viewEmployeeSide'
import JobAndPay from '../../../components/Employees/ViewEmployee/jobAndPay';
import Profile from '../../../components/Employees/ViewEmployee/profile';
import Documents from '../../../components/Employees/ViewEmployee/documents';
import BenefitsShow from '../../../components/Employees/ViewEmployee/benefits';


const ViewEmployee = () =>{
   const [showType,setShowType] = useState('jobPay')
   const location = useLocation()
   const employeeInfo = EmployeeList.filter((emp)=>{
    return emp.id ===location.pathname.split('/')[2]
   })
   if (employeeInfo[0]){
    var {id,name,position,image,gender,isActive} = employeeInfo[0]
   }

   const changeShowType =(e)=>{
    setShowType(e.currentTarget.dataset.showtype)
   
   } 
    function showTypeMain(){

        switch(showType){
            case 'jobPay':
                return <JobAndPay id={id} name={name} position={position}/>
            case 'profile':
                return <Profile gender={gender} name={name}/>
            case 'benefits':
                return <BenefitsShow/>
            case 'documents':
                return <Documents/>
            default: <JobAndPay/>
        }
    }

   const ViewEmployeeSide = () =>{
    return(
    <StyledViewEmpSide className='viewEmp'>
        <div className={showType==='jobPay'?'active':''} data-showtype='jobPay' onClick={(e)=>{changeShowType(e)}}>
            <div>
                <img src={hireIcon} alt="" />
            </div>
            <div>
                <h4>Job and Pay</h4>
                <p>Manage admin or employee</p>
            </div>
        </div>
        <div className={showType==='profile'?'active':''} data-showtype='profile' onClick={(e)=>{changeShowType(e)}}>
            <div>
                <img src={managepayrollicon} alt="" />
            </div>
            <div>
                <h4>Profile</h4>
                <p>Compensation & Deductibles</p>
            </div>
        </div>
        <div className={showType==='benefits'?'active':''} data-showtype='benefits' onClick={(e)=>{changeShowType(e)}}>
            <div>
                <img src={planbillingicon} alt="" />
            </div>
            <div>
                <h4>Benefits</h4>
                <p>Current Plans, payroll transaction</p>
            </div>
        </div>
        <div className={showType==='documents'?'active':''} data-showtype='documents' onClick={(e)=>{changeShowType(e)}}> 
            <div>
                <img src={companyIcon} alt="" />
            </div>
            <div>
                <h4>Documents</h4>
                <p>Basic information of company</p>
            </div>
        </div>
    </StyledViewEmpSide>
    )
}


    return(
        <div className="employee container">
            <SideBar/>
            <div className="content">
              <Header title='View Employee'/>
              <div className='view-employee-content'>
                <ViewEmployeeSide/>
                <div>
                    {
                    employeeInfo[0]? 
                    <div>
                        <EmployeeInfo name={name} position={position} image={image} isActive={isActive}/>
                        {
                           showTypeMain()
                        }
                    </div>
                    :
                    <h2>An Employee with this Id doesn't exist </h2>
                    }
 
                </div>
              </div>
            </div>
        </div>
    )
}

export default ViewEmployee