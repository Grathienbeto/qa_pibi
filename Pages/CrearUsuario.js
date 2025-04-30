export class CREAR_USUARIO{

    //SELECTORES//
    Title_NuevoUsuario="Nuevo Usuario"
    Input_Nombre="#name"
    Input_Apellido = '#lastname'
    Input_Email="#username"
    Class_DropDownRol=".select__indicator"
    Rol_User="User"
    Input_Contraseña="#password"
    Input_ConfirmContraseña="#confirmPassword"
    Button_Crear= ".round.btn.btn-primary"


    //METODOS Y/O FUNCIONES //

    Nombre(){return cy.get(this.Input_Nombre)}
    Apellido(){return cy.get(this.Input_Apellido)}
    Email(){return cy.get(this.Input_Email)}
    Rol(){return cy.get(this.Class_DropDownRol)}
    User_Rol(){return cy.contains(this.Rol_User)}
    Contraseña(){return cy.get(this.Input_Contraseña)}
    ConfirmContraseña(){return cy.get(this.Input_ConfirmContraseña)}
    Crear(){return cy.get(this.Button_Crear)}


}