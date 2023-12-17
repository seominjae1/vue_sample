<script setup>
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
const picked = ref(new Date())
const year=picked.value.getFullYear();
const month=picked.value.getMonth()+1;
const date=picked.value.getDate();
</script>

<template>
  <div className='Datepicker'>
    클릭 시 캘린더가 실행됩니다.
    <Datepicker v-model="picked" className="calendar"/>
    <div v-if="picked.getMonth()+1===month && picked.getDate() === date">{{year}}년 {{month}}월 {{date}}일에는 계획이 있습니다</div>
    <div v-else>{{picked.getFullYear()}}년 {{picked.getMonth()+1}}월 {{picked.getDate()}}일에는 아무 계획 없습니다.</div>
  </div>
</template>
<style scoped>
.Datepicker{
  overflow:scroll;
  width:70%;
  height:50%;
}

</style>