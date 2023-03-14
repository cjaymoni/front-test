import React, { Component } from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'

class AdBillIndex extends Component {
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
                                        <h4 class="card-title"> All Bills</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead class=" text-primary">
                                                    <th>ID</th>
                                                    <th>Bill Type</th>
                                                    <th> Bill Description</th>
                                                    <th>Account Year</th>
                                                    <th>Customer Name</th>
                                                    <th>House Number</th>
                                                    <th>Property Type </th>
                                                    <th>Area Name</th>
                                                    <th>Zone </th>
                                                    <th>Valuation Number</th>
                                                    <th>Current Rate </th>
                                                    <th>Arrears </th>
                                                    <th>Amount Due </th>
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
export default AdBillIndex