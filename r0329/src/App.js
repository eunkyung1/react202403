import React, { useState } from "react";
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [ 파이, d] = useState('파이썬독학');
  let [logo,setLogo] = useState('ReactBlog'); 


  let num = [1,2];
  //let [a,c] = [1,2];
  
  //let a = num[0];
  //let c = num[1];

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red',fontSize:'16px'}}>{logo}</h4>
      </div>
      <div className="list">
        <h4>{글제목}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{강남}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{파이}</h4>
        <p>2월 17일 발행</p>
      </div>
      
    </div>
  );
}

export default App;
  