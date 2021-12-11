import {payrollImg } from '../../assets';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import { Link } from 'react-router-dom';

const Payroll = () =>{
    return(
        <div className="container">
            <SideBar/>
            <div className="content">
              <Header title='Run Payroll'/>
              <div className='onboard'>
                  <div>
                      <img src={payrollImg} alt="" />
                  </div>
                  <div>
                      <h3>It's paytime!</h3>
                  </div>
                  <div>
                      <p>Select Month</p>
                      <input type="date" />
                      <p>Your payroll will run on your chosen payment date</p>
                      <h5>Chosen date will be here</h5>
                  </div>
                  <div>
                      <Link to='/payroll/pay_step1'>
                        <button className='dark-btn'>Run Payroll</button>
                      </Link>
                      <h5>Huh, I want to <span>upload a CSV </span>instead.</h5>
                  </div>
              </div>  
            </div>
        </div>

      
    )
}

export default Payroll