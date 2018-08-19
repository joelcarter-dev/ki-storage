import React from "react"

import Helmet from "react-helmet"

import './main.sass'

const desc = `
  Boat storage in new zeland
`

const PriceItem = props => (
  <div className="priceItem">
    <p className="price">{props.price}</p>
    <ul>
      <li>{props.h}m Door Hight</li>
      <li>{props.w}m Door Width</li>
      <li>{props.bayDepth}m Bay Depth</li>
      <li>{props.bayWide}m Bay Wide</li>
    </ul>
  </div>  
)

export default () => (
  <section className="main-holder">
  
    <Helmet> 
      <title>Mangakino Storage</title>
      <meta name="description" content={`${desc}`} />
      <html lang="en" />
      <link 
        rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous"/>
    </Helmet>
    
    <div className="title">
      <div className="header">
        <h1>Mangakino Storage</h1>
        <div className="underline"></div>
      </div>
      
      <div className="spans">
        <span>Boat</span>
        <span>Campervan</span>
        <span>Caravan</span>
      </div>
    </div>
    
    <div className="hero">
      <div className="saying">
        <h2> Protecting your pride & joy from the eliments </h2>
      </div>
    </div>
    
    <div className="boxes">
      <div className="left">
        <i className="fas fa-phone"></i>
        <p id="phone"> Call 021864254 </p>
      </div>
      
      <div className="right">
        <i className="fas fa-envelope"></i>
        <p>Email MangoBoatStorage@gmail.com</p>
      </div>
    </div>
    
    <div className="location">
      <div>
        <h3>Location</h3>
        <h4>(In the middle of everywhere)</h4>
      </div>
      
    </div>
    
    <div className="prices">
      <h4>Packages</h4>
      <div className="priceList">
        <PriceItem
          price="$50 p/w"
          h="2.4"
          w="2.6"
          bayDepth="10"
          bayWide="3.5"
        />
      
        <PriceItem
          price="$55 p/w"
          h="3.9"
          w="3.2"
          bayDepth="9"
          bayWide="3.7"
        />
        
        <PriceItem
          price="$60 p/w"
          h="3.9"
          w="3.0"
          bayDepth="10"
          bayWide="3.5"
        />
      </div>
    </div>
    <div className="points">
      <p>Key access. All sheds with concrete floors</p>
      <p id="tc">T & C apply</p>
    </div>
      
    <div className="plug">
      <a href="https://jcicode.com/">Site by JCIcode.com</a>
       <div className="underline"></div>
    </div>
    
  </section>  
)

//TODO: make a short desc