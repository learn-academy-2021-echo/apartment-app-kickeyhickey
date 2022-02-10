import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'

export default class ApartmentIndex extends Component {
  render() {
    return (
      <>
      <h2>All Available Apartments</h2>
      {this.props.apartments.map(value =>{
        return <p key={value.user_id}>{value.street}</p>
      })}
      </>
    )
  }
}
