<template>
    <div class="chef-card" @click="handleClick">
      <h3>{{ chef.name }}</h3>

    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    chef: {
      type: Object,
      required: true,
    },
  })
  
  const emit = defineEmits(['select'])
  
  const handleClick = () => {
    emit('select', props.chef.id)
  }
  </script>
  
  <style scoped>
  .chef-card {
    cursor: pointer;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
    background-color: rgb(252, 212, 224);
  }
  </style>