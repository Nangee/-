import React,{ Component } from 'react';
import { Carousel } from 'antd';
// import logo from './1.jpg'
import './Lunbo.css';

class Lunbo extends Component {
    render(){
        return(
            <div>
                <Carousel effect="fade" autoplay>
                    <div>
                        <img className="img" src="http://11093158.s61i.faiusr.com/2/AD0IpomlBRACGAAg7rCSywUozLbRhwEwgA842AQ.jpg" alt=""/>
                        <div className="content">
                            <span>学有所成 <a href="#"></a> 高薪就业</span>
                            <span><b><font>火热招生季</font></b></span>
                            <div><span>这里是知识的海洋和生长的乐园</span></div>
                            <img src="http://11093158.s61i.faiusr.com/4/AD0IpomlBRAEGAAg9bGSywUo_bXdbDCIBTipAg.png" alt=""/>
                            <a href="/Apply" className="middle">了解更多</a>
                        </div>
                    </div>
                    <div>
                        <img className="img" src="http://11093158.s61i.faiusr.com/2/AD0IpomlBRACGAAg97CSywUo6tPqlAUwgA842AQ.jpg" alt=""/>
                        <div className="content1">
                            <span>专岗培训</span>
                            <div><span>这里是知识的海洋和生长的乐园</span></div>
                            <span><font>助力面试 <u></u> 勇往直前</font></span>
                            <img src="http://11093158.s61i.faiusr.com/4/AD0IpomlBRAEGAAgkLSSywUo5om3-wYwwwQ4hwM.png" alt=""/>
                            <a href="/Apply" className="middle1">了解更多</a>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Lunbo;