import React from 'react'; 
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import { inNextIcon, nextIcon, pendingQuIcon, prevIcon, staffStIcon, table_header_icon } from '../../assets';
import Tags from '../../components/TopTags/tags';


const WalletPart = ({No,type}) =>{
    return(
        <div>
            <p className='number'>{No}</p>
            <p>{type}</p>
            <p>₦ 50.00</p>
            <p>129394992500290491</p>
            <p>8/Nov/2020</p>
        </div>
    )
}
const Wallet = () =>{
    return(
        <div className="container">
            <SideBar/>
            <div className="content">
              <Header title='Wallet'/>
              <div className='wallet-container'>
                      <div className='tags-container'>
                            <Tags tagTitle="Wallet Balance" content="₦ 250.00" imageLink={inNextIcon}/>
                            <Tags tagTitle="Next Payroll RUn Amount" content="₦ 250.00" imageLink={staffStIcon}/>
                            <Tags tagTitle="Available For Withdrawal" content="₦ 250.00" imageLink={pendingQuIcon}/>
                      </div>
                      <div>
                        <div className='wallet-table'>
                            <div>
                                <p><span>SN</span> <span><img src={table_header_icon} alt="" /></span> </p>
                                <p><span>Transaction type</span> <span><img src={table_header_icon} alt="" /></span> </p>
                                <p>Amount</p>
                                <p>Reference No</p>
                                <p>Date</p>
                            </div>
                            <WalletPart No='926' type='Debit'/>
                            <WalletPart No='927' type='Credit'/>
                            <WalletPart No='928' type='Debit'/>
                            <WalletPart No='929' type='Credit'/>
                            <WalletPart No='926' type='Debit'/>
                            <WalletPart No='927' type='Credit'/>
                            <WalletPart No='928' type='Debit'/>
                            <WalletPart No='929' type='Credit'/>
                            <div className='emp-list-control wallet-control'>
                          <div><button><img src={prevIcon} alt="" /> PREV</button></div>
                          <div>
                              <ul>
                                  <li className='active'>1</li>
                                  <li>2</li>
                                  <li>3</li>
                                  <li>4</li>
                                  <li>5</li>
                              </ul>
                          </div>
                          <div><button>NEXT <img src={nextIcon} alt="" /></button></div>
                      </div>
                        </div>        

                      </div>
                      {/* <div className='emp-list-control wallet-control'>
                          <div><button><img src={prevIcon} alt="" /> PREV</button></div>
                          <div>
                              <ul>
                                  <li className='active'>1</li>
                                  <li>2</li>
                                  <li>3</li>
                                  <li>4</li>
                                  <li>5</li>
                              </ul>
                          </div>
                          <div><button>NEXT <img src={nextIcon} alt="" /></button></div>
                      </div> */}
              </div>
            </div>
        </div>
    )
}

export default Wallet