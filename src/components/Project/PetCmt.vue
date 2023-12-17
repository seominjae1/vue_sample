<template>
    <div id ="project_container">
    <div id="project_header">프로젝트-반려동물</div>
    <div id="project_image">
          <img :src="require('../../image/pet(2).jpg')" alt="동물" v-bind:style="{width:'300px',height:'250px'}" />
          <img :src="require('../../image/pet(3).png')" alt="동물" v-bind:style="{width:'600px',height:'250px'}" />
        </div> 
    <div id="project_section">
      <ul>
        <li className="middle_text">프로젝트 시작 계기</li>
        처음 프로젝트를 시작할 때 어떤 식으로 시작할 지 막막했습니다.
         그러던 중 자신의 관심사와 관련된 프로젝트를 수행하는 것이 
         어떨까 생각하여 반려동물을 자랑하는 기능을 담은 앱을 제작하였습니다.


        <li className="middle_text">프로젝트에 대한 설명</li>
        1인가구 증가 추세에 따른 반려동물시장 확대는 우리 사회에 있어
         중대한 변화를 가져왔습니다. 
         반려동물을 다른 사람들과 공유하고 동물을 키우는 데 있어 
         필수적인 지식을 공유하는 플랫폼이 존재하면 좋겠다는 생각이 
         들어 해당 앱을 만들게 되었습니다.


        <li className="middle_text">맡은 역할</li>
        앱을 제작하는 데 자바가 쓰인다는 사실을 깨닫고 교재와
        웹사이트를 통해 어플리케이션을 성공적으로 제작하였습니다.

      </ul>
    </div>
    <div id="project_aside">
    <br />
        웹사이트 이동
        <button @click="gotohomepage"><img :src="require('../../image/pet.png')" alt="나의 사진" v-bind:style="{width:'200px', height:'300px'}" className='img' /></button>
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
    grid-template-rows: 100px 300px 600px ;
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