import styled from 'styled-components';
import { history_Icon, mark, Msg, nextIcon, prevIcon, searchIcon } from '../../assets';

const StlyedBenefits = styled.div`

   & > div:first-child{
    margin:1rem 0;
    display:flex;
    align-items: flex-start;
    gap:1rem;
   }
   & p{
       font-size:.8rem;
       color:grey;
       margin:.4rem 0;
   }
   & .orange{
    margin-top:.8rem;
    color:orange;
   }
   & .other-contents{
       display:grid;
       grid-template-columns:1.5fr 1fr;   
       gap:2rem;
   }
   & .other-contents > div:first-child,
   & .other-contents > div:last-child{
        border:1px solid lightgray;
        border-radius:1rem;
   }
   & .other-contents > div:last-child{
       padding:1rem;
   }
   & .other-contents > div:first-child > div{
       padding:1rem;
   }
   th{
       color:gray;
   }
   td:last-child{
    color:unset;
    background-color:unset;
    border:0;
    border-radius:0;
}
   tr:nth-child(2n+1){
       background-color:#f8f9fa;
   }
   & .other-flex{
       display:flex;
       justify-content:space-between;
       align-items:center;
   }
   & .other-flex input{
       padding:.6rem 1.5rem;
       background-color:rgb(240, 240, 240);
       border:1px solid rgb(240, 240, 240);
       border-radius:.5rem;    
   }

   & .review-control{
       display:flex;
       justify-content:space-between;
       align-items:center;
   }

   & .review-control li{
       display:inline-block;
       margin-left:.5rem;  
   }
   & .review-control img{
       background-color:lightgray;
       padding:.8rem 1rem;
       margin:0 .5rem;
       border-radius:.5rem;
   }
   & .active {
       background-color:darkblue;
       color:white;
       padding:.3rem .6rem;
       border-radius:.3rem;
   }

   & .prev,
   .next{
       color:gray;
       display:flex;
       align-items:center;
   }
   & .total-amount{
       height:fit-content;
   }
   & .total-amount > div{
       border-bottom:1px solid lightgrey;
       padding:1rem 0 .2rem 0;
       display:flex;
       align-items:center;
       justify-content:space-between;
   }
   & .total-amount > div:last-child{
       border-bottom:0;
   }
   & .total-amount p{
       color:black;
       font-weight:550;
   }
   & .total-amount h4{
       color:darkblue;
   }
   & .total-amount > div > div{
    display:flex;
    align-items:center;
    gap:1rem;
   }
   & .buttons{
    padding:3rem 0;  
    display:flex;
    justify-content:space-between;
}
& .buttons > button{
    padding:1rem;
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


const ReviewAndSubmit = ({name,gender}) => {
    const saveContinue = () =>{
        document.getElementById('2').children[0].innerHTML= `<img src=${mark} alt="" />`
        document.getElementById('2').children[0].style["background-color"] = "darkblue"
        document.getElementById('2').children[0].style["color"] = "white"
        document.getElementById('3').click()
     }
    return (
        <StlyedBenefits>
            <div>
               <img src={history_Icon} alt="" />
               <div>
                   <h4>A Quick Preview Before You Submit</h4>
                   <p>
                       Please spend a brief moment reviewing these numbers before you submit payroll. As a reminder,
                       Your employees will be paid on your chosen payment date. 
                   </p>
                   <p className='orange'>Payroll transaction charge = 2% of total amount payable (capped at ₦5000) 
                       + (Total number of employees x ₦100).
                   </p>
               </div>
           </div>
           <div className='other-contents'>
               <div>
                   <div className='other-flex'>
                       <h4>What Your Employee Take Home ? </h4>
                       <div className='input-form'>
                        <img src={searchIcon} alt="" />
                        <input type='text' placeholder='Search' />
                       </div>
                   </div>
                   <table>
                       <tr>
                           <th>Employee</th>
                           <th>Gross</th>
                           <th>Net Pay</th>
                       </tr>
                       <tr>
                           <td>Beverly Blaze</td>
                           <td>₦162,000</td>
                           <td>₦72,000</td>
                       </tr>
                       <tr>
                           <td>Victor Olomo</td>
                           <td>₦182,000</td>
                           <td>₦10,000</td>
                       </tr>
                       <tr>
                           <td>Hugo Strain</td>
                           <td>₦172,000</td>
                           <td>₦162,000</td>
                       </tr>
                       <tr>
                           <td>Zina Bosque</td>
                           <td>₦142,000</td>
                           <td>₦12,000</td>
                       </tr>
                       <tr>
                           <td>Timika Flick</td>
                           <td>₦16,000</td>
                           <td>₦62,000</td>
                       </tr>
                       <tr>
                           <td>Darrell Owings</td>
                           <td>₦160,000</td>
                           <td>₦102,000</td>
                       </tr>
                       <tr>
                           <td>Dayle Watrous</td>
                           <td>₦212,000</td>
                           <td>₦132,000</td>
                       </tr>
                       <tr>
                           <td>Normand Bellinger</td>
                           <td>₦163,000</td>
                           <td>₦162,000</td>
                       </tr>
                       <tr>
                           <td>Shittu Abdulazeez</td>
                           <td>₦962,000</td>
                           <td>₦902,000</td>
                       </tr>
                       <tr>
                           <td>Oluwatobi Oladapo</td>
                           <td>₦142,000</td>
                           <td>₦132,000</td>
                       </tr>
                   </table>
                   <div className='review-control'>
                          <div className='prev'><img src={prevIcon} alt="" /> Prev</div>
                          <div>
                              <ul>
                                  <li className='active'>1</li>
                                  <li>2</li>
                                  <li>3</li>
                                  <li>4</li>
                                  <li>5</li>
                              </ul>
                          </div>
                          <div className='next'>Next <img src={nextIcon} alt="" /></div>
                    </div>
               </div>
               <div className='total-amount'>
                   <div>
                       <div>
                           <p>Total Gross</p>
                           <img src={Msg} alt="" />
                       </div>
                       <p>₦5,101,550.00</p>
                   </div>
                   <div>
                       <div>
                           <p>Total Netpay</p>
                           <img src={Msg} alt="" />
                       </div>
                       <p>₦5,101,550.00</p>
                   </div>
                   <div>
                       <div>
                           <p>Transaction Cost</p>
                           <img src={Msg} alt="" />
                       </div>
                       <p>₦15,550.00</p>
                   </div>
                   <div>
                       <h4>Total</h4>
                       <p>₦5,101,550.00</p>
                   </div>
               </div>
           </div>
           <div className='buttons'>
               <button className='first-btn'>
                   Cancel
               </button>
               <button className='second-btn' onClick={saveContinue}>
                   Save & Continue
               </button>
           </div>
        </StlyedBenefits>
    )
}

export default ReviewAndSubmit