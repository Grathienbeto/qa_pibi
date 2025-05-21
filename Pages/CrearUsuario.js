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

    Error_Password_Sin_Numeros = 'La contraseña debe contener al menos un número'
    Error_Password_Sin_Simbolos = 'La contraseña debe contener al menos un carácter especial'
    Error_Password_Sin_Mayusculas = 'La contraseña debe contener al menos una letra mayúscula'
    Error_Password_Corta = 'La contraseña debe tener al menos 8 caracteres'
    Error_Password_Iguales = 'Las contraseñas deben ser iguales'

    //METODOS Y/O FUNCIONES //

    Nombre(){return cy.get(this.Input_Nombre)}
    Apellido(){return cy.get(this.Input_Apellido)}
    Email(){return cy.get(this.Input_Email)}
    Rol(){return cy.get(this.Class_DropDownRol)}
    User_Rol(){return cy.contains(this.Rol_User)}
    Contraseña(){return cy.get(this.Input_Contraseña)}
    ConfirmContraseña(){return cy.get(this.Input_ConfirmContraseña)}
    Crear(){return cy.get(this.Button_Crear)}

    ErrorPasswordSinNumero() {return cy.contains(this.Error_Password_Sin_Numeros)}
    ErrorPasswordSinSimbolos() {return cy.contains(this.Error_Password_Sin_Simbolos)}
    ErrorPasswordSinMayusculas() {return cy.contains(this.Error_Password_Sin_Mayusculas)}
    ErrorPasswordCorta() {return cy.contains(this.Error_Password_Corta)}
    ErrorPasswordIguales(){return cy.contains(this.Error_Password_Iguales)}
    
}

export const onCrearUsuario = new CREAR_USUARIO()