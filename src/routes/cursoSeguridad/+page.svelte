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
    if (y > 600) render1 = true;
    if (y > 800) render2 = true;
    if (y > 1100) render3 = true;
    if (y > 1700) render4 = true;
    if (y > 1900) render5 = true;
  };
</script>

<svelte:head>
  <title>Ciberseguridad</title>
</svelte:head>

<svelte:window bind:scrollY={y} on:scroll={reveal(y)} />

<main
  class="container-fluid d-flex flex-column align-items-center justify-content-start"
>
  <div class="row">
    <div class="col title">
      <h1>Curso de Especialización en Ciberseguridad</h1>
    </div>
  </div>
  <Revealbox>
    <span slot="title"> ¿Qué voy a aprender y hacer? </span>
    <span slot="content">
      <div class="col">
        <ul class="list-group">
          <li class="list-group-item">
            Elaborar e implementar planes de prevención y concienciación en
            ciberseguridad en la organización, aplicando la normativa vigente.
          </li>
          <li class="list-group-item">
            Detectar e investigar incidentes de ciberseguridad, documentándolos
            e incluyéndolos en los planes de securización de la organización.
          </li>
          <li class="list-group-item">
            Diseñar planes de securización contemplando las mejores prácticas
            para el bastionado de sistemas y redes.
          </li>
          <li class="list-group-item">
            Configurar sistemas de control de acceso y autenticación en sistemas
            informáticos, cumpliendo los requisitos de seguridad y minimizando
            las posibilidades de exposición a ataques.
          </li>
          <li class="list-group-item">
            Diseñar y administrar sistemas informáticos en red y aplicar las
            políticas de seguridad establecidas, garantizando la funcionalidad
            requerida con un nivel de riesgo controlado.
          </li>
          <li class="list-group-item">
            Analizar el nivel de seguridad requerido por las aplicaciones y los
            vectores de ataque más habituales, evitando incidentes de
            ciberseguridad.
          </li>
          <li class="list-group-item">
            Implantar sistemas seguros de desplegado de software con la adecuada
            coordinación entre los desarrolladores y los responsables de la
            operación del software.
          </li>
          <li class="list-group-item">
            Realizar análisis forenses informáticos analizando y registrando la
            información relevante relacionada.
          </li>
          <li class="list-group-item">
            Detectar vulnerabilidades en sistemas, redes y aplicaciones,
            evaluando los riesgos asociados.
          </li>
          <li class="list-group-item">
            Definir y aplicar procedimientos para el cumplimiento normativo en
            materia de ciberseguridad y de protección de datos personales,
            implementándolos tanto internamente como en relación con terceros.
          </li>
          <li class="list-group-item">
            Elaborar documentación técnica y administrativa cumpliendo con la
            legislación vigente, respondiendo a los requisitos establecidos.
          </li>
        </ul>
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
              Título de Técnico Superior en Administración de Sistemas
              Informáticos en Red establecido por el Real Decreto 1629/2009, de
              30 de octubre.
            </li>
            <li class="list-group-item">
              Título de Técnico Superior en Desarrollo de Aplicaciones
              Multiplataforma, establecido por el Real Decreto 450/2010, de 16
              de abril.
            </li>
            <li class="list-group-item">
              Título de Técnico Superior en Desarrollo de Aplicaciones Web,
              establecido por el Real Decreto 686/2010, de 20 de mayo.
            </li>
            <li class="list-group-item">
              Título de Técnico Superior en Sistemas de Telecomunicaciones e
              Informáticos, establecido por el Real Decreto 883/2011, de 24 de
              junio.
            </li>
            <li class="list-group-item">
              Título de Técnico Superior en Mantenimiento Electrónico
              establecido por el Real Decreto 1578/2011, de 4 de noviembre
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
                <td colspan="2"
                  >Ciberseguridad en Entornos de las Tecnologías de la
                  Información</td
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
                <td>Incidentes de ciberseguridad</td>
                <td>120</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Bastionado de redes y sistemas</td>
                <td>120</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Puesta en producción segura</td>
                <td>120</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Análisis forense informático</td>
                <td>120</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Hacking ético</td>
                <td>120</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Normativa de ciberseguridad</td>
                <td>120</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>720</td>
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
            Este profesional ejercerá su actividad en entidades de los sectores
            donde sea necesario establecer mecanismos y medidas para la
            protección de los sistemas de información y redes de comunicaciones.
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
          <div
            class="col-md d-flex flex-wrap align-items-center justify-content-center"
          >
            <ul class="list-group">
              <li class="list-group-item">
                Experto/a en ciberseguridad
              </li>
              <li class="list-group-item">
                Auditor/a de ciberseguridad
              </li>
              <li class="list-group-item">
                Consultor/a de ciberseguridad
              </li>
              <li class="list-group-item">
                Hacker ético
              </li>
            </ul>
          </div>
          <div
            class="col-md d-flex flex-wrap align-items-center justify-content-center"
          >
            <img src="img/seguridadImg.jpg" alt="SeguridadImagen" />
          </div>
        </div>
      </span>
    </Revealbox>
  {/if}
</main>

<style lang="sass">
  main
    min-height: 300vh
  h1
    font-weight: bold
    margin: 0
  .title
    color: white
    font-weight: bold
    padding: 1rem
  main
    height: 100%
    background-image: linear-gradient(43deg, #5C258D 0%, #4389A2 100%)
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
