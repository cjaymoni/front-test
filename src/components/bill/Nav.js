import React, { Component } from 'react'
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';


class Nav extends Component {
    render () {
        return (
            <nav class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
                <div class="container-fluid">
                    <div class="navbar-wrapper">
                        <div class="navbar-toggle">
                        <button type="button" class="navbar-toggler">
                            <span class="navbar-toggler-bar bar1"></span>
                            <span class="navbar-toggler-bar bar2"></span>
                            <span class="navbar-toggler-bar bar3"></span>
                        </button>
                        </div>
                        <a class="navbar-brand">Bills</a>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                        <span class="navbar-toggler-bar navbar-kebab"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navigation">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link btn-magnify" href="/bills">
                                    <i class="nc-icon nc-single-02"></i>
                                    <p>
                                        <span class="d-lg-none d-md-block">All Bills</span>
                                    </p>
                                </a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link btn-rotate" href="">
                                <i class="nc-icon nc-user-run"></i>
                                <p>
                                    <span class="d-lg-none d-md-block" onClick={()=>this.logout()}>Logout</span>
                                </p>
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Nav