import React, { Component } from 'react';
import './Dazhong.css';
import logo from '../img/lxxogo.png'
class End extends Component {
  render() {
    return (
      <div className="lxxbottom">
        <div className="lbc">
           <div className="lbcl">
          <a href="/Campus"><img src={logo}/></a>
           </div>
           <div className="lbcr">
            <h1>做自己梦想的领跑者。</h1>
            <p>抓紧时间赶紧加入职业技术学院，为自己的未来多争取一秒！</p>
           </div>
        </div>
      </div>
    );
  }
}

export default End;
