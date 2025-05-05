import Accesos from "../cypress/fixtures/Accesos.json"


export class LOGIN {
  
  //SELECTORES//
  input_user = "#username";
  input_password = "#password";
  Button_IniciarSesion = "[data-testid='submit-btn']";
  Logo_Pibi = "[alt='logo']";
  Button_Registrarse = "Registrarse";
  Button_OlvidasteContraseña = "¿Olvidaste la contraseña?";
  Alert_Text_DatosIncorrectos = "Usuario o contraseña incorrectos";
  Username_AlertText = "El usuario es requerido";
  Password_AlertText = "El password es requerido";

  //METODOS Y/O FUNCIONES //
  User() {
    return cy.get(this.input_user, { timeout: 10000 });
  }
  Password() {
    return cy.get(this.input_password, { timeout: 10000 });
  }
  BTN_InicioSesion() {
    return cy.get(this.Button_IniciarSesion, { timeout: 10000 });
  }
  BTN_Registrarse() {
    return cy.contains(this.Button_Registrarse, { timeout: 10000 });
  }
  BTN_OlvidastePassword() {
    return cy.contains(this.Button_OlvidasteContraseña, { timeout: 10000 });
  }
  Alert_DatosIncorrectos() {
    return cy.contains(this.Alert_Text_DatosIncorrectos, { timeout: 10000 });
  }
  AlertUsernameRequerido() {
    return cy.contains(this.Username_AlertText, { timeout: 10000 });
  }
  AlertPasswordRequerido() {
    return cy.contains(this.Password_AlertText, { timeout: 10000 });
  }
  LogoPIBI() {
    return cy.get(this.Logo_Pibi, { timeout: 10000 });
  }

  loginUser(user = Accesos.Admin_User, password = Accesos.Admin_Password){
    onLogin.User().type(user);
    onLogin.Password().type(password)
    onLogin.BTN_InicioSesion().click({ force: true });
  }


}

export const onLogin = new LOGIN()