import './Header_bottom.css';
import React from "react";
import logo from '../Header/imgs/logo.png';
import search from '../Header/imgs/Search Icon@1X.png';
import basket from  '../Header/imgs/Cart Icon@1X.png';

export default function Header_bottom(){
    return(
        <div className={'header_upper container'}>
          <div className="header_upper_top d-flex a-center ">
               <div className="header_upper_logo d-flex a-center">
                   <img src={logo} alt="logo"/>
                   <h1>BACK DOWN SOUTH</h1>
               </div>
                    <div className={'d-flex a-center'}>
              <form className={'form_header'}>

                  <input type="text" placeholder='Enter key words' className={'text_input'}/>
                  <button className={'btn_top'}><img src={search} alt="search"/></button>
              </form>
                  <img src={basket} alt="basket"/>
                    </div>

          </div>
            <div className="header_upper_bottom d-flex">
                <div className="upper_bottom_titles"><h2>NEW ARRIVALS</h2> </div>
                <div className="upper_bottom_titles"><h2>WOMEN</h2> </div>
                <div className="upper_bottom_titles"><h2>MENS</h2> </div>
                <div className="upper_bottom_titles"><h2>ACCESSORIES</h2> </div>
                <div className="upper_bottom_titles"><h2>GET CERTIFICATES</h2> </div>
                <div className="upper_bottom_titles"><h2>TOP SELLER</h2> </div>
            </div>
        </div>
    )
}
