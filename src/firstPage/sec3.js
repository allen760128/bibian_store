import React from 'react';
import Btny from '../common/btny';

const sec3=(props)=>{
    return(
        <div className='sec3'>
            <div className="sec3Wrap">
                <h3>国内販売と同じ流れで今すぐ始める台湾出店!</h3>
                <div className='sec3ImgWrap'>
                    <img src="img/banner_3_2.png" alt="banner3"/>
                    <div className="sec3Fee">
                    <ul>
                        <li>申し込み料金<span>０</span>円</li>
                        <li>月額料金<span>０</span>円</li>
                    </ul>
                </div>
                </div>
                 <h3 className="l-h3 b3h32"><span>気軽な相談だけでもOK！</span>台湾特化型の越境EC</h3>
                <Btny/>
            </div>
        </div>
    );
}

export default sec3;