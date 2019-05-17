import  React from 'react'

import {Menu,Icon} from 'antd'
class Test extends React.Component{
    constructor(){
        super();
        
    }
    render(){
        return(
            <div id="HeadNav">
                <div className="nav-wrap">
                    <div className="nav-logo-wrap">
                        <Icon type="global" className="nav-logo" />
                    </div>
                    <div className="nav-list-wrap">
                        <Menu              
                            mode="horizontal"
                        >
                            <Menu.Item key="home">
                                首页
                            </Menu.Item>
                            <Menu.Item key="aboutme">
                                关于我
                            </Menu.Item>
                            <Menu.Item key="article">
                                文章分享
                            </Menu.Item>
                            <Menu.Item key="resource">
                                资源共享
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }
}

export default Test