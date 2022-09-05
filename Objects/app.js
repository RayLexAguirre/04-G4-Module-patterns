//let obj = {}; //Al ejecutar el codigo no ocurre nada ya que no contiene nada

let persona = {
  nombre: "Carlos",
  apellido: "Ulibarri",
  //se creo un objeto que tenga el campo nombre y apellido
  // ahora para poder obtener la combinacion de la información se crea una función juntando el nombre y apellido pero esta función será un campo mas del objeto
  getName: function () {
    return `${this.nombre} ${this.apellido}`;
  },
  domicilio: {
    calle: "Madero #144",
    colonia: "Centro",
    cp: 28000,
    municipio: "Colima",
  },
  getAddress: function () {
    return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp}, ${this.domicilio.municipio}`; //obtenemos la informacion buscando en los subcampos del campo
  },
};
console.log(persona); //mandamos llamar todo el objeto
console.log(persona.nombre); //Se imprime el campo especificado del objeto elegido
console.log(persona.apellido); //Se imprime el campo especificado del objeto elegido
console.log(persona.getName()); //Se imprime la función que se encuentra en el objeto
console.log(persona.domicilio);
console.log(persona.domicilio.calle);
console.log(persona.getAddress());
