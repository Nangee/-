import React,{Component} from 'react';
import Conter from './Conter';
import Xc from './Xc'
import Jy from './Jy'
class Apply extends Component{
    render(){
        return(
            <div className="apply">
            <Conter/>
            <Xc/>
            <Jy/>
            </div>
        )
    }
}
export default Apply;