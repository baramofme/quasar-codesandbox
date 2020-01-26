<template>
  <q-btn :color="type">
    <slot/>
  </q-btn>
</template>

<script>
export default {
  name: 'Button',
  props: ['type']
}
</script>
<style scoped>
/* button.primary {
  background: blue;
  color: white;
} */
</style>