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

  it('211. Intentar crear un usuario sin que coincidan las contraseñas.', ()=> {
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

  it("212. Intentar crear un usuario con el campo Nombre vacio", () => {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.Apellido().type(faker.person.lastName());
    onCrearUsuario.Email().type(faker.internet.email());
    onCrearUsuario.Rol().click();
    onCrearUsuario.User_Rol().click();
    onCrearUsuario.Contraseña().type(Accesos.Contraseña);
    onCrearUsuario.ConfirmContraseña().type(Accesos.ConfirContraseña);
    onCrearUsuario.Crear().click();
    
    onCrearUsuario.ErrorNombreObligatorio().should('exist')
  });

  it("213. Intentar crear un usuario con el campo Apellido vacio", () => {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.Nombre().type(faker.person.firstName());
    onCrearUsuario.Email().type(faker.internet.email());
    onCrearUsuario.Rol().click();
    onCrearUsuario.User_Rol().click();
    onCrearUsuario.Contraseña().type(Accesos.Contraseña);
    onCrearUsuario.ConfirmContraseña().type(Accesos.ConfirContraseña);
    onCrearUsuario.Crear().click();
    
    onCrearUsuario.ErrorApellidoObligatorio().should('exist')
  });

  it("214. Intentar crear un usuario con el campo Email vacio", () => {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.Nombre().type(faker.person.firstName());
    onCrearUsuario.Apellido().type(faker.person.lastName());
    onCrearUsuario.Rol().click();
    onCrearUsuario.User_Rol().click();
    onCrearUsuario.Contraseña().type(Accesos.Contraseña);
    onCrearUsuario.ConfirmContraseña().type(Accesos.ConfirContraseña);
    onCrearUsuario.Crear().click();
    
    onCrearUsuario.ErrorEmailObligatorio().should('exist')
  });

  it("215. Intentar crear un usuario con el campo Password vacio", () => {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.Nombre().type(faker.person.firstName());
    onCrearUsuario.Apellido().type(faker.person.lastName());
    onCrearUsuario.Email().type(faker.internet.email());
    onCrearUsuario.Rol().click();
    onCrearUsuario.User_Rol().click();
    onCrearUsuario.ConfirmContraseña().type(Accesos.ConfirContraseña);
    onCrearUsuario.Crear().click();
    
    onCrearUsuario.ErrorPasswordCorta().should('exist')
  });

  it("216. Intentar crear un usuario con el campo Confirmar Password vacio", () => {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.Nombre().type(faker.person.firstName());
    onCrearUsuario.Apellido().type(faker.person.lastName());
    onCrearUsuario.Email().type(faker.internet.email());
    onCrearUsuario.Rol().click();
    onCrearUsuario.User_Rol().click();
    onCrearUsuario.Contraseña().type(Accesos.Contraseña);
    onCrearUsuario.Crear().click();
    
    onCrearUsuario.ErrorPasswordConfirmar().should('exist')
  });
  
  it("217. Intentar crear un usuario con el campo Confirmar Password vacio", () => {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.Nombre().type(faker.person.firstName());
    onCrearUsuario.Apellido().type(faker.person.lastName());
    onCrearUsuario.Email().type(faker.internet.email());
    onCrearUsuario.Contraseña().type(Accesos.Contraseña);
    onCrearUsuario.ConfirmContraseña().type(Accesos.ConfirContraseña);
    onCrearUsuario.Crear().click();
    
    onCrearUsuario.ErrorRolObligatorio().should('exist')
  });

  it("218. Boton 'Deshacer' limpia todos los campos del formulario", () => {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.Nombre().type(faker.person.firstName());
    onCrearUsuario.Apellido().type(faker.person.lastName());
    onCrearUsuario.Email().type(faker.internet.email());
    onCrearUsuario.Rol().click();
    onCrearUsuario.User_Rol().click();
    onCrearUsuario.Contraseña().type(Accesos.Contraseña);
    onCrearUsuario.ConfirmContraseña().type(Accesos.ConfirContraseña);
    
    onCrearUsuario.BtnDeshacer().click()

    onCrearUsuario.Nombre().should('be.empty')
    onCrearUsuario.Apellido().should('be.empty')
    onCrearUsuario.Email().should('be.empty')
    onCrearUsuario.Contraseña().should('be.empty')
    onCrearUsuario.ConfirmContraseña().should('be.empty')
  });

  it("219. Boton 'Volver a Usuarios' vuelve al sitio Usuarios", () => {
    onUsuarios.CrearUsuario().click();
    onCrearUsuario.BtnVolver().click()
    onUsuarios.Title_Usuarios().should('exist')
  })

  it("220. Buscar un usuario existente", () => {
    onUsuarios.Search().type(Accesos.Nombre.toLowerCase())
    onUsuarios.TablaDeUsuarios().children().each((item, index) => {
      cy.wrap(item).children().should('include.text', nombre.toLowerCase())
    })
  })

  it('221. Aplicar filtro de usuario: Activo', () => {
    onUsuarios.FiltroxEstado().click()
    onUsuarios.EstadoActivo().click()
    onUsuarios.CantidadPorPagina().select("100")
    onUsuarios.TablaDeUsuarios().children().each((item, index) => {
      cy.wrap(item).children().should('include.text', 'Activo')
    })
  })

  it('222. Aplicar filtro de usuario: Pausados', () => {
    onUsuarios.FiltroxEstado().click()
    onUsuarios.EstadoPausado().click()
    onUsuarios.CantidadPorPagina().select("100")
    onUsuarios.TablaDeUsuarios().children().each((item, index) => {
      cy.wrap(item).children().should('include.text', 'Pausado')
    })
  })

  it('223. Pausar un usuario y activarlo', () => {
    onUsuarios.Search().type(Accesos.Nombre.toLowerCase())
    onUsuarios.TablaDeUsuarios().get('[id="cell-6-ae75de75-7055-4da7-b32c-886111ca634e"]').find('button').first().click()
    onUsuarios.TablaDeUsuarios().get('[id="cell-4-ae75de75-7055-4da7-b32c-886111ca634e"]').should('contain.text', 'Pausado')
  })

  it.skip('224. Intentar loguear con un usuario pausado', () => {
    // Hacer una cuenta prueba para loguear aca con otro usuario
  })

  it('225. Activar un usuario Pausado', () => {
    onUsuarios.Search().type(Accesos.Nombre.toLowerCase())
    onUsuarios.TablaDeUsuarios().get('[id="cell-6-ae75de75-7055-4da7-b32c-886111ca634e"]').find('button').first().click()
    onUsuarios.TablaDeUsuarios().get('[id="cell-4-ae75de75-7055-4da7-b32c-886111ca634e"]').should('contain.text', 'Activo')
  })

  it.skip('226. Intentar loguear con un usuario recien activado', () => {
    // Hacer una cuenta prueba para loguear aca con otro usuario
  })

  it('227. Editar usuario: Editar nombre de forma correcta', () => {

    cy.intercept('PUT', 'https://pibi-app-backend-test.azurewebsites.net/admin/user/updateUser/ae75de75-7055-4da7-b32c-886111ca634e').as('putRequest');

    onUsuarios.buscarUnUsuario(Accesos.Nombre.toLowerCase())

    onModificarUsuario.Nombre().clear()
    onModificarUsuario.Nombre().type('Norberto')
    onModificarUsuario.Aplicar().click()

    cy.wait('@putRequest').then((interception) => {
      expect(interception.response.body).to.be.eq('User modified')
      expect(interception.response.statusCode).to.eq(200);
    });
  })
  
  it('228. Editar usuario: Editar nombre con caracteres especiales o numeros', () => {
    cy.intercept('PUT', 'https://pibi-app-backend-test.azurewebsites.net/admin/user/updateUser/ae75de75-7055-4da7-b32c-886111ca634e').as('putRequest');

    onUsuarios.buscarUnUsuario(Accesos.Nombre.toLowerCase())

    onModificarUsuario.Nombre().clear()
    onModificarUsuario.Nombre().type('Norberto1@3$')
    onModificarUsuario.Aplicar().click()

    // TODO: EDITAR RESPUESTA INCORRECTA DEL BACKEND
    cy.wait('@putRequest').then((interception) => {
      expect(interception.response.body).to.be.eq('EDITAR RESPUESTA INCORRECTA DEL BACKEND')
      expect(interception.response.statusCode).to.eq(400);
    });
  })

  it('229. Editar usuario: Dejar campo nombre vacio', () => {
    onUsuarios.buscarUnUsuario(Accesos.Nombre.toLowerCase())

    onModificarUsuario.Nombre().clear()
    onModificarUsuario.Aplicar().click()
    onModificarUsuario.ErrorNombre().should('exist')
  })

  it('230. Editar apellido: Editar apellido de forma correcta', () => {

    cy.intercept('PUT', 'https://pibi-app-backend-test.azurewebsites.net/admin/user/updateUser/ae75de75-7055-4da7-b32c-886111ca634e').as('putRequest');

    onUsuarios.buscarUnUsuario(Accesos.Nombre.toLowerCase())

    onModificarUsuario.Apellido().clear()
    onModificarUsuario.Apellido().type("Luna")
    onModificarUsuario.Aplicar().click()

    cy.wait('@putRequest').then((interception) => {
      expect(interception.response.body).to.be.eq('User modified')
      expect(interception.response.statusCode).to.eq(200);
    });
  })

  it('231. Editar apellido: Editar apellido con caracteres especiales o numeros', () => {
    cy.intercept('PUT', 'https://pibi-app-backend-test.azurewebsites.net/admin/user/updateUser/ae75de75-7055-4da7-b32c-886111ca634e').as('putRequest');

    onUsuarios.buscarUnUsuario(Accesos.Nombre.toLowerCase())

    onModificarUsuario.Apellido().clear()
    onModificarUsuario.Apellido().type('Lun4##%$')
    onModificarUsuario.Aplicar().click()

    // TODO: EDITAR RESPUESTA INCORRECTA DEL BACKEND
    cy.wait('@putRequest').then((interception) => {
      expect(interception.response.body).to.be.eq('EDITAR RESPUESTA INCORRECTA DEL BACKEND')
      expect(interception.response.statusCode).to.eq(400);
    });
  })

  it('232. Editar apellido: Dejar campo apellido vacio', () => {
    onUsuarios.buscarUnUsuario(Accesos.Nombre.toLowerCase())

    onModificarUsuario.Apellido().clear()
    onModificarUsuario.Aplicar().click()

    onModificarUsuario.ErrorApellido().should('exist')
  })

  it.only('233. Cambiar rol de usuario: Admin', () => {
    onUsuarios.buscarUnUsuario(Accesos.Nombre.toLowerCase())

    onModificarUsuario.User_Rol().click()
    onModificarUsuario.Rol_Admin().click({force: true})

    cy.contains('Admin').should('exist')
  })


});
