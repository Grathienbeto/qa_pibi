/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import { onLogin } from "../../Pages/LoginPage";
import { onHomePage } from "../../Pages/HomePage";
import { onRegistro } from "../../Pages/Registro";
import Accesos from "../fixtures/Accesos.json";

describe(' TEST SUITE: "INICIO" --> INICIO DE SESION ', () => {

  beforeEach("El usuario se encuentra en la pagina de inicio de sesion", () => {
    cy.PageInicioSesion();
  });

  it("001. Iniciar sesion con usuario y contraseña validos.", () => {
    onLogin.loginUser(Accesos.Admin_User, Accesos.Admin_Password)
    onHomePage.Informes().should("exist");
  });

  it("002. Iniciar sesion con usuario valido y contraseña incorrecta.", () => {
    onLogin.loginUser(Accesos.Admin_User, Accesos.Admin_Password_Incorrecto)
    onLogin.Alert_DatosIncorrectos().should("exist");
  });

  it("003. Iniciar con usuario y dejar en blanco la contraseña", () => {
    onLogin.loginUser(Accesos.Admin_User, " ")
    onLogin.Alert_DatosIncorrectos().should("exist");
  });

  it("004. Iniciar con contraseña y dejar en blanco el usuario", () =>{
    onLogin.loginUser(" ", Accesos.Admin_Password)
    onLogin.AlertUsernameRequerido().should("be.visible");
  })

  it("005. Iniciar con usuario y dejar en blanco la contraseña", () => {
    onLogin.loginUser(Accesos.Admin_User_Incorrecto, Accesos.Admin_Password_Incorrecto)
    onLogin.Alert_DatosIncorrectos().should("exist");
  });

  it("006. Iniciar con un mail con formato incorrecto", () => {
    onLogin.loginUser(Accesos.Admin_User_Mal_Formato1, Accesos.Admin_Password_Incorrecto)
    onLogin.User().then(($input) => {
      expect($input[0].validationMessage).to.equal('Incluye un signo "@" en la dirección de correo electrónico. La dirección "adminpibi.com" no incluye el signo "@".');
    });
  });

  it("007. Iniciar sesion con campos vacios.", () => {
    onLogin.BTN_InicioSesion().click({ force: true });
    onLogin.AlertUsernameRequerido().should("be.visible");
    onLogin.AlertPasswordRequerido().should("be.visible");
  });

  it("008. Input mail tiene que ser tipo mail", () => {
    onLogin.User().should("have.attr", "type", "email");
  });

  it("009. Input password tiene que ser tipo password", () => {
    onLogin.Password().should("have.attr", "type", "password");
  });

  it("010. Boton 'mostrar password' debe mostrar la password en formato texto", () => {
    onLogin.Password().type(Accesos.Admin_User_Pass_Prueba)
    onLogin.Password().should("have.attr", "type", "password");
    cy.get('span.cursor-pointer.input-group-text').click();
    onLogin.Password().should("have.attr", "type", "text");
    cy.get('span.cursor-pointer.input-group-text').click();
    onLogin.Password().should("have.attr", "type", "password");
  });

});


describe(' TEST SUITE: "INICIO" --> REGISTRO ', () => {

  beforeEach("El usuario se encuentra en la pagina de inicio de sesion", () => {
    cy.PageInicioSesion();
  });

  it.skip("Registrarse Manualmente.", () => {
    onLogin.BTN_Registrarse().click();
    onRegistro.Nombre().type(faker.person.firstName());
    onRegistro.Apellido().type(faker.person.lastName());
    onRegistro.Email().type(faker.internet.email());
    onRegistro.Password().type(Accesos.Contraseña);
    onRegistro.ConfirmPassword().type(Accesos.ConfirContraseña);
    onRegistro.Crear().click({ force: true });
    onRegistro.SuccefullMsj().should("be.visible");
    onRegistro.IrInicio().click({ force: true });
  });

  it("Intentar registrarse sin llenar los campos.", () => {
    onLogin.BTN_Registrarse().click();
    onRegistro.Crear().click({ force: true });
    onRegistro.AlertNombre().should("be.visible");
    onRegistro.AlertApellido().should("be.visible");
    onRegistro.AlertEmail().should("be.visible");
    onRegistro.AlertPassword().should("be.visible");
    onRegistro.AlertConfirmPassword().should("be.visible");
  });

  it("Intentar registrarse con un email ya existente.", () => {
    onLogin.BTN_Registrarse().click();
    onRegistro.Nombre().type(faker.person.firstName());
    onRegistro.Apellido().type(faker.person.lastName());
    onRegistro.Email().type(Accesos.Email_Existente);
    onRegistro.Password().type(Accesos.Contraseña);
    onRegistro.ConfirmPassword().type(Accesos.ConfirContraseña);
    onRegistro.Crear().click({ force: true });
    onRegistro.AlertEmailExistente().should("exist");
  });

  it("Intentar registrarse sin que coincidan las contraseñas.", () => {
    onLogin.BTN_Registrarse().click();
    onRegistro.Nombre().type(faker.person.firstName());
    onRegistro.Apellido().type(faker.person.lastName());
    onRegistro.Email().type(Accesos.Email_Existente);
    onRegistro.Password().type(Accesos.Contraseña);
    onRegistro.ConfirmPassword().type(Accesos.ConfirContraseñaFAKE);
    onRegistro.Crear().click({ force: true });
    onRegistro.AlertPasswordNoMatch().should("be.visible");
  });
});



