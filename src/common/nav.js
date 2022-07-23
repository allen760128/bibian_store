import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const Nav=(props)=>{
    const [open,setOpen]=useState(false);
    const [active1,setActive1]=useState(false);
    const [active2,setActive2]=useState(false);
    const handleclick=()=>{
        setOpen(!open);
        setActive1(!active1);
        setActive2(!active2);
    };
    const md=document.getElementsByClassName('model')[0];
    window.onclick=(e)=>{
        if(e.target==md){
            setOpen(!open);
            setActive1(!active1);
            setActive2(!active2);
        }
    }
    const ch1=props.ch1;
    const ch2=props.ch2;
    const ch3=props.ch3;
    const toggle={right:open?0:-300+'px'};
    const active1toggle=active1?'xx active':'xx';
    const active2toggle=active2?'model active3':'model';

    return(
        <div>
        <div className="header">
            <h1 className="logo">
                <Link to="/"><img src="img/bibianlogo.svg" alt="logo"/></Link>
            </h1>
            <div className={active1toggle} onClick={handleclick}>
                <span className="xx_1"></span>
                <span className="xx_2"></span>
                <span className="xx_3"></span>
            </div>
            <div className="nav" style={toggle}>
                <ul>
                    <li><Link to='/' style={ch1}>トップ</Link></li>
                    <li><Link to='/free' style={ch2}>お申し込み</Link></li>
                    <li><Link to='/intro' style={ch3}>会社概要</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                </ul>
            </div>
        </div>
        <div className={active2toggle}></div>
    </div>
    );
}

export default Nav;

/*
class nav extends Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
            active1:false,
            active2:false
        }
    }
    componentDidMount(){
        const md=document.getElementsByClassName('model')[0];
        window.onclick=(e)=>{
            if(e.target==md){this.setState({
                open:false,
                active1:false,
            active2:false
            });}
        }
    }
    handleclick=()=>{
        this.setState({
            open:!this.state.open,
            active1:!this.state.active1,
            active2:this.state.active2?false:true
        })
    }
    render(){
        const ch1=this.props.ch1;
        const ch2=this.props.ch2;
        const ch3=this.props.ch3;
        const {open,active1,active2}=this.state;
        const toggle={right:open?0:-300+'px'};
        const active1toggle=active1?'xx active':'xx';
        const active2toggle=active2?'model active3':'model';
        return(
            <div>
                <div className="header">
                    <h1 className="logo">
                        <Link to="/"><img src="img/bibianlogo.svg" alt="logo"/></Link>
                    </h1>
                    <div className={active1toggle} onClick={()=>{this.handleclick()}}>
                        <span className="xx_1"></span>
                        <span className="xx_2"></span>
                        <span className="xx_3"></span>
                    </div>
                    <div className="nav" style={toggle}>
                        <ul>
                            <li><Link to='/' style={ch1}>トップ</Link></li>
                            <li><Link to='/free' style={ch2}>お申し込み</Link></li>
                            <li><Link to='/intro' style={ch3}>会社概要</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={active2toggle}></div>
            </div>
        );
    }
}
export default nav;*/