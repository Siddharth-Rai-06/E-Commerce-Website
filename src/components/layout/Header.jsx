import React from "react";
import Cart from "../Cart/cartindex"
function Header({itemCount , items , onHandleEvent}) {
  return (<div>
    <nav className="navbar">

      <div className="logo"><img className="logo-img" src={"assets/drupal-brands.ico"}></img> <a href="/">SHOP STATION</a></div>
      <div className="searchBox-container">
            <form className="form-search">
                <input className="search" type="text"
                    id="search" placeholder="Enter product name, category" />
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
                        height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </button>
            </form>
            </div>
      <ul className="nav-links">


        <div className="menu"><li><a href="/">Food</a></li>
          <li className="services">
            <a href="/">Essentials</a>

            <ul className="dropdown">
              <li><a href="/">Toiletries </a></li>
              <li><a href="/">Stationary</a></li>
              <li><a href="/">Bagpacks</a></li>
              <li><a href="/">Medicines</a></li>
              <li><a href="/">Electronics</a></li>
            </ul>
          </li>
          <li><a href="/">Miscellaneous</a></li>
          <li><a href="/"><img className="wishlist" src={"assets/wishlist.png"} alt="text"></img></a></li>
          <Cart count={itemCount} items={items} onHandleEvent={onHandleEvent}></Cart>
        </div>
      </ul>
    </nav>

  </div>
  );
}

export default Header;