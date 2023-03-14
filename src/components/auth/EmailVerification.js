import React, { Component } from 'react'
import {FormGroup,Input,InputGroupAddon,InputGroupText,InputGroup,NavbarBrand} from "reactstrap";

import boot from '../../assets/boot.png'

// import Navbar_ from '../Navbar'
// import Footer from '../Footer'
// import logo from '../assets/logo.png'

const divAuth = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'left',
    height: '220px'
  };
  
const divInner = {
    width: '450px',
    margin: 'auto',
    background: '#fffffffb',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    padding: '40px 55px 45px 55px',
    borderRadius: '15px',
    transition: 'all .3s'
  }

const imageContainer = {
    textAlign: 'center'
} 

class EmailVerification extends Component {
    constructor(props){
        super(props)
        this.state = {
            fields: {},
            errors: {}
        }

        // this.onChange = this.onChange.bind(this)
        // this.onSubmit = this.onSubmit.bind(this)
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }
  
        if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');
  
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
        }  

        //Password
        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "Cannot be empty";
        }
  
        this.setState({errors: errors});
        return formIsValid;
    }
  
    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

    // onChange(e){
    //     this.setState({[e.target.name]: e.target.value})
    // }

 
    render() {
        return (
            <div>
                {/* <Navbar_/> */}
                <header className="masthead text-center text-black">
                    <div className="masthead-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mt-5 mx-auto">
                                    <div style={divAuth}>
                                        <div style={divInner}>
                                        <div className="btn-wrapper text-center">
              <NavbarBrand>
                  <img alt="..." src={boot} />
              </NavbarBrand>

              <div className="text-center text-muted mb-4">
                <large>Revenue Management System</large>
              </div>
              </div>
              <div className="text-center text-muted mb-4">
                <small>Enter Email Address for Verification</small>
              </div>
                                            <form >
                                            <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" ref="email" type="email" onChange={this.handleChange.bind(this, "email")} 
                                                        value={this.state.fields["email"]}/>
                                                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                  </InputGroup>
                </FormGroup>
                
                                                <button type="submit"
                                                    className="btn btn-lg btn-primary btn-block">
                                                       Send Email
                                                </button>
                                            </form>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
  
                </header>
                {/* <Footer/> */}
            </div>
            
        )
    }
}

export default EmailVerification;