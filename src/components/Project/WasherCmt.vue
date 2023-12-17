<template>
    <div id ="project_container">
      <div id="project_header">프로젝트-세탁기</div>
      <div id="project_image">
          <img src="../../image/washer(2).jpg" alt="세탁기" v-bind:style="{width:'300px',height:'250px'}" />
          <img src="../../image/washer(3).jpg" alt="세탁기" v-bind:style="{width:'600px',height:'250px'}" />
        </div> 
      <div id="project_section">
        <ul>
          <li className="middle_text">프로젝트 시작 계기</li>
          기숙사에 살다 보면 세탁기 자리가 전부 차 빨래를 미뤄야 
          하는 경우가 종종 생깁니다. 이러한 일상 속 불편함을 해결하기
           위해 세탁기가 작동중인지 파악하는 앱을 제작하였습니다.


          <li className="middle_text">프로젝트에 대한 설명</li>
          먼저 세탁기가 작동중인지 확인하기 위해 진동 센서를 두어 
          감지를 시작하였고 세탁기가 진동을 멈추면 세탁이 끝났다는 
          신호를 보내 웹페이지에 연동되도록 제작하였습니다.


          <li className="middle_text">맡은 역할</li>
          웹 페이지에 연동되도록 하는 데 필요한 기술을 공부하였고 
          또한 프록시 서버를 공부하여 팀에서 맡은 바를 다하였습니다.

        </ul>
      </div>
      <div id="project_aside">
     <br />
        웹사이트 이동
        <button @click="gotohomepage"><img :src="require('../../image/washer.png')" alt="나의 사진" v-bind:style="{width:'200px', height:'300px'}" className='img' /></button>
        (추후 프로젝트를 제작시 넣을 것)
        
      </div>
    </div>
</template>
<style>
#project_container{
    display:grid;
    grid-template-columns: 1fr 150px;
    grid-template-rows: 100px 300px 550px ;
    grid-template-areas: 
        "header header"
        "image image"
        "section aside";
}
#border{
  border: 3pt groove black;
}
#project_header{
  grid-area:header;
  font-size:2.5em;
  border-bottom-style:solid;
  border-bottom-width:3px;
  border-bottom-color:gray;
}
#project_section{
  grid-area:section;
  text-indent:30px;
  background-color:#e6dee9;
  border: 1pt groove gray;
  border-radius: 40px;
}
#project_aside{
  grid-area:aside;
}
#project_image{
  grid-area:image;
  padding:20px;
}
.middle_text{
  font-size:2em;
}
.img:hover{
  opacity: 0.3;
}
</style>