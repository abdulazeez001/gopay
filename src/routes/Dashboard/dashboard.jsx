import React from 'react';
import {  staffStIcon,pendingQuIcon, inNextIcon } from '../../assets';
import LinePlot from '../../components/Charts/linePlot';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Tags from '../../components/TopTags/tags';

const Dashboard = () =>{
    return(
        <div className="container">
            <SideBar/>
            <div className="content">
              <Header title='Dashboard'/>
              <div className='tags-container'>
                  <Tags tagTitle='Staff Strength' content='128 Employee' imageLink={staffStIcon}/>
                  <Tags tagTitle='Pending Queries' content='34' imageLink={pendingQuIcon}/>
                  <Tags tagTitle='Next Payroll' content='In 12 days' imageLink={inNextIcon}/>  
              </div>
              <div className='intro'>
                  <h4>Hi Abdulazeez,</h4>
                  <p>Everything your business needs to be much more is here</p>
                  <button> Watch how it works?</button>
              </div>
              <div className="charts-container">
                  <div>
                     <LinePlot/>
                  </div>
                  <div className='dashboard-ttd'>
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

export default Dashboard