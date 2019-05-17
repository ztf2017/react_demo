import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import LoginUser from './layouts/LoginUser/LoginUser';
export default class RouterWrap extends React.Component{
    render(){
        return(
            <div id="router">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={LoginUser} exact/>
                        <Route path="/home" component={DefaultLayout} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}