import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import mockApartments from '../mockApartments'

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'
import { NavItem } from 'reactstrap'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: mockApartments
    }
  }
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <>
      
      <Router>
          <Header {...this.props}/>    
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/apartment-index" component={ApartmentIndex} />  
            </Switch>
      </Router>
      </>
    )
  }
}
export default App