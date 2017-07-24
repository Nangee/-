import React,{Component} from 'react';
import './Referral.css';
import Finally from '../Conter/Finally';
import Substance from '../Conter/Substance';
class Referral extends Component{
    render(){
        return(
            <div>
                {/*  Banner  */}
                    <div className="LJN_main_referral"></div>
                {/*  Banner  */}
                    <Finally/>
                <div className="LJN_fullmeasureOuterContent ">
                    <span>十年教育，高端专注。快来职业技术学院体验不同的人生，为您梦想插上翅膀</span>
                </div>
                    <Substance/>
            </div>
        )
    }
}
export default Referral;