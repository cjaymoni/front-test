import React, { Component } from 'react'
import {Button,FormGroup,Form,Input,Row,Col} from "reactstrap";
import {getuserdata, addcustomer} from '../api'
import Nav from './Nav'
import Sidebar from '../UserDashboard/Sidebar'
import moment from "moment";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




class CreateCustomer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          email:'',
          customer:[],
          house_number:'',
          name:'',
          contact:'',
          arrears:'',
          date_created:'',
          show:false,
          setShow:false,
        };
      }

      handleClickShow = () => {
        this.setState({show:true});
      };
      handleClose1 = () =>  { 
        this.setState({show:false});
        };
 componentDidMount() {
        getuserdata().then((res)=>{
          this.setState({ username: res.data.username });
        })
        .catch(function (error) {
            console.log(error);
        })
      }
      
      setemail(e){
        this.setState({email:e.target.value})
      }
      setname(e){
        this.setState({name:e.target.value})
      }
      setcontact(e){
        this.setState({contact:e.target.value})
      }
      sethouse_number(e){
        this.setState({house_number:e.target.value})
      }

      setarrears(e){
        this.setState({arrears:e.target.value})
      }

addcustomer=()=>{
  this.state.customer['name'] = this.state.name
  this.state.customer['email'] = this.state.email 
  this.state.customer['contact'] =  this.state.contact
  this.state.customer['house_number'] = this.state.house_number
  this.state.customer['arrears'] = this.state.arrears
  this.state.customer['date_created'] = moment().format("YYYY-MM-DD")


  addcustomer(this.state.customer).then(response =>{
    if(response.status == 200){
      alert('customer has been added')
      this.props.history.push('/customers')

    }
    else{
     alert('customer has been added')
        this.props.history.push('/customers')
      
    
    }
  })
}




    render(){
        return(
            <div class="wrapper ">
            <Sidebar />
            <div class="main-panel">
         <Nav />
         <div class="content">
             <div class="row">
              <div className="col-md-2"></div>
                 <div class="col-md-8">
                <div class="card card-user">
                    <div class="card-header">
                 <h5 className="heading-small text-muted mb-4">Add Customer</h5>
                 </div>
                 <div class="card-body">
                 <Form method="post">
                    <h6 className="heading-small text-muted mb-4">
                     Customer Information
                    </h6>
                 <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                            >
                              Customer Name
                            </label>
                            <Input
                              
                              className="form-control-alternative"
                              onChange={e=>this.setname(e)}
                              placeholder="Customer Name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              // htmlFor="input-email"
                            >
                             Email
                            </label>
                            <Input
                            className="form-control-alternative"
                            onChange={e=>this.setemail(e)}
                              placeholder="Email"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              // htmlFor="input-email"
                            >
                             House Number
                            </label>
                            <Input
                            onChange={e=>this.sethouse_number(e)}
                              className="form-control-alternative"
                              placeholder=" House Number"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              // htmlFor="input-first-name"
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
                      <Col lg="6">
                      <FormGroup>
                            <label
                              className="form-control-label"
                              // htmlFor="input-first-name"
                            >
                              Arrears
                            </label>
                            <Input
                            className="form-control-alternative"
                            onChange={e=>this.setarrears(e)}
                              placeholder="Contact"
                              type="text"
                            />
                          </FormGroup>
                      </Col>
                    </Row>
                    </div>
                <div className="text-center">
                  <Button className="mt-4" color="primary" onClick={this.handleClickShow}>
                    Add Customer
                  </Button>
                </div>          
              </Form>
</div>
</div>
</div>
</div>
</div>
</div>
<Dialog open={this.state.show} onClose={this.handleClose1} aria-labelledby="form-dialog-title">
                
                <DialogTitle id="form-dialog-title">Confirmation</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                  Add Customer  with the following Details
                  </DialogContentText>
                  <FormGroup>
                  <label
                              className="form-control-label"
                            >
                          Customer name
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="category name"
                              type="text"
                              value={this.state.name}

                            />
                               <label
                              className="form-control-label"
                            >
                          Customer email
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="category name"
                              type="text"
                              value={this.state.email}

                            />
                               <label
                              className="form-control-label"
                            >
                          Customer house_number
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="category name"
                              type="text"
                              value={this.state.house_number}

                            />
                               <label
                              className="form-control-label"
                            >
                          Customer contact
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="category name"
                              type="text"
                              value={this.state.contact}

                            />
                               <label
                              className="form-control-label"
                            >
                          Customer arrears
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="category name"
                              type="text"
                              value={this.state.arrears}

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
                  <Button 
                   onClick={() => {
                    this.addcustomer();
                    this.handleClose1();
                  }}color="primary"   
                  >
                  Add
                  </Button>
                </DialogActions>
              </Dialog>
          



</div>








        )
    }
}


export default CreateCustomer