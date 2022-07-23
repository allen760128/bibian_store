import React,{ useState } from 'react';



const Sec3=(props)=>{
    const [url, setUrl] = useState('');
    const [kaisha, setKaisha] = useState('');
    const [yourname, setYourname] = useState('');
    const [mail,setMail]=useState('');
    const [phone,setPhone]=useState('');
    const [text,setText]=useState('');
    const handleUrl=(e)=>{
        setUrl(e.target.value);
    };
    const handleKaisha=(e)=>{
        setKaisha(e.target.value);
    };
    const handleYourname=(e)=>{
        setYourname(e.target.value);
    };
    const handleMail=(e)=>{
        setMail(e.target.value);
    };
    const handlePhone=(e)=>{
        setPhone(e.target.value);
    };
    const handleText=(e)=>{
        setText(e.target.value);
    };
    return(
        <div className="apply">
            <div className="applyWrap">
                <h2 className="l-h2">今すぐお申込み</h2>
                <form action="" mothod="GET" >
                    <p className="title">ショップの URL</p>              
                <p className="content">
                    <input type="text" name="" value={url} onChange={handleUrl} placeholder="http://"  required/>
                    <span className="ok">ok</span></p>
                <p className="title">会社名</p>
                <p className="content">
                    <input type="text" name="" value={kaisha} onChange={handleKaisha} placeholder="公司名稱"  required/>
                    <span className="ok">ok</span></p>
                <p className="title">お名前</p>
                <p className="content">
                    <input type="text" name="" value={yourname} onChange={handleYourname} placeholder="姓名" required/>
                    <span className="ok">ok</span></p>
                <p className="title">メールアドレス</p>
                <p className="content">
                    <input type="email" name="" value={mail} onChange={handleMail} placeholder="電子信箱" required/>
                    <span className="ok">ok</span></p>
                <p className="title">電話番号</p>
                <p className="content">
                    <input type="text" name="" value={phone} onChange={handlePhone}  placeholder="請加上區碼或手機" required pattern="[0-9]{9,10}"/>
                    <span className="ok">ok</span></p>
                <p className="title">ご連絡時間帯</p>
                <div className="contentRa">
                    <input type="checkbox" name="" value="" className="ra"/>
                    <span>午前8-12</span><input type="checkbox" name="" value="" className="ra"/>
                    <span>午後13-18</span>
                </div>
                <p className="title">その他</p>
                <p className="content">
                    <textarea name="" value={text} onChange={handleText}  id="pb" cols="30" rows="10" placeholder="請在此處留言"></textarea></p>
                <input type="submit" id="sub" value="送信" />
                
            </form>
        </div>
    </div>
    );
}
export default Sec3;

/*class sec3 extends Component{
    constructor(props){
        super(props);
        this.state={
            url:'',
            kaisha:'',
            yourname:'',
            mail:'',
            cont:'',
            tex:''
        }
    }
    handleURL=(e)=>{
        this.setState({
            url:e.target.value
        });
    }
    handleKaisha=(e)=>{
        this.setState({
            kaisha:e.target.value
        });
    }
    handleYourname=(e)=>{
        this.setState({
            yourname:e.target.value
        });
    }
    handleMail=(e)=>{
        this.setState({
            mail:e.target.value
        });
    }
    handleCont=(e)=>{
        this.setState({
            cont:e.target.value
        });
    }
    handleTex=(e)=>{
        this.setState({
            tex:e.target.value
        });
    }
    render(){
        const {url,kaisha,yourname,mail,cont,tex}=this.state;
        return(
        <div className="apply">
            <div className="applyWrap">
                <h2 className="l-h2">今すぐお申込み</h2>
                <form action="" mothod="GET" >
                    <p className="title">ショップの URL</p>              
                <p className="content">
                    <input type="text" name="" value={url} placeholder="http://" onChange={(e)=>{this.handleURL(e)}} required/>
                    <span className="ok">ok</span></p>
                <p className="title">会社名</p>
                <p className="content">
                    <input type="text" name="" value={kaisha} placeholder="公司名稱" onChange={(e)=>{this.handleKaisha(e)}} required/>
                    <span className="ok">ok</span></p>
                <p className="title">お名前</p>
                <p className="content">
                    <input type="text" name="" value={yourname} onChange={(e)=>{this.handleYourname(e)}} placeholder="姓名" required/>
                    <span className="ok">ok</span></p>
                <p className="title">メールアドレス</p>
                <p className="content">
                    <input type="email" name="" value={mail} onChange={(e)=>{this.handleMail(e)}} placeholder="電子信箱" required/>
                    <span className="ok">ok</span></p>
                <p className="title">電話番号</p>
                <p className="content">
                    <input type="text" name="" value={cont} onChange={(e)=>{this.handleCont(e)}} placeholder="請加上區碼或手機" required pattern="[0-9]{9,10}"/>
                    <span className="ok">ok</span></p>
                <p className="title">ご連絡時間帯</p>
                <div className="contentRa">
                    <input type="checkbox" name="" value="" className="ra"/>
                    <span>午前8-12</span><input type="checkbox" name="" value="" className="ra"/>
                    <span>午後13-18</span>
                </div>
                <p className="title">その他</p>
                <p className="content">
                    <textarea name="" value={tex} onChange={(e)=>{this.handleTex(e)}} id="pb" cols="30" rows="10" placeholder="請在此處留言"></textarea></p>
                <input type="submit" id="sub" value="送信" />
                
            </form>
        </div>
    </div>
        );
    }
}

export default sec3;*/