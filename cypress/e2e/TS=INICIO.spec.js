/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import { onLogin } from "../../Pages/LoginPage";
import { onHomePage } from "../../Pages/HomePage";
import { onRegistro } from "../../Pages/Registro";
import Accesos from "../fixtures/Accesos.json";

describe(' TEST SUITE: "INICIO" --> INICIO DE SESION ', () => {

  beforeEach("El usuario se encuentra en la pagina de inicio de sesion", () => {
    cy.PageInicioSesion();
  });

  it("001. Iniciar sesion con usuario y contraseña validos.", () => {
    onLogin.loginUser(Accesos.Admin_User, Accesos.Admin_Password)
    onHomePage.Informes().should("exist");
  });

  it("002. Iniciar sesion con usuario valido y contraseña incorrecta.", () => {
    onLogin.loginUser(Accesos.Admin_User, Accesos.Admin_Password_Incorrecto)
    onLogin.Alert_DatosIncorrectos().should("exist");
  });

  it("003. Iniciar con usuario y dejar en blanco la contraseña", () => {
    onLogin.loginUser(Accesos.Admin_User, " ")
    onLogin.Alert_DatosIncorrectos().should("exist");
  });

  it("004. Iniciar con contraseña y dejar en blanco el usuario", () =>{
    onLogin.loginUser(" ", Accesos.Admin_Password)
    onLogin.AlertUsernameRequerido().should("be.visible");
  })

  it("005. Iniciar con usuario y dejar en blanco la contraseña", () => {
    onLogin.loginUser(Accesos.Admin_User_Incorrecto, Accesos.Admin_Password_Incorrecto)
    onLogin.Alert_DatosIncorrectos().should("exist");
  });

  it("006. Iniciar con un mail con formato incorrecto", () => {
    onLogin.loginUser(Accesos.Admin_User_Mal_Formato1, Accesos.Admin_Password_Incorrecto)
    onLogin.User().then(($input) => {
      expect($input[0].validationMessage).to.equal('Incluye un signo "@" en la dirección de correo electrónico. La dirección "adminpibi.com" no incluye el signo "@".');
    });
  });

  it("007. Iniciar sesion con campos vacios.", () => {
    onLogin.BTN_InicioSesion().click({ force: true });
    onLogin.AlertUsernameRequerido().should("be.visible");
    onLogin.AlertPasswordRequerido().should("be.visible");
  });

  it("008. Input mail tiene que ser tipo mail", () => {
    onLogin.User().should("have.attr", "type", "email");
  });

  it("009. Input password tiene que ser tipo password", () => {
    onLogin.Password().should("have.attr", "type", "password");
  });

  it("010. Boton 'mostrar password' debe mostrar la password en formato texto", () => {
    onLogin.Password().type(Accesos.Admin_User_Pass_Prueba)
    onLogin.Password().should("have.attr", "type", "password");
    cy.get('span.cursor-pointer.input-group-text').click();
    onLogin.Password().should("have.attr", "type", "text");
    cy.get('span.cursor-pointer.input-group-text').click();
    onLogin.Password().should("have.attr", "type", "password");
  });

});


