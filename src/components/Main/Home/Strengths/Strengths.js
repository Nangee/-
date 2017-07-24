import React,{ Component } from 'react';
import { Carousel } from 'antd';
import './Strengths.css';

class Strengths extends Component {
    render(){
        return(
            <div className="Strengths">
               <div className="simpleText">
                   <span>选择我们的优势</span>
                   <p>CHOOSE OUR ADVANTAGE</p>
                   <div className="float_img"></div>
                   <div className="float_img_1">
                        <div className="float_img_"><span>就业率高</span></div>
                        <div className="float_img_e"><span>我们学校的院校设置有最好的学习设 </span></div>
                        <div className="float_img_e"><span>备，专业的指导老师，从入学到实习 </span></div>
                       <div className="float_img_e"><span>从毕业到就业，专业难题都可咨询指 </span></div>
                       <div className="float_img_e1"><span>导老师... </span></div>
                   </div>
                   <div className="float_img_2">
                       <div className="float_img_"><span>专业丰富</span></div>
                       <div className="float_img_e"><span>学院提供上百种专业供学生选择，学  </span></div>
                       <div className="float_img_e"><span>生可根据自己个人的喜好、特长来选  </span></div>
                       <div className="float_img_e"><span>择对应的专业，即使不会选择也可以  </span></div>
                       <div className="float_img_e1"><span>咨询相关的导师..</span></div>
                   </div>
                   <div className="float_img_3">
                       <div className="float_img_"><span>优质校园生活</span></div>
                       <div className="float_img_e"><span>学院在校园内举办多次社交活动，以   </span></div>
                       <div className="float_img_e"><span>此来提升学生的社交能力和公关能力  </span></div>
                       <div className="float_img_e"><span>以及面对困难的解决能力，和临时应   </span></div>
                       <div className="float_img_e1"><span>变能力...</span></div>
                   </div>
                   <div className="float_img_4">
                       <div className="float_img_"><span>提供实习条件</span></div>
                       <div className="float_img_e"><span>我们学院和多家企业有深度的合作，   </span></div>
                       <div className="float_img_e"><span>在校期间可为学生提供很多较好的实   </span></div>
                       <div className="float_img_e"><span>习机会以及提升学生的综合竞争能力    </span></div>
                       <div className="float_img_e1"><span>多种岗位可供选择...</span></div>
                   </div>
               </div>
            </div>
        )
    }
}

export default Strengths;