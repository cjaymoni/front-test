import React, { Component } from "react";
import Nav from "./Nav";
import Sidebar from "../UserDashboard/Sidebar";
import { Button, Col } from "reactstrap";
import receipt from "../../assets/receipt.png";

class PrintReceipt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                  <br />
                  <img src={receipt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PrintReceipt;
