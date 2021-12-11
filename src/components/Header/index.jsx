
import { userImageIcon } from "../../assets";
import styled from 'styled-components'

const StyledHeader = styled.div`
   height:3rem;
   display:grid;
   align-items:center;
   grid-template-columns:1fr 1fr;
   margin-bottom:1rem;
   & > div:nth-child(2){
       display:grid;
       align-items:center;
       grid-template-columns:1fr 1fr;
       justify-self:end;
   }

   & div:nth-child(2) > div:nth-child(2){
    display:flex;
    align-items:center;
    justify-self:end;

   }

   & img{
       margin-left:1rem;
   }
   & span {
       color:orange;
   }
     

`

const Header = ({title}) =>{
    return(
        <StyledHeader>
            <div>
               <h2>{title}</h2>
            </div>
            <div>
                <div>
                    <p>Wallet Balance: <span>₦250.00</span></p>
                </div>
                <div>
                    <p>Abdulazeez</p>
                    <img src={userImageIcon} alt="" />
                </div>
            </div>
        </StyledHeader>
    )
}

export default Header
