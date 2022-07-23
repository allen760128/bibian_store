import React from 'react';
import data1 from './sec6Data.json';

const Sec6=(props)=>{
    return(
        <div className="sec6">
                <div className="sec6Wrap">
                    <h3 className="l-h3">PChomeグループだからできる手厚いサービス!台湾のお客様満足度</h3>
                    <div className="satisfy">
                        <ul>
                            <li><img src="img/banner_6_8.svg" alt=""/></li>
                            {data1.map(dataWrap=>(
                                <li key={dataWrap.id}>{dataWrap.title}<p>{dataWrap.content}</p></li>
                            ))}                            
                            <li><img src="img/banner_6_2.jpg" alt=""/></li>
                            <li><img src="img/banner_6_3.jpg" alt=""/></li>
                            <li><img src="img/banner_6_4.jpg" alt=""/></li>
                            <li><img src="img/banner_6_5.jpg" alt=""/></li>
                            <li><img src="img/banner_6_6.jpg" alt=""/></li>
                            <li><img src="img/banner_6_7.jpg" alt=""/></li>
                        </ul>
                    </div>
                    <h2>最短即日で実現可能!</h2>
                    <h3>台湾への販路拡大ならBB Checkout</h3>
                </div>
            </div>
    );
}
export default Sec6;
/*
class sec6 extends Component{
    constructor(props){
        super(props);
        this.state={
            data1
        }
    }
    render(){
        const {data1}=this.state;
        return(
            <div className="sec6">
                <div className="sec6Wrap">
                    <h3 className="l-h3">PChomeグループだからできる手厚いサービス!台湾のお客様満足度</h3>
                    <div className="satisfy">
                        <ul>
                            <li><img src="img/banner_6_8.svg" alt=""/></li>
                            {data1.map(dataWrap=>(
                                <li key={dataWrap.id}>{dataWrap.title}<p>{dataWrap.content}</p></li>
                            ))}                            
                            <li><img src="img/banner_6_2.jpg" alt=""/></li>
                            <li><img src="img/banner_6_3.jpg" alt=""/></li>
                            <li><img src="img/banner_6_4.jpg" alt=""/></li>
                            <li><img src="img/banner_6_5.jpg" alt=""/></li>
                            <li><img src="img/banner_6_6.jpg" alt=""/></li>
                            <li><img src="img/banner_6_7.jpg" alt=""/></li>
                        </ul>
                    </div>
                    <h2>最短即日で実現可能!</h2>
                    <h3>台湾への販路拡大ならBB Checkout</h3>
                </div>
            </div>
        );
    }
}

export default sec6;*/