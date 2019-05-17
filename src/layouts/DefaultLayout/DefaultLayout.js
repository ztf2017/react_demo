import React from 'react';
import './DefaultLayout.less';
import HeadNav from '../../common/HeadNav/HeadNav';
import DefaultFoot from '../../common/DefaultFoot/DefaultFoot';
import {Route} from 'react-router-dom';
import Home from '../../routes/Home/Home';
import About from '../../routes/About/About';
import Article from '../../routes/Article/Article';
import Resource from '../../routes/Resource/Resource';
export default class DefaultLayout extends React.Component{
    render(){
        return(
            <div id="DefaultLayout">
                  < HeadNav />
                  <div className="content-wrap">
                  
                            <Route path={this.props.match.url+'/'} component={Home} exact/>
                            <Route path={this.props.match.url+'/about'}  component={About} />
                            <Route path={this.props.match.url+'/article'}  component={Article} />
                            <Route path={this.props.match.url+'/resource'}  component={Resource} />
                  </div>
                  < DefaultFoot />
            </div>
        )
    }
}