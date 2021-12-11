import React, { useEffect, useState } from 'react'; 
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import { new_employee_user_icon, searchIcon, prevIcon, nextIcon, planToHire, emp_row_img1, emp_row_img2, img8, plusFive} from '../../assets';
import EmployeeDetail from '../../components/Employees/employee';
import EmployeeList from './employeeList';
import { changeActiveNav } from '../../util/helper';
import {Link} from 'react-router-dom'

// List All Employees
let Employees = EmployeeList.map((emp)=>{
    return(
      <EmployeeDetail id={emp.id} name={emp.name} position={emp.position} image={emp.image} isActive={emp.isActive} />
    )
})
// List All Active Employees
const listActiveEmp = EmployeeList.filter((emp)=>{
            return emp.isActive === true})
            .map((empFiltered)=>{
                return(
                    <EmployeeDetail id={empFiltered.id} name={empFiltered.name} position={empFiltered.position} image={empFiltered.image} isActive={empFiltered.isActive}/>
                  )
            })
// List All Deactived Employees
const listDeactiveEmp = EmployeeList.filter((emp)=>{
    return emp.isActive === false})
    .map((empFiltered)=>{
        return(
            <EmployeeDetail id={empFiltered.id} name={empFiltered.name} position={empFiltered.position} image={empFiltered.image} isActive={empFiltered.isActive}/>
            )
    })

const Employee = () =>{
    const [empList,setEmpList] = useState(Employees)
    useEffect(()=>{
        changeActiveNav('.main-employee-top li')
        changeActiveNav('.emp-list-control li')
    },[])
    function searchEmpList(e){
        let list = EmployeeList.filter((emp)=>{
            return emp.name.toLowerCase().includes(e.target.value.toLowerCase())
        }).map((empFiltered)=>{
            return(
                <EmployeeDetail id={empFiltered.id} name={empFiltered.name} position={empFiltered.position} image={empFiltered.image} isActive={empFiltered.isActive}/>
                )
        })
        setEmpList(list)
    }
    return(
        <div className="employee container">
            <SideBar/>
            <div className="content">
              <Header title='Employees'/>
              <div className='employee-details'>
                  <div className='main-employee-details'>
                      <div className='main-employee-top'>
                          <nav>
                              <ul>
                                  <li onClick={()=>{setEmpList(Employees)}} className='active'>All</li>
                                  <li onClick={()=>{setEmpList(listActiveEmp)}}>Active</li>
                                  <li onClick={()=>{setEmpList(listDeactiveEmp)}}>Inactive</li>
                              </ul>
                          </nav>
                          <div className='input-form'>
                              <img src={searchIcon} alt="" />
                              <input type='text' placeholder='Search' onChange={(e)=>{searchEmpList(e)}}/>
                          </div>
                          <Link to='/employee/emp_onboard'>
                            <button>
                                <img src={new_employee_user_icon} alt="" />
                                <p>New Employees</p>   
                            </button>
                          </Link>
                      </div>
                      <div>
                          {
                              empList.length ? empList:<h2 style={{textAlign:'center'}}>No Employee :(</h2>
                          }
                      </div>
                      <div className='emp-list-control'>
                          <div><button><img src={prevIcon} alt="" /> PREV</button></div>
                          <div>
                              <ul>
                                  <li className='active'>1</li>
                                  <li>2</li>
                                  <li>3</li>
                                  <li>4</li>
                                  <li>5</li>
                              </ul>
                          </div>
                          <div><button>NEXT <img src={nextIcon} alt="" /></button></div>
                      </div>
                  </div>
                  <div>
                      <div className='plan-to-hire'><img src={planToHire} alt="" /></div>
                      <div>
                          <h4>Planning to hire anytime soon?</h4>
                          <p>Gopay can help you hire for any positions you want to fill. </p>
                      </div>
                      <div><button>Hire with gopay</button></div>
                      <div className='plan-to-hire-img'>
                          <img src={emp_row_img1} alt="" />
                          <img src={emp_row_img2} alt="" />
                          <img src={plusFive} alt="" className='plusFive'/>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    )
}

export default Employee