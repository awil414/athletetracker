import React from "react";
import venmoLogo from "../../images/Venmo_Logo_Blue.png";
import QR from "../../images/MyVenmoQRCode.png";
import "./venmo.css";

function Venmo() {
  return (
    <div id="paypal-button-container">
      <a href="https://account.venmo.com/u/Amber-Wilson-89" target="_onblank">
        <img className="venmo-1" src={venmoLogo} alt="Venmo logo"></img>
      </a>
      <img className="venmo-2" src={QR} alt="Venmo QR Code"></img>
    </div>
  );
}

export default Venmo;
