(function(){
	angular.module("confiserise",[]);
	angular.module("confiserise").controller("confiseriseCtrl", function($scope){

		$scope.bolos = [
      {
      nome: 'bolo',
      descricao: 'blablabla blablabla blabla ',
      img: 'foto-circle1.jpg'
    },
    {
      nome: 'cupcake',
      descricao: 'blablablablaba blablablababalab ',
      img: 'foto-circle4.jpg'
    },
    {
      nome: 'cakepop',
      descricao: 'blalablabalbal balablabalbabaalb ',
      img: 'foto-circle1.jpg'
    }
    ];
  });
})();
