import { Component } from '@angular/core';
import { AgGridColumn } from 'ag-grid-angular';
import { HookFunctions } from 'ng-trimagix';

@Component({
  selector: 'app-ag-grid-page',
  templateUrl: './ag-grid-page.component.html',
  styleUrls: ['./ag-grid-page.component.scss'],
  providers: [HookFunctions]
})
export class AgGridPageComponent {

  // SETTINGS / OPTION AG-GRID
  gridOptions!: any;

  // ROW DATA AG-GRID
  rowData = [
    { 
      id: 1,
      make: "Tesla", 
      model: "Model Y", 
      price: 64950, 
      electric: true, 
      date: new Date()
    },
    { 
      id: 2,
      make: "Ford", 
      model: "F-Series", 
      price: 33850, 
      electric: false ,
      date: new Date()
    },
    { 
      id: 3,
      make: "Toyota", 
      model: "Corolla", 
      price: 29600, 
      electric: false, 
      date: new Date()
    },
    { 
      id: 4,
      make: "Tesla", 
      model: "Model Y", 
      price: 64950, 
      electric: true ,
      date: new Date()
    },
    { 
      id: 5,
      make: "Ford", 
      model: "F-Series", 
      price: 33850, 
      electric: false ,
      date: new Date()
    },
    { 
      id: 6,
      make: "Toyota", 
      model: "Corolla", 
      price: 29600, 
      electric: false ,
      date: new Date()
    },
    { 
      id: 7,
      make: "Toyota", 
      model: "Corolla", 
      price: 29600, 
      electric: false ,
      date: new Date()
    },
    { 
      id: 8,
      make: "Tesla", 
      model: "Model Y", 
      price: 64950, 
      electric: true ,
      date: new Date()
    },
    { 
      id: 9,
      make: "Ford", 
      model: "F-Series", 
      price: 33850, 
      electric: false ,
      date: new Date()
    },
    { 
      id: 10,
      make: "Toyota", 
      model: "Corolla", 
      price: 29600, 
      electric: false ,
      date: new Date()
    },
    { 
      id: 11,
      make: "Ford", 
      model: "F-Series", 
      price: 33850, 
      electric: false ,
      date: new Date()
    },
    { 
      id: 12,
      make: "Toyota", 
      model: "Corolla", 
      price: 29600, 
      electric: false ,
      date: new Date()
    },
  ];

  constructor(
    //Hook Function è una classe proveniente dalla libreria ng-trimagix al cui interno ci sono diverse fnzioni utilities per angular
    private hf: HookFunctions,
  ){

    this.loadAgSettingsBatch();

  }

  loadAgSettingsBatch() {

    this.gridOptions = {
      animateRows: true,
      pagination: true,
      paginationPageSize: 10,
      // rowModelType: 'infinite', // oppure 'serverSide' se usi Server-Side Row Model
      // cacheBlockSize: 10, // in caso di paginazione lato server
      infiniteInitialRowCount: 1,
      // paginationPageSizeSelector: false, // se si usa una versione più recente di ag-grid
      enableCellTextSelection: true,
      rowHeight: 50,
      domLayout: 'autoHeight', // Per rendere la grandezza della tabella automatica in base al contenuto
      defaultColDef: {
        editable: false,
        filter: true,
        // floatingFilter: true, // questo fa apparire i filtri già visibili in tabella
        sortable: true,
        resizable: true,
        flex: 1, // Per rendere le colonne di qeual misura 
        minWidth: 30, // Per evitare colonne troppo piccole
        cellStyle: {
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        },
      },
      rowStyle: {
        background: '#fff',
        color: '#000'
      },
      columnDefs: [
        {
          headerName: "#",
          field: "id",
          filter: false,
          maxWidth: 70, // riduce la larghezza della colonna
        },
        {
          headerName: "Make",
          field: "make",
        },
        {
          headerName: "Model",
          field: "model",
        },
        {
          headerName: "Price",
          field: "price",
          valueFormatter: (params: any) => {
            return params.value ? this.hf.formatNumberInCurrencyString(params.value)+"€" : "-";
          },
        },
        {
          headerName: "Creation date",
          field: "date",
          filter: 'agDateColumnFilter',
          filterParams: {
            filterOptions: ['inRange'],
            suppressAndOrCondition: true
          },
          valueFormatter: (params: any) => {
            return params.value ? this.hf.formatDateEU(new Date(params.value), true) : "-";
          },
        },
        {
          headerName: "Electric",
          field: "electric",
          maxWidth: 100, // riduce la larghezza della colonna
          cellRenderer: (params: any) => { //Modalità di ag-grif per reinderizzare un html
            
            let iconClass = params.value == true ? "fa-solid fa-circle-check" : "fa-solid fa-circle-xmark";
            let iconClassColor = params.value == true ? "text-success" : "text-danger";

            return `<i class="${iconClass} ${iconClassColor}"></i>`;
            

          },
        },
      ]
    }

  }
}
