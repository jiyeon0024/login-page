import { useState } from "react";

function App() {
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [pwErr, setPwErr] = useState(false);

  function submitCheck(e) {
    console.log("click");
    e.preventDefault();
    if (name.length == 0) {
      setNameErr(true);
      console.log("sdfsdf");
    }
    if (email.length == 0) {
      setEmailErr(true);
    }
    if (pw.length == 0) {
      setPwErr(true);
    }
  }

  return (
    <div className="wrapBox">
      <div className="imgBox">
        <h3 className="imgTitle">
          Start our 30-day<br></br> free trial!
        </h3>
        <h1 className="imgSubPara">Designed for individuals</h1>
      </div>
      <div className="formBox">
        <h3 className="formTitle">Welcome back!</h3>
        <h1 className="formSubPara">please enter your details.</h1>
        <form onSubmit={submitCheck}>
          <div className="inputWrap">
            <p className="info">Name</p>
            <input
              className={`inputArea ${nameErr ? "error" : ""}`}
              value={name}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
            {nameErr ? <p className="errPara">Enter your name!</p> : null}
          </div>
          <div className="inputWrap">
            <p className="info">Email</p>
            <input
              className={`inputArea ${emailErr ? "error" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {emailErr ? <p className="errPara">Enter your email!</p> : null}
          </div>
          <div className="inputWrap">
            <p className="info">Password</p>
            <input
              className={`inputArea ${pwErr ? "error" : ""}`}
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            ></input>
            {pwErr ? <p className="errPara">Enter your passwprd!</p> : null}
          </div>
          <button className="btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
