<template>
    <div class="chef-card" @click="$emit('select')">
      <h3>{{ chef.name }}</h3>
    </div>
  </template>
  
  <script lang="ts" setup>
  import {  defineProps } from 'vue'
  
  const props = defineProps<{
    chef: { id: number; name: string; }
  }>()
  
  </script>
  
  <style scoped>
  .chef-card {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    cursor: pointer;
  }
  </style>