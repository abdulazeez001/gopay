import styled from 'styled-components';
import {carret_down, funnelIcon, history_Icon, img1, img2, img3, img4, img5, img6, mark, searchIcon } from '../../assets';


const StlyedBenefits = styled.div`
.active{
    background-color:rgb(208,236,245);
}
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
   & .sort {
       margin-left:2rem;
       display:flex;
   }
   & select{
       background-color:white;
       border:0;
   }
   & .control{
       display:flex;
   }

   & .control input{
       padding:.5rem 0rem .5rem 2rem;
       background-color:rgb(240, 240, 240);
       border:1px solid rgb(240, 240, 240);
       border-radius:.5rem;

   }
   & .flex-div{
       display:flex;
       align-items:center;
       margin-right:.5rem;
       font-weight:500;
   }
   & .flex-div:last-child{
       margin-left:2rem;
       gap:1rem;
   }
   & .funnel{
    margin-right:.5rem;
   }
   & .bold{
       margin-right:.3rem;
       color:black;
   }
   & .gross{
       color:green;
   }
   & .due{
    color:orange;
   }  
   & .grid-container{
       display:grid;
       gap:1rem;
       grid-template-columns:1.2fr 2fr;
   }
   & .tags{
       padding-right:.6rem;
       margin-top:1rem;
       height:70vh;
       overflow:scroll;
   }
   & .compensations{
       margin-top:1.5rem;
       padding:2rem;
       background-color:white;
       border:1px solid lightgrey;
       border-radius:1rem;
   }
   & .compensations > div{
       margin-bottom:1rem;

   }
   & .comp:first-child > div{
       display:grid;
       grid-template-columns:1fr 1fr;
       column-gap:5rem;
       row-gap:1rem
   }
   & .comp:last-child > div{
    width:calc(50% - 2.5rem);
}
   & .comp p{
       color:black;
   }
   & .comp .title{
    color:#8888a7;
   }
   & .comp p:nth-child(2){
       font-weight:500;
       padding-bottom:.6rem;
       border-bottom: 1px solid lightgrey;
       padding-left:1rem;
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
const StyledTags = styled.div`
 background-color:var(--mainClr);
 padding:.8rem;
 margin:.6rem 0;
 display:flex;
 gap:1rem;
 border-radius:1rem;
 padding-left:1.5rem;
 border:1px solid lightgrey;
 cursor:pointer;

 & .sep{
     display:flex;
     gap:3rem;
 }

`
const Tags = ({img,name,gross,due,isActive}) =>{
    return(
        <StyledTags className={isActive ?"active":''}>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4>{name}</h4>
                <div className='sep'>
                    <p>Gross <span className='gross'>{gross}</span></p>
                    <p>Due <span className='due'>{due}</span></p>
                </div>
            </div>
        </StyledTags>
    )
}
const EarnsBreakDown = ({name,gender}) => {

    const saveContinue = () =>{
       document.getElementById('1').children[0].innerHTML= `<img src=${mark} alt="" />`
       document.getElementById('1').children[0].style["background-color"] = "darkblue"
       document.getElementById('1').children[0].style["color"] = "white"
       document.getElementById('2').click()
    }
    return (
        <StlyedBenefits>
           <div>
               <img src={history_Icon} alt="" />
               <div>
                   <h4>Employee Earning's Breakdown</h4>
                   <p>Update your employee's compensations, reimbursements, and additional earnings below. your employee will be paid on
                       your chosen payment date. 
                   </p>
                   <p>If you have a cancel a payroll before that day, kindly reach out to us on contact@joking.com </p>
               </div>
           </div>
           <div className='control'>
                <div className='input-form'>
                    <img src={searchIcon} alt="" />
                    <input type='text' placeholder='Search' />
                </div>
                <div className='sort'>
                    <div className='flex-div'>
                        <img src={funnelIcon} alt="" className='funnel' />
                        <p>SORT:</p>
                    </div>
                    <div className='flex-div'>
                        <p className='bold'>A-Z</p>
                        <img src={carret_down} alt="" />
                    </div>
                    <div className='flex-div'>
                        <p>ACTION</p>
                        <img src={carret_down} alt="" />
                    </div>
                </div>
           </div>
           <div>
               <div className='grid-container'>
                    <div className='tags'>
                        <Tags img={img1} name='Micheala EastWood' gross='₦145,000.00' due='₦35,000.00' isActive={true}/>
                        <Tags img={img2} name='Abdulazeez Shittu' gross='₦145,000.00' due='₦35,000.00' isActive={false}/>
                        <Tags img={img3} name='Shittu Bobo' gross='₦145,000.00' due='₦35,000.00' isActive={false}/>
                        <Tags img={img4} name='Babanla Dev' gross='₦145,000.00' due='₦35,000.00' isActive={false}/>
                        <Tags img={img5} name='Chicken Flavour' gross='₦145,000.00' due='₦35,000.00' isActive={false}/>
                        <Tags img={img6} name='Human Right' gross='₦145,000.00' due='₦35,000.00' isActive={false}/>
                    </div>
                    <div className='compensations'>
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
                                    <p className='title'>Tax</p>
                                    <p>₦50,000.00</p>
                                </div>
                                <div>
                                    <p className='title'>Pension</p>
                                    <p>₦50,000.00</p>
                                </div>
                            </div>
                        </div>
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

export default EarnsBreakDown