export class ROLES{

    //SELECTORES//
    
    TitleRolesdeSeguridad="[data-testid='title']"
    Button_AddRoles="[data-testid='add-btn']"
    Input_NombreNuevo_Rol = "#name"
    Button_CrearRol = "[data-testid='submit-btn']"
    Button_Deshacer = "[data-testid='reset-btn']"
    Class_Title_NuevoRol = ".text-center"
    Class_Table_Listado_Roles = ".sc-hGPBjI.GGDov.rdt_TableBody"
    Class_Number_Roles = ".sc-jrQzAO.dsNhFA.rdt_TableRow"
    Button_Edit_PruebaQA_ROL = "#edit-929a9022-31a7-4692-a114-be51fbfe2235"
    Button_Delete_PruebaQA_ROL = "[data-testid='PRUEBA_QA-delete']"
    TitleModificarRolSeguridad = ".text-center"
    Input_Edit_Nombre = "#name"
    Button_Aplicar = "[data-testid='submit-btn']"
    Class_IMG_ModificarRol = ".img-fluid.my-2.align-self-center"
    Text_Important_Message = "Es importante que el nombre del rol de seguridad coincida con el nombre de RLS en conjunto de datos de Power Bi"
    Button_DELETE_AccesibleQA = "#delete-4cf2821e-b76b-42a2-9ab7-404e7d06b323"
    ID_NombreAccesibleQA = "#cell-1-4cf2821e-b76b-42a2-9ab7-404e7d06b323"

    //METODOS Y/O FUNCIONES //

    TitleRolesDeSeguridad(){return cy.get(this.TitleRolesdeSeguridad,{timeout:10000})}
    AgregarNuevoRol(){return cy.get(this.Button_AddRoles,{timeout:10000})}
    NombreRol(){return cy.get(this.Input_NombreNuevo_Rol,{timeout:10000})}
    CrearRol(){return cy.get(this.Button_CrearRol,{timeout:10000})}
    DeshacerLimpiarCampos(){return cy.get(this.Button_Deshacer,{timeout:10000})}
    TitleNuevoRol(){return cy.get(this.Class_Title_NuevoRol,{timeout:10000})}
    TablaRoles(){return cy.get(this.Class_Table_Listado_Roles,{timeout:10000})}
    NumberRoles(){return cy.get(this.Class_Number_Roles,{timeout:5000})}
    TitleModificarRol(){return cy.get(this.TitleModificarRolSeguridad,{timeout:5000})}
    NuevoNombreRol(){return cy.get(this.Input_Edit_Nombre,{timeout:5000})}
    ImgModificarRol(){return cy.get(this.Class_IMG_ModificarRol,{timeout:5000})}
    Aplicar(){return cy.get(this.Button_Aplicar,{timeout:5000})}
    MessageImportant(){return cy.contains(this.Text_Important_Message,{timeout:5000})}
    EditarRolSeleccionado(){return cy.get(this.Button_Edit_PruebaQA_ROL,{timeout:8000})}
    EliminarRol(){return cy.get(this.Button_DELETE_AccesibleQA,{timeout:8000})}
    VerificarRolEliminado(){return cy.get(this.ID_NombreAccesibleQA,{timeout:8000})}









}