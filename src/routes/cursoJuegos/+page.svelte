<script>
  import Revealbox from "../../lib/revealbox.svelte";
  let y;
  let render1 = false;
  let render2 = false;
  let render3 = false;
  let render4 = false;
  let render5 = false;
  const reveal = (y) => {
    //Solución improvisada
    //Aunque en móvil funciona, no funciona de la misma forma.
    //Habría que calcular donde termina cada elemento para renderizar el siguiente elemento.
    //¿Existe alguna forma de saber donde termina cada elemento?
    if (y > 100) render1 = true;
    if (y > 300) render2 = true;
    if (y > 600) render3 = true;
    if (y > 1000) render4 = true;
    if (y > 1200) render5 = true;
  };
</script>

<svelte:head>
  <title>Desarrollo de videojuegos</title>
</svelte:head>

<svelte:window bind:scrollY={y} on:scroll={reveal(y)} />

<main
  class="container-fluid d-flex flex-column align-items-center justify-content-start"
>
  <div class="row">
    <div class="col title">
      <h1>Desarrollo de Videojuegos y Realidad Virtual</h1>
    </div>
  </div>
  <Revealbox>
    <span slot="title">
      ¿Qué competencia General tiene el curso de especialización?
    </span>
    <span slot="content">
      <div class="col">
        La competencia general de este curso de especialización consiste en
        diseñar y desarrollar videojuegos para diferentes dispositivos y
        plataformas, garantizando la experiencia del usuario, utilizando
        herramientas de última generación que permitan actuar en todas las fases
        de su desarrollo, así como aplicaciones interactivas de realidad virtual
        y aumentada.
      </div>
    </span>
  </Revealbox>
  {#if render1}
    <Revealbox>
      <span slot="title">
        Relación de cualificaciones y unidades de competencia del catálogo
        nacional de cualificaciones
      </span>
      <span slot="content">
        <div class="col">
          A falta de publicación del Currículo del Curso de Especialización por
          parte de la Consejería de Educación.
        </div>
      </span>
    </Revealbox>
  {/if}
  {#if render2}
    <Revealbox>
      <span slot="title"> ¿Quién puede acceder a estas enseñanzas? </span>
      <span slot="content">
        <div class="col">
          <ul class="list-group">
            <li class="list-group-item">
              Técnico Superior en Administración de Sistemas Informáticos en Red
              establecido por el Real Decreto 1629/2009, de 30 de octubre, por
              el que se establece el título de Técnico Superior en
              Administración de Sistemas Informáticos en Red y se fijan sus
              enseñanzas mínimas
            </li>
            <li class="list-group-item">
              Técnico Superior en Desarrollo de Aplicaciones Multiplataforma,
              establecido por el Real Decreto 450/2010, de 16 de abril, por el
              que se establece el título de Técnico Superior en Desarrollo de
              Aplicaciones Multiplataforma y se fijan sus enseñanzas mínimas.
            </li>
            <li class="list-group-item">
              Técnico Superior en Desarrollo de Aplicaciones Web, establecido
              por el Real Decreto 686/2010, de 20 de mayo, por el que se
              establece el título de Técnico Superior en Desarrollo de
              Aplicaciones Web y se fijan sus enseñanzas mínimas.
            </li>
            <li class="list-group-item">
              Técnico Superior en Animaciones 3D, Juegos y Entornos Interactivos
              establecido por el Real Decreto 1583/2011, de 4 de noviembre, por
              el que se establece el título de Técnico Superior en Animaciones
              3D, Juegos y Entornos Interactivos y se fijan sus enseñanzas
              mínimas
            </li>
          </ul>
        </div>
      </span>
    </Revealbox>
  {/if}
  {#if render3}
    <Revealbox>
      <span slot="title"> Modulos Profesionales </span>
      <span slot="content">
        <div class="col">
          <table class="table">
            <thead>
              <tr>
                <th>Familia Profesional:</th>
                <td colspan="2">Informática y comunicaciones</td>
              </tr>
              <tr>
                <th>Título:</th>
                <td colspan="2">Desarrollo de Videojuegos y Realidad Virtual</td
                >
              </tr>
              <tr>
                <th>Nivel:</th>
                <td colspan="2">Curso de Especialización</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowspan="2">Módulos Profesionales</th>
                <th rowspan="2">Horas Anuales</th>
                <td>Centro de Enseñanza</td>
              </tr>
              <tr>
                <td>Horas Semanales</td>
              </tr>
              <tr>
                <td>5048. Programación y motores de videojuegos</td>
                <td>160</td>
                <td>5</td>
              </tr>
              <tr>
                <td>5049 Diseño gráfico 2D y 3D</td>
                <td>125</td>
                <td>4</td>
              </tr>
              <tr>
                <td>5050 Programación en red e inteligencia Artificial</td>
                <td>95</td>
                <td>3</td>
              </tr>
              <tr>
                <td>5051 Realidad virtual y realidad aumentada</td>
                <td>95</td>
                <td>3</td>
              </tr>
              <tr>
                <td>5052 Diseño, Gestión, publicación y producción</td>
                <td>125</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>600</td>
                <td>19</td>
              </tr>
            </tbody>
          </table>
        </div>
      </span>
    </Revealbox>
  {/if}
  {#if render4}
    <Revealbox>
      <span slot="title"> ¿Para qué sirve en el mundo laboral? </span>
      <span slot="content">
        <div class="col">
          <p>
            Las personas que hayan obtenido el certificado que acredita la
            superación de este curso de especialización podrán ejercer su
            actividad en empresas, públicas y privadas del sector de los
            videojuegos, así como crear su propio estudio de desarrollo de
            videojuegos
          </p>
        </div>
      </span>
    </Revealbox>
  {/if}
  {#if render5}
    <Revealbox>
      <span slot="title">
        Las ocupaciones y puestos de trabajo más relevantes son:
      </span>
      <span slot="content">
        <div class="row">
          <div class="col-md d-flex flex-wrap align-items-center justify-content-center">
            <ul class="list-group">
              <li class="list-group-item">Desarrollador de videojuegos</li>
              <li class="list-group-item">
                Responsable de pruebas de videojuegos
              </li>
              <li class="list-group-item">
                Responsable del proceso de creación de videojuegos
              </li>
              <li class="list-group-item">
                Diseñador gráfico 2D y 3D de videojuegos
              </li>
              <li class="list-group-item">
                Desarrollador de apliaciones de realidad virtual, aumentada y
                mixta
              </li>
            </ul>
          </div>
          <div class="col-md d-flex flex-wrap align-items-center justify-content-center">
            <img src="img/imgJuegos.jpg" alt="JuegosImagen" />
          </div>
        </div>
      </span>
    </Revealbox>
  {/if}
</main>

<style lang="sass">
  main
    min-height: 240vh
  h1
    font-weight: bold
    margin: 0
  .title
    color: white
    font-weight: bold
    padding: 1rem
  main
    height: 100%
    background-color: #4158D0
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)
    opacity: 0
    animation: pageReveal 0.2s ease-in forwards
  .list-group
    border-radius: 0
  .list-group-item
    border: none
    margin-top: 1rem
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px
    background-color: whitesmoke
  th, td
    text-align: center
    vertical-align: middle
    border: solid 1px whitesmoke
  table
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px
    margin-top: 1rem
    background-color: whitesmoke
  img
    padding: 1rem
    width: 100%
    max-width: 420px
    height: auto
  @keyframes pageReveal 
    0%
      opacity: 0
    100%
      opacity: 1

</style>
