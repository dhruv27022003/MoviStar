import React, { Component } from "react";
import styled from "styled-components";
import { Redirect } from "react-router";
export default class Login1 extends Component {
  constructor(props){
    super(props)
    let loggedin = false;
    this.state = {
      username: "",
      password: "",
      loggedin,
    };
    this.onChange = this.onChange.bind(this)
    this.submitform = this.submitform.bind(this);
  }
onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitform(e) {
    e.preventDefault();
    const { username, password } = this.state;
    if(username==="A" && password==="B"){
      this.setState({
        loggedin:true
      })
    }
  }

  render() {
       if(this.state.loggedin){
        
        return  <><a href="/admin"></a><Redirect to="/admin"/></>;
        }


    return (
      <>
        <F></F>

        <Fo>
          <form onSubmit={this.submitform}>
            <img
              className="mb-4"
              src="/docs/5.2/assets/brand/bootstrap-logo.svg"
              alt=""
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal">Sign Into the Movie's World</h1>

            <div className="form-floating w-50 my-2" style={{ color: "black" }}>
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="username"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
              />
              <label for="floatingInput">Username</label>
            </div>
            <div className="form-floating w-50 " style={{ color: "black" }}>
            <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <label for="floatingPassword">Password</label>
            </div>

            <button
              className="w-50 btn btn-success  btn-primary my-4"
              type="submit"
            >
              Sign in
            </button>
            {/* <p className="mt-5 mb-3 text-muted">© Movistar</p> */}
          </form>
        </Fo>
      </>
    );
  }
}

const Fo = styled.div`
  margin-left: 36vw;
  margin-top: 10vh;
  padding: 10px;
  // text-align: center;
  color: white;
`;
const F = styled.div`
  background: black;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
`;
