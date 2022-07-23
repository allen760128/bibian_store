import React from 'react';
import Nav from './common/nav';
import './common/common.css';
import Sec1 from './sec2Page/sec1';
import './sec2.css';
import Sec2 from './sec2Page/sec2'
import Sec3 from './sec2Page/sec3'
import Sec4 from './sec2Page/sec4'
import Footer from './common/footer'

const sec2page=(props)=>{
    return(
        <div>
            <Nav ch2={{color:'#fa6800'}}/>
            <Sec1/>
            <Sec2/>
            <Sec3/>
            <Sec4/>
            <Footer/>
        </div>
    );
    
}

export default sec2page;