import styled from 'styled-components';

const StyledViewEmpSide = styled.div`
    font-size:.8rem;
    cursor:pointer;
    
    & > div{
        background-color:white;
        border-bottom:1px solid rgb(228, 225, 225);
        padding:1rem;
        display:flex;
        align-items:center;
        gap:1rem;
    }
    & > div:first-child{
        border-radius:.5rem .5rem 0 0 ;
    }
    & > div:last-child{
        border-radius:0 0 .5rem .5rem;
        border-bottom:1px solid white;
    }
    & p{
        margin-top:1px;
        font-size:.7rem;
        color:#8888a7;
    }

    .active, .active p{
        background-color: rgb(208, 236, 245);
        color: darkblue;
      }


`
export default StyledViewEmpSide

