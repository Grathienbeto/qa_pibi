/// <reference types="cypress" />
import Accesos from "../fixtures/Accesos.json";
import { faker } from "@faker-js/faker";
import { onLogin } from "../../Pages/LoginPage";
import { onHomePage } from "../../Pages/HomePage";
import { onRegistro } from "../../Pages/Registro";

describe(' TEST SUITE: "INICIO" --> INICIO DE SESION ', () => {

  beforeEach("El usuario se encuentra en la pagina de inicio de sesion", () => {
    cy.PageInicioSesion();
  });

  it("001. Iniciar sesion con usuario y contraseña validos.", () => {
    onLogin.loginUser()
    onHomePage.Informes().should("exist");
  });

  it("Iniciar sesion con usuario valido y contraseña incorrecta.", () => {
    onLogin.loginUser(Accesos.Admin_User, Accesos.Admin_Password_Incorrecto)
    onLogin.Alert_DatosIncorrectos().should("exist");
  });

  it("Iniciar sesion con usuario invalido y contraseña correcta.", () => {
    onLogin.loginUser(Accesos.Admin_User_Incorrecto, Accesos.Admin_Password)
    onLogin.Alert_DatosIncorrectos().should("exist");
  });

  it("Iniciar sesion con campos vacios.", () => {
    onLogin.BTN_InicioSesion().click({ force: true });
    onLogin.AlertUsernameRequerido().should("be.visible");
    onLogin.AlertPasswordRequerido().should("be.visible");
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

