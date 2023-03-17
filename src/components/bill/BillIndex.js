import React, { Component } from "react";
import Nav from "./Nav";
import Sidebar from "../UserDashboard/Sidebar";
import { Button, Col } from "reactstrap";
import MaterialTable from "material-table";
import { getallbills } from "../api";
import { Info as InfoIcon, Input as InputIcon } from "@material-ui/icons";

class BillIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      rowData: "",
      actions: [
        {
          name: "account",
          icon: () => <InputIcon />,
          tooltip: <h5>Request</h5>,
          onClick: (rowData) => {
            this.handleClickOpen(rowData);
          },
          disabled: false,
          position: "row",
        },
        {
          name: "account",
          icon: () => <InfoIcon />,
          tooltip: <h5>More Info</h5>,
          onClick: (event) => this.props.history.push("/storemanager/index"),
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
  }
  componentDidMount() {
    getallbills().then((response) => {
      this.setState({ data: response?.data });
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
                      // actions={this.state.actions}
                      data={this.state.data}
                      options={{
                        exportButton: true,
                        rowStyle: {
                          fontSize: 11,
                          fontFamily: "OPen Sans",
                        },
                      }}
                    />
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
export default BillIndex;
