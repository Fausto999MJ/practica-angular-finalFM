import { Component, EventEmitter, Output}  from "@angular/core";


@Component({
    selector: "pokemon-search",
    standalone: true,
    imports: [ ],
    template: `
         <div class="col-12">
         <div class="input-group mb-3">
         <input 
         #txtSearch
         type="text" 
            class="form-control" 
            placeholder="Escribe el nombre del pokemons" 
            aria-label="escribe el nombre del pokemons" 
            (keydown.enter)="searchPokemon(txtSearch.value)"
            aria-describedby="button-addon2"
            >
            <button 
            class="btn btn-outline-secondary" 
            type="button" 
            (click)="searchPokemon(txtSearch.value)"
            id="button-addon2"
            >
           
            <i class="bi bi-search"></i>
           </button>
     </div>

    </div>
    `,
    styles:[ `
    `] 
})
export class SearchComponent{
    @Output() public eventSearch = new EventEmitter<string>();
    searchPokemon(termino:string):void{
        const termSearch = termino.toString().trim();
        //if(termino.trim().length===0){
            //return;
        //}
        this.eventSearch.emit(termino);
    }

}