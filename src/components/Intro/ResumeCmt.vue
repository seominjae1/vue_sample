<template>
    <div>
		<div id="resume_header">
			<br />
			<em id='selfintro_header'>자기소개-이력서</em>
		</div>
		<div id="resume_main">
			<h1 className='text-indent'>안녕하세요 저는 이런 사람입니다.</h1>
			저는 현재 가천대학교에서 재학 중인 서민재라고 합니다.<br />
			여러 장르의 영화를 좋아하며, 고양이를 키우는 애묘인이기도 합니다.<br />
			몇몇 공모전에 출전할 정도로 컴퓨터에 관심이 많으며<br />
			사용하는 프로젝트 언어는 리액트와 자바입니다.
			
			
		</div>
		<br />
		<div className="backgroundstyle">
			<div className='font-size text-indent'>인적사항</div>
			<table>
				<tr>
					<td>성명: 서민재</td>
					<td>학력:가천대학교</td>
					<td>이메일:tjalswoo@naver.com</td>
				</tr>
				<tr>
					<td>생년월일:2001.09.06</td>
					<td>주소:인천시 서구</td>
				</tr>
			</table>
			
		</div>
	</div>
</template>
<style>
.backgroundstyle{
  background-color: #e6dee9;
  grid-area:footer;
  width: 100%;
  height: 450px;
  border-radius: 40px;
}
#resume_main{
  grid-area:main;
  background-color:#e6dee9;
  position:relative;
  width:100%;
  height: 300px;
  border-radius: 40px;
}
.resume_header{
  grid-area:header;
  
  border-bottom-style:solid;
  border-bottom-width:10px;
  border-bottom-color:gray;
  position: relative;
  width:100%;
  height: 100px;
}
</style>