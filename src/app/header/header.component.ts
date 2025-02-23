import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    standalone: true, //a partir da versão 19, esse é o valor padrão
    templateUrl: './header.component.html',
    styleUrl: './header.component.css' //em versões antigas, não existe styleUrl. Use styleUrls nesses casos
})
export class HeaderComponent{}