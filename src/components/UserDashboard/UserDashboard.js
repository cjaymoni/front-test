import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "../variables/charts";

class UserDashboard extends React.Component {
  render() {
    return (
      <div class="wrapper ">
        <Sidebar />
        <div class="main-panel">
          <Nav />
          <div className="content">
            <Row>
              <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="fa-solid fa-file-invoice text-warning" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">Bills</p>
                          <CardTitle tag="p">2862</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="fas fa-sync-alt" /> Update Now
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-money-coins text-success" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">Revenue</p>
                          <CardTitle tag="p">$ 1,345</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="far fa-calendar" /> Last day
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="fa-solid fa-print text-danger" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">Receipts</p>
                          <CardTitle tag="p">23</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="far fa-clock" /> In the last hour
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg="3" md="6" sm="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="fa-solid fa-people-arrows text-primary" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">Customers</p>
                          <CardTitle tag="p">+45K</CardTitle>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="fas fa-sync-alt" /> Update now
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h5">Revenue Chart</CardTitle>
                    <p className="card-category">24 Hours performance</p>
                  </CardHeader>
                  <CardBody>
                    <Line
                      data={dashboard24HoursPerformanceChart.data}
                      options={dashboard24HoursPerformanceChart.options}
                      width={400}
                      height={100}
                    />
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="fa fa-history" /> Updated 3 minutes ago
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="5">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h5">User Statistics</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Pie
                      data={dashboardEmailStatisticsChart.data}
                      options={dashboardEmailStatisticsChart.options}
                    />
                  </CardBody>
                  <CardFooter>
                    <div className="legend">
                      <i className="fa fa-circle text-primary" /> Bills{" "}
                      <i className="fa fa-circle text-warning" /> Receipts{" "}
                      <i className="fa fa-circle text-danger" /> Customers{" "}
                      {/* <i className="fa fa-circle text-gray" /> Unopened */}
                    </div>
                    <hr />
                    <div className="stats">
                      <i className="fa fa-calendar" /> Last update
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="7">
                <Card className="card-chart">
                  <CardHeader>
                    <CardTitle tag="h5">Receipts Chart</CardTitle>
                    {/* <p className="card-category">Line Chart with Points</p> */}
                  </CardHeader>
                  <CardBody>
                    <Line
                      data={dashboardNASDAQChart.data}
                      options={dashboardNASDAQChart.options}
                      width={400}
                      height={100}
                    />
                  </CardBody>
                  <CardFooter>
                    <div className="chart-legend">
                      <i className="fa fa-circle text-info" /> Sent{" "}
                      <i className="fa fa-circle text-warning" /> Discarded
                    </div>
                    <hr />
                    <div className="card-stats">
                      <i className="fa fa-check" /> Data information certified
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDashboard;
