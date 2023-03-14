import React from 'react'
import { withRouter } from "react-router-dom";
// import { logout } from '../UserFunctions'

class Sidebar extends React.Component {
    constructor(){
        super()
        this.state = {
            username:'',
        }

    }
    
    
    // Logout(){
    //     logout().then(()=>{
    //         this.props.history.push('/login')
    //         localStorage.clear()
    //     })
    // }
    render () {
        return (
            <div class="sidebar" data-color="white" data-active-color="danger">
                <div class="logo">
                    <a href="#" class="simple-text logo-mini">
                        <div class="logo-image-small">
                            <img src="../assets/img/logo-small.png" />
                        </div>
                    </a>
                    <a href="#" class="simple-text logo-small">
                        Revenue Management System
                    </a>
                </div>
                <div class="sidebar-wrapper">
                    <ul class="nav">
                      
                        <li class="active ">
                            <a href="/admin/dashboard">
                                <i class="nc-icon nc-diamond"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                     
                        <li>
                            <a href="/admin/bills">
                                <i class="nc-icon nc-paper"></i>
                                <span>Bills</span>
                            </a>
                        </li>
                        <li>
                            <a href="/admin/customers">
                                <i class="nc-icon nc-paper"></i>
                                <p>Customers</p>
                            </a>
                        </li>
                 
                        <li>
                            <a href="/admin/createcustomer">
                                <i class="nc-icon nc-globe"></i>
                                <span>Receipts</span>
                            </a>
                        </li>
                        <li >
                            <a href="/admin/users">
                                <i class="nc-icon nc-single-02"></i>
                                <span>Users</span>
                            </a>
                        </li>
                    <li>
                            <a href="/adminprofile">
                                <i class="nc-icon nc-single-02"></i>
                                <span>User Profile</span>
                            </a>
                        </li>
                       
                       
	       </ul>
                   
                </div>
            </div>
        )
    }
}
export default withRouter(Sidebar)