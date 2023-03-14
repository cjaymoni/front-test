/*eslint-disable*/

import React from "react";
import {Button,FormGroup,Form,Input,Row,Col} from "reactstrap";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Nav from './Nav'
import Sidebar from '../UserDashboard/Sidebar'
import Select from 'react-select'
import {createbill} from '../api'
import AsyncSelect from 'react-select/async';

export default class CreateBill extends React.Component {
  constructor(){
    super()
    this.state = {
      bill:[],
      bill_type : '',
      bill_description : '',
      account_year:'',
      owner_name : '',
      house_number : '',
      property_type: '',
      amount_due:'',
      current_rate : '',
      arrears :'',
      area: '',
      zone : '',
      show:false,
      setShow:false,
      options : [
        {value:'Sewer',label:'Sewer'},
        {value:'Utility',label:'Utility'},
      ],
      options1 : [
        {value:'Usage Bill',label:'Usage Bill'},
        {value:'Commisioning Bill',label:'Commisioning Bill'},
        
      ],
      options2: [
        {value:' Residential',label:'Residential'},
        {value:'Commercial',label:'Commercial'},
        
      ]
       
    }
    
  }
  setaccount_year(e){
    this.setState({account_year:e.target.value})
  }
  // setowner_name(e){
  //   this.setState({owner_name:e.target.value})
  // }
  sethouse_number(e){
    this.setState({house_number:e.target.value})
  }
  setproperty_type(e){
    this.setState({property_type:e.target.value})
  }
  setarea(e){
    this.setState({area:e.target.value})
  }
  setzone(e){
    this.setState({zone:e.target.value})
  }
  setarrears(e){
    this.setState({arrears:e.target.value})
  }
  setcurrent_rate(e){
    this.setState({current_rate:e.target.value})
  }
  setamount_due(e){
    this.setState({amount_due:e.target.value})
  }
  loadOptions= async(inputText,callback)=>{
    const response = await fetch(`/allCustomers?name=${inputText}`);
    const json = await response.json();
  
    callback(json.map(i=>({label:i.name,value:i.id})))
  
  }
  onChange = owner_name=>{
    this.setState({
      owner_name:owner_name || []
    })
  }
createbill=()=>{
  this.state.bill['bill_type'] = this.state.bill_type
  this.state.bill['bill_description'] = this.state.bill_description
  this.state.bill['account_year'] = this.state.account_year
  this.state.bill['owner_name'] = this.state.owner_name
  this.state.bill['house_number'] = this.state.house_number
  this.state.bill['property_type'] = this.state.property_type
  this.state.bill['area'] = this.state.area
  this.state.bill['zone'] = this.state.zone
  this.state.bill['current_rate'] = this.state.current_rate
  this.state.bill['arrears'] = this.state.arrears
  this.state.bill['amount_due'] = this.state.amount_due

  createbill(this.state.bill).then(response =>{
    if(response.status ==200){
      alert("Bill has been created")
      this.props.history.push('/bills')
    }
    else{
      alert('failed')
    }
  })
}



