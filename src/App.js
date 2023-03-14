import React from "react";

import { BrowserRouter as Router, Route} from 'react-router-dom';
import "./assets/fontawesome-free/css/all.min.css"
import "./assets/nucleo/css/nucleo.css"
import "./assets/scss/argon-dashboard-react.scss"
import EmailVerification from "./components/auth/EmailVerification";
import Login from './components/auth/Login'
import ResetPassword from "./components/auth/ResetPassword";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import Register from './components/auth/Register';
import CreateCustomer from './components/customers/CreateCustomer';
import CustomerIndex from './components/customers/CustomerIndex';
import ReceiptIndex from "./components/receipts/ReceiptIndex";
import BillIndex from "./components/bill/BillIndex";
import CreateBill from "./components/bill/CreateBill";
import UserProfile from "./components/UserDashboard/UserProfile";
import AdBillIndex from "./components/AdminDashboard/AdBillIndex";
import AdCreateBill from "./components/AdminDashboard/AdCreateBill";
import AdCreateCustomer from "./components/AdminDashboard/AdCreateCustomer";
import AdCustomerIndex from "./components/AdminDashboard/AdCustomerIndex";
import AdReceiptIndex from "./components/AdminDashboard/AdReceiptIndex";
import AdminProfile from "./components/AdminDashboard/AdminProfile";
import Users from "./components/AdminDashboard/Users";
function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/verify" component={EmailVerification} />
      <Route exact path="/resetpassword" component={ResetPassword}/>
      <Route exact path="/dashboard" component={UserDashboard}/>
      <Route exact path="/admin/dashboard" component={AdminDashboard}/>
      <Route exact path="/admin/register" component={Register}/>
      <Route exact path="/createcustomer" component={CreateCustomer}/>
      <Route exact path="/customers" component={CustomerIndex}/>
      <Route exact path="/receipts" component={ReceiptIndex}/>
      <Route exact path="/bills" component={BillIndex}/>
      <Route exact path="/admin/bills" component={AdBillIndex}/>
      <Route exact path="/admin/receipts" component={AdReceiptIndex}/>
      <Route exact path="/admin/customers" component={AdCustomerIndex}/>
      <Route exact path="/admin/createcustomer" component={AdCreateCustomer}/>
      <Route exact path="/admin/createbill" component={AdCreateBill}/>
      <Route exact path="/adminprofile" component={AdminProfile}/>
      <Route exact path="/admin/users" component={Users}/>

      <Route exact path="/createbill" component={CreateBill}/>
      <Route exact path="/userprofile" component={UserProfile}/>



    </div>
  </Router>
  );
}

export default App;