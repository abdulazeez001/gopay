import { useState } from 'react';
import Header from '../../components/Header';
import EarnsBreakDown from '../../components/Payroll/earnsBreakDown';
import Pay from '../../components/Payroll/pay';
import ReviewAndSubmit from '../../components/Payroll/reviewAndSubmit';
import Success from '../../components/Payroll/success';
import SideBar from '../../components/SideBar';
import { changeActiveNav } from '../../util/helper';


const PayrollStepOne = () =>{
    const [showStep,setShowStep] = useState('1')

    changeActiveNav('.flex>div',setShowStep)
    const changeShowType =(e)=>{
     setShowStep(e.currentTarget.dataset.showtype)
    
    } 
     function showStepMain(){
 
         switch(showStep){
             case '1':
                 return <EarnsBreakDown/>
             case '2':
                 return <ReviewAndSubmit/>
             case '3':
                 return <Pay/>
             case '4':
                 return <Success/>
             default: <EarnsBreakDown/>
         }
     }
    return(
        <div className="container">
            <SideBar/>
            <div className="content">
              <Header title='Run Payroll'/>
              
              <div className='payroll-container'>
                    <div className='flex'>
                        <div className={showStep==='1'?'active':''} data-showtype='1' id='1' onClick={(e)=>{changeShowType(e)}}>
                            <span>1</span>
                            <p>Earnings Breakdown</p>
                        </div>
                        <div className={showStep==='2'?'active':''} data-showtype='2' id='2' onClick={(e)=>{changeShowType(e)}}>
                            <span>2</span>
                            <p>Review & Submit</p>
                        </div>
                        <div className={showStep==='3'?'active':''} data-showtype='3' id='3'onClick={(e)=>{changeShowType(e)}}>
                            <span>3</span>
                            <p>Pay</p>
                        </div>
                        <div className={showStep==='4'?'active':''} data-showtype='4' id='4'  onClick={(e)=>{changeShowType(e)}}>
                            <span>4</span>
                            <p>Successs</p>
                        </div>
                    </div>
                    <div className='payroll-content'>
                        {
                          showStepMain()
                        }
                    </div>
              </div>
              
            </div>
        </div>

      
    )
}

export default PayrollStepOne