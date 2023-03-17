import React, { Component } from "react";
import Nav from "./Nav";
import Sidebar from "../UserDashboard/Sidebar";
import { Button, Col } from "reactstrap";
import { getallcustomers } from "../api";
class CustomerIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { customers: [] };
  }
  componentDidMount() {
    getallcustomers()
      .then((res) => {
        this.setState({ customers: res?.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div class="wrapper ">
        <Sidebar />
        <div class="main-panel">
          <Nav />
          <div class="content">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title"> All Customers</h4>
                    <Col className="text-right">
                      <Button
                        className="text-right"
                        color="primary"
                        href="/createcustomer"
                        size="sm"
                      >
                        Add Customer
                      </Button>
                    </Col>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead class=" text-primary">
                          <th>ID</th>
                          <th>Full Name</th>
                          <th> Email</th>
                          <th>House Number</th>
                          <th>Contact Number</th>
                          <th>Arrears </th>
                          {/* <th class="text-right">Action</th> */}
                        </thead>
                        <tbody>
                          {this.state.customers?.map((item, key) => {
                            return (
                              <tr key={key}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.house_number}</td>
                                <td>{item.contact}</td>
                                <td>{item.arrears}</td>
                                {/* <td class="text-right">
                                  <i class="nc-icon nc-single-copy-04"></i>
                                  <i class="nc-icon nc-simple-remove"></i>
                                </td> */}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CustomerIndex;
