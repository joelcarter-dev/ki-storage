import React from "react"

import Helmet from "react-helmet"

import './main.sass'
import map from '../img/map.png'
import hero from '../img/ki-shed-5.jpg'
import icon from '../img/favicon.ico'

const desc = `
  Boat, campervan, caravan storage in mangakino. 16 Kahu street Mangakino, lake Maraetai, Taupo. Protecting your Pride & Joy from All the Elements.
`

const PriceItem = props => (
  <div className="priceItem">
    <p className="price">{props.price}</p>
    <ul>
      <li>{props.h}m Door Height</li>
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
      <link rel="icon" href={icon} type="image/x-icon" />
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
    
    <div 
      className="hero"
      style={{backgroundImage: `url(${hero})`}}
    >
      <div className="saying">
        <h2> Protecting your Pride & Joy from All the Elements </h2>
      </div>
    </div>
    
    <div className="boxes">
      <div className="left">
        <div className="box-content">
          <i className="fas fa-phone"></i>
          <p id="phone"> Call 021864254 </p>
        </div>
      </div>
      
      <div className="right">
        <div className="box-content">
          <i className="fas fa-envelope"></i>
          <p>Email MangoBoatStorage@gmail.com</p>
        </div>
      </div>
    </div>
    
    <div className="location-title">
      <h3>Location</h3>
      <h4> 16 kahu street mangakino (In the middle of everywhere)</h4>
    </div>
    
    <div 
      className="location"
      style={{backgroundImage: `url(${map})`}}
    > </div>
    
    <div className="prices">
      <h4>Packages</h4>
      <div className="priceList">
        <PriceItem
          price="$80 p/w"
          h="2.4"
          w="2.6"
          bayDepth="6.5"
          bayWide="3.5"
        />
      
        <PriceItem
          price="$87 p/w"
          h="3.9"
          w="3.2"
          bayDepth="9"
          bayWide="3.7"
        />
        
        <PriceItem
          price="$85 p/w"
          h="3.9"
          w="3.0"
          bayDepth="6.5"
          bayWide="3.5"
        />
      </div>
    </div>
    <div className="points">
      <p>The price is the price no hidden extras.</p>
      <p>Key access. All sheds with concrete floors</p>
      <p id="tc">T & C apply</p>
    </div>
      
    <div className="plug">
      <a  target="_blank" href="https://joelcarter.dev/">Site by Joelcarter.dev</a>
       <div className="underline"></div>
    </div>
    
  </section>  
)

//TODO: make a short desc
