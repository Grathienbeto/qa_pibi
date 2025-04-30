/// <reference types="cypress" />

import { INFORMES } from "../../Pages/Informes";

describe(' TEST SUITE: "INFORMES" --> "AREA DE TRABAJO / INFORMES" ', () => {
  const informes = new INFORMES();

  beforeEach("El usuario se encuentra en la pagina de inicio de sesion", () => {
    cy.PageInicioSesion();
    cy.IniciarSesion();
  });

  it("Ver listado de Proyectos", () => {
    informes
      .Title()
      .contains("Área de trabajo / Informes")
      .should("be.visible");
    informes.DemoShowInformes().should("exist");
    informes.PiDataInformes().should("exist");
  });

  it.skip("Buscar Proyecto por filtro", () => {
    informes
      .Title()
      .contains("Área de trabajo / Informes")
      .should("be.visible");
    informes.SearchInformes().type("Demo Shows");

    informes.ResultSeatchInformes().contains("Demo Shows").should("be.visible");
  });

  it("Ver listado de Informes de un Proyecto", () => {
    informes
      .Title()
      .contains("Área de trabajo / Informes")
      .should("be.visible");
    informes.PiDataInformes().should("exist").click();

    informes
      .TitlePiData()
      .should("include.text", "Pi Data Strategy & Consulting");
    informes.TablaPidata().within(() => {
      informes.NumberInformes().should("have.length", 7);
    });
  });

  it("Ir al tablero Power BI de un Informe", () => {
    informes
      .Title()
      .contains("Área de trabajo / Informes")
      .should("be.visible");
    informes.PiDataInformes().should("exist").click();
    informes.InformeGameMobile().click();
    informes.TitleVistadeInformes().should("be.visible");
    informes.TitleVistadeInformes().should("exist");
  });

  it("Ir a Asignaciones de un Informe", () => {
    informes
      .Title()
      .contains("Área de trabajo / Informes")
      .should("be.visible");
    informes.PiDataInformes().should("exist").click();

    informes.AsignacionesPibiGameMobile().click();

    informes.TablaPidata().within(() => {
      informes.NumberInformes().should("have.length", 7);
    });
  });
});
