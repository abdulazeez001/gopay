import styled from 'styled-components';

const StlyedProfile = styled.div`
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

const Profile = ({name,gender}) => {
    return (
        <StlyedProfile>
            <div className='main-title'>
                <h3>Profile</h3>
            </div>
            <div className='job-pay-content'>
                <div className='flex'>
                    <p className='title'>Gender</p>
                    <p>{gender}</p>
                </div>
                <div className='flex'>
                    <p className='title'>Birthday</p>
                    <p>2020-Feb-13</p>
                </div>
                <div className='flex'>
                    <p className='title'>Email</p>
                    <p>{name.toLowerCase()}@gmail.com</p>
                </div>
                <div>
                    <div className='flex'>
                        <p className='title'>Phone Number</p>
                        <p>07018991651</p>
                    </div>
                    <div className='flex'>
                        <p className='title'>Alt. Phone Number(Opt)</p>
                        <p>08034319159</p>
                    </div>
                </div>
                <div className='flex'>
                    <p className='title'>Next of kin</p>
                    <p>oluwatobiabdulazeez@gmail.com</p>
                </div>
                <div className='flex'>
                    <p className='title'>Relationship</p>
                    <p>Sister</p>
                </div>
                <div className='flex'>
                    <p className='title'>Next of kin Phone number</p>
                    <p>08034319159</p>
                </div>
            </div>
        </StlyedProfile>
    )
}

export default Profile