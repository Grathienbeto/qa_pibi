/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import Accesos from "../fixtures/Accesos.json";
import { onHomePage } from "../../Pages/HomePage";
import { onUsuarios } from "../../Pages/Usuarios";
import { onCrearUsuario } from "../../Pages/CrearUsuario";
import { onModificarUsuario } from '../../Pages/ModificarUsuario'


describe(' TEST SUITE: "USUARIOS" --> ACCIONES ', () => {

  beforeEach("El usuario se encuentra en la pagina de inicio de sesion", () => {
    cy.PageInicioSesion();
    cy.IniciarSesion();
    onHomePage.Usuarios().click();
  });

  it.only("Crear usuario", () => {
    onUsuarios.CrearUsuario().click();

    onCrearUsuario.Nombre().type(faker.person.firstName());
    onCrearUsuario.Apellido().type(faker.person.lastName());
    onCrearUsuario.Email().type(faker.internet.email());
    onCrearUsuario.Rol().click();
    onCrearUsuario.User_Rol().click();
    onCrearUsuario.Contraseña().type(Accesos.Contraseña);
    onCrearUsuario.ConfirmContraseña().type(Accesos.ConfirContraseña);
    //onCrearUsuario.Crear().click();

    onUsuarios.Title_Usuarios().should("be.visible");
  });

  it("Actualizar Estado de un Usuario", () => {
    onUsuarios
      .NombreUser()
      .contains("Prueba Prueba", { timeout: 10000 })
      .should("be.visible");
    onUsuarios.EmailUser().should("be.visible");
    onUsuarios.TipoUser().should("be.visible");
    onUsuarios.EstadoUser().contains("Activo").should("exist");

    onUsuarios.BTN_Pause().click();

    onUsuarios.EstadoUser().contains("Pausado").should("exist");
    cy.ActualizarEstadoActivo();
  });

  it("Modificar datos de un Usuario", () => {
    onUsuarios
      .NombreUser()
      .contains("Prueba Prueba", { timeout: 10000 })
      .should("be.visible");

    onUsuarios.BTN_Editar().click();
    onModificarUsuario.Nombre().clear().type("Prueba");
    onModificarUsuario.Apellido().clear().type("Prueba Modificado");
    onModificarUsuario.Aplicar().click();
    onUsuarios.Title_Usuarios().should("be.visible");

    cy.wait(5000);
    cy.ActualizarDatosUsuario();
  });

  it("Buscar Usuario", () => {
    onUsuarios.Title_Usuarios().should("be.visible");
    onUsuarios.Search().type("Igna Barrau");

    onUsuarios.TablaDeUsuarios().should("include.text", "Igna Barrau");
  });

  it("Filtrar por Estado", () => {
    onUsuarios.Title_Usuarios().should("be.visible");
    onUsuarios.FiltroxEstado().click();
    onUsuarios.EstadoActivo().click();

    onUsuarios
      .SpanFiltrado()
      .should("include.text", "Fitrando por: Usuarios activos");
  });


});
