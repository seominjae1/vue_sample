<template>
    <div className="container_career">
    <div className="main_career">
      <div> <router-view /></div>
    </div>
    <router-link to="/career/certificate" className="button1_career"> 자격증 </router-link>
    <router-link to="/career/volunteer" className="button2_career"> 봉사 활동 </router-link>
    <router-link to="/career/study" className="button3_career"> 학업 </router-link>  
    </div>
</template>

<style>
.container_career{
  display: grid;
    grid-template-columns: 1fr 100px;
    grid-template-rows: 40px 40px 40px;
    grid-template-areas: 
      "main button1"
      "main button2"
      "main button3";
}
.button1_career{
  grid-area:button1;
 width:30px;
 height:20px;
}
.button2_career{
  grid-area:button2;
  width:30px;
 height:20px;
}
.button3_career{
  grid-area:button3;
  width:30px;
 height:20px;
}

.main_career{
  grid-area:main;
  
}
</style>