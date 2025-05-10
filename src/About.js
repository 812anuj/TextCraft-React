import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnTxt, setBthTxt] = useState("Dark");
  const Change = () => {
    if (myStyle.color === "white") {
      setMyStyle(
        {
          color: "black",
          backgroundColor: "white",
          border: "2px solid black",
        },
        (document.title = "TextCraft ")
      );
      setBthTxt("Dark");
    } else {
      setMyStyle(
        {
          color: "white",
          backgroundColor: "black",
          border: "2px solid white",
        },
        (document.title = "TextCraft -About")
      );
      setBthTxt("light");
    }
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h2>About</h2>
      <p>
        <strong>TextCraft</strong> is a dynamic React-based text utility app
        created by <strong>Anuj Mendhe</strong>. It provides a fast and
        efficient way to perform common text operations such as{" "}
        <strong>converting to uppercase or lowercase</strong>,{" "}
        <strong>removing extra spaces</strong>,{" "}
        <strong>counting characters and words</strong>, and{" "}
        <strong>copying text to clipboard</strong>. This project demonstrates my
        skills in building interactive, real-time UI features using React.
        Explore more of my work on my{" "}
        <a
          href="https://anujmendhe-porfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          portfolio
        </a>{" "}
        or check out the code on{" "}
        <a
          href="https://github.com/812anuj"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      <button className="btn btn-primary " onClick={Change}>
        {btnTxt}
      </button>
    </div>
  );
}
