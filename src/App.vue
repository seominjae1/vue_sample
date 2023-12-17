<template>
  <div className="background1">
    <header>
      서민재의 포트폴리오
      <br />
      나의 이야기
      <img :src="require('./image/face.jpg')" v-bind:style="{width:'130px', height:'150px', borderRadius:'50%'}" alt="나의 사진" />
    </header>
    <div className="container">
      <main className="main"> <router-view /></main>
      <nav>
        
        <router-link to="/introduction"> 나의 소개 </router-link>
        <router-link to="/project"> 프로젝트 </router-link>
        <router-link to="/contest"> 공모전 </router-link>
        <router-link to="/career"> 나의 경력 </router-link>
        <div className="blankarea" />
        <router-link to="/calendar"> 캘린더 </router-link>
        <router-link to="/"> 홈 </router-link>
        
      </nav>
      <footer>
          제작 완료일 : 2023.11.22
      </footer>
    </div>
   
  </div>
</template>

<script>
  export default {
      name: 'App',
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Hi+Melody&display=swap');
body {
  font-family: 'Hi Melody', sans-serif;
  line-height: 1.5;
  font-weight: bolder;
  font-size:25px;
  /* margin-left : 50px; */
  }
header {
  grid-area:header;
  text-align: center;
  font-size: 100px;
  margin-bottom: 50px;
  width:100%;
  height:300px;
}
#index{
  font-size: 150px;
  margin-left : 500px; 
}


nav {
  grid-area:nav;
  position: relative;
  font-family: 'Hi Melody', sans-serif;
  /* margin-left: 20px; */
  float:right;
  width:20%;
  height:950px;
  background-color: rgb(192, 170, 214);
}
main{
  position: relative;
  font-family: 'Hi Melody', sans-serif;
  /* margin-left: 20px; */
  background-color: black;
  width:80%;
  height:500px;
  float:left;
}
footer {
  position:relative;
  float:inline-end;
  width:100%;
  height:100px;
  text-align: left;
  background-color: rgb(143, 113, 167);
  color: black;
  font-size: 50px;
}
a:link, a:visited {
  background-color:#eeeeee; 
  padding: 10px 20px;
  text-decoration: none;
  display: inline-block;
  width:254px;
  
}
a:hover, a:active { 
  background-color: #fbc2eb; 
  color:white ;
  
}

button {
  font-family: 'Hi Melody', sans-serif;
  background-color: #a18cd1;
  color: white ;
  
  cursor: pointer;
  transition-duration: 1s;
}
button:hover {
  background-color: #fbc2eb;
  color: white;
}

.nav{
  grid-area:nav;
}
.main{
  border-radius: 40px;
  background-image: linear-gradient(to top, #a18cd1 0%, #ffffff 100%);
  height:900px;
  z-index:0;
}
.background1{
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  width:100%;
  height:1300px;
}
.text-indent{
  text-indent: 30px;;
}
.font-size{
  font-size: 40px;
}
.blankarea{
  width:20%;
  height:600px;
  float:right;
}
article{
  width:20%;
  float:right;
  height:700px;
}
</style>