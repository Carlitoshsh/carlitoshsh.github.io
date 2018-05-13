// Angular
var testingAngular = angular.module('testApp', []);

testingAngular.controller('miControlador', function () {

    var listaCualquiera = this;

    listaCualquiera.CopaFIFA = {
        "Europa": [
            {
                "equipo": "Alemania",
                "copasDelMundo": "4"
            }, {
                "equipo": "Inglaterra",
                "copasDelMundo": "1"
            }, {
                "equipo": "España",
                "copasDelMundo": "1"
            }, {
                "equipo": "Francia",
                "copasDelMundo": "1"
            }, {
                "equipo": "Italia",
                "copasDelMundo": "4"
            }
        ],
        "America": [
            {
                "equipo": "Brasil",
                "copasDelMundo": "5"
            }, {
                "equipo": "Uruguay",
                "copasDelMundo": "2"
            }, {
                "equipo": "Argentina",
                "copasDelMundo": "2"
            }
        ]

    };
});

testingAngular.controller('navegacion', function () {
    var barraDeNavegacion = this;

    barraDeNavegacion.subMenus = [
        {
            "irArchivo": "index.html",
            "nombrePagina": "Inicio",
        }, {
            "irArchivo": "pagina1.html",
            "nombrePagina": "Pagina 1",
        }, {
            "irArchivo": "pagina2.html",
            "nombrePagina": "Pagina 2",
        }
    ];
});

