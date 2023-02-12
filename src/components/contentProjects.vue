<script>
import content from './titleTextLinkComponent.vue';

export default {
    components: {
        content,
    }
}
</script>

<template>
<div class="container">
<h1>Projekt</h1>

<content title="CV i Vue" 
text="Denna sida är mitt första projekt byggt i Vue.js. Målet med sidan är att visa upp mina kunskaper i praktiken samt att uppvisa en förståelse att lära sig ramverk och andra resurser själv. Vue är inte något av de delar som ingår i den undervisning som jag har gått. Den använder sig flitigt av components för att lätt justera innehållet och för att kunna skala den. Då fokuset ligger på att lära mig Vue.js, är den något tom på andra hjälpmedel, men jag har tagit hjälp av Figma för att rita upp designen, och sedan använder den SCSS." 
link="https://github.com/AcclaimedAP/cv2023" 
linktext="Du kan se repot här!"/>
<content title="Idle inkrementellt auto-battler spel" 
text="Större projekt som är ett auto-spelande spel. Byggt för ett skolprojekt i vår Javascript kurs. Poängen är att komma så långt som möjligt genom att uppgradera sig själv. Den använder sig mycket av timers och animationer. Till en början var den endast byggt med VanillaJS, men sedan justerad för att till en del använda sig av Typescript, men pga. den inte var byggt med Typescript i åtanke från början är denna del av projektet svagt. Utöver det är all grafik gjord av mig i Inkscape. I framtiden hoppas jag att bygga om detta projekt med mer omtanke." 
link="https://github.com/AcclaimedAP/Incremential-Game-Project" 
linktext="Länk till repot här." 
image="./img/projects/incremential-game.jpg" 
imageAltText="Incremential game screenshot"/>

<content title="Gymnasiearbete - Spel i Unity" 
text="Enkelt spel gjort i Unity för mitt Gymnasiearbete. Man tar kontroll över en tunna, som ska ta sig i mål så snabbt som möjligt över olika hinder. Finns även poäng att samla för den som vill. Jag använde mig av Blender för att skapa spelmodellen, och sedan använt de resurser i Unity för att skapa de andra tillgångarna. Spelet är programmerat i C#, och målet med gymnasiearbetet är att utforska hur lite som krävs för att skapa spel i dagsläget. Svaret är, inte mycket." 
link="https://github.com/AcclaimedAP/Barrel-Roll" 
linktext="Länk till repot här, inkl. kompilerat projekt samt länk till rapport."
image="./img/projects/barrel.jpg" 
imageAltText="Screenshot of barrel model from the game"/>

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
    overflow: scroll;
    h1 {
        text-align: center;
        margin-top: 30px;
        margin-bottom: 20px;
    }
}
</style>