describe(' TEST SUITE: "INICIO" --> REGISTRO ', () => {

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  beforeEach("El usuario se encuentra en la pagina de inicio de sesion", () => {
    cy.PageInicioSesion();
  });

  it.skip("101. Registrarse Manualmente.", () => {
    onLogin.BTN_Registrarse().click();
    onRegistro.Nombre().type(faker.person.firstName());
    onRegistro.Apellido().type(faker.person.lastName());
    onRegistro.Email().type(faker.internet.email());
    onRegistro.Password().type(Accesos.Contraseña);
    onRegistro.ConfirmPassword().type(Accesos.ConfirContraseña);
    onRegistro.Crear().click({ force: true });
    onRegistro.SuccefullMsj().should("be.visible");
    onRegistro.IrInicio().click({ force: true });
  });

  it.skip("102. Intentar registrarse poniendo numeros o caracteres en el campo Nombre", () => {
    onLogin.BTN_Registrarse().click();
    onRegistro.Nombre().type(faker.person.firstName()+`${getRandomInt(999999)}`);
    onRegistro.Apellido().type(faker.person.lastName());
    onRegistro.Email().type(faker.internet.email());
    onRegistro.Password().type(Accesos.Contraseña);
    onRegistro.ConfirmPassword().type(Accesos.ConfirContraseña);
    onRegistro.Crear().click({ force: true });
    onRegistro.SuccefullMsj().should("be.visible");
    onRegistro.IrInicio().click({ force: true });
  });

  it.skip("103. Intentar registrarse poniendo numeros o caracteres en el campo Apellido", () => {
    onLogin.BTN_Registrarse().click();
    onRegistro.Nombre().type(faker.person.firstName());
    onRegistro.Apellido().type(faker.person.lastName()+`${getRandomInt(999999)}`);
    onRegistro.Email().type(faker.internet.email());
    onRegistro.Password().type(Accesos.Contraseña);
    onRegistro.ConfirmPassword().type(Accesos.ConfirContraseña);
    onRegistro.Crear().click({ force: true });
    onRegistro.SuccefullMsj().should("be.visible");
    onRegistro.IrInicio().click({ force: true });
  });

  it("104. Input Email tiene que ser tipo mail", () => {
    onLogin.BTN_Registrarse().click();
    onRegistro.Email().should("have.attr", "type", "email");
  });

  it("105. Input Password y Confirmar Password deben ser tipo password", () => {
    onLogin.BTN_Registrarse().click();

    onRegistro.Password().should("have.attr", "type", "password");
    onRegistro.ConfirmPassword().should('have.attr', 'type', 'password')
  });

  it("105. Intentar registrarse con un mail con formato invalido", () => {
    onLogin.BTN_Registrarse().click();
    onRegistro.Nombre().type(faker.person.firstName());
    onRegistro.Apellido().type(faker.person.lastName());
    onRegistro.Email().type(Accesos.Admin_User_Mal_Formato1);
    onRegistro.Password().type(Accesos.Contraseña);
    onRegistro.ConfirmPassword().type(Accesos.ConfirContraseña);
    onRegistro.Crear().click({ force: true });
    onRegistro.Email().then(($input) => {
      expect($input[0].validationMessage).to.equal('Incluye un signo "@" en la dirección de correo electrónico. La dirección "adminpibi.com" no incluye el signo "@".');
    });
  });

  it("106. Registrarse con un password sin numeros.", () => {
    onLogin.BTN_Registrarse().click();
    onRegistro.Nombre().type(faker.person.firstName());
    onRegistro.Apellido().type(faker.person.lastName());
    onRegistro.Email().type(faker.internet.email());
    onRegistro.Password().type(Accesos.ContraseñaSinNumeros);
    onRegistro.ConfirmPassword().type(Accesos.ContraseñaSinNumeros);

    // Sacar comenterio cuando hagan un nuevo deploy\
    // En QA funciona, en DEMO no.
    onRegistro.Crear().click({ force: true });
    onRegistro.AlertPassword().should('contain', 'La contraseña debe contener al menos un número')
  });

  it("107. Registrarse con un password sin caracteres especiales.", () => {
    onLogin.BTN_Registrarse().click();
    onRegistro.Nombre().type(faker.person.firstName());
    onRegistro.Apellido().type(faker.person.lastName());
    onRegistro.Email().type(faker.internet.email());
    onRegistro.Password().type(Accesos.ContraseñaSinSimbolos);
    onRegistro.ConfirmPassword().type(Accesos.ContraseñaSinSimbolos);

    // Sacar comenterio cuando hagan un nuevo deploy\
    // En QA funciona, en DEMO no.
    onRegistro.Crear().click({ force: true });
    onRegistro.AlertPassword().should('contain', 'La contraseña debe contener al menos un carácter especial')
  });

  it("108. Registrarse con un password que contenga menos de 8 caracteres", () => {
    onLogin.BTN_Registrarse().click();
    onRegistro.Nombre().type(faker.person.firstName());
    onRegistro.Apellido().type(faker.person.lastName());
    onRegistro.Email().type(faker.internet.email());
    onRegistro.Password().type(Accesos.ContraseñaCorta);
    onRegistro.ConfirmPassword().type(Accesos.ContraseñaCorta);
    onRegistro.Crear().click({ force: true });
    onRegistro.AlertPassword().should('contain', 'La contraseña debe tener al menos 8 caracteres')
  })

  it("109. Intentar registrarse sin que coincidan las contraseñas.", () => {
    onLogin.BTN_Registrarse().click();
    onRegistro.Nombre().type(faker.person.firstName());
    onRegistro.Apellido().type(faker.person.lastName());
    onRegistro.Email().type(faker.internet.email());
    onRegistro.Password().type(Accesos.Contraseña);
    onRegistro.ConfirmPassword().type(Accesos.ConfirContraseñaFAKE);
    onRegistro.Crear().click({ force: true });
    onRegistro.AlertPasswordNoMatch().should("be.visible");
  });

  it.skip("110. Intentar registrarse con el campo Nombre vacio", () => {
    onLogin.BTN_Registrarse().click();
    onRegistro.Apellido().type(faker.person.lastName());
    onRegistro.Email().type(faker.internet.email());
    onRegistro.Password().type(Accesos.Contraseña);
    onRegistro.ConfirmPassword().type(Accesos.ConfirContraseña);
    onRegistro.Crear().click({ force: true });
  })

  it.skip('111. Intentar registrarse con el campo Apellido vacio', ()=> {
    onLogin.BTN_Registrarse().click();
    onRegistro.Nombre().type(faker.person.firstName());
    onRegistro.Email().type(faker.internet.email());
    onRegistro.Password().type(Accesos.Contraseña);
    onRegistro.ConfirmPassword().type(Accesos.ConfirContraseña);
    onRegistro.Crear().click({ force: true });
  })

  it('112. Intentar registrarse con el campo Email vacio', ()=> {
    onLogin.BTN_Registrarse().click();
    onRegistro.Nombre().type(faker.person.firstName());
    onRegistro.Apellido().type(faker.person.lastName());
    onRegistro.Password().type(Accesos.Contraseña);
    onRegistro.ConfirmPassword().type(Accesos.ConfirContraseña);
    onRegistro.Crear().click({ force: true });
  })

  it('113. Intentar registrarse con el campo Password vacio', ()=> {
    onLogin.BTN_Registrarse().click();
    onRegistro.Nombre().type(faker.person.firstName());
    onRegistro.Apellido().type(faker.person.lastName());
    onRegistro.Email().type(faker.internet.email());
    onRegistro.ConfirmPassword().type(Accesos.ConfirContraseña);
    onRegistro.Crear().click({ force: true });
  })

  it.only('114. Intentar registrarse con el campo Confirmar Password vacio', ()=> {
    onLogin.BTN_Registrarse().click();
    onRegistro.Nombre().type(faker.person.firstName());
    onRegistro.Apellido().type(faker.person.lastName());
    onRegistro.Email().type(faker.internet.email());
    onRegistro.Password().type(Accesos.Contraseña);
    onRegistro.Crear().click({ force: true });
  })

});



