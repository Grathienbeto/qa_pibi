/// <reference types="cypress" />
import { LOGIN } from "../../Pages/LoginPage";
import { HOME } from "../../Pages/HomePage";
import Accesos from "../fixtures/Accesos.json";
import { REGISTRO } from "../../Pages/Registro";
import { faker } from "@faker-js/faker";

describe(' TEST SUITE: "INICIO" --> INICIO DE SESION ', () => {
  const login = new LOGIN();
  const home = new HOME();

  beforeEach("El usuario se encuentra en la pagina de inicio de sesion", () => {
    cy.PageInicioSesion();
  });

  it("Iniciar sesion con usuario y contraseña validos.", () => {
    cy.IniciarSesion();
    home.Informes().should("exist");
  });

  it("Iniciar sesion con usuario valido y contraseña incorrecta.", () => {
    login.User().type(Accesos.Admin_User);
    login.Password().type(Accesos.Admin_Password_Incorrecto);
    login.BTN_InicioSesion().click({ force: true });
    login.Alert_DatosIncorrectos().should("exist");
  });

  it("Iniciar sesion con usuario invalido y contraseña correcta.", () => {
    login.User().type(Accesos.Admin_User_Incorrecto);
    login.Password().type(Accesos.Admin_Password);
    login.BTN_InicioSesion().click({ force: true });
    login.Alert_DatosIncorrectos().should("exist");
  });

  it("Iniciar sesion con campos vacios.", () => {
    login.BTN_InicioSesion().click({ force: true });
    login.AlertUsernameRequerido().should("be.visible");
    login.AlertPasswordRequerido().should("be.visible");
  });
});

describe(' TEST SUITE: "INICIO" --> REGISTRO ', () => {
  const login = new LOGIN();
  const registro = new REGISTRO();

  beforeEach("El usuario se encuentra en la pagina de inicio de sesion", () => {
    cy.PageInicioSesion();
  });

  it.skip("Registrarse Manualmente.", () => {
    login.BTN_Registrarse().click();
    registro.Nombre().type(faker.person.firstName());
    registro.Apellido().type(faker.person.lastName());
    registro.Email().type(faker.internet.email());
    registro.Password().type(Accesos.Contraseña);
    registro.ConfirmPassword().type(Accesos.ConfirContraseña);
    registro.Crear().click({ force: true });
    registro.SuccefullMsj().should("be.visible");
    registro.IrInicio().click({ force: true });
  });

  it("Intentar registrarse sin llenar los campos.", () => {
    login.BTN_Registrarse().click();
    registro.Crear().click({ force: true });
    registro.AlertNombre().should("be.visible");
    registro.AlertApellido().should("be.visible");
    registro.AlertEmail().should("be.visible");
    registro.AlertPassword().should("be.visible");
    registro.AlertConfirmPassword().should("be.visible");
  });

  it("Intentar registrarse con un email ya existente.", () => {
    login.BTN_Registrarse().click();
    registro.Nombre().type(faker.person.firstName());
    registro.Apellido().type(faker.person.lastName());
    registro.Email().type(Accesos.Email_Existente);
    registro.Password().type(Accesos.Contraseña);
    registro.ConfirmPassword().type(Accesos.ConfirContraseña);
    registro.Crear().click({ force: true });
    registro.AlertEmailExistente().should("exist");
  });

  it("Intentar registrarse sin que coincidan las contraseñas.", () => {
    login.BTN_Registrarse().click();
    registro.Nombre().type(faker.person.firstName());
    registro.Apellido().type(faker.person.lastName());
    registro.Email().type(Accesos.Email_Existente);
    registro.Password().type(Accesos.Contraseña);
    registro.ConfirmPassword().type(Accesos.ConfirContraseñaFAKE);
    registro.Crear().click({ force: true });
    registro.AlertPasswordNoMatch().should("be.visible");
  });
});
