import classes from "./section_2.module.css";
import React from "react";

const section2 = (props) => {
  return (
    <div className={classes.Section2}>
      <div className={classes.P1}>
        <h2>
          BUILDING VALUE <br />
          THROUGH PARTNERSHIP
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
        <div className={classes.Cards}>
          <div className={classes.Card}>
            <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtd0CuV-mqLeSFrDBskymkWell_VTY2sbTyQ&usqp=CAU" alt="Img" />
            <div>Pharma Generics</div>
          </div>
          <div className={classes.Card}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0nHl_Y-mNQJVKFO16TSvdkfxmOpDPmT_z-g&usqp=CAU" alt="Img" />
            <div>Branded Generics</div>
          </div>
          <div className={classes.Card}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/United_States_Institute_of_Peace.jpg/220px-United_States_Institute_of_Peace.jpg" alt="Img" />
            <div> Institutional business</div>
          </div>
        </div>
      </div>
      <div className={classes.P2}>
        <img
          src="https://www.safetyandhealthmagazine.com/ext/resources/images/news/healthcare/doctor-swab-test.jpg?1591807194"
          alt="img"
        />
      </div>
    </div>
  );
};

export default section2;
