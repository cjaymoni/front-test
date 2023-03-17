import axios from "axios";

let access_control = {
  headers: {
    Authorization: "Bearer " + localStorage.usertoken,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

const host = "hhtp://127.0.0.1:8091";

export const login = (user) => {
  return axios
    .post(host + "/login", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      localStorage.setItem("usertoken", res.data.token);
      localStorage.setItem("userid", res.data.userid);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logout = () => {
  return axios
    .get(host + "/logout", access_control)
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log("done");
    });
};

export const updateuserdetails = (user) => {
  return axios
    .post(
      host + "/updateuserdetails",
      {
        User_id: user.id,
        email: user.email,
        fname: user.fname,
        username: user.username,
        contact: user.contact,
      },
      access_control
    )
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const adduser = (user) => {
  return axios
    .post(
      host + "/adduser",
      {
        email: user.email,
        password: user.password,
        usertype: user.usertype,
        fname: user.fname,
        contact: user.contact,
        username: user.username,
      },
      access_control
    )
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getuserdata = () => {
  return axios
    .get(host + "/userdata", access_control)
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log("done");
    });
};

export const getallusers = () => {
  return axios
    .get(host + "/allUsers", {
      headers: { Authorization: `Bearer ${localStorage.usertoken}` },
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log("done");
    });
};

//bill's api
// export const createbill = (bill) => {
//   return axios
//     .post(
//       host + "/createbill",
//       {
//         bill_type: bill.bill_type,
//         bill_description: bill.bill_description,
//         account_year: bill.account_year,
//         customer_name: bill.customer_name,
//         house_number: bill.house_number,
//         property_type: bill.property_type,
//         area: bill.area,
//         zone: bill.zone,
//         valuation_number: bill.valuation_number,
//         current_rate: bill.current_rate,
//         arrears: bill.arrears,
//         amount_due: bill.amount_due,
//         date_created: bill.date_created,
//       },
//       access_control
//     )
//     .then((res) => {
//       console.log(res);
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// export const createbill = (bill) => {
//   const data = {
//     bill_type: bill.bill_type,
//     bill_description: bill.bill_description,
//     account_year: bill.account_year,
//     customer_name: bill.customer_name,
//     house_number: bill.house_number,
//     property_type: bill.property_type,
//     area: bill.area,
//     zone: bill.zone,
//     valuation_number: bill.valuation_number,
//     current_rate: bill.current_rate,
//     arrears: bill.arrears,
//     amount_due: bill.amount_due,
//     date_created: bill.date_created,
//   };
//   const options = {
//     headers: { "Content-Type": "application/json" },
//   };

//   axios
//     .post("data/create-bill.json", data, options)
//     .then(function (response) {
//       // console.log(response);
//       return response;
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .finally(function () {
//       // always executed
//       console.log("done");
//     });
// };
export const createbill = (bill) => {
  fetch("data/create-bill.json")
    .then((response) => response.json())
    .then((data) => {
      // Modify the data
      data.push(bill);

      // Write the modified data back to the file
      const json = JSON.stringify(data);
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "data.json";
      a.click();

      URL.revokeObjectURL(url);
    })
    .then(function (response) {
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log("done");
    });
};

export const getbillinfo = (bill) => {
  return axios
    .post(
      host + "/billinfo",
      {
        billID: bill.billid,
      },
      access_control
    )
    .then(function (response) {
      // console.log(response)
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log("done");
    });
};

export const getallbills = () => {
  return axios
    .get("data/bills.json")
    .then(function (response) {
      // console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log("done");
    });
};

export const deletebill = (bill) => {
  return axios
    .post(
      host + "/deletebill",
      {
        bill_id: bill.bill_id,
      },
      access_control
    )
    .then(() => {
      return axios.get("/allBills", access_control).then(function (response) {
        return response;
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//customer's api
export const addcustomer = (customer) => {
  return axios
    .post(
      host + "/addcustomer",
      {
        name: customer.name,
        house_number: customer.house_number,
        email: customer.email,
        contact: customer.contact,
        arrears: customer.arrears,
        date_created: customer.date_created,
      },
      access_control
    )
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getallcustomers = () => {
  return axios
    .get("data/customers.json", access_control)
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log("done");
    });
};

export const getcustomerinfo = (customer) => {
  return axios
    .post(
      host + "/customerinfo",
      {
        customerID: customer.customerid,
      },
      access_control
    )
    .then(function (response) {
      // console.log(response)
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log("done");
    });
};

export const deletecustomer = (customer) => {
  return axios
    .post(
      host + "/deletecustomer",
      {
        customer_id: customer.customer_id,
      },
      access_control
    )
    .then(() => {
      return axios
        .get("/allCustomers", access_control)
        .then(function (response) {
          return response;
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updatecustomer = (customer) => {
  return axios
    .post(
      host + "/updatecustomer",
      {
        customer_id: customer.id,
        name: customer.email,
        house_number: customer.house_number,
        contact: customer.contact,
        arrears: customer.arrears,
        email: customer.email,
      },
      access_control
    )
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
