import React from 'react'; 
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';

const Settings = () =>{
    return(
        <div className="container">
            <SideBar/>
            <div className="content">
              <Header title='Settings'/>
            </div>
        </div>
    )
}

export default Settings