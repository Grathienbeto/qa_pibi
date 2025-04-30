export class FILTROS{

    //SELECTORES//
    
    TitleListadeFiltros="[data-testid='title']"
    Class_Table_Listado_Filtros = ".sc-hGPBjI.GGDov.rdt_TableBody"
    Class_Number_Filtros = ".sc-jrQzAO.dsNhFA.rdt_TableRow"
    Add_Filtro = '[data-testid="add-btn"]'
    Class_TitleNuevoFiltro = '.text-center'
    Input_Nombre = '[data-testid="name-input"]'
    Input_Tabla='[data-testid="table-input"]'
    Input_Columna = '[data-testid="column-input"]'
    Button_CrearFiltro = '[data-testid="submit-btn"]'
    Button_Deshacer = '.me-1'
    IMG_NuevoFiltro = ".img-fluid"
    BTN_Editar_Filtro_QA = '[data-testid="fb8754e9-ac7f-4ad5-9bcd-9667322dca15-edit"]'
    BTN_EliminarFiltroQA = "[data-testid='fb8754e9-ac7f-4ad5-9bcd-9667322dca15-delete']"
    Class_TitleModificarFiltro = '.text-center'
    Button_Aplicar = '[data-testid="submit-btn"]'




    //METODOS Y/O FUNCIONES //

    TitleFiltros(){return cy.get(this.TitleListadeFiltros,{timeout:10000})}
    TablaFiltros(){return cy.get(this.Class_Table_Listado_Filtros,{timeout:10000})}
    NumberFiltros(){return cy.get(this.Class_Number_Filtros,{timeout:5000})}
    AgregarFiltro(){return cy.get(this.Add_Filtro,{timeout:5000})}
    NombreNuevoFiltro(){return cy.get(this.Input_Nombre,{timeout:5000})}
    TablaNuevoFiltro(){return cy.get(this.Input_Tabla,{timeout:5000})}
    ColumnaNuevoFiltro(){return cy.get(this.Input_Columna,{timeout:5000})}
    TitleNuevoFiltro(){return cy.get(this.Class_TitleNuevoFiltro,{timeout:5000})}
    Crear(){return cy.get(this.Button_CrearFiltro,{timeout:5000})}
    BTN_EditarFiltroQA(){return cy.get(this.BTN_Editar_Filtro_QA,{timeout:5000})}
    TitleModificarFiltro(){return cy.get(this.Class_TitleModificarFiltro,{timeout:5000})}
    Aplicar(){return cy.get(this.Button_Aplicar,{timeout:5000})}
    EliminarFiltro(){return cy.get(this.BTN_EliminarFiltroQA,{timeout:5000})}

}






