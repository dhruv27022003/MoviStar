import React from 'react'

export const Footer = () => {
let ftst =  {
        position : "fixed",
        width : "100%",
        bottom : "0vh"
        
        // m="0%"

}


  return (
    <footer className=" bg-dark text-light text-center"
    style={ftst}
    >
      Copyright &copy;     moviestar.com      
    </footer>
  )
}
