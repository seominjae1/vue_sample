<template>
    <div className='bookbackground'>
        <p className="text-indent font-size" >목표 학점</p><br />
        <img :src="require('../../image/career_1.png')" alt="성적" v-bind:style="{width:'60%', height:'300px'}" />
        <div>'학점은 낮아서는 좋을 게 없다' 제가 아는 선배께 들은 이야기입니다. 저 또한 현재 제가 목표로 하는 학점을 꾸준히 유지하면서 학점 상승을 꾀하기 보단 눈을 옆으로 돌려 다양한 대외활동에 초점을 맞춘 대학생활을 계획해나가겠습니다.</div>
    </div>
</template>
<style>
.bookbackground {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
  }
.bookbackground::after {
    width: 100%;
    height: 700px;
    content: "";
    background: url("../../image/book.jpg");
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.3;
}
</style>