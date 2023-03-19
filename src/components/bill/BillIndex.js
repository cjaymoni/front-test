import React, { Component } from "react";
import Nav from "./Nav";
import Sidebar from "../UserDashboard/Sidebar";
import { Button, Col } from "reactstrap";
import MaterialTable from "material-table";
import { getallbills } from "../api";
import {
  Info as InfoIcon,
  Input as InputIcon,
  Print as PrintIcon,
  GpsFixed as GpsIcon,
} from "@material-ui/icons";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import receipt from "../../assets/receipt.png";
import map from "../../assets/mapp.png";
import PrintReceipt from "../print-receipt/Printreceipt";
import { style } from "typestyle";
import coat from "../../assets/coat.png";
import PropTypes from "prop-types";
import mun from "../../assets/mun-logo.jpg";

class BillIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      rowData: "",
      showReceipt: false,
      showLocation: false,
      currntReceipt: {},
      actions: [
        {
          name: "account",
          icon: () => <PrintIcon />,
          tooltip: <h5>Print Receipt</h5>,
          onClick: (event, rowData) => {
            this.setState({ currntReceipt: rowData });
            this.handleClickShowReceipt(rowData);
          },
          disabled: false,
          position: "row",
        },
        {
          name: "account",
          icon: () => <GpsIcon />,
          tooltip: <h5>Locate Property</h5>,
          onClick: (rowData) => {
            this.handleClickShowLocation(rowData);
          },
          disabled: false,
          position: "row",
        },
      ],
      columns: [
        {
          title: "Bill ID",
          field: "bill_id",
          headerStyle: { fontSize: 12, width: 100 },
        },
        {
          title: "Bill Type",
          field: "bill_type",
          headerStyle: { fontSize: 12, width: 100 },
        },
        {
          title: "Bill Description",
          field: "bill_description",
          headerStyle: { fontSize: 12, width: 100 },
        },
        // {
        //   title: "Account Year",
        //   field: "account_year",
        //   headerStyle: { fontSize: 12, width: 100 },
        // },
        {
          title: "Customer Name",
          field: "owner_name",
          headerStyle: { fontSize: 12, width: 100 },
        },
        {
          title: "House Number",
          field: "house_number",
          headerStyle: { fontSize: 12, width: 100 },
        },
        // {
        //   title: "Property Type ",
        //   field: "property_type",
        //   headerStyle: { fontSize: 12, width: 100 },
        // },
        {
          title: "Area Name",
          field: "area",
          headerStyle: { fontSize: 12, width: 100 },
        },
        {
          title: "Zone ",
          field: "zone",
          headerStyle: { fontSize: 12, width: 100 },
        },
        // {
        //   title: "Valuation Number",
        //   field: "valuation_number",
        //   headerStyle: { fontSize: 12, width: 100 },
        // },
        // {
        //   title: "Current Rate",
        //   field: "",
        //   headerStyle: { fontSize: 12, width: 100 },
        // },
        // {
        //   title: "Arrears ",
        //   field: "arrears",
        //   headerStyle: { fontSize: 12, width: 100 },
        // },
        {
          title: "Amount Due ",
          field: "amount",
          headerStyle: { fontSize: 12, width: 100 },
        },
        // {
        //   title: "Date Created ",
        //   field: "date_created",
        //   headerStyle: { fontSize: 12, width: 100 },
        // },
      ],
    };
    this.handleClickShowLocation.bind(this);
    this.handleCloseLocation.bind(this);
    this.handleClickShowReceipt.bind(this);
    this.handleCloseReceipt.bind(this);
  }
  componentDidMount() {
    getallbills().then((response) => {
      this.setState({ data: response?.data });
    });
  }
  handleClickShowReceipt = (rowData) => {
    this.setState({ showReceipt: true });
  };
  handleCloseLocation = () => {
    this.setState({ showLocation: false });
  };
  handleClickShowLocation = () => {
    this.setState({ showLocation: true });
  };
  handleCloseReceipt = () => {
    this.setState({ showReceipt: false });
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
                    <Col className="text-right">
                      <Button
                        className="text-right"
                        color="primary"
                        href="/createbill"
                        size="sm"
                      >
                        Create Bill
                      </Button>
                    </Col>
                  </div>
                  <div class="card-body">
                    <MaterialTable
                      title=" All Bills"
                      columns={this.state.columns}
                      actions={this.state.actions}
                      data={this.state.data}
                      options={{
                        exportButton: true,
                        rowStyle: {
                          fontSize: 11,
                          fontFamily: "OPen Sans",
                        },
                        search: true,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dialog
          open={this.state.showReceipt}
          onClose={this.handleCloseReceipt}
          aria-labelledby="form-dialog-title"
          fullWidth
          maxWidth="md"
        >
          <DialogTitle id="form-dialog-title">Confirmation</DialogTitle>
          <DialogContent>
            <>
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
                      fontSize: 11,
                    })}
                  >
                    REPUBLIC OF GHANA
                  </span>
                </div>
                <div
                  className={style({
                    fontWeight: "bold",
                    fontSize: 15,
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
                    <th colspan="2">DATE PRINTED: 10/02/2022</th>
                    <th colspan="2">Account Year: 2022</th>
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
                    <td>{this.state.currntReceipt.owner_name}</td>
                    <td>Current Rate</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>House Number</td>
                    <td>{this.state.currntReceipt.house_number}</td>
                    <td>Arrears</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>RESIDENTIAL</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>{this.state.currntReceipt.area}</td>
                    <td>Amount Due</td>
                    <td>{this.state.currntReceipt.amount}</td>
                  </tr>
                  <tr>
                    <td>Zone</td>
                    <td>{this.state.currntReceipt.zone}</td>
                    <td rowSpan="6" colSpan="2">
                      MUNICIPAL FINANCE OFFICE
                    </td>
                  </tr>
                  <tr>
                    <td>Valuation Number</td>
                    <td>{this.state.currntReceipt.bill_id}</td>
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
                    This bill must be paid in full on or before 31st July, 2020
                    or within two weeks of distribution date.
                  </span>
                  <br />
                  <span
                    className={style({
                      fontWeight: "bold",
                      fontSize: 12,
                      marginBottom: -20,
                    })}
                  >
                    PLEASE MAKE PAYMENT AT COMM. 2 TWMA SUB OFFICE AND INSIST ON
                    YOUR RECEIPT UPON PAYMENT.
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
            </>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.handleCloseReceipt();
              }}
              color="primary"
            >
              Cancel
            </Button>
            <Button onClick={() => this.handleCloseReceipt()} color="primary">
              Print
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.showLocation}
          onClose={this.handleCloseLocation}
          aria-labelledby="form-dialog-title"
          fullWidth
        >
          <DialogTitle id="form-dialog-title">Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>Show Property Location</DialogContentText>
            <div>
              <img src={map} />
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.handleCloseLocation();
              }}
              color="primary"
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default BillIndex;
