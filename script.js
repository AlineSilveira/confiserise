function(){
 var app = angular.module('store', []);
app.controller('ProducaoCtrl', function(){
  this.products = bolos;
  });
};

var bolos = [
  {
  nome: 'bolo',
  descricao: 'blablabla',
  img: 'foto-circle1.jpg'
},
{
  nome: 'cupcake',
  descricao: 'blablabla',
  img: 'foto-circle4.jpg'
}
{
  nome: 'cakepop',
  descricao: 'blablabla',
  img: 'foto-circle1.jpg'
}
];
