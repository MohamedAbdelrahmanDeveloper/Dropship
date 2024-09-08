import { Form } from "react-bootstrap";
import ProgressBarComponent from "../../Components/ProgressBar/ProgressBar";
import "./buyerInfo.css";
const BuyerInfo = () => {
  return (
    <div className="">
      <ProgressBarComponent currentStep={1} />
      <div className="container PaymentContainer">
        <div className="infoooooo">
          <div className="buyer-info-container">
            <h2>Buyer Info</h2>
            <form action="">
              <div className="d-flex">

              <div>
                
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                  type="password"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                />
              </div>
              <div>
                
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                  type="password"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                />
              </div>
              </div>
                <div className="form-row">
                <div className="form-group-buyer">
              
                  <label>First Name</label>
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="form-group-buyer">
                  <label>Last Name</label>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group-buyer">
                  <label>Email Address</label>
                  <input type="email" placeholder="Email Address" />
                </div>
                <div className="form-group-buyer">
                  <label>Mobile Phone Number</label>
                  <input type="text" placeholder="Mobile Phone Number" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group-buyer">
                  <label>Address</label>
                  <input className="adress" type="text" placeholder="Address" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group-buyer ">
                  <label>State</label>
                  <select className="state">
                    <option value="England">England</option>
                    <option value="Scotland">Scotland</option>
                    <option value="Wales">Wales</option>
                    <option value="Northern Ireland">Northern Ireland</option>
                  </select>
                </div>
                <div className="form-group-buyer">
                  <label>Postcode/ZIP</label>
                  <input type="text" placeholder="Postcode/ZIP" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group-buyer">
                  <label>Town/City</label>
                  <input type="text" placeholder="Town/City" />
                </div>
                <div className="form-group-buyer">
                  <label>Note</label>
                  <input className="note" type="text" />
                </div>
              </div>
              <div className="ssssss">
                {" "}
                <span className="spanbutton">Next</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerInfo;
