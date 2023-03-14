/*eslint-disable*/
import React, {Component} from "react";
import { RandomPassword } from "./RandomPassword";
// reactstrap components
import {Button,Card,CardHeader,CardBody,FormGroup,NavbarBrand,Form,Input,InputGroupAddon,InputGroupText,InputGroup,Row,Col} from "reactstrap";import Nav from '../AdminDashboard/Nav';
import Sidebar from '../AdminDashboard/Sidebar';
import {adduser}from '../api'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';





export default class Register extends React.Component {

  
    constructor(props) {
      super(props);
      this.state = {
        length: 8,
        newLength: 8,
        pwd: "",
        upperCase: true,
        lowerCase: true,
        numeric: true,
        usertype:'',
        email:'',
        user:[],
        username:'',
        fname:'',
        contact:'',
        show:false,
        setShow:false,
        typingTimeout: 0
      };
    }
    handleClickShow = () => {
      this.setState({show:true});
    };
    handleClose1 = () =>   this.setState({show:false});
    ;
  componentDidMount() {
    this.generatePwd();
  }

  Usertype_Select = (usertype) => {
    this.setState({usertype: usertype})
}

setemail(e){
    this.setState({email:e.target.value})
  }
setusername(e){
    this.setState({username:e.target.value})
  }
setfname(e){
    this.setState({fname:e.target.value})
  }
 setcontact(e){
    this.setState({contact:e.target.value})
  }
 
 
  generatePwd() {
    const { upperCase, lowerCase, numeric,length } = this.state;
    let pwd = new RandomPassword()
      .setLength(length)
      .setLowerCase(lowerCase)
      .setUpperCase(upperCase)
      .setNumberCase(numeric)
      .generate();
    this.setState({ pwd });
  }

  
  adduser=()=>{
    this.state.user['email'] = this.state.email
    this.state.user['password'] = this.state.pwd
    this.state.user['usertype'] = this.state.usertype
    this.state.user['username'] = this.state.username
    this.state.user['fname'] = this.state.fname
    this.state.user['contact']= this.state.contact


    adduser(this.state.user).then((res)=>{
        console.log(` res.data == ${res}`)
        if(res == true){
          alert("your account has been created")
          this.props.history.push('/admin/users')
        }
        else if(res == false){
          alert("Failed")
        }
    })
  }


  render() {
    return (
      <div class="wrapper">
        <Sidebar />
        <div class="main-panel">
        <Nav />
        <div class="content">
        <div class="card card-user">
        <div class="card-header">
                 <h4 className="heading-small text-muted mb-4">Add New User</h4>
                 </div>
                 <div class="card-body">
                  <Form method="post">
                    <h6 className="heading-small text-muted mb-4">
                     User Information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col >
                      <FormGroup>
                     <div className="input-group-alternative mb-3" >
                    <div className="input-group-prepend">

                    <button className="btn btn-outline-secondary dropdown-toggle" style={{backgroundColor:'white'}} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                        <div className="dropdown-menu" style={{backgroundColor:'white'}}>
                        <a className="dropdown-item" onClick={()=>this.Usertype_Select('User')}>User</a>
                        <a className="dropdown-item" onClick={()=>this.Usertype_Select('Admin')} >Admin</a>
                        </div>
                        <input type="text" className="form-control"  aria-label="Text input with dropdown button" value={this.state.usertype} placeholder='select user type' disabled/>

                    </div>
                    </div>
                    </FormGroup>
               
                      </Col>
                      </Row>
                      <Row>
                        <Col >
                          <FormGroup>
                            <label
                              className="form-control-label"
                            >
                              Email
                            </label>
                            <Input 
                              className="form-control-alternative"
                              onChange={e=>this.setemail(e)}
                              placeholder="Email"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col >
                          <FormGroup>
                            <label
                              className="form-control-label"
                            >
                              Username
                            </label>
                            <Input 
                              className="form-control-alternative"
                              onChange={e=>this.setusername(e)}
                              placeholder="Username"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col >
                          <FormGroup>
                            <label
                              className="form-control-label"
                            >
                              Full name
                            </label>
                            <Input 
                              className="form-control-alternative"
                              onChange={e=>this.setfname(e)}
                              placeholder="Full name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col >
                          <FormGroup>
                            <label
                              className="form-control-label"
                            >
                              Contact
                            </label>
                            <Input 
                              className="form-control-alternative"
                              onChange={e=>this.setcontact(e)}
                              placeholder="Contact"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col >
                          <FormGroup>
                            <label
                              className="form-control-label"
                            >
                              Password
                            </label>
                            <Input 
                              className="form-control-alternative"
                              value={this.state.pwd}
                              type="text"
                            />
                          </FormGroup>
                          <Button className="mt-4" color="primary" value="Generate" type="button"   onClick={() => {
                      this.generatePwd();
                    }}>
                    Generate Password
                  </Button>
                        </Col>
                        </Row>
                             
                <div className="text-center">
                  <Button className="mt-4" color="primary" onClick={this.handleClickShow}>
                    Create account
                  </Button>
                </div>          
           
          
           </div>
           </Form>
           </div>
           </div>   
           </div>
           </div>

           <Dialog open={this.state.show} onClose={this.handleClose1} aria-labelledby="form-dialog-title" fullWidth>
                
                <DialogTitle id="form-dialog-title">Confirmation</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                  Add User  with the following Details
                  </DialogContentText>
                  <FormGroup>
                  <label
                              className="form-control-label"
                            >
                          Usertype
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name=" name"
                              type="text"
                              value={this.state.usertype}
                              fullWidth

                            />
                    <label
                              className="form-control-label"
                            >
                           Email
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="email"
                              type="text"
                              value={this.state.email}

                            />
                               <label
                              className="form-control-label"
                            >
                          Fullname
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="fullname"
                              type="text"
                              value={this.state.fname}

                            />
                              <label
                              className="form-control-label"
                            >
                          Username
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="username"
                              type="text"
                              value={this.state.username}

                            />
                              <label
                              className="form-control-label"
                            >
                          Password
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="password"
                              type="text"
                              value={this.state.pwd}

                            />
                  </FormGroup>
                 
                </DialogContent>
                <DialogActions>
                  <Button 
                   onClick={() => {
                    this.handleClose1();
                  }}
                  color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.adduser} color="primary"   
                  >
                  Add
                  </Button>
                </DialogActions>
              </Dialog>






           </div>
  
    );
}
}
