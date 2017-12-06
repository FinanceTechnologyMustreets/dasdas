import React from'react';

import HeaderPart1 from'../containers/Menu/HeaderPart1';
import HeaderPart2 from'../containers/Menu/HeaderPart2';
import HeaderPart3 from'../containers/Menu/HeaderPart3';
import HeaderPart4 from'../containers/Menu/HeaderPart4';



const WebPagess =() =>(
           <div className='header'>
           <div className='grid_container'>
            <div className='xsmall_hide'>
            <HeaderPart1 />
            </div>
            <div className='large_hide'>
            <HeaderPart4/>
            </div>
            <div className='header_content'>
            <HeaderPart2/>
            </div>
            <div className='header_footer'>
            <HeaderPart3/>
            </div>
            </div>
           </div>
        );
        

export default WebPagess;