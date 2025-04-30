export class MODIFICAR_USUARIO{

    //SELECTORES//
    Title_NuevoUsuario="Modificar Usuario"
    Input_Nombre="#name"
    Input_Apellido = '#lastname'
    Rol_User="User"
    Button_Aplicar= "Aplicar"

    //METODOS Y/O FUNCIONES //

    Nombre(){return cy.get(this.Input_Nombre)}
    Apellido(){return cy.get(this.Input_Apellido)}
    User_Rol(){return cy.contains(this.Rol_User)}
    Aplicar(){return cy.contains(this.Button_Aplicar)}

}