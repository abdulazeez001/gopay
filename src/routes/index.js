import { Component } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import routes from "./base";


class RoutesWrap extends Component {


  componentDidMount(){
    this.setRoutes()
  }

  state = {
       publicRoute:null
  }

  setRoutes = () =>{
    const publicRoute = routes.public.map(this.wrapper)
    this.setState({
      publicRoute
    })
  }

  wrapper = (route) =>{
    return(
    <Route
    path={route.path}
    key={route.path}
    element={<route.component />}
    exact={route.exact}
    
    />)
  }

  render(){
    const {publicRoute} = this.state
    return(
      <Router>
      <Routes>
          {
            publicRoute
          }   
      </Routes>
      </Router>
    )
  }



}

export default RoutesWrap