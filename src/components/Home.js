import React from "react";
import UIkit from "uikit";
import dessert from "../assets/images/dessert.jpg";
import jarkoe from "../assets/images/jarkoe.jpg";
import stake from "../assets/images/stake.jpeg";

UIkit.img();

function Home() {
  return (
    <div>
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabIndex="-1"
        uk-slideshow="true"
      >
        <ul className="uk-slideshow-items">
          <li>
            <img
              data-src={dessert}
              width="1600"
              height="1000"
              alt=""
              uk-cover="true"
              uk-img="target: !ul > :last-child, !* +*"
            />
          </li>
          <li>
            <img
              data-src={jarkoe}
              width="1200"
              height="800"
              alt=""
              uk-cover="true"
              uk-img="target: !* -*, !* +*"
            />
          </li>
          <li>
            <img
              data-src={stake}
              width="1200"
              height="800"
              alt=""
              uk-cover="true"
              uk-img="target: !* -*, !ul > :first-child"
            />
          </li>
        </ul>

        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous="true"
          uk-slideshow-item="previous"
        >
          &lt;
        </a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next="true"
          uk-slideshow-item="next"
        >
          >
        </a>
      </div>
    </div>
  );
}

export default Home;
