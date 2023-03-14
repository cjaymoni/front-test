import React, { Component } from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import {Button, Col} from 'reactstrap'

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

  
    render () {
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
                                        <h4 class="card-title"> All Users</h4>
                                        <Col className="text-right">
                  <Button  className="text-right" color="primary" href="/admin/register" size="sm">
                    Add User
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
                                                    <th class="text-right">Action</th>
                                                </thead>
                                                <tbody>
                                                    {this.state.usersCollection.map((item, key) => {
                                                        return (
                                                            <tr key = {key}>
                                                                <td>{item.id}</td>
                                                                <td>{item.email}</td>
                                                                <td>{item.usertype}</td>
                                                                <td class="text-right">
                                                                    <i class="nc-icon nc-single-copy-04"></i>
                                                                    <i class="nc-icon nc-simple-remove"></i>
                                                                </td>
                                                            </tr>
                                                        )
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
        )
    }
}
export default Users