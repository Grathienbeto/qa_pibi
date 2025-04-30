export class INFORMES {
  //SELECTORES//

  Title_Informes = ".inline";
  ID_DemoShow_Informes =
    '#row-0 > #cell-1-undefined > span.w-100 > [data-testid="showreport-btn"]';
  ID_PiDataStrategy_Informes =
    '#row-1 > #cell-1-undefined > span.w-100 > [data-testid="showreport-btn"]';
  ID_Informe_GameMobile = "#report-023f546b-88ba-4640-a57d-4570d8ffb61c";

  Input_Search_Informes = '[name="search"]';
  Result_Search_Input = '[data-testid="showreport-btn"]';
  TitlePiDataInformes = ".inline";
  TableInformesPiData = ".sc-hGPBjI.GGDov.rdt_TableBody";
  Class_Number_Informes = ".sc-jrQzAO.dsNhFA.rdt_TableRow";
  ID_Asignaciones_PIBIGameMobile =
    "#editReport-023f546b-88ba-4640-a57d-4570d8ffb61c";
  Title_VistadeInforme = "Vista de informe";

  //METODOS Y/O FUNCIONES //

  Title() {
    return cy.get(this.Title_Informes, { timeout: 10000 });
  }
  DemoShowInformes() {
    return cy.get(this.ID_DemoShow_Informes, { timeout: 10000 });
  }
  PiDataInformes() {
    return cy.get(this.ID_PiDataStrategy_Informes);
  }
  SearchInformes() {
    return cy.get(this.Input_Search_Informes);
  }
  ResultSeatchInformes() {
    return cy.get(this.Result_Search_Input);
  }
  TitlePiData() {
    return cy.get(this.TitlePiDataInformes);
  }
  TablaPidata() {
    return cy.get(this.TableInformesPiData, { timeout: 10000 });
  }
  NumberInformes() {
    return cy.get(this.Class_Number_Informes);
  }
  TitleVistadeInformes() {
    return cy.contains(this.Title_VistadeInforme);
  }
  InformeGameMobile() {
    return cy.get(this.ID_Informe_GameMobile);
  }
  AsignacionesTennis() {
    return cy.get(this.ID_Asignaciones_TENNIS);
  }
  AsignacionesPibiGameMobile() {
    return cy.get(this.ID_Asignaciones_PIBIGameMobile);
  }
  PowerBITennis() {
    return cy.get("iframe", { timeout: 40000 });
  }
}
