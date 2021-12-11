import React from 'react'; 
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import { benefitIcon } from '../../assets';
import styled from 'styled-components'


const StyledTag = styled.div`
    border:1px solid lightgray;
    border-radius:.5rem;
    padding:1.5rem 4rem 3rem 1rem;
    margin-right:1rem;
    h3{
      padding-bottom:.5rem;
    }
    p{
        color:orange;
        background-color:rgb(248, 238, 236);
        width:fit-content;
        padding:.7rem;
        border-radius:.5rem;
    }
`

const Tag = ({title, price}) =>{
    return (
        <StyledTag>
            <h3>{title}</h3>
            <p>Price: ₦{price}</p>
        </StyledTag>
    )
}
const Benefits = () =>{
    return(
        <div className="container">
            <SideBar/>
            <div className="content">
              <Header title='Benefits'/>
              <div className='benefit-container'>
                  <div className='part-one'>
                      <div className='hmo'>
                         <div>
                            <h2>
                                HMO Benefits
                            </h2>
                            <p>
                                Here, you will find a list of all the HMO benefits your company is currently offering employees.
                            </p>
                         </div>
                         <button>
                             <img src={benefitIcon} alt="" />
                             <p>Create New HMO</p>
                         </button>
                      </div>
                      <div className='tags-container'>
                         <Tag title="Rovendana Health Plan" price="5,000"/>
                         <Tag title="Broadwing, Inc." price="2,500"/>
                         <Tag title="AutoZone, Inc," price="5,000"/>
                         <Tag title="Dropbox Plan" price="2,500"/>
                      </div>
                  </div>


                <div className='part-two'>
                    <div className='hmo'>
                            <div>
                                <h2>
                                    Other Benefits
                                </h2>
                                <p>
                                    Here, you will find a list of all the benefits your company is paying employees.
                                </p>
                            </div>
                            <button>
                                <img src={benefitIcon} alt="" />
                                <p>Add New Benefits</p>
                            </button>
                        </div>
                        <div className='tags-container'>
                            <Tag title="Bed Bath & Beyond, Inc" price="5,000"/>
                            <Tag title="Big Lots, Inc." price="2,500"/>
                            <Tag title="BellSouth Corporation" price="5,000"/>

                    </div>
                </div>
              </div>
            </div>

        </div>
    )
}

export default Benefits