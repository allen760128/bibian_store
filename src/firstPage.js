import React from 'react';
import './index.css';
import Nav from './common/nav';
import Sec1 from './firstPage/sec1';
import Sec2 from './firstPage/sec2';
import Sec3 from './firstPage/sec3';
import Sec4 from './firstPage/sec4';
import Sec5 from './firstPage/sec5';
import Sec6 from './firstPage/sec6';
import Sec7 from './firstPage/sec7';
import Sec8 from './firstPage/sec8';
import Footer from './common/footer';
import './common/common.css';

const firstPage=(props)=>{
    return(
        <div>
            <Nav ch1={{color:'#fa6800'}}/>
            <Sec1/>
            <Sec2/>
            <Sec3/>
            <Sec4/>
            <Sec5/>
            <Sec6/>
            <Sec7/>
            <Sec8/>
            <Footer/>
        </div>
        
    );
}

export default firstPage;