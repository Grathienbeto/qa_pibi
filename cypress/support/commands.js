import { onLogin } from "../../Pages/LoginPage";
import Accesos from "../fixtures/Accesos.json";
const ID_PRUEBA = "3390bbb3-da0c-46e5-8211-6a4a5aa3a043";

Cypress.Commands.add("PageInicioSesion", () => {
  cy.visit("https://pibi-app-fe-pi-demo.azurewebsites.net/");
  cy.url().should("include", "pibi-app-fe-pi-demo.azurewebsites.net/");
  cy.title().should("contain", "PI BI");
});

Cypress.Commands.add("IniciarSesion", () => {
  onLogin.User().type(Accesos.Admin_User);
  onLogin.Password().type(Accesos.Admin_Password);
  onLogin.BTN_InicioSesion().click({ force: true });
});

Cypress.Commands.add("ActualizarEstadoActivo", () => {
  cy.api({
    method: "PUT",
    url:
      "https://pibi-app-be-pi-demo.azurewebsites.net/admin/user/unblockUser/" +
      ID_PRUEBA,
    headers: { Authorization: `Bearer ${Accesos.token}` },
    body: [],
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

Cypress.Commands.add("ActualizarDatosUsuario", () => {
  cy.api({
    method: "PUT",
    url:
      "https://pibi-app-be-pi-demo.azurewebsites.net/admin/user/updateUser/" +
      ID_PRUEBA,
    headers: { Authorization: `Bearer ${Accesos.token}` },
    body: {
      lastname: "Prueba",
      name: "Prueba",
      userId: "3390bbb3-da0c-46e5-8211-6a4a5aa3a043",
      user_type: "2",
      username: "pruebafranco2@proton.me",
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});
