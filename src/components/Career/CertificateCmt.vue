<template>
    <div className="licensbackground"><br />
      <p className="text-indent font-size" >자격증 보유 목록</p><br />
      
      <table>
        <tr>
          <th className="font-size" v-bind:style="{color:'gray', width:'250px'}">  보유중인 자격증  </th>
          <th className="font-size" v-bind:style="{color:'gray', width:'250px'}">  취득 예정 자격증</th>
          <th className="font-size" v-bind:style="{color:'gray'}">이유</th>
        </tr>
        <tr>
          <td>컴퓨터활용능력 1급</td>
          <td></td>
          <td>기본적으로 엑셀과 ACCESS에 대해 심화된 내용을 습득할 수 있을 뿐더러 대졸자 중 대다수가 가지고 있는 자격증이기 때문에 취득하였습니다.</td>
        </tr>
        <br />
        <tr>
          <td>리눅스마스터 2급</td>
          <td></td>
          <td>2학년 1학기때 대체시험과목으로 선정되어 충분한 학습 끝에 실기시험을 목전에 두고 있는 자격증입니다. 해당 자격증을 토대로 저의 리눅스 실력을 뽐낼 수 있는 기회가 되길 기대합니다.</td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td>정보처리기사</td>
          <td>여러 기업에서의 가산점을 얻을 수 있을 뿐만 아니라 대학생활동안 어느 정도 공부하였는지를 알 수 있으며, 컴퓨터공학 전공자라면 필수적으로 가지고 있는 자격증이기 때문에 해당 자격증을 선별하였습니다.</td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td>토익 800점 이상</td>
          <td>컴퓨터공학과에서 외국어 능력 또한 중요하며 졸업요건 중 하나로 토익이 있기 때문에 선정하였습니다.</td>
        </tr>
      </table>
    </div>
</template>
<style>
.licensbackground {
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
  }
  .licensbackground::after {
    width: 100%;
    height: 800px;
    content: "";
    background: url("../../image/licens.jpg");
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.1;
  }
</style>