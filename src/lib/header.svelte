<script>

</script>

<main>
  <div class="container-fluid">
    <header class="w-100">
      <nav class="navbar d-flex flex-row justify-content-xl-center justify-content-around aling-items-center gap-xl-5">
        <a class="navbar-brand" href="/">
           <img src= "img/logoiesfseif.png" alt="logo"/>
        </a>
        <ul class="navbar-nav d-flex flex-row gap-4 myheader">
          <li class="nav-item"><a class="nav-link" href="/">INICIO</a></li>
          <li class="nav-item"><a class="nav-link" href="/">AL DIA</a></li>
          <li class="nav-item"><a class="nav-link" href="/">EL LORO</a></li>
          <li class="nav-item"><a class="nav-link" href="/">EL CENTRO</a></li>
          <li class="nav-item"><a class="nav-link" href="/">SECRETEARÍA</a></li>
          <li class="nav-item"><a class="nav-link" href="/">FAMILIAS</a></li>
          <li class="nav-item"><a class="nav-link" href="/">BOLSA</a></li>
          <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas"><i class="fa-solid fa-bars fa-2xl"></i></button>
        </ul>
      </nav>
    </header>
  </div>
  <div class="offcanvas offcanvas-end text-white bg-dark" tabindex="-1" id="offcanvas">
    <div class="offcanvas-header f-flex flex-column align-items-start gap-3">
      <div class="h3">SEARCH</div>
      <div class="d-flex flex-row justify-content-center align-items-center w-100">
        <input type="text" class="form-control mysize" placeholder="Search...">
      </div>
    </div>
    <div class="offcanvas-body p-0">
      <ul class="navbar-nav d-flex flex-column offheader">
        <li class="nav-item"><a class="nav-link text-white" href="/"><i class="fa-solid fa-chevron-right"></i> INICIO</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="/"><i class="fa-solid fa-chevron-right"></i> AL DIA</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="/"><i class="fa-solid fa-chevron-right"></i> EL LORO</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="/"><i class="fa-solid fa-chevron-right"></i> EL CENTRO</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="/"><i class="fa-solid fa-chevron-right"></i> SECRETEARÍA</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="/"><i class="fa-solid fa-chevron-right"></i> FAMILIAS</a></li>
        <li class="nav-item"><a class="nav-link text-white" href="/"><i class="fa-solid fa-chevron-right"></i> BOLSA</a></li>
      </ul>
    </div>
  </div>
</main>

<style lang="sass">
  .mysize
    width: 20rem
  .offheader
    
    & > li
      border-collapse: collapse
      border-top: solid 1px black
      border-bottom: solid 1px black
      margin-bottom: -1px
      padding: .5rem
    & > li:hover
      background-color: #303440
  .nav-link
    font-size: .8rem
    color: #767676
    &:hover
      color: #57C9F4
  .container-fluid
    padding: 1rem
  img
    width: 250px
  button
    background-color: transparent
    border: none
    cursor: pointer
    margin: 0 1rem
    display: none
    
  @media screen and (max-width:1000px)
    .myheader
      & > li
        display: none
    button
      display: block

</style>