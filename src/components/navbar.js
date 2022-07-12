import React from "react";
import styled from "styled-components";
export default function Header(props) {
  return (
    //     <div>

    //         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="#">MOVISTAR</a>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <a className="nav-link active"  href="">Home</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="">COMEDY</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="">ACTION</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="">THRILL</a>
    //           </li>
    //         </ul>
    //         {/* <form className="d-flex" role="search">
    //           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //           <button className="btn btn-outline-success" type="submit">Search</button>
    //         </form> */}
    //       </div>
    //     </div>
    //   </nav>

    //  </div>
    <C>
      <Logo src="/images/logo.svg" />
      <Navmenu>
        <a>
          <Logo src="/images/home-icon.svg" />
          <a href="/" style={{ textDecoration: 'none' }} >
          <span  >HOME</span>
          </a>
        </a>
        <a>
          <Logo src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>{" "}
        <a>
          <Logo src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <Logo src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>{" "}
        <a>
          <Logo src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>{" "}
        <a>
          <Logo src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </Navmenu>
         <a href ="/login">
           <UserImg src="/images/IMG_2560.jpeg"/>
           </a>
    
    </C>
  );
}

const C = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
  height: 80px;
  padding-left: 20px;
`;
const Navmenu = styled.div`
  display: flex;
  flex: 1;

  a {
    display: flex;
    align-items: center;
    padding: 0 0px;

    img {
      height: 20px;
      cursor: pointer;
    }
    span {
      cursor: pointer;
      font-size: 15px;
      position: relative;
  
      color: white;
      &: after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition : all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
         transform: scaleX(0);
      }
    }
     &:hover{
            span: after{
           transform: scaleX(1);
           opacity:1;
          }
      }

  }
`
const UserImg = styled.img`
  // position:fixed;
  // right:20px;
  height: 65px;
  border-radius: 50%;
  cursor: pointer;
  // top:10px;
`;

const L1 = styled.div`
     text-decoration: none;
`