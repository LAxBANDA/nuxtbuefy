<template>
    <div class="hero">
        <div class="barra-estado container is-fluid">
            <b-button
                type="is-primary"
                icon-left="arrow-left"
                @click="$router.push({name: 'index'})"
                inverted
                outlined
            >
                Volver atrás
            </b-button>
        </div>
        <div class="post-cover" :style="backImage" />

        <section class="main-content columns">
            <div class="container column is-10">
                <section class="section">
                    <div class="container columns is-mobile is-multiline">
                        <box 
                            class="column is-centered is-half is-offset-one-quarter"
                            :post="post"
                            :autor="autor"
                        >
                            <div class="body">
                                <div v-html="html">

                                </div>
                            </div>
                        </box>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>

<script>
import Box from '~/components/Box'

export default {
    components:{
        Box
    },
    async asyncData({store, params}) {
        await store.dispatch('posts/getItem', params.id)
    },
    data: () => {
        return {
            autor: {
                name: 'Emma Lawler',
                puesto: 'Moonlight, co-founder',
                bio: 
                    `
                    Join Moonlight's professional community of software developers and product designers.
                    Match with experts that fit your specific needs, then work with them directly.
                    `
            },
            // Html aleatoreo https://es.lipsum.com/
            html: `
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu magna in leo tincidunt auctor vel eget neque. Quisque ullamcorper turpis ut nunc suscipit, eu elementum est molestie. Maecenas in consequat sapien. Proin porttitor metus eros, eu pellentesque odio dapibus vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed erat ac nunc tempus posuere et eget sem. Curabitur vitae magna quis purus tincidunt condimentum vitae euismod mauris. Donec dignissim hendrerit luctus. Donec ac ex in nisl ullamcorper hendrerit ac vel ligula. Integer volutpat orci dui, sit amet tincidunt risus venenatis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ligula quam, lobortis eget iaculis viverra, blandit vitae nunc. Aenean id faucibus magna.
                </p>
                <p>
                Sed eget nibh gravida, porta tellus a, pretium lectus. Vivamus in lacus bibendum, pharetra elit nec, faucibus arcu. Aenean elementum, lacus id luctus viverra, dolor sapien ultricies lorem, vitae sollicitudin quam mauris eget velit. Aliquam molestie nibh ac velit pellentesque, eget volutpat libero imperdiet. Suspendisse eu rhoncus ligula. Morbi ac ipsum ut risus lobortis sodales. Suspendisse potenti. Nulla erat tortor, gravida semper blandit eget, congue sit amet arcu. Vivamus laoreet vitae arcu a interdum. Sed eu laoreet arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sapien leo, cursus a lacus nec, hendrerit efficitur diam. In sodales massa vel nibh lacinia, non interdum ligula tempor. Donec lobortis mauris quis eros rutrum elementum. In hac habitasse platea dictumst.
                </p>
                <p>
                Vivamus laoreet lorem auctor massa dictum, et blandit ante elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris id sollicitudin risus. Nam convallis elit semper mattis iaculis. Donec venenatis nunc tellus, at sollicitudin urna imperdiet vel. In et dui facilisis, venenatis lacus eget, interdum justo. Nulla facilisi. Mauris metus massa, egestas sit amet vulputate nec, congue id tortor. In convallis urna at ultrices interdum. Vestibulum sed nibh pellentesque est posuere molestie. Sed nec accumsan libero. Donec eget libero faucibus, blandit felis ut, interdum libero. Nunc sit amet tincidunt neque. Sed blandit ligula non tortor dignissim, id mattis turpis lobortis.
                </p>
            `
        }
    },
    validate ({ params, store }) {
        return true;
    },
    head(){
        return {
            title: this.post.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.post.body
                }
            ]
        }
    },
    computed: {
        post() {
            return this.$store.state.posts.item;
        },
        backImage(){
            return `background-image:url("https://picsum.photos/id/${this.post.id}/1230/500")`;
        }
    },
}
</script>

<style>
.barra-estado {
    z-index: 1;
    padding-top: 10px;
}
.post-cover {
    background-position: 50%;
    background-size: cover;
    margin-bottom: 15px;
    width: 100%;
    height: auto;
    padding-top: 31%;
    box-shadow: 0 0 1px 0 rgba(0,0,0,.44);
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: inherit;
    display:block;;
}
</style>