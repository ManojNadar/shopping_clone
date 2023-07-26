// import React, { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/Home.css";
import Footer from "./Footer";
// import { MyContext } from "../Context/ContextContainer";

const Home = () => {
  // const { state, logout } = useContext(MyContext);

  // const [isLoggedIn, setisLoggedIn] = useState(false);
  // const route = useNavigate();

  // useEffect(() => {
  //   let getCurrentUser = JSON.parse(localStorage.getItem("currentuser"));

  //   if (getCurrentUser) {
  //     // console.log(state?.user?.email);
  //     if (state?.user?.email) {
  //       setisLoggedIn(true);
  //     } else {
  //       setisLoggedIn(false);
  //     }
  //   }
  // }, [state]);

  return (
    <>
      <Navbar />

      {/* Home Body section */}

      <div className="homeSideSticky">
        <p>Recently Viewed</p>
      </div>

      <div className="homeBodyContainer">
        <div className="bannerheading">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h06/h28/30434628763678/bargains-of-the-day-gif-web--hp--page-strip--2023-07--21.gif"
            alt=""
          />
        </div>

        <div className="saleBanner">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h5f/h90/30473216294942/BOD-web_240723m.jpg"
            alt=""
          />
        </div>

        <div className="bannerheading">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h1b/h5d/30369242710046/Strip-Web-1840x250_100723.jpg"
            alt=""
          />
        </div>

        <div className="saleBanner">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/hf2/h13/30477648166942/private-brand_top-banner-web_eoss-2023.jpg"
            alt=""
          />
        </div>

        <div className="bannerheading">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h59/hf6/29782554705950/Icons-2-Web---000-new-home-page--2023-april-11.jpg"
            alt=""
          />
        </div>

        <div className="bannerheading">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/hc5/h2b/30434628894750/highest-deal-ever-web--2023--07-21-hp-page.gif"
            alt=""
          />
        </div>

        <div className="bannerheading">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h9b/h60/30425874759710/Masterpieces-Of-Time_Strip-web_eoss-2023.jpg"
            alt=""
          />
        </div>

        <div className="fourFlex">
          <div className="fourFlexImgContainer">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h8d/h7b/30434302001182/armani-exchange_4-Widgets-Web--revise-banner-2023-07-19-home-page.jpg"
              alt=""
            />
          </div>
          <div className="fourFlexImgContainer">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h3b/h7c/30434302066718/Casio_4-Widgets-Web_revise-banner-2023-07-19-home-page.jpg"
              alt=""
            />
          </div>
          <div className="fourFlexImgContainer">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h4c/h7f/30434302132254/Emporio-Armani_4-Widgets-Web_revise-banner-2023-07-19-home-page.jpg"
              alt=""
            />
          </div>
          <div className="fourFlexImgContainer">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/hed/he9/30477653803038/titan_4-Widgets-Web__watch98594.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="bannerheading">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/h04/h2b/30434628829214/Rush-hour-madness-web---2023-07-21-new-strip--msite.gif"
            alt=""
          />
        </div>

        <div className="fourFlex">
          <div className="fourFlexImgContainer">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h05/hed/30434646556702/adidas_rush-hour-4-widget-web--rush-hour-sale-2023-07-22.gif"
              alt=""
            />
          </div>
          <div className="fourFlexImgContainer">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h5c/hed/30434646589470/madame_rush-hour-4-widget-web-----rush-hour-sale-2023-07-22.gif"
              alt=""
            />
          </div>
          <div className="fourFlexImgContainer">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h16/hf0/30434646622238/fastrack_rush-hour-4-widget-web----rush-hour-sale-2023-07-22.gif"
              alt=""
            />
          </div>
          <div className="fourFlexImgContainer">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h98/h4c/30434648195102/lakme_rush-hour-4-widget-web_240723m.gif"
              alt=""
            />
          </div>
        </div>

        <div className="bannerheading">
          <img
            src="https://sslimages.shoppersstop.com/sys-master/root/hd6/h2e/30434628960286/Limited-time-offer-web--2023-07--21-hp-page.gif"
            alt=""
          />
        </div>

        <div className="fourFlex">
          <div className="fourFlexImgContainer">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/hc7/hc7/30383595257886/Main-Banner-web_120723W.jpg"
              alt=""
            />
          </div>
          <div className="fourFlexImgContainer">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h8a/h05/30425891536926/Vero-Moda-web---best-buy-home--page_2023-07--18.jpg"
              alt=""
            />
          </div>
          <div className="fourFlexImgContainer">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h26/hba/30383595651102/Kraus-Levis-web_120723W.jpg"
              alt=""
            />
          </div>
          <div className="fourFlexImgContainer">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h67/hb6/30383595782174/Only-Madame-web_120723.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="fourFlex">
          <div className="fourFlexImgContainer">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h04/h57/30385075519518/Main-Banner-web_120723W.jpg"
              alt=""
            />
          </div>
          <div className="fourFlexImgContainer">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h64/h49/30385075912734/Sketchers%20web_120723W.jpg"
              alt=""
            />
          </div>
          <div className="fourFlexImgContainer">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h04/h05/30385076109342/Catwalk%2CInc.5-web_120723W.jpg"
              alt=""
            />
          </div>
          <div className="fourFlexImgContainer">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/hc5/h05/30385076174878/Lee-Cooper%2C-Louis-Philippe-web_120723W.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
