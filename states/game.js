/* Se crea una nueva instancia de juego llamada estudianteEnFinales. */
/* Esta es llamada en el manager */

/* Se siguieron diferentes tutoriales encontrados en la pagina de Phaser */

/* Esta función recibe como parametro "game" -definido en el 
 manager.js- y le añade las propidades en su interior.*/
var estudianteEnFinales = function (game) {
    /* Inicializa el mapa, la capa donde se ubijugadorán los elementos y el jugador*/
    /*"this" hace referencia al parametro game, y así en las instancias de esta funcion*/
    this.map = null;
    this.capa = null;
    this.jugador = null;

    /* Se crean los objetos estaticos */
    this.diploma1  = null;
    this.diploma2  = null;
    this.diploma3  = null;
    this.diploma4  = null;
    this.diploma5  = null;

    /* */
    //this.safetile = 1;
    /* Se usara para calcular movimientos */
    this.dimCuadricula = 32;

    /* Velocidad controla el movimiento "automatico" del jugador. 
    La dirección en que se mueva la define el usuario */
    this.velocidad = 100;
    //this.threshold = 3;
    this.velocidadGiro = 150;

    /* Traza el marcador de las paredes */
    this.marcador = new Phaser.Point();
    /* Se usará para permitir los giros y ver el ultimo giro realizado*/
    this.puntoGiro = new Phaser.Point();

    /* Se inicializa un vector de direcciones, con eso 
        sabemos si nuestro jugador puede moverse hacia la 
        izquierda, derecha, arriba, abajo. El primer elemento se 
        refiere cuando no realiza movimientos. */
    this.direcciones = [ null, null, null, null, null ];
    /* Se crea un arreglo de opuestos de las direcciones anteriores */
    this.opuestos = [ Phaser.NONE, Phaser.RIGHT, Phaser.LEFT, Phaser.DOWN, Phaser.UP ];
    /* Guarda la posición actual*/
    this.actual = Phaser.UP;
    /* Busca los posibles movimientos, los que son validos para moverse
        Los que no están obstruidos por una pared */
    this.girar = Phaser.NONE;

};

/* Esta es una instancia de estudianteEnFinales, que contiene las variables contenidas
    en la función anterior. */
