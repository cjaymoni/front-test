/*eslint-disable*/

import React from "react";
import {Button,Card, CardHeader,CardBody,FormGroup,Form,Input,Container,Row,Col} from "reactstrap";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Nav from './Nav'
import Sidebar from './Sidebar'
export default class AdCreateBill extends React.Component {
  constructor(){
    super()
    this.state = {
      asset:[],
      asset_name : '',
      serial_number : '',
      center_code:'',
      location : '',
      sub_location : '',
      category: '',
      department:'',
      description : '',
      purchase_date :'',
      current_date: '',
      warranty_date : '',
      service_date : '',
      depreciation_rate: '',
      assigned_to:'',
      categories:[],
      show:false,
      setShow:false,
      departments:[]
       
    }
    
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
                            <Input
                              
                              className="form-control-alternative"
                              onChange={e=>this.setasset_name(e)}
                              placeholder="Bill Type"
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
                              Bill Description
                            </label>
                            <Input
                            className="form-control-alternative"
                            onChange={e=>this.setserial_number(e)}
                              placeholder="Bill Description"
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
                             Account Year
                            </label>
                            <Input
                              className="form-control-alternative"
                              placeholder=" Account Year"
                              type="date"
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
                            <Input
                            className="form-control-alternative"
                            onChange={e=>this.setcenter_code(e)}
                              placeholder=" Owner Name"
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
                             House Number
                            </label>
                            <Input
                            className="form-control-alternative"
                            onChange={e=>this.setcenter_code(e)}
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
                            <Input
                            className="form-control-alternative"
                            onChange={e=>this.setcenter_code(e)}
                              placeholder="  Property Type"
                              type="text"
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
                            onChange={e=>this.setcenter_code(e)}
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
                            onChange={e=>this.setcenter_code(e)}
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
                            onChange={e=>this.setcenter_code(e)}
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
                            onChange={e=>this.setcenter_code(e)}
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
                            onChange={e=>this.setcenter_code(e)}
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

        </div>
        </div>
        </div>
      </div>
    );
  }
}