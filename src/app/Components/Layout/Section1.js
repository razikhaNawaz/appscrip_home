import React from "react";
import classes from "./Section1.module.css";
// import hero from "public/hero.png";
// import Image from "next/image";

const Section1 = () => {
  return (
    <div>
      
      <div className={classes.parent}>
       {/* <Image src={hero} alt='cloud' /> */}
        <div className={classes.containerParagraph}>
          <h1>A Creator’s Paradise</h1>
          <p>Where Creativity Meets Success</p>
        </div>
        <div className={classes.container}>
          <form className={classes.child1}>
            <div className={classes.input}>
              <button type="submit">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8926 9.60698H20.1389V9.56814H11.717V13.3112H17.0055C16.2339 15.4901 14.1608 17.0543 11.717 17.0543C8.61636 17.0543 6.10243 14.5403 6.10243 11.4397C6.10243 8.33902 8.61636 5.82509 11.717 5.82509C13.1483 5.82509 14.4504 6.36502 15.4418 7.24698L18.0886 4.60017C16.4174 3.04259 14.1818 2.08203 11.717 2.08203C6.54926 2.08203 2.35938 6.27191 2.35938 11.4397C2.35938 16.6074 6.54926 20.7973 11.717 20.7973C16.8848 20.7973 21.0747 16.6074 21.0747 11.4397C21.0747 10.8122 21.0101 10.1998 20.8926 9.60698Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M3.4375 7.08416L6.51195 9.33888C7.34385 7.27926 9.35855 5.82509 11.7162 5.82509C13.1475 5.82509 14.4496 6.36502 15.441 7.24698L18.0878 4.60017C16.4165 3.04259 14.181 2.08203 11.7162 2.08203C8.12193 2.08203 5.0049 4.11124 3.4375 7.08416Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M11.7213 20.7968C14.1383 20.7968 16.3346 19.8718 17.9951 18.3675L15.0989 15.9168C14.1594 16.6284 12.9916 17.0537 11.7213 17.0537C9.28734 17.0537 7.22071 15.5018 6.44215 13.3359L3.39062 15.687C4.93931 18.7175 8.08442 20.7968 11.7213 20.7968Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M20.8983 9.60915H20.1445V9.57031H11.7227V13.3134H17.0111C16.6406 14.36 15.9673 15.2626 15.0989 15.9199L15.1003 15.919L17.9965 18.3698C17.7916 18.556 21.0803 16.1207 21.0803 11.4418C21.0803 10.8144 21.0157 10.202 20.8983 9.60915Z"
                    fill="#1976D2"
                  />
                </svg>
                Continue With Google
              </button>
              
              <input type="email" placeholder="Name" required />
              <input type="text" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
            </div>
            <div className={classes.child2}>
              <button type="submit">Sign Up as a User</button>
              
              <button type="button">Sign Up as a Creator</button>
              <p>Already have an account? Sign in</p>
            </div>
          </form>
        </div>
        
      </div> 
    </div>
  );
};

export default Section1;
