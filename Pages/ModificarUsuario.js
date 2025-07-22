export class MODIFICAR_USUARIO{

    //SELECTORES//
    Title_NuevoUsuario="Modificar Usuario"
    Input_Nombre="#name"
    Input_Apellido = '#lastname'
    Rol_User='[id="user_type"]'
    Button_Aplicar= "Aplicar"
    Div_Body = '[class="card-body"]'

    Usuario = 'User'
    Admin = '[id="react-select-2-option-0"]'

    Error_Nombre = 'El campo nombre es requerido'
    Error_Apellido = 'El campo apellido es requerido'

    //METODOS Y/O FUNCIONES //

    Nombre(){return cy.get(this.Input_Nombre)}
    Apellido(){return cy.get(this.Input_Apellido)}
    User_Rol(){return cy.get(this.Rol_User)}
    Aplicar(){return cy.contains(this.Button_Aplicar)}
    DivBody(){return cy.get(this.Div_Body)}

    ErrorNombre(){return cy.contains(this.Error_Nombre)}
    ErrorApellido(){return cy.contains(this.Error_Apellido)}

    Rol_Usuario(){return cy.contains(this.Usuario)}
    Rol_Admin(){return cy.get(this.Admin)}

}

export const onModificarUsuario = new MODIFICAR_USUARIO()