<!-- MyButton.vue -->
<template>
  <button @click="handleClick">{{ label }}</button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    label: {
      type: String,
      default: 'Click Me' 
    }
  }
}
</script>

<style>
</style>


