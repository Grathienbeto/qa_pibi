/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import Accesos from "../fixtures/Accesos.json";
import { onHomePage } from "../../Pages/HomePage";
import { onUsuarios } from "../../Pages/Usuarios";
import { onCrearUsuario } from "../../Pages/CrearUsuario";
import { onModificarUsuario } from '../../Pages/ModificarUsuario'


describe(' TEST SUITE: "USUARIOS" --> ACCIONES ', () => {

  beforeEach("El usuario se encuentra en la pagina de inicio de sesion", () => {
    cy.PageInicioSesion();
    cy.IniciarSesion();
    onHomePage.Usuarios().click();
  });

  it('201. Boton "Crear Usuario" redirige a la pagina de Creacion de Usuario', () => {
    onUsuarios.CrearUsuario().click()
    onUsuarios.Title_NuevoUsuario().should('exist')
  })

  it.skip("202. Crear un usuario con todos los datos correctos", () => {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.Nombre().type(faker.person.firstName());
    onCrearUsuario.Apellido().type(faker.person.lastName());
    onCrearUsuario.Email().type(faker.internet.email());
    onCrearUsuario.Rol().click();
    onCrearUsuario.User_Rol().click();
    onCrearUsuario.Contraseña().type(Accesos.Contraseña);
    onCrearUsuario.ConfirmContraseña().type(Accesos.ConfirContraseña);
    onCrearUsuario.Crear().click();
    onUsuarios.Title_Usuarios().should("be.visible");
  });

  it.skip('203. Crear un usuario con un nombre de usuario con Numeros/Caracteres', () => {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.Nombre().type(faker.person.firstName() + `#$3`);
    onCrearUsuario.Apellido().type(faker.person.lastName());
    onCrearUsuario.Email().type(faker.internet.email());
    onCrearUsuario.Rol().click();
    onCrearUsuario.User_Rol().click();
    onCrearUsuario.Contraseña().type(Accesos.Contraseña);
    onCrearUsuario.ConfirmContraseña().type(Accesos.ConfirContraseña);
    onCrearUsuario.Crear().click();
    onUsuarios.Title_Usuarios().should("be.visible");
  })

  it.skip('204. Crear un usuario con un apellido de usuario con Numeros/Caracteres', () => {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.Nombre().type(faker.person.firstName());
    onCrearUsuario.Apellido().type(faker.person.lastName()+`#$%`);
    onCrearUsuario.Email().type(faker.internet.email());
    onCrearUsuario.Rol().click();
    onCrearUsuario.User_Rol().click();
    onCrearUsuario.Contraseña().type(Accesos.Contraseña);
    onCrearUsuario.ConfirmContraseña().type(Accesos.ConfirContraseña);
    onCrearUsuario.Crear().click();
    onUsuarios.Title_Usuarios().should("be.visible");
  })

  it('205. Input Email tiene que ser tipo email', () => {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.Email().should("have.attr", "type", "email");
  })
  
  it('206. Input Password y Confirmar Password deben ser tipo password', () => {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.Contraseña().should("have.attr", "type", "password");
    onCrearUsuario.ConfirmContraseña().should("have.attr", "type", "password");
  })

  it('207. Crear un usuario con un password sin numeros.', () => {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.Nombre().type(faker.person.firstName());
    onCrearUsuario.Apellido().type(faker.person.lastName());
    onCrearUsuario.Email().type(faker.internet.email());
    onCrearUsuario.Rol().click();
    onCrearUsuario.User_Rol().click();
    onCrearUsuario.Contraseña().type(Accesos.ContraseñaSinNumeros);
    onCrearUsuario.ConfirmContraseña().type(Accesos.ContraseñaSinNumeros);
    onCrearUsuario.Crear().click();

    onCrearUsuario.ErrorPasswordSinNumero().should('exist')
  })

  it('208. Crear un usuario con un password sin caracteres especiales.', () => {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.Nombre().type(faker.person.firstName());
    onCrearUsuario.Apellido().type(faker.person.lastName());
    onCrearUsuario.Email().type(faker.internet.email());
    onCrearUsuario.Rol().click();
    onCrearUsuario.User_Rol().click();
    onCrearUsuario.Contraseña().type(Accesos.ContraseñaSinSimbolos);
    onCrearUsuario.ConfirmContraseña().type(Accesos.ContraseñaSinSimbolos);
    onCrearUsuario.Crear().click();

    onCrearUsuario.ErrorPasswordSinSimbolos().should('exist')
  })

  it('209. Crear un usuario con un password sin mayusculas', () => {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.Nombre().type(faker.person.firstName());
    onCrearUsuario.Apellido().type(faker.person.lastName());
    onCrearUsuario.Email().type(faker.internet.email());
    onCrearUsuario.Rol().click();
    onCrearUsuario.User_Rol().click();
    onCrearUsuario.Contraseña().type(Accesos.ContraseñaSinMayusculas);
    onCrearUsuario.ConfirmContraseña().type(Accesos.ContraseñaSinMayusculas);
    onCrearUsuario.Crear().click();

    onCrearUsuario.ErrorPasswordSinMayusculas().should('exist')
  })

  it('210. Crear un usuario con un password con menos de 8 caracteres', ()=> {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.Nombre().type(faker.person.firstName());
    onCrearUsuario.Apellido().type(faker.person.lastName());
    onCrearUsuario.Email().type(faker.internet.email());
    onCrearUsuario.Rol().click();
    onCrearUsuario.User_Rol().click();
    onCrearUsuario.Contraseña().type(Accesos.ContraseñaCorta);
    onCrearUsuario.ConfirmContraseña().type(Accesos.ContraseñaCorta);
    onCrearUsuario.Crear().click();

    onCrearUsuario.ErrorPasswordCorta().should('exist')
  })

  it.only('211. Intentar crear un usuario sin que coincidan las contraseñas.', ()=> {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.Nombre().type(faker.person.firstName());
    onCrearUsuario.Apellido().type(faker.person.lastName());
    onCrearUsuario.Email().type(faker.internet.email());
    onCrearUsuario.Rol().click();
    onCrearUsuario.User_Rol().click();
    onCrearUsuario.Contraseña().type(Accesos.Contraseña);
    onCrearUsuario.ConfirmContraseña().type(Accesos.Contraseña+'A3#');
    onCrearUsuario.Crear().click();

    onCrearUsuario.ErrorPasswordIguales().should('exist')
  })



  

  


});
