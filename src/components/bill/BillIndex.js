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

class BillIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      rowData: "",
      showReceipt: false,
      showLocation: false,
      actions: [
        {
          name: "account",
          icon: () => <PrintIcon />,
          tooltip: <h5>Print Receipt</h5>,
          onClick: (rowData) => {
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
  handleClickShowReceipt = () => {
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
        >
          <DialogTitle id="form-dialog-title">Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>Print Receipt</DialogContentText>
            <div>
              <img src={receipt} />
            </div>
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
