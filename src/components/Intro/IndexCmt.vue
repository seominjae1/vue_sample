<template>
    <div>
      <h1 id="selfintro_header">서민재의 포트폴리오에 오신 것을 환영합니다!</h1><br />
      저를 한 문장으로 표현하자면?<br />
      <div className='middle_text'>저는 {{whoami[currentword]}}입니다.</div><br />
      <div><img :src='image[currentword]' alt="사진" className="index_image" /></div>
      <button id="index_button" @click="gotonext">다음 문장</button>
      <p className='middle_text'>{{describe[currentword]}}</p>
      저에 대해 더 자세히 알고싶다면 우측 버튼을 통해 진입해 주세요!
      
    </div>
</template>
<script>
export default {
  data() {
    return {
      whoami: ["미래의 프로그래머", "가천대학생", "애묘가", "영화광"],
      describe: [
        "자바와 리엑트를 주로 사용하는 미래의 프로그래머입니다.",
        "가천대학교 컴퓨터공학과 20학번 학생입니다.",
        "한 마리 고양이의 책임감있는 주인입니다.",
        "여러 종류의 영화를 좋아하고 섭렵하는 영화광입니다.",
      ],
      image: [
        require('../../image/index1.jpg'),
        require('../../image/index2.jpg'),
        require('../../image/index3.jpg'),
        require('../../image/index4.jpg')
      ],
      currentword: 0,
    };
  },
  methods: {
    gotonext() {
      this.currentword = (this.currentword + 1) % this.whoami.length;
    },
  },
};
</script>
<style scoped>
#toggle_button{
    width:150px;
    height:80px;
    background-color: #a18cd1;
    font-size:40px;
}
.index_image{
    position:relative;
    width:500px;
    height:400px;
    float:right;
    border-radius: 50%;
}
button{
  padding: 10px 10px 10px 10px;
  margin: 20px; 
  font-size: 2em;
}
</style>