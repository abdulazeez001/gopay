import React from 'react';
import { useEffect } from 'react';
import { disengagedStIcon, staffStIcon,expectedpaIcon, pendingQuIcon, inNextIcon, calendeerIcon } from '../../assets';
import LinePlot from '../../components/Charts/linePlot';
import PiePlot from '../../components/Charts/piePlot';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Tags from '../../components/TopTags/tags';
import { changeActiveNav } from '../../util/helper';

const Overview = (props) =>{
    useEffect(()=>{
        changeActiveNav('.pieplot-details li')
    })
    return(
        <div className="container">
            <SideBar/>
            <div className="content">
              <Header title='Overview'/>
              <div className='tags-container'>
                  <Tags tagTitle='Staff Strength' content='128 Employee' imageLink={staffStIcon}/>
                  <Tags tagTitle='Pending Queries' content='34' imageLink={pendingQuIcon}/>
                  <Tags tagTitle='Disengaged Staff' content='12' imageLink={disengagedStIcon}/>
                  <Tags tagTitle='Payout for month' content='₦5,220,722' imageLink={expectedpaIcon}/>
                  <Tags tagTitle='Next Payroll' content='In 12 days' imageLink={inNextIcon}/>  
              </div>
              <div className="charts-container">
                  <div>
                     <LinePlot/>
                  </div>
                  <div className="pieplot">
                      <div className="pieplot-details">
                          <div>
                          <h4>Employee Spread</h4>
                          </div>
                          <div>
                          <nav>
                              <ul>
                                  <li className='active'>Day</li>
                                  <li>Week</li>
                                  <li>Month</li>
                              </ul>
                          </nav>
                          </div>
                          <div>
                          <img src={calendeerIcon} alt="" />
                          </div>
                      </div>
                      <div className='total'>
                          <p>{'₦5,220'}</p>
                      </div>
                      <PiePlot/>
                  </div>
              </div>
              <div className="table-container">
                    <div>
                        <div className='main-head heading'>
                            <h4>Queries Center</h4>
                            <button>View all</button>
                        </div>
                        <div>
                            <table>
                                <tr className='thead-main'>
                                    <th>Employee Name</th>
                                    <th>Query Type</th>
                                    <th>Date Issued</th>
                                    <th>Status</th>
                                </tr>
                                <tr>
                                    <td>Jenny Wil</td>
                                    <td>Sunt quidem quibusdam</td>
                                    <td>2020-Oct-16 at 14:38pm</td>
                                    <td>Issued</td>
                                </tr>
                                <tr>
                                    <td>Cody Fish</td>
                                    <td>Sunt quidem quibusdam</td>
                                    <td>2020-Oct-16 at 14:38pm</td>
                                    <td>Issued</td>
                                </tr>
                                <tr>
                                    <td>Robert Fo</td>
                                    <td>Sunt quidem quibusdam</td>
                                    <td>2020-Oct-16 at 14:38pm</td>
                                    <td>Issued</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div>
                       <div className='thing-to-do-head heading'>
                           <h4>Things to do</h4>
                           <button>View all</button>
                       </div>
                       <div className='thing-to-do'>
                            <div className='heading'>
                                <p className='date-time-1'>Tuesday, November 17th</p>
                                <p>...</p>
                            </div>
                            <h4>Meeting with a client</h4>
                            <p>Tell how to boost website traffic</p>
                       </div>
                       <div className='thing-to-do'>
                            <div className='heading'>
                                <p className='date-time-2'>Wednesday, November 25th</p>
                                <p>...</p>
                            </div>
                            <h4>New project discussion</h4>
                            <p>Business Gards Does Your Business</p>
                       </div>
                       <div className='thing-to-do'>
                            <div className='heading'>
                                <p className='date-time-3'>Friday, November 29th</p>
                                <p>...</p>
                            </div>
                            <h4>Financial data overview</h4>
                            <p>What Makes Flyers Unrivaled</p>
                       </div>
                   </div>
              </div>
            </div>

        </div>
    )
}

export default Overview