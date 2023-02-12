<script>

export default {
  props: {
    locationProp: String,
  },
  methods: {
    menuEvent(location) {
      this.$emit('location', location);
    },
  },
};
</script>

<template>
<nav>
    <ul>
        <li @click="menuEvent('projects')">Projekt</li>
        <li @click="menuEvent('contact')">Kontakta mig</li>
        <li @click="menuEvent('about')">Om mig</li>
    </ul>
</nav>
</template>

<style scoped lang="scss">
$startPercent: 96%;
@keyframes moveDown {
    0% {
        opacity: 0;
        top: $startPercent;
    } 100% {
        opacity: 1;
        top: 91%;
    }
}
@keyframes flash {
    0% {
        text-shadow: 0 0 10px rgba(255,255,255, 0);
    }
    50% {
        text-shadow: 0 0 10px rgba(255,255,255, 1);
    }
    100% {
        text-shadow: 0 0 10px rgba(0,0,0, 0.2);
    }
}
nav {
    z-index: 100;
    position: fixed;
    top: $startPercent;
    left: 50%;
    font-size: 1.6em;
    width: 80vh;
    transform: translateX(-50%);
    animation: moveDown 3s ease-in-out 0s 1 forwards;
    ul{
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        flex-direction: row;
        flex-wrap: nowrap;
        li {
            text-align: center;
            text-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.5);
            display: inline-block;
            position: relative;
            cursor: pointer;
            animation: flash 1s ease-in-out 3s 1 forwards;
            &:after {
                content: '';
                position: absolute;
                left: 50%;
                bottom: -2px;
                width: 0px;
                height: 2px;
                background: $white;
                transition: all 0.45s;

            }
            &:hover:after {
                    width: 100%;
                    left: 0;

            }
        }
    }
}
</style>
