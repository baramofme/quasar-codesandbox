<template>
  <div>
    <scroll-picker :options="options" v-model="data"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: null,
      options: [
        {
          value: 'instagram',
          name: `<i class=\"fab fa-instagram\"></i> Instagram`
        },
        {
          value: 'facebook',
          name: `<i class=\"fab fa-facebook\"></i> Facebook`
        },
        { value: 'youtube', name: `<i class=\"fab fa-youtube\"></i> Youtube` },
        { value: 'twitter', name: `<i class=\"fab fa-twitter\"></i> Twitter` },
        { value: 'line', name: `<i class=\"fab fa-line\"></i> Line` }
      ]
    }
  }
}
</script>