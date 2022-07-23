import React from 'react';
import sec2Data from './sec2Data.json';

const Sec2=(props)=>{
    return(
        <div className="sec2_2">
        <div className="sec2_2Content">
            <h2 className="l-h2">BB Checkout<span>５</span>つの機能。</h2>
            <ul>{sec2Data.map(data=>(
                <li key={data.id}><span>{data.id}</span> {data.content}</li>
            ))}
                
            </ul>
        </div>
        <div className="sec2_2pic">
            <img src="img/banner_2.svg" alt=""/>
        </div>
    </div>
    );
}

export default Sec2;
/*
class sec2 extends Component{
    constructor(props){
        super(props);
        this.state={
            sec2Data
        }
    }
    render(){
        const {sec2Data}=this.state;
        return(
    <div className="sec2_2">
        <div className="sec2_2Content">
            <h2 className="l-h2">BB Checkout<span>５</span>つの機能。</h2>
            <ul>{sec2Data.map(data=>(
                <li key={data.id}><span>{data.id}</span> {data.content}</li>
            ))}
                
            </ul>
        </div>
        <div className="sec2_2pic">
            <img src="img/banner_2.svg" alt=""/>
        </div>
    </div>
        );
    }
}

export default sec2;*/