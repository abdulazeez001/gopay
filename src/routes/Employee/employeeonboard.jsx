
import { emp_onboard } from '../../assets';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import { Link } from 'react-router-dom';

const EmployeeOnBoard = () =>{
    return(
        <div className="container">
            <SideBar/>
            <div className="content">
              <Header title='Employee'/>
              <div className='onboard'>
                  <div>
                      <img src={emp_onboard} alt="" />
                  </div>
                  <div>
                      <h3>Let's Bring The Employee Onboard</h3>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                          Aspernatur ducimus alias eos aperiam sed? Laboriosam!
                      </p>
                  </div>
                  <div>
                      <Link to='/employee/emp_new'>
                        <button className='dark-btn'>Start Onboarding</button>
                      </Link>
                  </div>
              </div>  
            </div>
        </div>

      
    )
}

export default EmployeeOnBoard