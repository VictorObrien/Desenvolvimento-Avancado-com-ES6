// Forma de atribuição de valores para propriedades e métodos

/* var obj = {
    prop1: 'Digital Innovattion One'
}; */

// outa fora é referênciando uma variável

var prop1 = 'Digital Innovattion One'

var obj = {
    /**
     * com o ES6 agora se a propriedade e a variável atribuida tiverem o mesmo nome,
     * podemos omitir o nome da váriável e colocar só o nome da propriedade
     */
    prop1
};

/**
 * Isso também vale para funções e métodos
 */

 /* function method1(){
     console.log('method called');
 };

 var obj = {
     method1
 };

 obj.method1() */

 /**
  * Com o ES6 também podemos passar funçoes para objetos sem declara o nome 'function'
  */

  var obj = {
      sum(a,b){
          return a + b;
      }
  };

  console.log(obj.sum(5,1));