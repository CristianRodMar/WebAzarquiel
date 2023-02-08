<script>
  export let nombre
  export let descripcion
  export let bg
  export let logo
  export let route
 
</script>

<main>
  <a href={route}>
  <div class="myCard" style="background-image: url({bg})">
    <h3>{nombre}</h3>
    <!-- <p>{descripcion}</p> -->
  </div>
  <div class="hoverContainer">
    <img src={logo} alt="logo" />
    <h3>{descripcion}</h3>
  </div>
  </a> 
</main>

<style lang="sass">
  a
    text-decoration: none
  main
    height: 20rem
    width: 15rem
  .hoverContainer
    color: white
    font-weight: bold
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-around
    z-index: 9
    height: 100%
    width: 100%
    transform: translateY(-50%)
    pointer-events: none
    position: relative
    cursor: pointer
    opacity: 0
    transition: 0.3s
    & > h3
      text-shadow: 2px 2px black
  h3
    font-weight: bold
    font-size: 1.3rem
    padding: 0
    margin: 0
  .myCard
    padding: 1rem
    color: white
    background-size: cover
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px
    display: flex
    flex-direction: column
    align-items: center
    justify-content: flex-end
    height: 100%
    width: 100%
    cursor: pointer
    transition: 0.3s ease-in-out
    background-position: center
    &:hover
      filter: blur(2px)
      transform: perspective(600px) rotateX(20deg) scale(1.2)
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px
      //animation: bganimation 20s
    &:hover > h3
      display: none
    &:hover + .hoverContainer
      transform: translateY(-100%) scale(1.2)
      animation: hoveranimation 1s forwards
  @keyframes hoveranimation
    0%
      opacity: 0
    100%
      opacity: 1
  @keyframes bganimation
    0%
      background-size: 100%
    100%
      background-size: 130%
    
</style>