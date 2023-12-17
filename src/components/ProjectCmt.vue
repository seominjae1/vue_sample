<template>
    <div>
      <div v-bind:style="{position:'relative', width:'1000px', float:'left'}">
        <router-view />
      </div>
      <router-link to="/project/movie" v-bind:style="{position:'relative', width:'100px', height:'40px', float:'right'}">영화</router-link>
      <router-link to="/project/pet"  v-bind:style="{position:'relative', width:'100px', height:'40px', float:'right'}">반려동물</router-link>
      <router-link to="/project/washer"  v-bind:style="{position:'relative', width:'100px', height:'40px', float:'right'}">세탁기</router-link>

    </div>
</template>
