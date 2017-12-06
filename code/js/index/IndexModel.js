import React,{component, Component} from 'react';
import ModelTitle from '../containers/Model/ModelTitle';
import ModelH2 from '../containers/Model/ModelH';
import ModelTable from '../containers/Model/ModelTable';





class SubIndex extends Component{
    render(){
        return(
            <div name="distribution" className="element">
            <section className="section section_gradient">
            <div className="grid_container">
            <ModelH2 />,
            <ModelTitle />,
            {/* <ModelTable />
             */}</div>
            </section>
            </div>

          
            
        );
        
    }
}
export default SubIndex;