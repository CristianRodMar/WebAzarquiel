<script>
  import Cardmenu from "../lib/cardmenu.svelte";
  import Curso from '../js/curso'

  let cursos = [new Curso("Desarrollo de Videojuegos y Realidad Virtual", "Diseña y desarrolla videojuegos para distintas plataformas","img/CursoVDJ.jpg", "img/MANDO.png", "/cursoJuegos"), 
    new Curso("Seguridad informática", "Diseña y administra sistemas informáticos en red y aplica políticas de seguridad", "img/CursoSI2.jpg", "img/escudo.png", "/cursoSeguridad")]
</script>

<svelte:head>
  <title>Cursos de especialización</title>
</svelte:head>

<main>
  <h1>Cursos De Especialización</h1>
  <Cardmenu cursos = {cursos}/>
</main>

<style lang="sass">
  h1
    width: 100%
    text-align: center
    margin:0
    padding: 0
</style>
