<script>
  import Card from '../lib/card.svelte'
  export let cursos
</script>

<main>
  <div class="container-fluid d-flex flex-direction-row align-items-center gap-5 justify-content-center">
  {#each cursos as curso}
    <Card nombre = {curso.nombre}
    descripcion = {curso.descripcion}
    bg = {curso.bg}
    logo = {curso.logo}
    route = {curso.route}
    />
  {/each}
  </div>
</main>

<style lang="sass">
  .container-fluid
    padding: 5rem
  @media screen and (max-width: 700px)
    .container-fluid
      flex-direction: column
      padding: 2.5rem 0
</style>