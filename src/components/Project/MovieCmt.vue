<template>
    <div id ="project_container">
      <div id="project_header">프로젝트-영화</div>
      <div id="project_image">
          <img src="../../image/movie(2).jpg" alt="영화" v-bind:style="{width:'300px',height:'250px'}" />
          <img src="../../image/movie(3).jpg" alt="영화" v-bind:style="{width:'600px',height:'250px'}" />
        </div> 
      <div id="project_section">
        <ul>
          <li className="middle_text">프로젝트 시작 계기</li>
          제가 생각하는 프로젝트란 거창한 것이 아닌 나의 일상생활이나
          취미의 연장선이라 생각합니다. 따라서 내가 감명깊게 본 영화의
          후기를 리엑트를 통해 만든 웹페이지로 개시하고자 해당 
          프로젝트를 진행하게 되었습니다.

          <li className="middle_text">프로젝트에 대한 설명</li>
          리엑트 시간에 배운 컴포넌트, 훅과 같이 여러 기능들을 사용하여
          감명깊게 본 영화의 후기를 웹페이지로 제작하였습니다.

          <li className="middle_text">맡은 역할</li>
          고급웹프로그래밍의 리엑트, 서버의 자바와 같이 수업시간에 배웠던 자료 그리고 인터넷을 토대로 조금씩 웹페이지를 
          구축해 나갔습니다.
        </ul>
      </div>
      <div id="project_aside">
      <br />
        웹사이트 이동
        <button @click="gotohomepage"><img src="../../image/movie.png" alt="나의 사진" v-bind:style="{width:'200px', height:'300px'}" className='img' /></button>
        (추후 프로젝트를 제작시 링크를 넣을 것)
      </div>
    </div>
</template>
<script>
export default {
  methods: {
    gotohomepage() {
      window.open('/', '_blank');
    }
  }
};
</script>
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