<template>
    <div>
      <div className="container_contest">
        <div className="header_contest middle_text">공모전-해커톤</div>
        <div className="article_contest">
          <ul>
            <li><h2>공모전 참여 계기</h2></li>
            방학 도중 나태하게 살던 저에게 해커톤을 추천한 것은 한 학우였습니다. 비록 이러한 대형 공모전이 처음이어서 많이 긴장하였지만 좋은 관계를 가진 친구의 권유 덕분에 공모전에 참가하게 되었습니다. 
            <li><h2>공모전 출품작에 대한 설명</h2></li>
            팀원들과 충분히 협의 후 자신이 들은 노래와 비슷한 노래를 추천해주는 뮤직봇을 만들기로 하였습니다. 해당 뮤직봇은 태그가 붙은 음악 중 이용자가 들은 것과 제일 유사한 음악을 추천하는 역할을 수행합니다.
            <li><h2>맡은 역할</h2></li>
            음악봇과 그 음악봇이 들어갈 앱의 디자인을 맡아 수행했습니다.
          </ul>
        </div>
        <div className="img_contest">
          <img :src="require('../../image/contest_1.jpg')" alt="react" v-bind:style="{width:'250px', height:'350px'}"/>
        </div>
      </div>
    </div>
</template>
<style>
.container_contest{
  width:100%;
  height:500px;
}
.contest1 {
  position:relative;
  left:30%;
  width:100px;
  height:120px;
}
.contest2{
  position:relative;
  left:60%;
  width:100px;
  height:120px;
}
.header_contest{
  width:100%;
  height:50px;
  opacity: 1;
  font-size:50px;
}
.article_contest{
  position: relative;
  width:60%;
  height:650px;
  float:left;
  text-indent:30px;
    background-color:#e6dee9;
    border: 1pt groove gray;
    border-radius: 40px;
}
.img_contest{
  position: relative;
  width:30%;
  height:200px;
  float:right;
}
</style>