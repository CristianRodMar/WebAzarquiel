<script>

</script>

<main class="container">
    <div class="row">
      <div class="col">
        <h3>
          <slot name="title">
          
          </slot>
        </h3>
      </div>
    </div>
          <slot name="content">

          </slot>
</main>

<style lang="sass">
  h3
    font-weight: bold
  .container
    background-color: white
    padding: 2rem
    margin: 1rem 2rem
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px
    animation: reveal 0.5s ease-in
  @keyframes reveal
    0%
      opacity: 0
      filter: blur(5px)
      transform: translateY(10rem)
    100%
      opacity: 1
      filter: blur(0)
      transform: translateY(0)
</style>