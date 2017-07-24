import React, { Component } from 'react';
import './Dazhong.css';
import logo from '../img/g.png';
import logot from '../img/bg.png';
import logos from '../img/zhu.png';
class Finally extends Component {
  render() {
    return (
    	<div className="lfinally">
      <div className="lends">
    				<div className="lendt">
        			<h1>我们的校园资讯</h1>
      			 	<p>OUR CAMPUS INFORMATION</p>
       			</div >
       			<div className="lendsb">
       			 <div className="lendsl">
       			  <img src={logos}/>
       			   <img src={logot}/>
       			    <img src={logo}/>
       			 </div>
       			<div className="lendsr">
       			<div className="lendsrc"></div>
       			<div className="lendsrnd">
       			  <a href="javaStart:;">我院被全国创新教育名校联盟，誉为”百强名校“</a>
              <p>校园心理节是我校心理健康教育的一项传统活动，通过形式多样的途径，为孩子们创设丰.</p>
       			</div>
       			 <div className="lendsrn">
       			 	<div className="le"></div>
       			  <a href="javaStart:;">我院被全国创新教育活动组委会，誉为”全国创新教育实验基地“</a>
              <p>校园心理节是我校心理健康教育的一项传统活动，通过形式多样的途径，为孩子们创设丰.</p>
       			</div>
       			<div className="lendsrn">
       			  <div className="ler"></div>
       			  <a href="javaStart:;">我院被全国企业创新成果案例审定委员，誉为”最具自主创新“</a>
              <p>校园心理节是我校心理健康教育的一项传统活动，通过形式多样的途径，为孩子们创设丰.</p>
       			</div>

       			</div>
       			</div>
       		</div>
      </div>
    ); 	
  }
}

export default Finally;
