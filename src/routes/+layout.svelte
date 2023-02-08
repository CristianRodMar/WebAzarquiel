<script>
  import Header from "../lib/header.svelte";
  import Footer from "../lib/footer.svelte";
  import Topbar from "../lib/topbar.svelte";
  
</script>

<svelte:head>
  <title>Cursos de especialización</title>
</svelte:head>

<main>
  <Topbar/>
  <Header/>
    <slot></slot>
    <div class="space"></div>
  <Footer/>
</main>

<style lang="sass">
  main
    display: flex
    flex-direction: column
    min-height: 100vh
    font-family: 'Open Sans'
  .space
    flex-grow: 1
</style>