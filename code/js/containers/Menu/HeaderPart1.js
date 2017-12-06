import React,{component, Component} from 'react';
import Logo from '../Part1/logo';
import NameCls from '../Part1/NameCls';


class DDD extends Component{
    render(){
        return(
            

<div className="xsmall_hide">
<div className="header__top">
<div className="grid_container">
<div className="row"><div className="col col__small_4">
<a className="header__logo">
<img src="/static/media/logo.dff11548.svg" className="header__logo_head xsmall_hide" alt=""/>
<img src="/static/media/logo_scrolled.15d44cff.svg" className="header__logo_scrolled xsmall_hide" alt=""/></a></div>
<div className="col col__small_13 col__small-offset-1 flex-container flex__align_center xsmall_hide">
<div className="header__menu">
<ul className="menu menu_main">
<li className="menu__item menu__item_main">
<a>О компании</a></li>
<li className="menu__item menu__item_main"><a>Роадмап</a></li>
<li className="menu__item menu__item_main"><a>Токены UT</a></li>
<li className="menu__item menu__item_main"><a>Команда</a></li>
<li className="menu__item menu__item_main"><a>White paper</a></li></ul></div></div>
<div className="col col__small_6 flex-container flex__align_center xsmall_hide">
<div className="header__menu flex-container flex__align_center align_right">

<div className="header__static">
<li className="main-menu__item main-menu__item_auth">
<ul className="menu menu_main">
<li className="menu__item menu__item_main menu__item_button"><button>Вход</button></li>
<li className="menu__item menu__item_main menu__item_button"><button>Регистрация</button></li></ul></li></div>
<div className="header__scrolled">
<div className="form-group__item form-group__item_inline">
<button className="button button_type_primary button_size_small">Купить токены</button>
</div></div></div></div></div></div></div></div>

);
}
}


export default DDD;