import React from 'react'; 
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';

const Corehr = () =>{
    return(
        <div className="container">
            <SideBar/>
            <div className="content">
              <Header title='Corehr'/>
            </div>
        </div>
    )
}

export default Corehr