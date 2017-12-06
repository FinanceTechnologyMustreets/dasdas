import React,{component, Component} from 'react';
import {BindActonCreators, bindActionCreators} from 'redux';
import {connect} from 'react-redux';





class CaresList extends Component{
    showList(){
        
    return (
        <div 
        >
        
        <li className="menu__item menu__item_main">
            <a><h2>jgfkjhghj</h2></a></li>
        </div>
        
    );
        
    }

    render(){
        return(
            <div className="col col__small_13 col__small-offset-1 flex-container flex__align_center xsmall_hide">
            
            <div className="header__menu">
            <ul className="menu menu_main">
                {this.showList()}  
            </ul>
            </div>
            </div>
        );
    }
}


export default CaresList;