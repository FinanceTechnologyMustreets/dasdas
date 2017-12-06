import React,{component, Component} from 'react';
import {BindActonCreators, bindActionCreators} from 'redux';
import {connect} from 'react-redux';





class CaresList extends Component{
    showList(){
        return this.props.cars.map((model)=>{
    return (
        <div 
        key={model.id}>
        
        <h1 className="menu__item menu__item_main">
            <a>{model.dispatch}</a></h1>
        </div>
        
    );
        }) ;
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
function mapStateToProps(state){
    return{
        cars: state.model
    };

}

function matchDispatcheToProps(dispatch){
    return bindActionCreators({select:select},dispatch)
}

export default connect(mapStateToProps,matchDispatcheToProps)(CaresList);