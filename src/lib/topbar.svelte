<script>

</script>

<main>
  <div class="rrss">
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-youtube"></i>
    <i class="fa-brands fa-flickr"></i>
    <i class="fa-brands fa-flickr"></i>
    <i class="fa-brands fa-square-instagram"></i>
  </div>
  <div class="contact">
    <div>
      <i class="fa-solid fa-phone"></i>
      <a href="/">925284043</a>
    </div>
    <div>
      <i class="fa-solid fa-envelope"></i>
      <a href="/">45003875.ies@edu.jccm.es</a>
    </div>
  </div>
</main>

<style lang="sass">
  main
    display: flex
    align-items: center
    justify-content: space-around
    background-color: #F5F5F5
    padding: .5rem
    width: 100%
  .rrss
    display: flex
    color: #999999
    gap: .7rem
    & > i
      cursor: pointer
      font-size: .9rem
    & > i:hover
      color: #58c8f1
  .contact
    display: flex
    align-items: center
    gap: 1rem
    a
      text-decoration: none
      color: #58c8f1
      font-size: .85rem
    i
      font-size: .8rem
      margin-right: .1rem
      color: #999999

  @media screen and (min-width: 1000px)
    main
        justify-content: center
        gap: 10rem
  @media screen and (max-width: 700px)
    main
      flex-direction: column
</style>