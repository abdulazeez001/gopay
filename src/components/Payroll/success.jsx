import styled from 'styled-components';
import { mark, paytabIcon } from '../../assets';

const StlyedBenefits = styled.div`
width:50%;
margin:10% auto;
.image{
    text-align:center;
}
h2{
    margin-top:3rem;
    margin-bottom:1rem;
}
& p{
    font-size:.8rem;
    color:grey;
    margin:.4rem 0;
}
& .top{
    color:black;
    font-weight:550;
}
.text-content{
    text-align:center;
    margin-bottom:1rem;
}
.summary{
    display:flex;
    border:1px solid lightgrey;
    justify-content:space-between;
    border-radius:.5rem;
    padding:1.5rem;
   
}
.summary > div{
    position:relative;
}
.summary > div:nth-child(2){
    padding-left:2rem;
    padding-right:1.5rem;
}
.summary > div:nth-child(2)::before,
.summary > div:nth-child(2)::after{
    
    position:absolute;
    content:' '; 
    height:100%;
    width:1px;
    background-color:lightgrey;
}

.summary > div:nth-child(2)::after{
    right:0;
    top:0;
}
.summary > div:nth-child(2)::before{
    left:0;
    top:0;
}

& .buttons{
    padding:3rem 0;  
    display:flex;
    justify-content:space-evenly;
}
& .buttons > button{
    padding:1rem 3rem;
    border:0;
    border-radius:.5rem;
}
.first-btn{
    color:#2B3A90;
}
.second-btn{
    color:white;
    background-color:darkblue;
}
`

const Success = ({name,gender}) => {
    const saveContinue = () =>{
        document.getElementById('3').children[0].innerHTML= `<img src=${mark} alt="" />`
        document.getElementById('3').children[0].style["background-color"] = "darkblue"
        document.getElementById('3').children[0].style["color"] = "white"
        document.getElementById('4').click()
     }
    return (
        <StlyedBenefits>
            <div className='image'>
                 <img src={paytabIcon} alt="" />
            </div>
            <div className='text-content'>
                 <h2>Success</h2>
                 <p>
                     Time to kick back. Rovendena will debit <span className='top'>₦5,101,550.00</span> from your company's account on <span className='top'>November 25,
                         2020</span>. Make sure you these funds available. 
                 </p>
            </div>
        </StlyedBenefits>
    )
}

export default Success