export class REGISTRO {

  // SELECTORES //
  Title_Registrase = "[data-testid='title']";
  Input_Nombre = "#name";
  Input_Apellido = "#lastname";
  Input_Email = "#username";
  Input_password = "#password";
  Input_ConfirPassword = "#confirmPassword";
  Button_Crear = "[data-testid='submit-btn']";
  Button_Deshacer = "[data-testid='reset-btn']";
  Text_Msj_Succefull = "Te registraste con éxito, ya podés ingresar a la plataforma.";
  Button_irInicio = ".round.btn.btn-primary";
  Alert_Nombre = "[data-testid='name-alert']";
  Alert_Apellido = "[data-testid='lastname-alert']";
  Alert_Email = "[data-testid='username-alert']";
  Alert_Password = "[data-testid='password-alert']";
  Alert_ConfirPassword = "[data-testid='confirmpassword-alert']";
  Alert_EmailExistente = "User already exists";
  Alert_Text_PasswordNOCoinciden = "Las contraseñas deben ser iguales";

  // GETTERS //
  Nombre() {return cy.get(this.Input_Nombre);}
  Apellido() {return cy.get(this.Input_Apellido);}
  Email() {return cy.get(this.Input_Email);}
  Password() {return cy.get(this.Input_password);}
  ConfirmPassword() {return cy.get(this.Input_ConfirPassword);}
  Crear() {return cy.get(this.Button_Crear);}
  SuccefullMsj() {return cy.contains("p", this.Text_Msj_Succefull, { timeout: 10000 });}
  IrInicio() {return cy.get(this.Button_irInicio);}
  AlertNombre() {return cy.get(this.Alert_Nombre);}
  AlertApellido() {return cy.get(this.Alert_Apellido);}  
  AlertEmail() {return cy.get(this.Alert_Email);}
  AlertPassword() {return cy.get(this.Alert_Password);}
  AlertConfirmPassword() {return cy.get(this.Alert_ConfirPassword);}
  AlertEmailExistente() {return cy.contains(this.Alert_EmailExistente, { timeout: 20000 });}
  AlertPasswordNoMatch() {return cy.contains(this.Alert_Text_PasswordNOCoinciden);}
}

export const onRegistro = new REGISTRO()