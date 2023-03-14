import React, { Component } from 'react'
import image_one from "../../assets/damir-bosnjak.jpg"
import image_two from "../../assets/mike.jpg"

import Nav from './Nav'
import Sidebar from './Sidebar'
// import DashboardFooter from '../DashboardFooter'

class AdminProfile extends Component {
  constructor(){
    super();
    this.state = {
      isUpdateState: false
    }

    this.triggerUpdate = this.triggerUpdate.bind(this);
    this.doneUpdate = this.doneUpdate.bind(this);
  }

  triggerUpdate = () => {
    this.setState({
      isUpdateState: true
    })
    console.log(this.state.isUpdateState)
  }

  doneUpdate = () => {
    this.setState({
      isUpdateState: false
    })
  }

  render () {
    return (
      <div class="wrapper ">
        <Sidebar />
        <div class="main-panel">
          <Nav />
          <div class="content mb-0">
            <div class="row">
              <div class="col-md-4 mx-auto">
                <div class="card card-user">
                  <div class="image">
                    <img src={image_one} alt="..." />
                  </div>
                    <div class="card-body">
                      <div class="author">
                        <a href="#">
                          <img class="avatar border-gray" src={image_two} alt="..." />
                          <h5 class="title">Eugene</h5>
                        </a>
                        <p class="description">
                          email@gmail.com
                        </p>
                      </div>
                      <div class="text-center">
                      {!this.state.isUpdateState && <button class="btn btn-primary btn-round" onClick={this.triggerUpdate}>Edit</button>}
                      </div>
                      <p class="description text-center">
                        "I like the way you work it
                        <br /> No diggity
                        <br /> I wanna bag it up"
                      </p>
                    </div>
                    <div class="card-footer">
                      <hr/>
                      <div class="button-container">
                        <div class="row">
                          <div class="col-lg-3 col-md-6 col-6 ml-auto">
                            <h5>12
                              <br/>
                              <small>Files</small>
                            </h5>
                          </div>
                          <div class="col-lg-4 col-md-6 col-6 ml-auto mr-auto">
                            <h5>2GB
                              <br/>
                              <small>Used</small>
                            </h5>
                          </div>
                            <div class="col-lg-3 mr-auto">
                              <h5>24,6$
                                <br/>
                                <small>Spent</small>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-7 mx-auto">
                      <div class="card card-user">
                          <div class="card-header">
                            <h5 class="card-title">Profile</h5>
                          </div>
                  {!this.state.isUpdateState && <div class="card-body">
                    <form>
                      <div class="row">
                        <div class="col-md-8 pr-1 mx-auto">
                          <div class="form-group">
                            <label>Email</label>
                            <input type="text"
                            className="form-control mr-5"
                            name="email"
                            disabled
                            // value={this.state.email}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row ">
                          <div class="col-md-8 pr-4 mx-auto" >
                            <div class="form-group">
                              <label>User Id</label>
                              <input type="text"
                              className="form-control"
                              name="user_id"
                              disabled
                              // value={this.state.user_id}
                              />                                                
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-8 pr-1 mx-auto">
                            <div class="form-group">
                              <label>First Name</label>
                              <input type="text"
                              className="form-control"
                              name="first_name"
                              disabled
                              // value={this.state.first_name}
                              // onChange={e=>this.setfname(e)} 
                              />  
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-8 pr-1 mx-auto">
                            <div class="form-group">
                              <label>Last Name</label>
                              <input type="text"
                              className="form-control"
                              name="last_name"
                              disabled
                              // value={this.state.last_name}
                              // onChange={e=>this.setlname(e)} 
                              />                                                
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-8 pr-1 mx-auto">
                            <div class="form-group">
                              <label>Middle Name</label>
                              <input type="text"
                              className="form-control"
                              name="middle_name"
                              disabled
                              // value={this.state.middle_name}
                              // onChange={e=>this.setmname(e)} 
                              />                                                
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-8 pr-1 mx-auto">
                            <div class="form-group">
                              <label>Department</label>
                              <input type="text"
                              className="form-control"
                              name="department"
                              disabled
                              // value={this.state.department}
                              // onChange={e=>this.setdepartment(e)} 
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="update ml-auto mr-auto">
                            {this.state.isUpdateState && <button class="btn btn-primary btn-round" onClick={this.doneUpdate}>Update Profile</button> }
                            {this.state.isUpdateState && <button class="btn btn-danger btn-round" onClick={this.doneUpdate}>Cancel</button> }
                          </div>
                        </div>
                      </form>
                    </div>}
                    {this.state.isUpdateState && <div class="card-body">
                    <form>
                      <div class="row">
                        <div class="col-md-8 pr-1 mx-auto">
                          <div class="form-group">
                            <label>Email</label>
                            <input type="text"
                            className="form-control mr-5"
                            name="email"
                            disabled
                            // value={this.state.email}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row ">
                          <div class="col-md-8 pr-4 mx-auto">
                            <div class="form-group">
                              <label>User Id</label>
                              <input type="text"
                              className="form-control"
                              name="user_id"
                              disabled
                              // value={this.state.user_id}
                              />                                                
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-8 pr-1 mx-auto">
                            <div class="form-group">
                              <label>First Name</label>
                              <input type="text"
                              className="form-control"
                              name="first_name"
                              placeholder="Enter First Name"
                              // value={this.state.first_name}
                              // onChange={e=>this.setfname(e)} 
                              />  
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-8 pr-1 mx-auto">
                            <div class="form-group">
                              <label>Last Name</label>
                              <input type="text"
                              className="form-control"
                              name="last_name"
                              placeholder="Enter Last Name"
                              // value={this.state.last_name}
                              // onChange={e=>this.setlname(e)} 
                              />                                                
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-8 pr-1 mx-auto">
                            <div class="form-group">
                              <label>Middle Name</label>
                              <input type="text"
                              className="form-control"
                              name="middle_name"
                              placeholder="Enter Middle Name"
                              // value={this.state.middle_name}
                              // onChange={e=>this.setmname(e)} 
                              />                                                
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-8 pr-1 mx-auto">
                            <div class="form-group">
                              <label>Department</label>
                              <input type="text"
                              className="form-control"
                              name="department"
                              placeholder="Enter Department"
                              // value={this.state.department}
                              // onChange={e=>this.setdepartment(e)} 
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="update ml-auto mr-auto">
                            {this.state.isUpdateState && <button class="btn btn-primary btn-round" onClick={this.doneUpdate}>Update Profile</button> }
                            {this.state.isUpdateState && <button class="btn btn-danger btn-round" onClick={this.doneUpdate}>Cancel</button> }
                          </div>
                        </div>
                      </form>
                    </div>}
                  </div>
                </div>
              </div>
          </div>
          {/* <DashboardFooter /> */}
        </div>
      </div>
    )
  }
}
export default AdminProfile