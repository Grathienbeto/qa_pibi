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
    Button_Deshacer='[type="reset"]'
    Button_Volver='[name="back"]'

    Error_Password_Sin_Numeros = 'La contraseña debe contener al menos un número'
    Error_Password_Sin_Simbolos = 'La contraseña debe contener al menos un carácter especial'
    Error_Password_Sin_Mayusculas = 'La contraseña debe contener al menos una letra mayúscula'
    Error_Password_Corta = 'La contraseña debe tener al menos 8 caracteres'
    Error_Password_Iguales = 'Las contraseñas deben ser iguales'
    Error_Password_Confirmar = 'Debe confirmar la contraseña'

    Error_Nombre_Obligatorio = 'El campo nombre es requerido'
    Error_Apellido_Obligatorio = 'El campo apellido es requerido'
    Error_Email_Obligatorio = 'El campo email es requerido'
    Error_Rol_Obligatorio = 'Debes elegir un rol de usuario'

    //METODOS Y/O FUNCIONES //

    Nombre(){return cy.get(this.Input_Nombre)}
    Apellido(){return cy.get(this.Input_Apellido)}
    Email(){return cy.get(this.Input_Email)}
    Rol(){return cy.get(this.Class_DropDownRol)}
    User_Rol(){return cy.contains(this.Rol_User)}
    Contraseña(){return cy.get(this.Input_Contraseña)}
    ConfirmContraseña(){return cy.get(this.Input_ConfirmContraseña)}
    Crear(){return cy.get(this.Button_Crear)}
    BtnDeshacer(){return cy.get(this.Button_Deshacer)}
    BtnVolver(){return cy.get(this.Button_Volver)}

    ErrorPasswordSinNumero() {return cy.contains(this.Error_Password_Sin_Numeros)}
    ErrorPasswordSinSimbolos() {return cy.contains(this.Error_Password_Sin_Simbolos)}
    ErrorPasswordSinMayusculas() {return cy.contains(this.Error_Password_Sin_Mayusculas)}
    ErrorPasswordCorta() {return cy.contains(this.Error_Password_Corta)}
    ErrorPasswordIguales(){return cy.contains(this.Error_Password_Iguales)}
    ErrorPasswordConfirmar(){return cy.contains(this.Error_Password_Confirmar)}

    ErrorNombreObligatorio() {return cy.contains(this.Error_Nombre_Obligatorio)}
    ErrorApellidoObligatorio() {return cy.contains(this.Error_Apellido_Obligatorio)}
    ErrorEmailObligatorio() {return cy.contains(this.Error_Email_Obligatorio)}
    ErrorRolObligatorio() {return cy.contains(this.Error_Rol_Obligatorio)}
    
}

export const onCrearUsuario = new CREAR_USUARIO()