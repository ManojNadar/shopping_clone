import React from "react";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";
import apple from "../Assets/applestore.png";
import google from "../Assets/googleplaystore.png";

import fb from "../Assets/fblogo.png";
import insta from "../Assets/instalogo.png";
import twitter from "../Assets/twitterlogo.png";
const Footer = () => {
  return (
    <>
      <div className="footerMainContainer">
        <div className="footerOne">
          <div className="footerOneTop">
            <div className="footerOneTopLeft">
              <div>
                <img
                  src="data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 2.063a6.938 6.938 0 1 0 0 13.875 6.938 6.938 0 0 0 0-13.876zM3.936 9a8.063 8.063 0 1 1 16.125 0A8.063 8.063 0 0 1 3.937 9z' fill='%23000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5.063a3.938 3.938 0 1 0 0 7.875 3.938 3.938 0 0 0 0-7.876zM6.936 9a5.063 5.063 0 1 1 10.125 0A5.063 5.063 0 0 1 6.937 9zM16.5 14.437c.31 0 .563.252.563.563v7.5a.562.562 0 0 1-.814.503l-4.25-2.124-4.247 2.124a.562.562 0 0 1-.814-.503V15a.562.562 0 1 1 1.125 0v6.59l3.685-1.843a.562.562 0 0 1 .503 0l3.687 1.843V15c0-.311.251-.563.562-.563z' fill='%23000'/%3E%3C/svg%3E"
                  alt=""
                />
                <p>Authentic Products</p>
              </div>
              <div>
                <img
                  src="data:image/svg+xml;charset=utf8,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.936 3.936a4.333 4.333 0 0 1 7.396 2.98h-8.665a4.333 4.333 0 0 1 1.269-2.98zm-2.603 4.48V11a.667.667 0 0 0 1.334 0V8.417h8.666V11a.667.667 0 0 0 1.334 0V8.417h3.579a.25.25 0 0 1 .24.181l1.52 5.319H4.994l1.52-5.319a.25.25 0 0 1 .24-.181h3.58zm0-1.5a5.667 5.667 0 0 1 11.333 0h3.58a1.75 1.75 0 0 1 1.682 1.27l1.788 6.258.034.227v1.996a4.75 4.75 0 0 1-2 3.873v8.127a1.75 1.75 0 0 1-1.75 1.75H7a1.75 1.75 0 0 1-1.75-1.75V20.54a4.745 4.745 0 0 1-2-3.873v-2.005a.75.75 0 0 1 .034-.218l1.788-6.258a1.75 1.75 0 0 1 1.682-1.27h3.58zm18.383 7.528.034.223a.727.727 0 0 0-.034-.223zm-7.966 2.223v-1.25h6.5v1.25a3.25 3.25 0 0 1-1.51 2.745.746.746 0 0 0-.22.128 3.25 3.25 0 0 1-4.77-2.873zm3.25 4.75c.426 0 .846-.058 1.25-.168v7.418a.25.25 0 0 1-.25.25H7a.25.25 0 0 1-.25-.25v-7.418A4.748 4.748 0 0 0 12 19.23a4.751 4.751 0 0 0 8 0 4.751 4.751 0 0 0 4 2.188zm-4.75-6v1.25a3.25 3.25 0 1 1-6.5 0v-1.25h6.5zm-8 1.25v-1.25h-6.5v1.25a3.25 3.25 0 0 0 1.51 2.744.75.75 0 0 1 .221.129 3.25 3.25 0 0 0 4.769-2.873z' fill='%23333'/%3E%3C/svg%3E"
                  alt=""
                />
                <p>Authentic Products</p>
              </div>
              <div>
                <img
                  src="data:image/svg+xml;charset=utf8,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 13.333V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v7.333c0 10.502-8.913 13.982-10.693 14.572a.944.944 0 0 1-.614 0C13.913 27.315 5 23.835 5 13.333z' stroke='%23333' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='m21.5 12-7.333 7-3.667-3.5' stroke='%23333' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
                  alt=""
                />
                <p>Authentic Products</p>
              </div>
              <div>
                <img
                  src="data:image/svg+xml;charset=utf8,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.998 28.6c6.96 0 12.6-5.641 12.6-12.6s-5.64-12.6-12.6-12.6C9.04 3.4 3.398 9.04 3.398 16s5.642 12.6 12.6 12.6z' stroke='%23333' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='m16.55 18.5-3.3 3.3-3.3-3.3' stroke='%23333' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M20.95 18.5v-6.05A3.85 3.85 0 0 0 17.1 8.6h0a3.85 3.85 0 0 0-3.85 3.85v9.35' stroke='%23333' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
                  alt=""
                />
                <p>Authentic Products</p>
              </div>
            </div>
            <div className="footerOneTopRight">
              <select>
                <option>Brands</option>
                <option>AASI</option>
                <option>ADARA</option>
                <option>ADIDAS</option>
              </select>
            </div>
          </div>
        </div>
        <div className="footerTwo">
          <div className="footerTwoLeft">
            <h5>REACH US</h5>
            <p>
              For Any Query Please Email Us <br />
              questions?
            </p>

            <NavLink className="customerLink">
              <p>customercare@shoppersstop.com</p>
            </NavLink>
          </div>
          <div className="footerTwoCenter">
            <h5>DOWNLOAD THE APP ON</h5>
            <div className="footerTwoCenterImg">
              <div>
                <img src={google} alt="" />
              </div>
              <div>
                <img src={apple} alt="" />
              </div>
            </div>
          </div>
          <div className="footerTwoRight">
            <h5>FOLLOW US ON</h5>
            <div className="socialIconsContainer">
              <div>
                <img src={fb} alt="" />
              </div>
              <div>
                <img src={insta} alt="" />
              </div>
              <div>
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>

          <div className="footerTwoRightLast">
            <p> copyright @2023 shoppingstop5@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
