import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom'

export default class ApartmentIndex extends Component {
  render() {
    const { apartments } = this.props
    return (
      <main>
      <h2>All Available Apartments</h2>
      <article className='cards'>
      {apartments.map(apartment=>{
        return(
           <section key={apartment.id} className='card'>
             <div className='address'>
             {apartment.street}
             </div>
             <div className='address'>
             {apartment.city}, {apartment.state}
             </div>
             <br />
             <NavLink to={`/apartmentshow/${apartment.id}`}>
             <button>
               More Info
             </button>
           </NavLink>
         </section>
       )
      })}
     </article>
     </main>
    )
  }
}
