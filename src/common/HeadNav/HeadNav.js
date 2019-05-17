import React from 'react';
import {Menu,Icon} from 'antd';
import './HeadNav.less';
import {Link} from 'react-router-dom';
export default class HeadNav extends React.Component{
    state={
        current:'home',
    }
    handleClick=(e)=>{
        console.log(e)
        this.setState({
            current:e.key
        })
    }
    render(){
        return(
            <div id="HeadNav">
                <div className="nav-wrap">
                    <div className="nav-logo-wrap">
                        <Icon type="global" className="nav-logo"/>
                    </div>
                    <div className="nav-list-wrap">
                    <Menu mode="horizontal"  onClick={this.handleClick}>
                         <Menu.Item key="home" >
                            <Link to="/home" >首页</Link>
                        </Menu.Item>
                         <Menu.Item key="aboutme" >
                            <Link to="/home/about" >关于我</Link>
                        </Menu.Item>
                         <Menu.Item key="article" >
                            <Link to="/home/article" > 文章分享</Link>
                         </Menu.Item>
                         <Menu.Item key="resource" >
                            <Link to="/home/resource" > 资源共享</Link>
                         </Menu.Item>
                    </Menu>   
                </div>
                </div>
                
            </div>
        )
    }
   
}