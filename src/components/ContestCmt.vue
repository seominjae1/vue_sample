<template>
    
    <div className="container_contest">
      <div className="header_contest">공모전입니다.</div>

      <router-link to="/contest/hackathon" className="contest1" v-bind:style="{width:'100px', height:'120px', position:'relative', left:'30%'}"><img :src="require('../image/contest_3.jpg')" alt="react" v-bind:style="{width:'100px' ,height:'120px'}"/></router-link>
      <router-link to="/contest/scpc" className="contest2" v-bind:style="{width:'100px', height:'120px', position:'relative', left:'60%'}"><img :src="require('../image/contest_4.jpg')" alt="react" v-bind:style="{width:'100px' ,height:'120px'}"/></router-link>
      
        
      <div className="main_career">
        <router-view />
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