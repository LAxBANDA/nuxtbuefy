<template>
    <div class="box">
        <article class="media">
            <div class="media-content">
                <div class="content">
                    <div class="date">
                        <p>{{ post.date }}</p>
                    </div>
                    <div class="title is-6">
                        <h1>{{ post.title }}</h1>
                    </div>
                    <div class="subtitle is-6">
                        {{ post.descripcion }}
                    </div>
                    <hr>
                </div>
                <slot />
                <hr>
                <div class="media-left">
                    <figure class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Imagen de perfil">
                    </figure>
                    <strong>{{ autor.name }}</strong> <small>{{ autor.puesto }}</small> 
                </div>
                <hr>
                <h6>{{ autor.bio }}</h6> 
            </div>
        </article>
    </div>
</template>

<script>
export default {
  data(){
    return{
      max_caracteres: 128
    }
  },
  props: {
    autor:{
        type: Object,
        required: true
    },
    post:{
        type: Object,
        required: true
    }
  }
}
</script>

<style lang="scss">
.box{
    width: 700px;
    position:absolute;
    z-index:2;
    margin-bottom: 4rem;
}
</style>