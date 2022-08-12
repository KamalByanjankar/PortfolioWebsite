import React from "react";
// import ReactTypingEffect from "react-typing-effect";
import homeImage from "../../assets/profile/kamal_home.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="header__image">
      <img src={homeImage} alt="home" />
      <div className="home__container">
        <h1>Kamal Byanjankar</h1>
        <p>Software Engineer</p>
        {/* <ReactTypingEffect
          className="typingeffect"
          text={["I am Kamal Byanjankar", "I am a software Engineer"]}
          speed={100}
          eraseDelay={700}
        /> */}
      </div>
    </div>
  );
}

export default Home;
