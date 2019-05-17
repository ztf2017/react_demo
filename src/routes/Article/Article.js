import React, { Component } from 'react';
import axios from 'axios'
import './Article.less'
export default  class Article extends Component {
  constructor(props){
    super(props)
    this.state={
      data:{}
    }
    this.postData('http://localhost:3003/news');
  }
  componentWillMount (){
  
    
  }

 postData=(url)=>{
   const _this=this;
  
  axios({
    method:'get',
    url:url,
    responseType:'stream'
  }).then(function(response) {
   
    _this.setState({
      data:response.data
    })
    
  });
}

 
  render() {
    return (
        <div className="Article">
            <ul>
              {
                this.state.data.length&&
                this.state.data.slice(1,20).map((item)=>{
                    return (
                      <li key={item.id}>
                        <h1> {item.title}</h1>
                          <p>{item.desc}</p>
                      </li>
                    )
                })
              }
            </ul>
        </div>
        
    );
  }
  
}



