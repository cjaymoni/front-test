import React, { Component } from "react";
import Nav from "./Nav";
import Sidebar from "../UserDashboard/Sidebar";
import { Button, Col } from "reactstrap";
import receipt from "../../assets/receipt.png";
import { style } from "typestyle";
import mun from "../../assets/mun-logo.jpg";
import coat from "../../assets/coat.png";
import PropTypes from "prop-types";

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
                  <br />
                  <div
                    className={style({
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "1rem",
                    })}
                  >
                    <div>
                      <img src={coat} alt="coat" width={120} height={100} />
                      <br />
                      <span
                        className={style({
                          fontWeight: "bold",
                        })}
                      >
                        REPUBLIC OF GHANA
                      </span>
                    </div>
                    <div
                      className={style({
                        fontWeight: "bold",
                        fontSize: 25,
                      })}
                    >
                      <span>TEMA WEST MUNICIPAL ASSEMBLY </span>
                      <br />
                      <span>P.O Box SK 1957, Sakumono - Tema</span>
                      <br />
                      <span>03020 - 937573</span>
                    </div>
                    <div>
                      <img src={mun} alt="mun" width={100} height={100} />
                    </div>
                  </div>
                  <div>
                    <span
                      className={style({
                        fontWeight: "bold",
                        padding: "1rem",
                      })}
                    >
                      GH POST GPS GT-341-7438
                    </span>
                  </div>
                  <div
                    className={style({
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      display: "flex",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                    })}
                  >
                    <span>Your Ref: ...................................</span>
                    <span>Date: 10th FEBRUARY, 2020</span>
                  </div>
                  <hr
                    className={style({
                      marginLeft: "1rem !important",
                      marginRight: "1rem !important",
                      marginTop: 0,
                      marginBottom: 0,
                      border: "2px solid black",
                    })}
                  />
                  <div className={style({ padding: "1rem" })}>
                    <table className="re-table">
                      <tr>
                        <th
                          colspan="4"
                          style={{ textAlign: "center", fontSize: 18 }}
                        >
                          SEWER BILL
                        </th>
                      </tr>
                      <tr>
                        <th colspan="2">DATE PRINTED:</th>
                        <th colspan="2">Account Year:</th>
                      </tr>
                      <tr>
                        <th colspan="2" style={{ textAlign: "center" }}>
                          PROPERTY DETAILS
                        </th>
                        <th colspan="2" style={{ textAlign: "center" }}>
                          FINANCIAL DETAILS
                        </th>
                      </tr>
                      <tr>
                        <td>Owner's Name</td>
                        <td></td>
                        <td>Current Raate</td>
                        <td>4003</td>
                      </tr>
                      <tr>
                        <td>House Number</td>
                        <td>C7/1</td>
                        <td>Arrears</td>
                        <td>43</td>
                      </tr>
                      <tr>
                        <td>Type</td>
                        <td>RESIDENTIAL</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Area</td>
                        <td>SAKUMONO</td>
                        <td>Amount Due</td>
                        <td>4333</td>
                      </tr>
                      <tr>
                        <td>Zone</td>
                        <td>SK</td>
                        <td rowSpan="6" colSpan="2">
                          MUNICIPAL FINANCE OFFICE
                        </td>
                      </tr>
                      <tr>
                        <td>Valuation Number</td>
                        <td>COMM05001001</td>
                      </tr>
                      <tr>
                        <td>Bill Type</td>
                        <td>SEWER</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>SEWER USER FEE</td>
                      </tr>
                    </table>
                    <div>
                      <span
                        className={style({
                          fontSize: 12,
                          marginBottom: -20,
                        })}
                      >
                        This bill must be paid in full on or before 31st July,
                        2020 or within two weeks of distribution date.
                      </span>
                      <br />
                      <span
                        className={style({
                          fontWeight: "bold",
                          fontSize: 12,
                          marginBottom: -20,
                        })}
                      >
                        PLEASE MAKE PAYMENT AT COMM. 2 TWMA SUB OFFICE AND
                        INSIST ON YOUR RECEIPT UPON PAYMENT.
                      </span>
                      <br />
                      <span
                        className={style({
                          fontWeight: "bold",
                          fontSize: 12,
                        })}
                      >
                        FOR ENQUIRIES CONTACT: 0246250144, 0249110132
                      </span>
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

PrintReceipt.propTypes = {
  receiptInfo: PropTypes.object,
};
export default PrintReceipt;
