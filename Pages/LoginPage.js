export class LOGIN {
  
  // SELECTORES //
  input_user = "#username";
  input_password = "#password";
  Button_IniciarSesion = '[data-testid="submit-btn"]';
  Logo_Pibi = "[alt='logo']";
  Button_MostrarPassword = 'span.cursor-pointer.input-group-text'
  Button_Registrarse = "Registrarse";
  Button_OlvidasteContraseña = "¿Olvidaste la contraseña?";
  Modal_Password_Olvidada = '[class="mt-1 mx-1 modal-body"]'
  Modal_Email_Input = '[data-testid="username-input"]'
  Modal_BTN_Submit = '[type="submit"]'
  Modal_Email_Incorrect = '[class="invalid-feedback"]'
  Modal_Token_Input = '[data-testid="token-input"]'
  Alert_Text_DatosIncorrectos = "Usuario o contraseña incorrectos";
  Alert_Text_Error = 'Hubo un error'
  Username_AlertText = "El usuario es requerido";
  Password_AlertText = "La contraseña es requerida";
  

  // GETTERS //
  User() {return cy.get(this.input_user, { timeout: 10000 });}
  Password() {return cy.get(this.input_password, { timeout: 10000 });}
  BTN_InicioSesion() {return cy.get(this.Button_IniciarSesion, { timeout: 10000 });}
  BTN_Registrarse() {return cy.contains(this.Button_Registrarse, { timeout: 10000 });}
  BTN_OlvidastePassword() {return cy.contains(this.Button_OlvidasteContraseña, { timeout: 10000 });}
  BTN_MostrarPassword() {return cy.get(this.Button_MostrarPassword), { timeout: 10000 };}
  Alert_DatosIncorrectos() {return cy.contains(this.Alert_Text_DatosIncorrectos, { timeout: 10000 });}
  AlertUsernameRequerido() {return cy.contains(this.Username_AlertText, { timeout: 10000 });}
  AlertPasswordRequerido() {return cy.contains(this.Password_AlertText, { timeout: 10000 });}
  Alert_ErrorOcurred() {return cy.contains(this.Alert_Text_Error)}
  LogoPIBI() {return cy.get(this.Logo_Pibi, { timeout: 10000 });}

  Modal_PasswordOlvidada() {
    return cy.get(this.Modal_Password_Olvidada, { timeout: 10000 })
  }
  Modal_EmailInput(){
    return cy.get(this.Modal_Email_Input)
  }
  Modal_EmailIncorrect(){
    return cy.get(this.Modal_Email_Incorrect)
  }
  Modal_TokenInput(){
    return cy.get(this.Modal_Token_Input)
  }


  // METODOS //
  loginUser(user, password){
    onLogin.User().type(user);
    onLogin.Password().type(password)
    onLogin.BTN_InicioSesion().click({ force: true });
  }
}

export const onLogin = new LOGIN()