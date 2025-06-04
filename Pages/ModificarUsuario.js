export class MODIFICAR_USUARIO{

    //SELECTORES//
    Title_NuevoUsuario="Modificar Usuario"
    Input_Nombre="#name"
    Input_Apellido = '#lastname'
    Rol_User='[id="user_type"]'
    Button_Aplicar= "Aplicar"

    Usuario = 'User'
    Admin = 'Admin'

    Error_Nombre = 'El campo nombre es requerido'
    Error_Apellido = 'El campo apellido es requerido'

    //METODOS Y/O FUNCIONES //

    Nombre(){return cy.get(this.Input_Nombre)}
    Apellido(){return cy.get(this.Input_Apellido)}
    User_Rol(){return cy.get(this.Rol_User)}
    Aplicar(){return cy.contains(this.Button_Aplicar)}

    ErrorNombre(){return cy.contains(this.Error_Nombre)}
    ErrorApellido(){return cy.contains(this.Error_Apellido)}

    Rol_Usuario(){return cy.contains(this.Usuario)}
    Rol_Admin(){return cy.contains(this.Admin)}

}

export const onModificarUsuario = new MODIFICAR_USUARIO()