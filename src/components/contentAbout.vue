<script>
import skill from './skillsContainer.vue';

const skills = [
    {
        name: "CSS3 & SCSS",
        info: "Kunskap om CSS3 samt SCSS och dess funktionalitet så som funktioner, variablar, loopar, arrayer, mm.",
        icon: "./img/skills/css3-svgrepo-com.svg",
        alt: "css3 logo"
    },
    {
        name: "Javascript",
        info: "Djup förståelse av språkets grunder, användsområden, funktioner, loopar, objekt, klasser, mm.",
        icon: "./img/skills/javascript-logo-svgrepo-com.svg",
        alt: "javascript logo"
    },
    {
        name: "Typescript",
        info: "Lärodom om typer, strikt typ definering, övertag och säkerhet Typescript ger dig.",
        icon: "./img/skills/typescript.svg",
        alt: "typescript logo"
    },
    {
        name: "Vue.JS",
        info: "Använt Vue.js för denna sida. Den är ungefär min utsträckning av kunskap. Förståelse av att bygga komponenter, props, emits, funktioner, reactives, etc. för att skapa en SPA(Single page application).",
        icon: "./img/skills/vuejs-icon.svg",
        alt: "Vue logo"
    },
    {
        name: "Bundlers",
        info: "Kan använda mig av bundlers som t.ex Parcel, Vite, Webpack, etc. för att hjälpa mig att enkelt publicera sidor.",
        icon: "./vite.svg",
        alt: "vite logo"
    },
    {
        name: "Jest",
        info: "Enhetstester samt integrationstester med hjälp av Jest",
        icon: "./img/skills/jest-seeklogo.com.svg",
        alt: "Jest logo"
    },
    {
        name: "Cypress",
        info: "e2e tester med hjälp av Cypress",
        icon: "./img/skills/370774.svg",
        alt: "Cypress logo"
    },
    {
        name: "React",
        info: "Vid den tiden jag påbörjar LIA kommer jag ha studerat React, och kommer att kunna bygga en applikation från grunden.",
        icon: "./img/skills/react-2.svg",
        alt: "React logo"
    },
    {
        name: "Figma",
        info: "Använts för att designa sidor från grunden upp. Kunskap om komponenter, osv.",
        icon: "",
        alt: ""
    },
    {
        name: "API utveckling",
        info: "Vid den tiden jag påbörjar LIA kommer jag ha studerat om backend, så som Databaser, SQL, och NoSQL, programmering mot webbserver, databasdesign, normalisering av databaser, programstruktur för hantering av användare och användardata, etc.",
        icon: "",
        alt: ""
    },
]
export default {
    components: {
        skill
    },
    computed: {
        sortedSkills() {
            return skills
                .sort((a, b) => (a.name) > (b.name) ? 1 : -1);
        }
    }

}
</script>
<template>
<div class="container">
<div class="flex-container">
    <div class="flex-child left-content">
        <h2>Min bakgrund</h2>
        <h3>Studier</h3>
        <p>Idag studerar jag till Front-end utvecklare på Medieinstitutet. Jag började där i oktober 2022, och under denna studietid har vi studerat och lärt oss använda Git & Github, HTML5, CSS & SCSS, Javascript, Vue, E2E testning, och Design & Gränssnitt. När jag påbörjar min LIA ska vi även ha studerat och lärt oss om React, UX & Usability, API-utveckling, Arbetsmetodik, och agilt.</p>
        <p>Innan mina studier hos Medieinstituet läste jag även IT relaterade ämnen på gymnasiet, inkluderat Datortektik, CAD, C#/C++ programmering, och Administration av nätverks- och serverutrustning.</p>
        <p>Inte direkt relaterat till studier, men jag har flera års arbetserfarenhet inom detaljhandel, samt inom resturang som bland annat handledare.</p>
        <h3>Ambitioner</h3>
        <p>Ända sedan jag var 10 år har jag varit intresserad av att skapa. När jag var så liten gjorde jag min första hemsida i html och css. Kanske inte den mest imponerande sidan, men det väkte en glöd i mig att det var något jag ville fortsätta med. Under mina år har jag testat på flera olika riktningar i livet så som resturang, spelprogrammering, detaljhandel, mm. och har stält mig in på att min första känsla var korrekt. Jag ser varje dag efram emot att lära mig nya saker inom webbutveckling. Nya ramverk, metodiker, och teknologin bakom allt. Jag är otroligt nyfiken av mig att utöka mina kunskaper.</p>
        <h3>Fritid</h3>
        <p>Jag har ett flertal hobbies. Jag sitter gärna och spelar datorspel. Detta brukar vara League of Legends, Celeste, Oxygen Not Included, och vad jag känner för just då.</p>
        <p>Förutom spel så har jag även prövat på att DJa. Jag äger en fin Pioneer DDJ-SR controller som jag använder emellanåt när jag fastnar på något problem, man kan säga det får min hjärna att snurra.</p>
        <p>Jag har även haft ett stort intresse för Japan, och har studerat japanska på gymnasiet(så långt det går) och sedan på fritiden. Det är väldigt svårt så det står lite stilla nu, men jag tycker språk generellt är intressant så jag hoppas att jag en dag kan lära mig ett fleral andra språk också!</p>
    </div>
    <div class="separator"></div>
    <div class="flex-child right-content">
        <h2>Mina kunskaper</h2>
        <skill v-for="skill in sortedSkills" :key="skill.name" :name="skill.name" :info="skill.info" :icon="skill.icon" :alt="skill.alt"/>
    </div>
</div>

</div>

</template>

<style scoped lang="scss">
.container {
    width: 80vw;
    height: 80vh;
    position: fixed;
    background-color: rgba($black, 0.9);
    border: solid $white 1px;
    backdrop-filter: blur(20px);
    top: 10vh;
    left: 10vw;
    z-index: 10;

    h1 {
        min-width: 100%;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 20px;
    }
    .flex-container{
    display: flex;
    flex-wrap: nowrap;
    align-content: flex-start;
    align-items: stretch;
    height: 100%;

    box-shadow: 0 0 30px rgba($black, 0.8) inset;
    .flex-child {
        overflow: scroll;
        min-height: 100%;
        h2, h3 {
            text-align: center;
        }
        p {
            margin: 16px;
            line-height: 1.7rem;
        }
    }
    .separator {
        min-width: 1px;
        max-width: 1px;
        background-color: rgba($white, 0.5);
        height: 100%;
    }
    .left-content {
        flex-shrink: 1;
    }
    .right-content {
        min-width: 40%;
        flex-grow: 1.6;
        flex-shrink: 1.6;
    }
    }
}
</style>