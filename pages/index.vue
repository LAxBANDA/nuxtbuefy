<template>
  <section class="main-content columns">
    <div class="container column is-10">
      <section class="section">
        <div class="container columns is-mobile is-multiline">
          <card
            v-for="(post, index) in list"
            v-bind:key="index"
            v-bind:id="post.id"
            v-bind:content="post.body"
            v-bind:date="Date.now()"
            :title="post.title"
            :src="backImage(post.id)"
            class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd is-clickable"
            :class="{'column is-four-fifths' : index === 0}"
          >
          </card> 
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import { mapState } from 'vuex'

export default {
  name: 'HomePage',

  components: {
    Card
  },
  async asyncData ({store}) {
    await store.dispatch('posts/getItems')
  },
  head(){
      return{
          title: 'Posts',
          meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'Encuentra los posts más interesantes de hoy en día'
            }
          ]
      }
  },
  computed:
  {
    ...mapState({
        list: state => {
            return state.posts.list
        },
    }),
  },
  methods:{
    backImage(id){
      return `https://picsum.photos/id/${id}/1230/500`;
    }
  }
}
</script>