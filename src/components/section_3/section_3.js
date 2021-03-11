import classes from "./section_3.module.css";
import React from "react";

const section3 = (props) => {
  return (
    <div className={classes.Section3}>
      <div className={classes.P1}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Carl_Schurz_High_School_02.jpg/260px-Carl_Schurz_High_School_02.jpg"
          alt="Img"
        />
      </div>
      <div>
        <div className={classes.P2}>
        <div>About Strides</div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsz1I9YLH42FHvig8XqXN8vGR0nWA2OBZ8-w&usqp=CAU" alt="img" />< /div>
        </div>
        
        <div className={classes.Building}>BUILDING VALUE <br/>THROUGH PARTNERSHIP</div>
        <p>
          Headquartered in India, Strides Pharma Science Limited is a
          pharmaceutical company with a major focus on development and
          manufacture of IP-led niche finished dosage formulations. It is also
          among the world's largest manufacturers of soft gelatin capsules.
        </p>
      </div>
    </div>
  );
};

export default section3;
