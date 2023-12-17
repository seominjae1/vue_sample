<template>
    <div id ="selfIntro_container">
      <div id="selfintro_header">자기소개</div>
      <div id='blank'></div>
      <div id="selfintro_section">
        <ul>
          <li className="middle_text">성장 과정</li>
           저는 어렸을 때부터 잦은 이사로 여러 지역을 옮겨갔습니다. 
           이 과정에서 각기 다른 집단에 녹아드는 법을 배워 이를 통해
           입사 후에도 조직에 융화되어 훌륭한 성과를 거두겠습니다. 
          <li className="middle_text">지원 동기</li>
          제가 생각하는 저의 회사 모습은 현실에 안주하지 않고 지속적인
          노력과 발전을 꾀하는 모습입니다. 귀사는 다양한 방면으로 발전
          과 탈태를 하고 있으므로 이에 제가 생각하는 이상적인 회사 모습
          에 부합하다 판단, 해당 회사를 지원하게 되었습니다.
          <li className="middle_text">본인 성격의 장/단점</li>
          제가 생각하는 저의 성격으로는 몰입이 있습니다. 
          프로젝트와 같이 대형으로 시간과 관심을 요하는 일에는 그 일에 
          메몰될 만큼 한가지 일에 집중하는 경향이 제 강점이라 생각합니다.
          다만 한 가지 일에만 집중하다 보니 좁은 시야각으로 실수하는 경우가
          많은 점이 단점이라 생각합니다.
          <li className="middle_text">입사 후 포부</li>
          제가 입사를 하게 된다면 조직 생활에 융화되어 장점을 극대화하고 
          단점을 최소화하는 인재가 되겠습니다, 감사합니다.
        </ul>
      </div>
      <div id="selfintro_aside">
        <img src="../../image/person.png" alt="나의 사진" v-bind:style="{width:'200px' ,height:'260px'}" />
      </div>
    </div>
</template>
<style>
#selfIntro_container{
  display:grid;
  grid-template-columns: 1fr 150px;
  grid-template-rows: 100px 100px 750px ;
  grid-template-areas: 
      "header header"
      "image image"
      "section aside";
}

#border{
  border: 3pt groove black;
}
#selfintro_header{
  grid-area:header;
  font-size:2.5em;
  border-bottom-style:solid;
  border-bottom-width:3px;
  border-bottom-color:gray;
}
#selfintro_section{
  grid-area:section;
  text-indent:30px;
  background-color:#e6dee9;
  border: 1pt groove gray;
  border-radius: 40px;
}
#selfintro_aside{
  grid-area:aside;
}
#selfintro_image{
  grid-area:image;
  padding:20px;
}
.middle_text{
  font-size:2em;
}

</style>