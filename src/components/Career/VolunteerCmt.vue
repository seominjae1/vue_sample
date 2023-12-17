<template>
    <div className="volunteerbackground">
      <p className="text-indent font-size" >나만의 봉사 경험</p><br />
      <div id="bldtext">
        <ul>
          <li>헌혈</li>
          저희 집안의 특이한 관례로 아버지께서는 헌혈을 많이 하셔 상까지 받으신 분이십니다. 이런 기조를 보고 올해부터 헌혈을 시작한 저는 혈장 헌혈과 전혈 둘 다 하였으며 앞으로도 주기적으로 헌혈을 지속하여 피가 부족하신 분께 봉사하며 살아갈 것입니다.

        </ul>
      </div>
      <div id="bldimg">
        <img :src="require('../../image/bld.jpg')" alt="헌혈" />
      </div><br />
      
      <div id="bldtext">
        <ul>
          <li>상담센터 봉사</li>
          올해 초 상담센터에 봉사를 나가 청소를 하거나 서류를 정리하는 등과 같이 한 사람의 일손으로 봉사하였습니다. 상담센터에서 봉사를 하며 느꼈던 것은 의외로 멀쩡해 보이는 사람 또한 그들 자신만의 고통을 가지고 있다는 것과 이러한 사람들 또한 수렁에서 일어나고자 하는 욕구를 가진다는 점이었습니다. 이는 곳 저에게 아무리 잘나 보이는 사람일 지라도 저마다의 아픔을 가지고 있음을 상기시켜주게 되었습니다.

        </ul>
      </div>
      <div id="bldimg">
        <img :src="require('../../image/consult.jpg')" alt="상담" id="bldimg" />
      </div>
    </div>
</template>
<style>
#bldtext{
    position: relative;
    width:60%;
    height:250px;
    float:left;
}
#bldimg{
    position: relative;
    width:30%;
    height:220px;
    border-radius: 50%;
    float:right;
    overflow: hidden;
    padding-top:30px;
}
#bldimg img{
    position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.volunteerbackground {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
  }
.volunteerbackground::after {
    width: 100%;
    height: 800px;
    content: "";
    background: url("../../image/volunteer_background.jpg");
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.3;
  }
</style>