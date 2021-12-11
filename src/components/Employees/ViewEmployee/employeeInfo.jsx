import styled from 'styled-components';

const StyledEmployeeInfo = styled.div`
     background-color:white;
     padding:1.5rem;
     border-radius:.5rem;
     display:flex;
     justify-content:space-between;
     align-items:center;

     & > div:first-child{
        display:grid;
        grid-template-columns:1fr 1fr;
        align-items:center;
     }
     & p{
         margin-top:1px;
         font-size:.8rem;
         color:#8888a7;
     }
     & img{
         width:80%;
         border-radius:100%;
     }
     & .active{
        text-align:center;
        padding:.5rem 1rem;
        border-radius:.5rem;
        background-color:rgb(184, 250, 184);
    }
    & .active p{
        color:darkgreen;
    }
    & .deactivate{
        text-align:center;
        padding:.5rem 1rem;
        border-radius:.5rem;
        color:grey;
        background-color:lightgrey;
    }
`

const EmployeeInfo = ({name, position, isActive, image}) =>{
    return (
        <StyledEmployeeInfo>
            <div>
                <img src={image} alt=""/>
                <div>
                    <h4>{name}</h4>
                    <p>{position}</p>
                </div>
            </div>
            <div className={isActive?'active':'deactivate'}>{
                   isActive ?<p>Active Employee</p>:<p>Deactived Employee</p>
                }
            </div>
        </StyledEmployeeInfo>
    )
}

export default EmployeeInfo