estudianteEnFinales.prototype = {

    /*Importa la función Physics de Phaser, que le da atributos 
    de colisiones a los objetos */
    init: function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
    },

    /* En esta función se realiza la carga de los archivos que estan
        presentes en nuestro ambiente o mundo.*/
    preload: function () {
        /* map es un archivo json.*/
        /* Este archivo contiene la ubicacion de los elementos en el mapa. Es decir, 
            el toma de una imagen de patrones algunos elementos y construye así el mapa.*/
        this.load.tilemap('map', 'images/map/map.json', null, Phaser.Tilemap.TILED_JSON);
        /*Importa el archivo de patrones para que el json ubique los elementos usados en el mapa.
        La imagen de patrones contiene elementos del mismo tamaño y permite construir mundos*/
        this.load.image('tiles', 'images/map/default_tiles_x.png');
        /* Importa la imagen del jugador */
        this.load.image('jugador', 'images/map/car90.png');
        /* Importa la imagen del diploma*/
        this.load.image('diploma', 'images/map/diploma.png');
    },

    /* Esta función crea nuestro mundo con los elementos que se cargaron en preload*/
    create: function () {
        /* Añade el mapa al escenario */
        this.map = this.add.tilemap('map');
        /* Añade los elementos en el json en el escenario. 'other' es el nombre clave
        con que el json reconoce el archivo de patrones */
        this.map.addTilesetImage('other', 'tiles');
        /* 'mundo' hace referencia al mapa creado por medio del archivo de patrones.
        También esta presente en el archivo de json */
        this.capa = this.map.createLayer('mundo');
        /*Añade colisiones con el elemento 2 en el mapa. json llena con numeros el patron construido.
        Esos numeros representan una imagen dentro del archivo de patrones. Así es como se
        construye el mapa.*/
        /*El elemento 2 es una pared */
        this.map.setCollision(2, true, this.capa);
        /* Se añade al jugador en el escenario*/
        this.jugador = this.add.sprite(48, 48, 'jugador');
        /*Se refiere a la rotación de jugador. 0.5, en la mitad*/
        this.jugador.anchor.set(0.5);
        /* Hacemos que jugador sea un objeto con propiedades fisicas,
        con el fin de la colisión.
        Esto se hace gracias a la libreria Phaser*/
        this.physics.arcade.enable(this.jugador);
        /* Se añaden los diplomas en el mapa */
        /*Como cada recuadro en el mapa mide 32 e inicia desde cero, así
            se calculo para añadir a la posición: x*cantidad de casillas, y*cantidad de casillas*/
        this.diploma1 = game.add.sprite(160,32, 'diploma');
        this.diploma2 = game.add.sprite(384,64, 'diploma');
        this.diploma3 = game.add.sprite(128,288, 'diploma');
        this.diploma4 = game.add.sprite(512,288, 'diploma');
        this.diploma5 = game.add.sprite(256,384, 'diploma');
        /* El movimiento del jugador es manejado por el usuario.
        Se le indica a game que se hará a través del teclado*/
        this.cursors = this.input.keyboard.createCursorKeys();
        /* Inicializa el movimiento, en este caso hacia abajo*/
        this.move(Phaser.DOWN);

    },

    /* Chequea la tecla presionada y el movimiento*/
    accionesTeclado: function () {
        /* Realiza la opción cuando la tecla es presionada */
        /* Aquí se presentan las 4 direcciones posibles */
        if (this.cursors.left.isDown)
        {
            this.esValidoMoverse(Phaser.LEFT);
        }
        else if (this.cursors.right.isDown)
        {
            this.esValidoMoverse(Phaser.RIGHT);
        }
        if (this.cursors.up.isDown)
        {
            this.esValidoMoverse(Phaser.UP);
        }
        else if (this.cursors.down.isDown)
        {
            this.esValidoMoverse(Phaser.DOWN);
        }

    },

    /* checkea si el jugador puede moverse a la dirección que indico el usuario */
    esValidoMoverse: function (moverA) {
        /*Si el movimiento del usuario es contra una pared, llamará a la función mover, para que
        examine otros movimientos posibles*/
        if (this.actual === this.opuestos[moverA])
        {
            this.move(moverA);
        }
        else
        {
            /*Si no hay una casilla que lo obstruya gira a esa dirección*/
            this.girar = moverA;
            /*Punto giro es un elemento visual que le indica al usuario cual fue su ultimo giro
            y esta relacionado con la colision de las paredes. Permite también que el jugador no se salga
            de las dimensiones del mundo, o aparezca encima de las paredes donde colisiona*/
            this.puntoGiro.x = (this.marcador.x * this.dimCuadricula) + (this.dimCuadricula / 2);
            this.puntoGiro.y = (this.marcador.y * this.dimCuadricula) + (this.dimCuadricula / 2);
        }

    },

    /*Se define la función de giro*/
    turn: function () {
        /*Se recupera la posición (coordenada) del jugador, y realiza Math.floor (funcion piso, que es una 
        aproximación a la parte entera de un numero decimal por debajo)*/
        var cx = Math.floor(this.jugador.x);
        var cy = Math.floor(this.jugador.y);

        /*Asigna las coordenadas de giro a jugador*/
        this.jugador.x = this.puntoGiro.x;
        this.jugador.y = this.puntoGiro.y;

        /* le indica al jugador la posición donde debe efectuar el giro*/
        this.jugador.body.reset(this.puntoGiro.x, this.puntoGiro.y);
        /*Habilita hacia donde se puede girar en dicha posicion posbles y luego lo resetea*/
        this.move(this.girar);
        this.girar = Phaser.NONE;
        /* Le indica al que llama a esta función que si es valido el movimiento en la direccion opuesta*/
        return true;

    },

    move: function (direction) {
        var velocidad = this.velocidad;

        if (direction === Phaser.LEFT || direction === Phaser.UP)
        {
            velocidad = -velocidad;
        }

        if (direction === Phaser.LEFT || direction === Phaser.RIGHT)
        {
            this.jugador.body.velocity.x = velocidad;
        }
        else
        {
            this.jugador.body.velocity.y = velocidad;
        }

        this.add.tween(this.jugador).to( { angle: this.getAngle(direction) }, this.velocidadGiro, "Linear", true);

        this.actual = direction;

    },

    // Esta función muestra el cambio en la imagen debido al giro
    getAngle: function (to) {

        if (this.actual === this.opuestos[to])
        {
            return "180";
        }

        if ((this.actual === Phaser.UP && to === Phaser.LEFT) ||
            (this.actual === Phaser.DOWN && to === Phaser.RIGHT) ||
            (this.actual === Phaser.LEFT && to === Phaser.DOWN) ||
            (this.actual === Phaser.RIGHT && to === Phaser.UP))
        {
            return "-90";
        }

        return "90";

    },

    update: function () {
      
        this.physics.arcade.collide(this.jugador, this.capa);

        this.marcador.x = this.math.snapToFloor(Math.floor(this.jugador.x), this.dimCuadricula) / this.dimCuadricula;
        this.marcador.y = this.math.snapToFloor(Math.floor(this.jugador.y), this.dimCuadricula) / this.dimCuadricula;

        //  Actualiza los sensores de direcciones 
        this.direcciones[1] = this.map.getTileLeft(this.capa.index, this.marcador.x, this.marcador.y);
        this.direcciones[2] = this.map.getTileRight(this.capa.index, this.marcador.x, this.marcador.y);
        this.direcciones[3] = this.map.getTileAbove(this.capa.index, this.marcador.x, this.marcador.y);
        this.direcciones[4] = this.map.getTileBelow(this.capa.index, this.marcador.x, this.marcador.y);

        this.accionesTeclado();

        if (this.girar !== Phaser.NONE)
        {
            this.turn();
        }

        this.colisiones();

    },

    colisiones: function () {
        // Colisiones. Resta el valor de x y y de jugador y la diploma, si es menor a 20px destruye el objeto diploma
        if (Math.abs(this.jugador.x - this.diploma1.x) < 20 && Math.abs(this.jugador.y - this.diploma1.y) < 20){
            this.diploma1.destroy();
            // Se asigna un valor muy grande a las coordenadas de diploma para que no vuelva a entrar al if
            this.diploma1.y = 9999999;
            this.diploma1.x = 9999999;
            //total_diplomas += 1;
        }

        if (Math.abs(this.jugador.x - this.diploma2.x) < 20 && Math.abs(this.jugador.y - this.diploma2.y) < 20){
            this.diploma2.destroy();
            // Se asigna un valor muy grande a las coordenadas de diploma para que no vuelva a entrar al if
            this.diploma2.y = 9999999;
            this.diploma2.x = 9999999;
            //total_diplomas += 1;
        }

        if (Math.abs(this.jugador.x - this.diploma3.x) < 20 && Math.abs(this.jugador.y - this.diploma3.y) < 20){
            this.diploma3.destroy();
            // Se asigna un valor muy grande a las coordenadas de diploma para que no vuelva a entrar al if
            this.diploma3.y = 9999999;
            this.diploma3.x = 9999999;
            //total_diplomas += 1;
        }

        if (Math.abs(this.jugador.x - this.diploma4.x) < 20 && Math.abs(this.jugador.y - this.diploma4.y) < 20){
            this.diploma4.destroy();
            // Se asigna un valor muy grande a las coordenadas de diploma para que no vuelva a entrar al if
            this.diploma4.y = 9999999;
            this.diploma4.x = 9999999;
            //total_diplomas += 1;    
        }

        if (Math.abs(this.jugador.x - this.diploma5.x) < 20 && Math.abs(this.jugador.y - this.diploma5.y) < 20){
            this.diploma5.destroy();
            // Se asigna un valor muy grande a las coordenadas de diploma para que no vuelva a entrar al if
            this.diploma5.y = 9999999;
            this.diploma5.x = 9999999;
            //total_keys += 1;    
        }
    },


    render: function () {

        //  debug

        for (var t = 1; t < 5; t++)
        {
            if (this.direcciones[t] === null)
            {
                continue;
            }

            var color = 'rgba(0,255,0,0.3)';

            if (t === this.actual)
            {
                color = 'rgba(0,255,255,0.3)';
            }

            this.game.debug.geom(new Phaser.Rectangle(this.direcciones[t].worldX, this.direcciones[t].worldY, 32, 32), color, true);
        }

        this.game.debug.geom(this.puntoGiro, '#ffff00');

    }

};