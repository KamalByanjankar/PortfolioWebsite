import React from "react";
// import ReactTypingEffect from "react-typing-effect";
import profilepic from "../../assets/images/kamal.png";
import Social from "../Social/Social";
import "./Home.css";

const Home = () => {
  return (
    <div className="home header">
      <img src={profilepic} className="pic" alt="My pic"></img>
      <h2>Kamal Byanjankar</h2>
      <p className="color">Software Engineer</p>
      {/* <ReactTypingEffect
        className="typingeffect"
        text={["I am Kamal Byanjankar", "I am a software Engineer"]}
        speed={100}
        eraseDelay={700}
      /> */}
      <Social />
    </div>
  );
}

export default Home;
