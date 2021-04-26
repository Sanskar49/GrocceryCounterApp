import React, { Component } from 'react';

//Stateless Functional Component(S.F.C)  
   const NavBar = ({totalCounters}) => {                                    //for components like these which dont have any logics or calculations or states.. we dont make a class but instead make a SFC returning same things.
        return (
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar  <span 
        className="badge badge-pill badge-secondary">
            {totalCounters}                                  
            </span>
        </a>
      </nav> 
      );
    
    };

    
   export default NavBar ;                              

 