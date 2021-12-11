import styled from 'styled-components';

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

const BenefitsShow = ({name,gender}) => {
    return (
        <StlyedBenefits>
            <div className='main-title'>
                <h3>Benefits</h3>
            </div>
            <div className='job-pay-content'>
                <div className='flex'>
                    <p className='title'>Selected HMO</p>
                    <p>Shittu Abdulazeez</p>
                </div>
                <div className='flex'>
                    <p className='title'>Plan Type</p>
                    <p>Montly Plan</p>
                </div>
                <div className='flex'>
                    <p className='title'>Pre existing Condition</p>
                    <p>Before 2022</p>
                </div>
            </div>
        </StlyedBenefits>
    )
}

export default BenefitsShow