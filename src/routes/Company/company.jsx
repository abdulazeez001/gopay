import React from 'react'; 
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';


import styled from 'styled-components'
import { editIcon } from '../../assets';

const StlyedBenefits = styled.div`
    border-radius:.5rem;
    margin-top:1rem;
    padding:1rem;
    background-color:white;
    & p{
        font-size:.8rem;
        padding-bottom:1px;
    }
    & .title{
        color:#8888a7;
    }
    & .main-title{
        display:flex;
        justify-content:space-between;
        margin-bottom:1rem;
        padding-bottom:1rem;
        border-bottom:1px solid rgb(228, 225, 225);
        align-items:center;
        button{
            align-items:center;
            background-color:darkblue;
            display:flex;
            color:white;
            padding:.5rem;
            border:1px solid darkblue;  
            border-radius:.4rem;
            gap:.2rem;
            font-size:.8rem;
            font-weight:bold;
        }
    }

    & .job-pay-content{
        width:80%;
        border-radius:.5rem;
        border:1px solid rgb(228, 225, 225);
    }

    & .job-pay-content > div{
        // padding:1rem;
        border-bottom:1px solid rgb(228, 225, 225);
    }
    & .job-pay-content > div:last-child{
        border-bottom:0;
    }

    & .flex{
        padding:1.5rem 1rem;
        display:flex;
        justify-content:space-between;   
    }
    & .align-right{
        text-align:right;
    }

    & .comp{
        margin:1.5rem 0;
        padding:0 1rem;
    }
    & .comp > div{
        margin:.5rem 0;
        display:grid;
        grid-template-columns:repeat(4,1fr);
    }
    & .bg-grey{
        background-color:#f8f9fa;
    }
    & .gold{
        font-size:.7rem;
        color:orange;
    }
`

const Company = () =>{
    return(
        <div className="container">
            <SideBar/>
            <div className="content">
              <Header title='Company'/>
              <StlyedBenefits>
                    <div className='main-title'>
                        <h3>Benefits</h3>
                        <button>
                            <img src={editIcon} alt="" />
                            <p>Edit</p>
                        </button>
                    </div>
                    <div className='job-pay-content'>
                        <div className='flex'>
                            <p className='title'>Company Name</p>
                            <p>Shittu Abdulazeez</p>
                        </div>
                        <div className='flex'>
                            <p className='title'>Company Website</p>
                            <p>www.example.com</p>
                        </div>
                        <div className='flex'>
                            <p className='title'>Tax ID Number:</p>
                            <p>56789</p>
                        </div>
                        <div className='flex'>
                            <p className='title'>Contact Person</p>
                            <p>ABdulazeez Shittu</p>
                        </div>
                        <div className='flex'>
                            <p className='title'>Phone Number</p>
                            <p>08034319159</p>
                        </div>
                        <div className='flex'>
                            <p className='title'>Registration Number</p>
                            <p>123456</p>
                        </div>
                        <div className='flex'>
                            <p className='title'>Country</p>
                            <p>Nigeria</p>
                        </div>
                        <div className='flex'>
                            <p className='title'>State</p>
                            <p>Lagos</p>
                        </div>
                        <div className='flex'>
                            <p className='title'>City</p>
                            <p>Mainland</p>
                        </div>
                        <div className='flex'>
                            <p className='title'>Email</p>
                            <p>Oluwatobiabdulazeez@gmail.com</p>
                        </div>
                        <div className='flex'>
                            <p className='title'>Industry</p>
                            <p>Technology</p>
                        </div>

                    </div>
             </StlyedBenefits>
            </div>
        </div>
    )
}

export default Company