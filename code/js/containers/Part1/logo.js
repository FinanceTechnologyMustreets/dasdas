import React,{ Component } from "react";


class Logo extends Component
{
    render()
    {
        return (
            <div className="col col__small_4">
            <a className="header__logo header__logo_scrolled">
            <img src="https://uttoken.io/static/media/logo.dff11548.svg" className="header__logo_head xsmall_hide" alt=""></img>
            <img src="https://uttoken.io/static/media/logo_scrolled.15d44cff.svg" className="header__logo_scrolled xsmall_hide" alt=""></img>
            </a>
            </div>
        );
    }
}
export default Logo;