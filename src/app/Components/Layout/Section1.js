import React from "react";
import classes from "./Section1.module.css";
import Image from "next/image";
import hero from "/public/hero.png"; // Remove the extra "public" directory

const Section1 = () => {
  return (
    <div className={classes.parent}>
      <div
        style={{
          zIndex: -1,
          position: "absolute",
          width: "100vw",
          height: "100vh",
          backgroundColor:"purple",
        }}
      >
        <Image src={hero} alt="cloud" layout="fill" objectFit="cover" />
        <div className={classes.content}>
          <div className={classes.child1}>
            <h1>A Creator’s Paradise</h1>
            <p>Were Creativity Meets Success</p>
          </div>
          <div className={classes.child2}>
            
              <button>Continue with Google</button><br />
              <input type="text" placeholder="first name" /><br />
              <input type="text" placeholder="last name" /><br />
              <input type="text" placeholder="email" /><br />
              <input type="password" placeholder="password" />
              <p>(GMT+05:30) india standard Time - Calcutta</p>
              <button>SignUp as a User</button>
              <p>By signing up you agree to our Terms & Conditions and Privacy Policy. and confirm that you are at least 18 years old.</p>
              <button>SignUp as a Creator</button>
              <p>Already have an account? Login</p>
            
          </div>
        </div>
      </div>
     </div>
  );
};

export default Section1;
