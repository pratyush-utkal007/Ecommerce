import React, { useState } from "react";
import Layout from "../../componets/layout/Layout";
import { toast } from "react-toastify";

const Registration = () => {
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const [confrimpwd, setconfrimpwd] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email, pwd, "\n", confrimpwd);
    setemail("");
    setpwd("");
    setconfrimpwd("");
    if (!email || !pwd || !confrimpwd) {
      toast.error("Please Enter Data !!");
    } else {
      toast.success(" Register Sucessfully !!");
    }
  };
  return (
    <Layout title="E-commerce/Registration">
      <>
        <div className="container-fluid d-flex justify-content-center w-50 mt-3">
          <div className="row col-lg-6">
            <form onSubmit={handlesubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  value={pwd}
                  onChange={(e) => {
                    setpwd(e.target.value);
                  }}
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Confirm Password
                </label>
                <input
                  value={confrimpwd}
                  onChange={(e) => {
                    setconfrimpwd(e.target.value);
                  }}
                  type="Confirm password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Registration;
