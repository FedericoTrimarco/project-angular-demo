import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HookFunctions, NewModalService } from 'ng-trimagix';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  providers: [HookFunctions]
})
export class FormPageComponent {
  // 1) Bisogna inizializzare una varibile di tipo FormGroup
  formTest!: FormGroup;

  constructor(
    private hf: HookFunctions,
    private modalComponent: NewModalService
  ){

    this.setupFormTest();

  }

  /**
   * 2) creare metodo che costruisce il formGroup
   *  assegnamo alla nostra varibile un oggetto di tipo new FormGroup
   *  Questo oggetto al suo interno avrà delle chiavi, ognuna di esse dovra essere di tipo new FormControl()
   *  
   *  I parametri in un formControl in questo caso sono due:
   *  - il valore iniziale -> in questo caso abbiamo deciso che fosse una stringa vuota ( "" )
   *  - il secondo sono il tipo di validazione (possono essere più di uno)
  */ 
  setupFormTest(){

    this.formTest = new FormGroup(
      {
        nome: new FormControl("", Validators.required),
        cognome: new FormControl("", Validators.required),
        email: new FormControl("", [Validators.required, Validators.email]),
        codiceFiscale: new FormControl("", [Validators.required, Validators.minLength(15), Validators.maxLength(15)]),
        datiExtra: new FormControl(""),
      }
    )

    /**
     * Una volta costruito il formGroup andare nel modulo del nostro componente padre (in questo caso app.module.ts) 
     * Verificare che negli IMPORTS ci siano seguenti moduli:
     * 
     *  - FormsModule
     *  - ReactiveFormsModule
     *  
     * Questi ci serviranno per poter utilizzare le proprietà dei formGroup di angular all'interno dell'html
     * 
     * Una volta verificato possiamo richiamara la nostra funzione all'interno del constructor e passare
     * finalmente all'HTML
     */
  }

  creaUtente(){

    if(!this.hf.validateFormByFormGroupAndFormId(this.formTest, "formTest")){
      return;
    }
  }

  creaUtenteConMessaggio(){

    if(!this.hf.validateFormByFormGroupAndFormId(this.formTest, "formTest", true)){
      return;
    }
    
    this.modalComponent.open("Conferma operazione", "Utente salvato con successo", "bg-success text-white")
  }

}
