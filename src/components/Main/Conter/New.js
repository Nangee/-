import React, { Component } from 'react';
import './Dazhong.css';
 import log from '../img/log.png';
class New extends Component {
  	render() {
    	return (
    		<div className="lNew">
      	    	<div className="lxxNew">
                 	<div className="ltitle">
        			    <h1>我们师资团队</h1>
      			        <p>OUR TEAM OF TEACHERS</p>
       				</div>
                   <div className="lconter">
       			 <div className="lconterl">
       			 <span>目前拥有200名20多年的教学经验，业务精通，知识渊博。教学中诙谐幽默，能将教学内容与当前实际相结合，在教学中经常用诱导、询问的方式提问，增强学生分析问题、辩解题目的能力。能使广大英语学员在听，说，读，写，译，方面得到快速提高，教学风趣幽默，善于和学员互动交流。讲授细腻详尽，激励式授课过程能够极大增强学生学习信心致力于让学员在轻松快乐的氛围中理解掌握英语知识。</span>
       			 </div>
       			 <div className="lconterr">
       			   <img src={log}/>
       			 </div>
       			</div>
      			</div>
      		</div>
   		 ); 
  	}
}

export default New;
	