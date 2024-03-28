const { dart } = require("modernizr");

var UsuarioModel = new function () {
    model = this;
    model.usuarios = ko.observable
    model.carregar = function () {
        $.ajax("http://localhost:56458/api/Usuarios").done(data => model.usuarios(data));
    }
    model.carregar();
}
ko.applyBindings(UsuarioModel);