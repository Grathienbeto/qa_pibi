export class HOME{

    //SELECTORES//
    
    SesionInformes="[data-testid='reports-navitem']"
    SesionUsuarios="[data-testid='users-navitem']"
    SesionFiltrosRoles= "[data-testid='filterandroles-navitem']"
    Filtros_DropDown= '[data-testid="filters-navitem"]'
    RolesDeSeguridad_DropDown = '[data-testid="roles-navitem"]'
    SesionAsignaciones = "[data-testid='assignments-navitem']"
    SesionEstadisticas = ':nth-child(6) > .d-flex'




    //METODOS Y/O FUNCIONES //

    Informes(){return cy.get(this.SesionInformes,{timeout:10000})}
    Usuarios(){return cy.get(this.SesionUsuarios,{timeout:10000})}
    FiltrosRoles(){return cy.get(this.SesionFiltrosRoles,{timeout:10000})}
    Filtros(){return cy.get(this.Filtros_DropDown,{timeout:5000})}
    RolesdeSeguridad(){return cy.get(this.RolesDeSeguridad_DropDown,{timeout:5000})}
    Asignaciones(){return cy.get(this.SesionAsignaciones,{timeout:10000})}
    Estadisticas(){return cy.get(this.SesionEstadisticas,{timeout:10000})}






}