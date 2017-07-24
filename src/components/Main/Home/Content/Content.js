import React,{ Component } from 'react'
import './Content.css'
class Content extends Component {

    componentDidMount=function () {
       var content=document.getElementById('content-c');

    };


    render(){
        return(
            <div className="content-c" id="content-c">
                <div className="img-m">
                    <h1>选择学校时是否会遇到以下问题? </h1>
                    <p>WHEN YOU CHOOSE A SCHOOL,YOU WILL HAVE A PROBLEM</p>
                    <div className="module1">
                        <div className="fk-editor">
                            <span>01</span>
                            <div><b>学校的专业如何？</b></div>
                            <div><s>&nbsp;从技术和产业发展的角度来说，</s></div>
                            <div><s>今后几年我国将大力发展6大技</s></div>
                            <div><s>术领域</s></div>
                        </div>
                    </div>
                    <div className="module2">
                        <div className="fk-editor">
                            <span>02</span>
                            <div><b>就业前景如何？</b></div>
                            <div><s>很多学校都会说本校的师资如</s></div>
                            <div><s>何庞大，外教入驻教学之类的</s></div>
                            <div><s>但实际上并不是那么回事</s></div>
                        </div>
                    </div>
                    <div className="module3">
                        <div className="fk-editor">
                            <span>03</span>
                            <div><b>学校的专业如何？</b></div>
                            <div><s>&nbsp;从技术和产业发展的角度来说，</s></div>
                            <div><s>今后几年我国将大力发展6大技</s></div>
                            <div><s>术领域</s></div>
                        </div>
                    </div>
                    <div className="module4">
                        <div className="fk-editor">
                            <span>04</span>
                            <div><b>学生就业率如何？</b></div>
                            <div><s>&nbsp;据人力资源和社会保障部数据，</s></div>
                            <div><s>显示 ，统招大学毕业生将越来</s></div>
                            <div><s>越难就业</s></div>
                        </div>
                    </div>
                    <div className="module5">
                        <div className="fk-editor">
                            <span>05</span>
                            <div><b>学校地理位置如何？</b></div>
                            <div><s>学校的地理位置会影响到交通是</s></div>
                            <div><s>否方便以及学生的学习环境，很 </s></div>
                            <div><s>多学校都会说位置好</s></div>
                        </div>
                    </div>
                    <div className="module6">
                        <div className="fk-editor">
                            <span>06</span>
                            <div><b> 教育设施设备？</b></div>
                            <div><s>据人力资源和社会保障部数据</s></div>
                            <div><s>显示 ，统招大学毕业生将越来 </s></div>
                            <div><s> 越难就业</s></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Content;