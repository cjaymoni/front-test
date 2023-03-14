import React, { Component } from 'react'
import {Button,FormGroup,Form,Input,Row,Col} from "reactstrap";

import Nav from './Nav'
import Sidebar from './Sidebar'
class AdCreateCustomer extends Component{


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
                              onChange={e=>this.setasset_name(e)}
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
                            onChange={e=>this.setserial_number(e)}
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
                            onChange={e=>this.setcenter_code(e)}
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
</div>








        )
    }
}


export default AdCreateCustomer