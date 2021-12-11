import styled from 'styled-components';

const StlyedJobAndPay = styled.div`
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
        margin-bottom:1rem;
        padding-bottom:1rem;
        border-bottom:1px solid rgb(228, 225, 225);
    }

    & .job-pay-content{
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
        padding:1rem;
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

const JobAndPay = ({id,name,position}) => {
    return (
        <StlyedJobAndPay>
            <div className='main-title'>
                <h3>Job and Pay</h3>
            </div>
            <div className='job-pay-content'>
                <div className='flex'>
                    <p className='title'>Staff ID</p>
                    <p>{`TGI00${id}`}</p>
                </div>
                <div className='flex'>
                    <p className='title'>Start Date</p>
                    <p>2020-Feb-13</p>
                </div>
                <div className='bg-grey'>
                    <div className='flex'>
                        <p className='title'>
                            License keys
                        </p>
                        <div className='align-right'>
                            <p>₦100,354</p>
                            <p className='gold'>View Less Salary Breakdown</p>
                        </div>
                    </div>
                    <div className='comp'>
                        <p>Compensations</p>
                        <div>
                            <div>
                                <p className='title'>Basic</p>
                                <p>₦172,000.00</p>
                            </div>
                            <div>
                                <p className='title'>Housing</p>
                                <p>₦172,000.00</p>
                            </div>
                            <div>
                                <p className='title'>Transportation</p>
                                <p>₦172,000.00</p>
                            </div>
                            <div>
                                <p className='title'>Reimbursement</p>
                                <p>₦172,000.00</p>  
                            </div>
                        </div>
                    </div>
                    <div className='comp'>
                        <p>Deductibles</p>
                        <div>
                            <div>
                                <p className='title'>Basic</p>
                                <p>₦172,000.00</p>
                            </div>
                            <div>
                                <p className='title'>Housing</p>
                                <p>₦172,000.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex'>
                        <p className='title'>Bank Name</p>
                        <p>Access Bank</p>
                    </div>
                    <div className='flex'>
                        <p className='title'>Bank Account No.</p>
                        <p>1234567890</p>
                    </div>
                    <div className='flex'>
                        <p className='title'>Bank Account Name</p>
                        <p>{name}</p>
                    </div>
                </div>
                <div className='flex'>
                    <p className='title'>Job Title</p>
                    <p>{position}</p>
                </div>
            </div>
        </StlyedJobAndPay>
    )
}

export default JobAndPay