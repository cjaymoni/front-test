import React from 'react'
import { withRouter } from "react-router-dom";
// import { logout } from '../UserFunctions'

class Sidebar extends React.Component {
    constructor(){
        super()
        this.state = {
            username:'',
            dropdownOpen: false
        }
        this.dropdownToggle = this.dropdownToggle.bind(this);

    }
    dropdownToggle(e) {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen,
        });
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
                    <a href="#" class="simple-text logo-normal">
                        Revenue Sys
                    </a>
                </div>
                <div class="sidebar-wrapper">
                    <ul class="nav">
                      
                        <li class="active ">
                            <a href="/dashboard">
                                <i class="nc-icon nc-diamond"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                     
                        <li>
                            <a href="/bills">
                                <i class="nc-icon nc-paper"></i>
                                <span>Bills</span>
                            </a>
                        </li>
                        <li>
                            <a href="/customers">
                                <i class="nc-icon nc-paper"></i>
                                <span>Customers</span>
                            </a>
                        </li>
                 
                        <li>
                            <a href="/receipts">
                                <i class="nc-icon nc-globe"></i>
                                <span>Receipts</span>
                            </a>
                        </li>
                        <li >
                            <a href="/userprofile">
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