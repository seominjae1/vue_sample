<template>
    <div>
        <div v-if="id==='aaaa' && pwd==='1111'">
            <div class="container_introduction">
                <router-link to="/introduction/resume" className="button1" v-bind:style="{width:'120px', height:'40px', position:'relative', gridarea:'main'}">이력서</router-link>
                <router-link to="/introduction/selfintro" className="button2" v-bind:style="{width:'120px', height:'40px', position:'relative', gridarea:'main'}">자기소개서</router-link>
                <router-view className="main1"></router-view>
            
                
            </div>
        </div>
        <div v-else>
            <div v-bind:style="{width:'1fr'}">
                <div class="logintext">
                    <div class="bigText" id="selfintro_header" style="height: 100px;">
                     로그인<br />
                    </div>
                    인적사항을 보기 위해선 아이디와 비밀번호를 입력해 주십시오.
                </div>
                <table align="center" class="logininput">
                    <tr>
                        <td style="width: 100px;">아이디</td>
                        <td>
                            <input type="text" class="blank" size="12" v-model="id" @input="changeId" />
                        </td>
                    </tr>
                    <tr>
                    <td>비밀번호</td>
                        <td>
                            <input type="password" class="blank" size="12" v-model="pwd" @input="changePwd" />
                        </td>
                    </tr>
                </table>
                <div class="bigText backgroundstyle_opa loginform">인적사항</div>
            </div>
        </div>
    </div>

    
</template>

<script>
export default {
  data() {
    return {
      id: '',
      pwd: '',
    };
  },
  methods: {
    changeId(event) {
      this.id = event.target.value;
    },
    changePwd(event) {
      this.pwd = event.target.value;
    },
  },
};
</script>

<style>

.main1{
    grid-area:main;
}
.button1{
    grid-area:button1;
    
}
.button2{
    grid-area:button2;
    
}
.container_introduction {
    display: grid;
    grid-template-columns: 1fr 120px;
    grid-template-rows: 40px 1fr;
    grid-template-areas: 
      "main button1"
      "main button2";
  }

</style>
