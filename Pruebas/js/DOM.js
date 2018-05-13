// Header
var header = '\
    <nav class="navbar navbar-expand-lg navbar-light bg-light">\
        <a class="navbar-brand" href="#">Página de prueba</a>\
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\
            <span class="navbar-toggler-icon"></span>\
        </button>\
        <div class="collapse navbar-collapse" id="navbarNav">\
            <ul class="navbar-nav" ng-controller="navegacion as barraDeNavegacion">\
                <li class="nav-item" ng-repeat="elemento in barraDeNavegacion.subMenus">\
                    <a class="nav-link" href="{{elemento.irArchivo}}">{{elemento.nombrePagina}}</a>\
                </li>\
            </ul>\
        </div>\
    </nav>';

var headerContainer = document.createElement("div");
headerContainer.innerHTML = header;

document.body.insertBefore(headerContainer, document.body.firstChild);