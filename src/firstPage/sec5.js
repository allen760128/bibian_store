import React from 'react';
import data1 from './sec5Data.json';
import data2 from './sec5Data2.json';

const Sec5=(props)=>{
    return(
        <div className="sec5">
        <div className="bg1">
            <div className="sec5Wrap1">
                <h3 className="l-h3">越境ECを成功させるために<span>乗り越えたい4つの壁</span></h3>
                <ul>{data1.map(wrap1=>(
                    <li key={wrap1.id}>
                        <span></span>
                        <span>{wrap1.id}</span>
                        <div className="liWrap">
                            <i></i>
                            <div className="liWrapin">
                               <h4>{wrap1.title}</h4>
                               <hr/>
                               <p>{wrap1.content}</p>
                            </div>
                        </div>
                    </li>
                ))}
                    
                </ul>
            </div>
        </div>
        <div className="bg2">
            <div className="sec5Wrap2">
                <div className="bg2Pic">
                   <img src="img/banner_5_7.svg" alt="banner5_2"/>
                </div>
                <div className="middleBarWrap">
                    <div></div>
                    <div></div>
                </div>
                <div className="gridWrap">
                    <div className="topBarWrap">
                        <div className='line'></div>
                        <div className='ball'></div>
                        <div className='ball'></div>
                    </div>
                    <div className="bottomBarWrap">
                        <div className='line'></div>
                        <div className='ball'></div>
                        <div className='ball'></div>
                    </div>
                    <ul>{data2.map(wrap2=>(
                        <li key={wrap2.id}>
                            <h4>{wrap2.title}</h4>
                            <p>{wrap2.content}</p>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Sec5;
/*
class sec5 extends Component{
    constructor(props){
        super(props);
        this.state={
            data1,
            data2
        }
    }
    render(){
        const {data1,data2}=this.state;
        return(
    <div className="sec5">
        <div className="bg1">
            <div className="sec5Wrap1">
                <h3 className="l-h3">越境ECを成功させるために<span>乗り越えたい4つの壁</span></h3>
                <ul>{data1.map(wrap1=>(
                    <li key={wrap1.id}>
                        <span></span>
                        <span>{wrap1.id}</span>
                        <div className="liWrap">
                            <i></i>
                            <div className="liWrapin">
                               <h4>{wrap1.title}</h4>
                               <hr/>
                               <p>{wrap1.content}</p>
                            </div>
                        </div>
                    </li>
                ))}
                    
                </ul>
            </div>
        </div>
        <div className="bg2">
            <div className="sec5Wrap2">
                <div className="bg2Pic">
                   <img src="img/banner_5_7.svg" alt="banner5_2"/>
                </div>
                <div className="middleBarWrap">
                    <div></div>
                    <div></div>
                </div>
                <div className="gridWrap">
                    <div className="topBarWrap">
                        <div className='line'></div>
                        <div className='ball'></div>
                        <div className='ball'></div>
                    </div>
                    <div className="bottomBarWrap">
                        <div className='line'></div>
                        <div className='ball'></div>
                        <div className='ball'></div>
                    </div>
                    <ul>{data2.map(wrap2=>(
                        <li key={wrap2.id}>
                            <h4>{wrap2.title}</h4>
                            <p>{wrap2.content}</p>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
        );
    }
}

export default sec5;*/