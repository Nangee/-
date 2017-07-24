import React,{Component} from 'react';
import './Campus.css';
class Campus extends Component{
    render(){
        return(
        	<div>
        	     {/*banner部分*/}
           		 <div className="Campus"></div>
           		    {/*内容开始*/}
                    <div className="Campucter">
                      <div  className="Campcter">
                        <div className="Camptitle">
                          <b>在线报名</b>
                          <p>ONLINE REGISTRATION</p>
                        </div>
                        <div clasName="Campcen">
                          <div className="Campcleft">
                           <img src="http://11093158.s61i.faiusr.com/4/AD0IpomlBRAEGAAgtbrZvgUo4LG_qAUwlwU40AM.png"/>
                          </div>
                          <div className="Campcright">
                           <div className="Campcrt">
                           <p>填表说明：</p>
                           <p>1.后面添加 “*” 为必填内容，请填写完整</p>
                           <p>2.招生办将在收到报名表2日内与您联系确认入学时间</p>
                           </div>
                            <div className="Campcrb">
                           <p>您的姓名</p>
                           <input type="text"/>*
                           </div>
                           <div className="Campcrb">
                           <p>联系电话</p>
                           <input type="text"/>*
                           </div>
                           <div className="Campcrb">
                           <p>毕业学校</p>
                           <input type="text"/>*
                           </div>
                           <div className="Campcrb">
                           <p>家庭地址</p>
                           <input type="text"/>*
                           </div>
                           <div className="btn">
                             <button>提交</button>
                           </div>
                          </div>
                        </div>
                        
                       </div>
                    </div>
                    {/*内容结束*/}
            
            	
            </div>
        )
    }
}
export default Campus;