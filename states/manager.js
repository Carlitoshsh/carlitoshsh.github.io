/* Este es el manejador de mis archivos Javascript 
	y que utiliza funcionalidad de Phaser */

/* Se crea una nueva instancia de juego. 
	Este será nuestro elementos canvas y tendrá 
	todos los elementos de mundo y personajes.*/

// Se crea el lienzo donde se carga el juego
var game = new Phaser.Game(640, 480, Phaser.CANVAS, 'game');

// Se crean los estados del juego
// Este contiene el inicio del juego, que inicia cuando el usuario presiona ENTER
game.state.add('iniciar', inicio);
// Al presionar enter lo dirige al siguiente estado
game.state.add('juego', estudianteEnFinales);
//game.state.add('fin', winState);

// Se llama al primer estado
game.state.start('iniciar');
