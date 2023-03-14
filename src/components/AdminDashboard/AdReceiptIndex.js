import React, { Component } from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'

class AdReceiptIndex extends Component {
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
                                        <h4 class="card-title"> All Receipts</h4>
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
export default AdReceiptIndex