  render() {
    const today = new Date();
    return (
        <div class="wrapper">
            <Sidebar />
            <div class="main-panel">
        <Nav />
        <div class="content">
        <div class="card card-user">
        <div class="card-header">
                 <h4 className="heading-small text-muted mb-4">Bill Payment Information</h4>
                 </div>
                 <div class="card-body">
                  <Form method="post">
                    <h6 className="heading-small text-muted mb-4">
                      Bill Information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                            >
                              Bill Type
                            </label>
                            <br></br>
                      <Select 
                      options={this.state.options}
                      onChange={this.state.bill_type}
                      placeholder={'Bill Type'}
                    
                      />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              // htmlFor="input-email"
                            >
                              Bill Description
                            </label>
                            <br></br>
                      <Select 
                      options={this.state.options1}
                      onChange={this.state.bill_description}
                      placeholder={'Bill Description'}
                    
                      />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              // htmlFor="input-email"
                            >
                             Account Year
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder=" Account Year"
                              type="date"
                              onChange={e=>this.setaccount_year(e)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <hr></hr>
                      <h6 className="heading-small text-muted mb-4">
                     Property Details
                    </h6>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              // htmlFor="input-first-name"
                            >
                              Owner Name
                            </label>
                            <AsyncSelect
                        value={this.state.owner_name}
                        onChange={this.onChange}
                        placeholder={'Owner name '} 
                        loadOptions={this.loadOptions}/>
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              // htmlFor="input-last-name"
                            >
                             House Number
                            </label>
                            <Input
                            className="form-control-alternative"
                            onChange={e=>this.sethouse_number(e)}
                              placeholder=" House Number"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <div className="pl-lg-4">
                    <Row>
                        <Col lg="6">
                        <FormGroup>
                            <label
                              className="form-control-label"
                              // htmlFor="input-last-name"
                            >
                             Property Type
                            </label>
                            <br></br>
                      <Select 
                      options={this.state.options2}
                      onChange={this.state.property_type}
                      placeholder={'Property Type'}
                    
                      />
                          </FormGroup>
                        </Col>
                        </Row>
                       <hr></hr>
                      <h6 className="heading-small text-muted mb-4">
                     Location
                    </h6>
                    <Row>
                        <Col lg="6">
                          <FormGroup>
                          <label
                              className="form-control-label"
                              // htmlFor="input-last-name"
                            >
                             Area
                            </label>
                            <Input
                            className="form-control-alternative"
                            onChange={e=>this.setarea(e)}
                              placeholder="Area"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                          <label
                              className="form-control-label"
                              // htmlFor="input-last-name"
                            >
                            Zone
                            </label>
                            <Input
                            className="form-control-alternative"
                            onChange={e=>this.setzone(e)}
                              placeholder="Zone"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>


                      <hr></hr>
                      <h6 className="heading-small text-muted mb-4">
                   Financial Details
                    </h6>
                    <Row>
                        <Col lg="6">
                          <FormGroup>
                          <label
                              className="form-control-label"
                              // htmlFor="input-last-name"
                            >
                             Current Rate
                            </label>
                            <Input
                            className="form-control-alternative"
                            onChange={e=>this.setcurrent_rate(e)}
                              placeholder="Current Rate"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                          <label
                              className="form-control-label"
                              // htmlFor="input-last-name"
                            >
                          Arrears
                            </label>
                            <Input
                            className="form-control-alternative"
                            onChange={e=>this.setarrears(e)}
                              placeholder="Arrears"
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
                              // htmlFor="input-last-name"
                            >
                          Amount Due
                            </label>
                            <Input
                            className="form-control-alternative"
                            onChange={e=>this.setamount_due(e)}
                              placeholder="Amount Due"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                    </Row>
                    
                   </div>
                    
                    
                    <div className="pl-lg-4"> 
                    
                       
                     
                       

                       
                        
                      
                      <Col className="text-right" xs="6l">
                      
                      <Button color="primary" type="button" onClick={this.handleClickShow} size="md">
                        Save 
                      </Button>
                    </Col>
                  
                    </div>
                  
                  </Form>
               </div>


               <Dialog open={this.state.show} onClose={this.handleClose1} aria-labelledby="form-dialog-title" fullWidth>
                
                <DialogTitle id="form-dialog-title">Confirmation</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                  Add Bill with the following Details
                  </DialogContentText>
                  <FormGroup>
                  <label
                              className="form-control-label"
                            >
                          Bill Type
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name=" name"
                              type="text"
                              value={this.state.bill_type}
                              fullWidth

                            />
                    <label
                              className="form-control-label"
                            >
                           Bill Description
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="email"
                              type="text"
                              value={this.state.bill_description}

                            />
                               <label
                              className="form-control-label"
                            >
                            Account Year
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="center_code"
                              type="text"
                              value={this.state.account_year}

                            />
                              <label
                              className="form-control-label"
                            >
                           Owner Name
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="location"
                              type="text"
                              value={this.state.owner_name}

                            />
                              <label
                              className="form-control-label"
                            >
                          House Number
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="sub location"
                              type="text"
                              value={this.state.house_number}

                            />
                             <label
                              className="form-control-label"
                            >
                           Property Type
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="category"
                              type="text"
                              value={this.state.property_type}

                            />
                             <label
                              className="form-control-label"
                            >
                         Area
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="department"
                              type="text"
                              value={this.state.area}

                            />
                             <label
                              className="form-control-label"
                            >
                         Zone
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="description"
                              type="text"
                              value={this.state.zone}

                            />
                             <label
                              className="form-control-label"
                            >
                        Current Rate
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="current date"
                              type="text"
                              value={this.state.current_rate}

                            />
                             <label
                              className="form-control-label"
                            >
                         Arrears
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="purchase date"
                              type="text"
                              value={this.state.arrears}

                            />
                             <label
                              className="form-control-label"
                            >
                         Amount Due
                            </label>
                            <Input
                            disabled="true"
                              className="form-control-alternative"
                              name="warranty date"
                              type="text"
                              value={this.state.amount_due}

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
                  <Button onClick={this.addbill} color="primary"   
                  >
                  Add
                  </Button>
                </DialogActions>
              </Dialog>




        </div>
        </div>
        </div>
      </div>
    );
  }
}