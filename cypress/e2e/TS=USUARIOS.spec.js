/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

import { HOME } from "../../Pages/HomePage";
import Accesos from "../fixtures/Accesos.json";
import { USUARIOS } from "../../Pages/Usuarios";
import { CREAR_USUARIO } from "../../Pages/CrearUsuario";
import { MODIFICAR_USUARIO } from "../../Pages/ModificarUsuario";

describe(' TEST SUITE: "USUARIOS" --> ACCIONES ', () => {
  const home = new HOME();
  const usuarios = new USUARIOS();
  const NuevoUsuario = new CREAR_USUARIO();
  const ModificarUsuario = new MODIFICAR_USUARIO();

  beforeEach("El usuario se encuentra en la pagina de inicio de sesion", () => {
    cy.PageInicioSesion();
    cy.IniciarSesion();
    home.Usuarios().click();
  });

  it.skip("Crear usuario", () => {
    usuarios.CrearUsuario().click();

    NuevoUsuario.Nombre().type(faker.person.firstName());
    NuevoUsuario.Apellido().type(faker.person.lastName());
    NuevoUsuario.Email().type(faker.internet.email());
    NuevoUsuario.Rol().click();
    NuevoUsuario.User_Rol().click();
    NuevoUsuario.Contraseña().type(Accesos.Contraseña);
    NuevoUsuario.ConfirmContraseña().type(Accesos.ConfirContraseña);
    NuevoUsuario.Crear().click();

    usuarios.Title_Usuarios().should("be.visible");
  });

  it("Actualizar Estado de un Usuario", () => {
    usuarios
      .NombreUser()
      .contains("Prueba Prueba", { timeout: 10000 })
      .should("be.visible");
    usuarios.EmailUser().should("be.visible");
    usuarios.TipoUser().should("be.visible");
    usuarios.EstadoUser().contains("Activo").should("exist");

    usuarios.BTN_Pause().click();

    usuarios.EstadoUser().contains("Pausado").should("exist");
    cy.ActualizarEstadoActivo();
  });

  it("Modificar datos de un Usuario", () => {
    usuarios
      .NombreUser()
      .contains("Prueba Prueba", { timeout: 10000 })
      .should("be.visible");

    usuarios.BTN_Editar().click();

    ModificarUsuario.Nombre().clear().type("Prueba");
    ModificarUsuario.Apellido().clear().type("Prueba Modificado");
    ModificarUsuario.Aplicar().click();
    usuarios.Title_Usuarios().should("be.visible");
    cy.wait(5000);
    cy.ActualizarDatosUsuario();
  });

  it("Buscar Usuario", () => {
    usuarios.Title_Usuarios().should("be.visible");
    usuarios.Search().type("Igna Barrau");

    usuarios.TablaDeUsuarios().should("include.text", "Igna Barrau");
  });

  it("Filtrar por Estado", () => {
    usuarios.Title_Usuarios().should("be.visible");
    usuarios.FiltroxEstado().click();
    usuarios.EstadoActivo().click();

    usuarios
      .SpanFiltrado()
      .should("include.text", "Fitrando por: Usuarios activos");
  });
});
