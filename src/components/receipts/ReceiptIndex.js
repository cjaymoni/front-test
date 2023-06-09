import React, { Component } from "react";
import Nav from "./Nav";
import Sidebar from "../UserDashboard/Sidebar";
import { Button, Col } from "reactstrap";

class ReceiptIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { usersCollection: [] };
  }
  componentDidMount() {
    this.getallreceipts();
  }

  getallreceipts = () => {
    fetch("data/receipts.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ usersCollection: data });
      })
      .catch((err) => console.log(err));
  };

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
                    <h4 class="card-title"> All Receipts</h4>
                    <Col className="text-right">
                      <Button
                        className="text-right"
                        color="primary"
                        href="/print-receipt"
                        size="sm"
                      >
                        Print Receipt
                      </Button>
                    </Col>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead class=" text-primary">
                          <th>ID</th>
                          <th>Bill Name</th>
                          <th> Customer</th>
                          <th>Amount </th>
                          <th>Date Issued</th>
                          {/* <th class="text-right">Action</th> */}
                        </thead>
                        <tbody>
                          {this.state.usersCollection.map((item, key) => {
                            return (
                              <tr key={key}>
                                <td>{item.id}</td>
                                <td>{item.bill_type}</td>
                                <td>{item.customer}</td>
                                <td>{item.bill_amount}</td>
                                <td>{item.date_issued}</td>
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
export default ReceiptIndex;
