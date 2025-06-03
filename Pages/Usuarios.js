export class USUARIOS {

  //SELECTORES//
  H1_Title_Usuarios = "Lista de Usuarios";
  H1_Title_Nuevo_Usuario = 'Nuevo Usuario'
  Class_CrearUsuario =
    ".waves-effect.btn-icon.round.ms-auto.me-1.mb-1.btn.btn-primary";
  ID_Nombre_User = "#cell-1-3390bbb3-da0c-46e5-8211-6a4a5aa3a043";
  ID_Email_User = "#cell-2-3390bbb3-da0c-46e5-8211-6a4a5aa3a043";
  ID_Estado_User = "#cell-4-3390bbb3-da0c-46e5-8211-6a4a5aa3a043";
  ID_TipodeUsuario_User = "#cell-5-3390bbb3-da0c-46e5-8211-6a4a5aa3a043";
  Button_Accion_Pause = "#pause-3390bbb3-da0c-46e5-8211-6a4a5aa3a043";
  Button_Accion_Editar = "#edit-3390bbb3-da0c-46e5-8211-6a4a5aa3a043";
  Input_Search = "[name='search']";
  Users_Table = '[class="sc-hGPBjI GGDov rdt_TableBody"]';
  Button_Filtro = ".btn.btn-flat-dark";
  Text_DropDown_Activo = "Activos";
  Text_DropDown_Pausados = "Pausados";
  SpanButtonFiltrado = ".text-center > .me-1";
  CantidadUsuarios = '[id="select-number"]'
  

  //METODOS Y/O FUNCIONES //
  Title_Usuarios() {return cy.contains(this.H1_Title_Usuarios, { timeout: 5000 })}
  Title_NuevoUsuario() {return cy.contains(this.H1_Title_Nuevo_Usuario, {timeout: 5000})}
  CrearUsuario() {return cy.get(this.Class_CrearUsuario)}
  NombreUser() {return cy.get(this.ID_Nombre_User)}
  EmailUser() {return cy
      .get(this.ID_Email_User)
      .contains("pruebafranco2@proton.me", { timeout: 5000 })}
  EstadoUser() {return cy.get(this.ID_Estado_User)}
  TipoUser() {
    return cy
      .get(this.ID_TipodeUsuario_User)
      .contains("User", { timeout: 5000 });
  }
  BTN_Pause() {return cy.get(this.Button_Accion_Pause)}
  BTN_Editar() {return cy.get(this.Button_Accion_Editar)}
  Search() {return cy.get(this.Input_Search)}
  TablaDeUsuarios() {return cy.get(this.Users_Table)}
  FiltroxEstado() {return cy.get(this.Button_Filtro)}
  EstadoActivo() {return cy.contains(this.Text_DropDown_Activo)}
  EstadoPausado() {return cy.contains(this.Text_DropDown_Pausados)}
  SpanFiltrado() {return cy.get(this.SpanButtonFiltrado)}
  CantidadPorPagina() {return cy.get(this.CantidadUsuarios)}

}

export const onUsuarios = new USUARIOS()