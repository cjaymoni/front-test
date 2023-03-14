import React, { Component } from "react";
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
} from "reactstrap";
import { login, getuserdata } from "../api";
import boot from "../../assets/mun.png";
import { style } from "typestyle";

// import Navbar_ from '../Navbar'
// import Footer from '../Footer'
// import logo from '../assets/logo.png'

const divAuth = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "left",
  height: "220px",
};

const divInner = {
  width: "450px",
  margin: "auto",
  background: "#fffffffb",
  boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
  padding: "40px 55px 45px 55px",
  borderRadius: "15px",
  transition: "all .3s",
};

const imageContainer = {
  textAlign: "center",
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      checkbox: "",
      user: [{ email: "", password: "" }],
      fields: {},
      errors: {},
    };

    // this.onChange = this.onChange.bind(this)
    // this.onSubmit = this.onSubmit.bind(this)
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    //Password
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.fields["email"],
      password: this.state.fields["password"],
    };

    if (this.handleValidation()) {
      login(user).then((res) => {
        if (res == "User does not exist") {
          alert("User doest exist");
        } else if (res !== "Wrong credentials") {
          if (res.usertype === "Admin") {
            this.props.history.push("/admin/dashboard");
          } else if (res.usertype === "User") {
            this.props.history.push("/dashboard");
          }
        } else {
          alert(res);
        }
      });
    } else {
      alert("Form has errors.");
    }
  }

  render() {
    return (
      <div className={style({ height: "100vh", overflow: "hidden" })}>
        {/* <Navbar_/> */}
        <header className="masthead text-center text-black">
          <div className={style({ height: "100vh" })}>
            <div className="container">
              <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                  <div style={divAuth}>
                    <div style={divInner}>
                      <div className="btn-wrapper text-center">
                        <NavbarBrand>
                          <img alt="..." src={boot} />
                        </NavbarBrand>

                        <div className="text-center text-muted mb-4">
                          <large>Revenue Management System</large>
                        </div>
                      </div>
                      <div className="text-center text-muted mb-4">
                        <small>Sign in with credentials</small>
                      </div>
                      <form noValidate onSubmit={this.onSubmit.bind(this)}>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              ref="email"
                              type="email"
                              onChange={this.handleChange.bind(this, "email")}
                              value={this.state.fields["email"]}
                            />
                            <span style={{ color: "red" }}>
                              {this.state.errors["email"]}
                            </span>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              ref="password"
                              type="password"
                              value={this.state.fields["password"]}
                              onChange={this.handleChange.bind(
                                this,
                                "password"
                              )}
                            />
                            <span style={{ color: "red" }}>
                              {this.state.errors["password"]}
                            </span>
                          </InputGroup>
                        </FormGroup>
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary btn-block"
                        >
                          Sign in
                        </button>
                      </form>
                      <div className="text-right" xs="6">
                        <a
                          className="text-dark"
                          href=""
                          onClick={(e) =>
                            this.props.history.push("/verifyemail")
                          }
                        >
                          <small>Forgot password?</small>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Login;
