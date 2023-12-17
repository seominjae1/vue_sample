import { createWebHistory, createRouter } from "vue-router";
import IndexCmt from "@/components/Intro/IndexCmt.vue";
import IntroductionCmt from "@/components/IntroductionCmt.vue";
import ProjectCmt from "@/components/ProjectCmt.vue";
import ContestCmt from "@/components/ContestCmt.vue";
import CareerCmt from "@/components/CareerCmt.vue";
import CalendarCmt from "@/components/CalendarCmt.vue";

import ResumeCmt from "@/components/Intro/ResumeCmt.vue";
import SelfintroCmt from "@/components/Intro/SelfintroCmt.vue";

import MovieCmt from "@/components/Project/MovieCmt.vue";
import PetCmt from "@/components/Project/PetCmt.vue";
import WasherCmt from "@/components/Project/WasherCmt.vue";

import HackathonCmt from "@/components/Contest/HackathonCmt";
import ScpcCmt from "@/components/Contest/ScpcCmt";

import CertificateCmt from "@/components/Career/CertificateCmt.vue";
import VolunteerCmt from "@/components/Career/VolunteerCmt.vue";
import StudyCmt from "@/components/Career/StudyCmt.vue";

const routes = [    // 라우터 설정
  {
    path: "/",               // 라우터
    component: IndexCmt,
  },
  {
    path: "/introduction",       // touter
    component: IntroductionCmt,
    children: [
      {path: '/introduction', component:ResumeCmt},
      {path: '/introduction/resume', component:ResumeCmt},
      {path: '/introduction/selfintro', component:SelfintroCmt}
      
      
    ]
    
  },
  {
    path: "/project",       // touter
    component: ProjectCmt,
    children: [
      {path: '/project', component:MovieCmt},
      {path: '/project/movie', component:MovieCmt},
      {path: '/project/pet', component:PetCmt},
      {path: '/project/washer', component:WasherCmt}
    ]
  },
  {
    path: "/contest",       // touter
    component: ContestCmt,
    children: [
      {path: '/contest', component:HackathonCmt},
      {path: '/contest/hackathon', component:HackathonCmt},
      {path: '/contest/Scpc', component:ScpcCmt}
    ]
  },
  {
    path: "/career",       // touter
    component: CareerCmt,
    children: [
        {path: '/career', component:CertificateCmt},
        {path: '/career/certificate', component:CertificateCmt},
        {path: '/career/volunteer', component:VolunteerCmt},
        {path: '/career/study', component:StudyCmt}
    ]
  },
  {
    path: "/calendar",       // touter
    component: CalendarCmt,
  },
];

const router = createRouter({  // 라우트 생성
  history: createWebHistory(),
  routes,
});

export default router;
