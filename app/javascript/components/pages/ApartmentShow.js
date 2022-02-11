import React, { Component } from 'react'
import { Card, CardTitle, Col, CardText, Button, NavLink } from "reactstrap";


export default class ApartmentShow extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { apartment } = this.props
    return (
      <>
      <h3>show page</h3>

      <Col sm="6">
        <Card body>
        <CardText>{apartment.street} </CardText>
        <CardText>{apartment.city} </CardText>
        <CardText>{apartment.manager} </CardText>
        <CardText>{apartment.email} </CardText>
        <CardText>{apartment.price} </CardText>
        <CardText>Bedrooms: {apartment.bedrooms} </CardText>
        <CardText>Bathrooms: {apartment.bathrooms} </CardText>
        <CardText>{apartment.pets} </CardText>
       </Card>
    </Col>
      </>
    )
  }
}
