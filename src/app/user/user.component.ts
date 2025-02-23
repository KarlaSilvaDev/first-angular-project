import { Component, Input } from "@angular/core";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  //Aqui definimos que a propriedade avatar será definida externamente, já que está com o decorator Input. A exclamação depois do nome da propriedade avatar diz ao typescrit que sabemos que essa propriedade definitivamente receberá algum valor, mesmo que o Typescrit não consiga ver isso no código
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath() {
    return "assets/users/" + this.avatar;
  }

  onSelectUser() {}
}
