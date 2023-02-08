export default class Curso {
  constructor(nombre = "Curso test", descripcion = "Descripcion Test", bg = "https://picsum.photos/200/300", logo="https://picsum.photos/200/300", route) {
    this.nombre = nombre
    this.descripcion = descripcion
    this.bg = bg
    this.logo = logo
    this.route = route
  }
}