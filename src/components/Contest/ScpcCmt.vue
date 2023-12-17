<template>
    <div className="container_contest">
        <div className="header_contest middle_text">공모전-SCPC</div>
        <div className="article_contest">
          <ul>
            <li><h2>공모전 참여 계기</h2></li>
            지난 공모전 후 코딩을 더 잘하고 싶다는 욕심이 들어 코딩과 알고리즘 실력을 끌어올릴 수 있는 SCPC에 참여하기로 마음먹었다.
            <li><h2>공모전 출품작에 대한 설명</h2></li>
            SCPC는 삼성에서 주관하는 대학생 프로그래밍 경진대회로 알고리즘 문제를 해결한 후 소스코드를 제출하면 되는 대회입니다.
            <li><h2>맡은 역할</h2></li>
            해당 공모전에서 내가 맡은 알고리즘 문제를 보고 그 문제에 대한 알맞은 분석방법을 코딩하여 제출하였습니다.
          </ul>
        </div>
        <div className="img_contest">
          <img :src="require('../../image/contest_2.jpg')" alt="react" v-bind:style="{width:'250px', height:'350px'}"/>
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