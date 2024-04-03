const { dart } = require("modernizr");

var UsuarioModel = new function () {
    model = this;
    model.usuarios = ko.observable
    model.email = ko.observable();
    model.senha = ko.observable();
    model.confirmarsenha = ko.observable();
    model.comfirmar = ko.computed(function () {
        return model.senha() == model.confirmarsenha();
    }, this);
    model.confirmarCor = ko.computed(function () { return model.comfirmar( ?'' : 'red'; }, this);
    model.carregar = function () {
        $.ajax("http://localhost:56458/api/Usuarios").done(data => model.usuarios(data));
    }
    model.carregar();
}
var host = document.location.protocol + "//" + document.location.host + ":" + document.location.port + "/api/Usurios"
var UsuarioModel = new function () {
    var nodel = this;
   
}

ko.applyBindings(UsuarioModel);
