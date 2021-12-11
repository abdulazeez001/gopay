import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
const StyledDetails = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    background-color:rgb(250, 249, 249);
    margin:.5rem 0;
    padding:.5rem;
    border:1px solid lightgrey;
    border-radius:.5rem;
    cursor:pointer;
    &:hover{
        transform:scale(1.005);
        box-shadow:0 2px 5px lightgrey,
                   0 -2px 5px lightgrey ;
    }
    
    & > div{
        align-items:center;
    }

    & > div:first-child{
        display:flex;
        gap:.5rem;
    }

    & > div:last-child{
        display:grid;
        grid-template-columns:1fr 1fr;
        justify-self:end;
        gap:2rem;
    }

    & .position{
        text-align:left;
       color:gray
    }

    & .active{
        text-align:center;
        padding:.2rem 1rem;
        border-radius:.5rem;
        color:green;
        background-color:rgb(184, 250, 184);
    }
    & .deactivate{
        text-align:center;
        padding:.2rem .5rem;
        border-radius:.5rem;
        color:grey;
        background-color:lightgrey;
    }


`

const EmployeeDetail = ({id,name,position,image,isActive}) =>{
    const history = useNavigate()
    return(
            <StyledDetails data-id={id} onClick={(e)=>{history(`/employee/${e.currentTarget.dataset.id}`)}}>
            <div>
                <img src={image} alt="" />
                <p>{name}</p>
            </div>
            <div>
                <div className='position'>
                    <p>{position}</p>
                </div>
                <div className={isActive ?'active':'deactivate'}>
                    <p>
                    {isActive ?'Active':'Deactivate'}
                    </p>
                </div>
            </div>
        </StyledDetails>
    )
}

export default EmployeeDetail