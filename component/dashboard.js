import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App.css';
import { Table } from 'react-bootstrap';

const mapStateToProps =(state) => {
  return {
    getDetails: state.userData
  }
}
class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
          gridData: []
        }
    }

  componentWillMount(){
    this.setState({gridData:this.props.getDetails})
  }

  render() {
    return (
<div style={{display: 'flex', justifyContent: 'center'}}>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Email</th>
      <th>Phone Number</th>
    </tr>
  </thead>
  <tbody>
  {this.state.gridData.user.map(data=>{
      return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>{data.gender}</td>
      <td>{data.email}</td>
      <td>{data.phoneNo}</td>
    </tr>
      )
       })} 
  </tbody>
</Table>
</div>
    );
  }
}

export default connect(mapStateToProps)(Dashboard);
