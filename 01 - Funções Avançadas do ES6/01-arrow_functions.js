/// Arrow Functions - são funções anônimas

var sum = (a, b) => a + b

console.log(sum(5, 15))

// Return implícito de objeto

var createObj = () => ({ test:123 });

console.log(createObj());

 var obj = {
     showContext: function showContext(){
         //this = obj

         setTimeout(() => {
             this.log('after 1000ms');
         }, 1000);
     },
     log: function log(value) {
         console.log(value);
     }
 };

 obj.showContext();