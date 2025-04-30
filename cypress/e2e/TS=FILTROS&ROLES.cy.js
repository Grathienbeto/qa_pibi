/// <reference types="cypress" />

import { HOME } from "../../Pages/HomePage";
import { FILTROS } from "../../Pages/FiltrosRoles1";
import { ROLES } from "../../Pages/FiltrosRoles2";
import { faker } from "@faker-js/faker";
import Accesos from "../fixtures/Accesos.json";

let id_rolcreado;
let id_filtrocreado;

describe(' TEST SUITE: "FILTROS/ROLES" --> "FILTRO" ', () => {
  const home = new HOME();
  const filtros = new FILTROS();

  beforeEach("El usuario se encuentra en la pagina de inicio de sesion", () => {
    cy.PageInicioSesion();
    cy.IniciarSesion();
  });

  it("Visualizar listado de filtros", () => {
    home.FiltrosRoles().click({ force: true });
    home.Filtros().click({ force: true });

    filtros.TitleFiltros().contains("Lista de Filtros").should("be.visible");
    filtros.TablaFiltros().within(() => {
      filtros.NumberFiltros().should("have.length", 7);
    });
  });

  it("Crear filtro como Administrador (desde la API)", function () {
    cy.api({
      method: "POST",
      url: "https://pibi-app-fe-pi-demo.azurewebsites.net/admin/filters/create",
      headers: { Authorization: `Bearer ${Accesos.token}` },
      body: {
        name: "API QA ",
        table: "PRUEBAS QA API",
        column: "QA",
      },
    })
      .then((response) => {
        expect(response.status).to.eq(200);
      })
      .then((response1) => {
        id_filtrocreado = response1.body;
        cy.log("Este es el ID del rol: " + id_rolcreado);
      });
  });

  it("Modificar filtro como Administrador (desde la API)", function () {
    cy.api({
      method: "PUT",
      url:
        "https://pibi-app-fe-pi-demo.azurewebsites.net/admin/filters/update/" +
        id_filtrocreado,
      headers: { Authorization: `Bearer ${Accesos.token}` },
      body: {
        name: "NOMBRE FILTRO MODIFICADO OK",
        table: "TABLE MODIFICADA OK",
        column: "COLUMNA MODIFICADA OK",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Eliminar filtro como Administrador (desde la API)", function () {
    cy.api({
      method: "DELETE",
      url:
        "https://pibi-app-fe-pi-demo.azurewebsites.net/admin/filters/delete/" +
        id_filtrocreado,
      headers: { Authorization: `Bearer ${Accesos.token}` },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it.skip("Crear filtro como Administrador", () => {
    home.FiltrosRoles().click({ force: true });
    home.Filtros().click({ force: true });

    filtros.TitleFiltros().contains("Lista de Filtros").should("be.visible");
    filtros.AgregarFiltro().click();

    filtros.TitleNuevoFiltro().contains("Nuevo Filtro");
    filtros.NombreNuevoFiltro().type(faker.person.firstName());
    filtros.TablaNuevoFiltro().type(faker.person.lastName());
    filtros.ColumnaNuevoFiltro().type(faker.person.jobArea());

    filtros.Crear().click();

    filtros.TitleFiltros().contains("Lista de Filtros").should("be.visible");
  });

  it.skip("Modificar filtro como Administrador", () => {
    home.FiltrosRoles().click({ force: true });
    home.Filtros().click({ force: true });

    filtros.TitleFiltros().contains("Lista de Filtros").should("be.visible");
    filtros.BTN_EditarFiltroQA().click();

    filtros.TitleModificarFiltro().contains("Modificar Filtro");
    filtros.NombreNuevoFiltro().clear().type("QA");
    filtros.TablaNuevoFiltro().clear().type("TESTING");
    filtros.ColumnaNuevoFiltro().clear().type("CYPRESS");

    filtros.Aplicar().click();

    filtros.TitleFiltros().contains("Lista de Filtros").should("be.visible");
  });

  it.skip("Eliminar filtro como Administrador", () => {
    home.FiltrosRoles().click({ force: true });
    home.Filtros().click({ force: true });

    filtros.TitleFiltros().contains("Lista de Filtros").should("be.visible");
    filtros.EliminarFiltro().click();

    filtros.BTN_EditarFiltroQA().should("not.exist");
  });
});

describe.only(' TEST SUITE: "FILTROS/ROLES" --> "ROLES DE SEGURIDAD" ', () => {
  const home = new HOME();
  const roles = new ROLES();

  beforeEach("El usuario se encuentra en la pagina de inicio de sesion", () => {
    cy.PageInicioSesion();
    cy.IniciarSesion();
  });

  it("Ver listado de Roles", () => {
    home.FiltrosRoles().click({ force: true });
    home.RolesdeSeguridad().click({ force: true });

    roles
      .TitleRolesDeSeguridad()
      .contains("Roles de seguridad actuales")
      .should("be.visible");
    roles.TablaRoles().within(() => {
      roles.NumberRoles().should("have.length", 7);
    });
  });

  it("Crear Nuevo Rol (desde la API)", function () {
    cy.api({
      method: "POST",
      url: "https://pibi-app-fe-pi-demo.azurewebsites.net/admin/roles/createRol",
      headers: { Authorization: `Bearer ${Accesos.token}` },
      body: {
        name: "ROL CREADO DE PRUEBA",
      },
    })
      .then((response) => {
        expect(response.status).to.eq(200);
      })
      .then((response1) => {
        id_rolcreado = response1.body;
        cy.log("Este es el ID del rol: " + id_rolcreado);
      });
  });

  it("Modificar Rol (desde la API)", function () {
    cy.api({
      method: "PUT",
      url:
        "https://pibi-app-fe-pi-demo.azurewebsites.net/admin/roles/updateRole/" +
        id_rolcreado,
      headers: { Authorization: `Bearer ${Accesos.token}` },
      body: {
        name: "NOMBRE MODIFICADO OK",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Eliminar Rol (desde la API)", function () {
    cy.api({
      method: "DELETE",
      url:
        "https://pibi-app-fe-pi-demo.azurewebsites.net/admin/roles/deleteRole/" +
        id_rolcreado,
      headers: { Authorization: `Bearer ${Accesos.token}` },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it.skip("Crear Nuevo Rol", () => {
    home.FiltrosRoles().click({ force: true });
    home.RolesdeSeguridad().click({ force: true });

    roles
      .TitleRolesDeSeguridad()
      .contains("Roles de seguridad actuales")
      .should("be.visible");
    roles.AgregarNuevoRol().click();
    roles.NombreRol().type("TEST");
    roles.CrearRol().click();

    roles
      .TitleRolesDeSeguridad()
      .contains("Roles de seguridad actuales")
      .should("be.visible");
  });

  it.skip("Modificar Rol", () => {
    home.FiltrosRoles().click({ force: true });
    home.RolesdeSeguridad().click({ force: true });

    roles
      .TitleRolesDeSeguridad()
      .contains("Roles de seguridad actuales")
      .should("be.visible");
    roles.EditarRolSeleccionado().click();

    roles
      .TitleModificarRol()
      .contains("Modificar Rol de Seguridad")
      .should("be.visible");
    roles.ImgModificarRol().should("exist");
    roles.MessageImportant().should("be.visible");

    roles.NuevoNombreRol().clear().type(faker.person.jobDescriptor());
    roles.Aplicar().click();

    roles
      .TitleRolesDeSeguridad()
      .contains("Roles de seguridad actuales")
      .should("be.visible");
  });

  it.skip("Eliminar Rol", () => {
    home.FiltrosRoles().click({ force: true });
    home.RolesdeSeguridad().click({ force: true });

    roles
      .TitleRolesDeSeguridad()
      .contains("Roles de seguridad actuales")
      .should("be.visible");
    roles.EliminarRol().click();

    roles.VerificarRolEliminado().contains("Accesible QA").should("exist");
  });
});
