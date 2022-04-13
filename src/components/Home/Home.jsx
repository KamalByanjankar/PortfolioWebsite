import React from "react";
// import ReactTypingEffect from "react-typing-effect";
import profilepic from "../../assets/profile/kamal.png";
// import Social from "../Social/Social";
import "./Home.css";

const Home = () => {
  return (
    <div className="home header">
      <img 
        src={profilepic}
        alt="My Profile Pic" 
        className="home__image" 
      />
      <h2>Kamal Byanjankar</h2>
      <p>Software Engineer</p>
      {/* <ReactTypingEffect
        className="typingeffect"
        text={["I am Kamal Byanjankar", "I am a software Engineer"]}
        speed={100}
        eraseDelay={700}
      /> */}
      {/* <Social /> */}
    </div>
  );
}

export default Home;
