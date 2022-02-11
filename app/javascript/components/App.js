import React, { Component } from 'react'
import Header from './components/Header'
import './App.css'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import mockapartments from './mockApartments'
import ApartmentShow from './pages/ApartmentShow'

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: mockapartments  
    }
  }
  render() {
    console.log(this.state.apartments);
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    const { apartments } = this.state
    return (
      <Router>
          <Header {...this.props}/>    
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/apartmentindex"
                render={(props) => <ApartmentIndex apartments={apartments} /> }
                 />  
              <Route path="/apartmentshow/:id" render={(props) => {
               let id = props.match.params.id
               let apartment = apartments.find(apt => apt.id === +id)
              return <ApartmentShow apartment={apartment} />
                }} />
            </Switch>
      </Router>
      
    )
  }
}
export default App