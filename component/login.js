import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import '../App.css';
import {emailFieldValidation , passwordValidation} from './validation'

const mapStateToProps =(state) => {
  return {
    getLoginCredentials: state.loginCredentials
  }
}

class Login extends Component {
  
  static propTypes = {
    history: PropTypes.object.isRequired
  }
  constructor(props){
    super(props)

    this.state = {
      userId : '',
      password : '',
      emailValid:false,
      passwordValid:false,
      isPasswordValid:false,
      isEmailValid:false,
      submitClicked:false
    }

    this.submit = this.submit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    const {getLoginCredentials} = this.props

    this.setState({
      userId:getLoginCredentials.username,
      password:getLoginCredentials.password
    })
  }

  submit(e) {
    e.preventDefault();
    const {history } = this.props
    const {emailValid , passwordValid } = this.state
    this.setState({submitClicked:true})
    if(emailValid && passwordValid)
    history.push('/dashboard')
  }

  handleChange(event) {
  this.setState({ 
    submitClicked:false  
  })

  if (event.target.name === 'username') {
    const isEmailValid = emailFieldValidation(event.target.value.trim())
        this.setState({ isEmailValid: isEmailValid })
        if(event.target.value === this.state.userId)
          this.setState({ emailValid: true })
          else
          this.setState({ emailValid: false })
  }

  if(event.target.name === 'password') {
      const valid = passwordValidation(event.target.value.trim())
      this.setState({ isPasswordValid: valid })
      if(event.target.value === this.state.password)
      this.setState({ passwordValid: true })
      else
      this.setState({ passwordValid: false })

    }
  }

  render() {
    const {isEmailValid,isPasswordValid,passwordValid,emailValid , submitClicked} =this.state
    return (
      <div className="wrapper">
      <form className="form-signin"> 
        <h2 className="form-signin-heading">Please login</h2>
        <div className="input-field">
        Email Address
        <input type="text" 
        className="form-control" 
        name="username" 
        placeholder="email"
        required
        onChange={this.handleChange} />
        <div style={{marginBottom:'30px',color:'red',fontSize:'12px'}}>
        {submitClicked && !isEmailValid ? 'Invalid Email' : submitClicked && !emailValid && 'Email not Exists'}
        </div>
        
        Password
        <input 
        type="password" 
        className="form-control" 
        name="password" 
        placeholder="Password"
        required
        onChange={this.handleChange} /> 
          <div style={{marginBottom:'30px',color:'red',fontSize:'12px'}}>
        {submitClicked && !isPasswordValid ? 'Invalid Password' : submitClicked && !passwordValid && 'Wrong Password'}
        </div>  
        </div>   
       <div className="submitBtn"> <button className="btn btn-lg btn-primary btn-block" 
       onClick={this.submit}>Login</button>   </div>
      </form>
    </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Login));
