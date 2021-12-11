import React from 'react'; 
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import { nextIcon, prevIcon, table_header_icon } from '../../assets';

const Reports = () =>{
    return(
        <div className="container">
            <SideBar/>
            <div className="content">
              <Header title='Reports'/>

              <div className='report-container'>
                      <div className='report-top'>
                          <h2>Payroll Summaries</h2>
                          <p>For more details, hover over the check date and click</p>
                      </div>
                      <div>
                          <table>
                              <tr>
                                  <th className="date">
                                      <p>Date</p>
                                      <img src={table_header_icon} alt="" />
                                  </th>
                                  <th>
                                      Description
                                  </th>
                              </tr>
                              <tr>
                                  <td>8/Nov/2020</td>
                                  <td>August Week 4 2020 Payroll</td>
                              </tr>
                              <tr>
                                  <td>8/Nov/2020</td>
                                  <td>August Week 4 2020 Payroll</td>
                              </tr>
                              <tr>
                                  <td>8/Nov/2020</td>
                                  <td>August Week 4 2020 Payroll</td>
                              </tr>
                              <tr>
                                  <td>8/Nov/2020</td>
                                  <td>August Week 4 2020 Payroll</td>
                              </tr>
                              <tr>
                                  <td>8/Nov/2020</td>
                                  <td>August Week 4 2020 Payroll</td>
                              </tr>
                              <tr>
                                  <td>8/Nov/2020</td>
                                  <td>August Week 4 2020 Payroll</td>
                              </tr>
                              <tr>
                                  <td>8/Nov/2020</td>
                                  <td>August Week 4 2020 Payroll</td>
                              </tr>
                              <tr>
                                  <td>8/Nov/2020</td>
                                  <td>August Week 4 2020 Payroll</td>
                              </tr>
                          </table>

                      </div>
                      <div className='emp-list-control'>
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
        </div>
    )
}

export default Reports
