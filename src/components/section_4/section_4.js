import React from "react";
import classes from "./section_4.module.css";

const section4 = (props) => {
  return (
    <div className={classes.Section4}>
      <div className={classes.P1}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRm5NJIzfoDn6tujNj8UJAnVFzZqu1umputQ&usqp=CAU"
          alt="Img"
        />
      </div>
      <div className={classes.P2}>
        <h2>VISION &amp;MISSION</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </p>
      </div>
      <div className={classes.P3}>
          <img src="https://cdn.kastatic.org/ka-perseus-images/3a2b8074e1b2e8ac4e94c1b73fa4e30650225d6a.png" alt="Img" />
      </div>
    </div>
  );
};

export default section4;
