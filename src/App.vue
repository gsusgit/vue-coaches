<template>
  <main class="grid grid-cols-2 max-w-6xl mx-auto m-5">
    <coaches-list-view
      :coaches="activeCoaches"
      @list-projects="selectCoach"
    ></coaches-list-view>
    <projects-list-view :coach="selectedCoach"></projects-list-view>
  </main>
</template>

<script setup>
import { ref } from 'vue'

import DATA from './data/data.js'

import CoachesListView from './pages/CoachesListView.vue'
import ProjectsListView from './pages/ProjectsListView.vue'

const selectedCoach = ref(null)
const activeCoaches = DATA

const selectCoach = (id) => {
  selectedCoach.value = activeCoaches.find((coach) => coach.id === id)
}
</script>
