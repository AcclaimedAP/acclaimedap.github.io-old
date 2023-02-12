<script>

export default {
    props: {
        title: String,
        text: String,
        link: String,
        linktext: String,
        image: String,
        imageAltText: { type: String, default: "Project image"},
        imgW: { type: Number, default: 200},
        imgH: { type: Number, default: 170 },
        float: {type: String, default: "left"}
    },
    data() {
        return {
            imageAttributes: {
                src: this.image,
                alt: this.imageAltText,
                height: this.imgH,
                width: this.imgW,
                style: `float: ${this.float}`
            }
        }
    }
}
</script>

<template>
<div class="flex">
    <img v-if="image" v-bind="imageAttributes">
    <h2>{{ title }}</h2><br>
    <p>{{ text }}</p><br>
    <a v-if="linktext && link" v-bind:href="link">{{ linktext }}</a>
    <a v-else-if="link && !linktext" v-bind:href="link">{{ link }}</a>
</div>
</template>

<style scoped lang="scss">
img{
    width: 350px;
    height: auto;
    margin: 10px;
}
div {
width: calc(100% - 60px);
margin: 30px;
h2 {
    margin: 16px;
    display: inline;
    line-height: 2.5rem;
}
p {
    display: inline;
    line-height: 1.7rem;
}
a {
    text-decoration: none;
    color: $yellow;
    &:hover {
        text-shadow: 0px 0px 2px rgba($white, 0.5);
    }
}
}
</style>