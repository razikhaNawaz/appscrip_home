import React from "react";
import classes from "./Section2.module.css";
import frame from "public/frame.png";
import Image from "next/image";
import imagelock from "public/imagelock.png";
import rectangle from "public/rectangle.png";
import rectangle2 from "public/rectangle2.png";
import rectangle3 from "public/rectangle3.png";
import image12 from "public/image12.svg";
import image13 from "public/image13.svg";
import image14 from "public/image14.svg";

const Section2 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h1>Elevate Your Craft</h1>
      </div>
      <div className={classes.parent}>
        <div className={classes.child1}>
          <div className={classes.chi1}>
            <h1>Unlock Your ABC Earning Potential</h1>
            <p>
              Are you ready to take your earning potential to the next level?
              With ABC, you have multiple avenues to monetize your content
              seamlessly. From subscriptions and tips to merchandise sales and
              NFTS, ABC helps you diversify your revenue streams and maximize
              your income.
            </p>

            <Image src={frame} alt="mobile" width={150} height={150} />
          </div>
          <div className={classes.chi2}>
            <h1>Boost Your Sales with Built-in E-commerce</h1>
            <p>
              Take control of your brand and boost your sales with ABC's
              built-in e-commerce functionality. Showcase and sell your
              exclusive products, whether it's merchandise, digital downloads,
              or personalized experiences. Integrate your store effortlessly and
              turn your creative ideas into profitable ventures.
            </p>
            <div className={classes.images}>
              <Image src={imagelock} alt="lock" width={150} height={150} />
              <Image src={rectangle} alt="girl" width={150} height={150} />
              <Image src={rectangle2} alt="girls" width={150} height={150} />
              <Image src={rectangle3} alt="style" width={150} height={150} />
            </div>
          </div>
        </div>
        <div className={classes.child2}>
          <div className={classes.c1}>
            <Image src={image12} alt="logo1"width={100} height={100}/>
            <h1>Save Time with Automation and Efficienc</h1>
            <p>
              Supercharge your content creation with ABC's automation tools.
              Streamline scheduling, multi-platform management, and more. Save
              time on repetitive tasks, focus on exceptional content.
            </p>
          </div>
          <div className={classes.c2}>
          <Image src={image13} alt="logo2" width={100} height={100}/>
            <h1>Join a Supportive Community</h1>
            <p>
              Join ABC's vibrant creator community. Connect with like-minded
              individuals, collaborate, and share experiences. Access mental
              health services and resources for personal and professional
              growth.
            </p>
          </div>
          <div className={classes.c3}>
          <Image src={image14} alt="logo3" width={100} height={100}/>
            <h1>Unlock Exclusive Opportunities and Prizes</h1>
            <p>
              Enjoy ABC contests and challenges for valuable prizes. Showcase
              your exceptional talent and win business grants, scholarships, and
              more. Thrive on our platform with recognition and rewards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
