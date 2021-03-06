import './Header_top.css'
import React from "react";

export default function TopHeader (){
    return(
        <div className={'header_div a-center d-flex'}>

            <div className="wrap_headerList container d-flex">
                <div className={'free'}>
                <ul className={'header_list d-flex'}>
                    <li><a href={'#'} className={'header_list-item1 '}>FREE 2-DAY SHIPPING</a></li>
                    <li><a href={'#'} className={'header_list-item2 '}>For orders $300</a></li>
                </ul>
            </div>

                <div className={'action'}>
                    <ul className={'header_list d-flex'}>
                        <li> <a href={'#'} className={'header_list-item before-one'}>Log in or Register</a></li>
                        <li> <a href={'#'} className={'header_list-item before-two'}>WISHLIST</a></li>
                        <li> <a href={'#'} className={'header_list-item before-three'}>GIFT REGISTRY</a></li>
                        <li> <a href={'#'} className={'header_list-item before-four'}>STORE LOCATOR</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
