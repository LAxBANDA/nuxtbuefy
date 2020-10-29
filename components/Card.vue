<template>
  <nuxt-link :to="{ name: 'id', params: { id }}">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="src">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p class="post-card-date"><time datetime="2016-1-1">{{ date }}</time></p>
          <h5 aria-level="2" class="post-card-title is-capitalized">{{ title }}</h5>
          <p class="post-card-content">{{ (content.length > max_caracteres) ? `${content.substring(0, max_caracteres)}...` : content.substring(0, max_caracteres) }}</p>
          <slot />
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  data(){
    return{
      max_caracteres: 128,
    }
  },
  // Obteniendo props del padre
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    date: {
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
}
.card:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card:active{
  transform: scale(.9)
}

.post-card-title{
  color: $primary !important;
}

.post-card-date{
  font-size: x-small;
}

</style>