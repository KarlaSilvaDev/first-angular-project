import { Component, computed, input } from "@angular/core";
//Input com I maiúsculo é o decorator e com i minúsculo é uma função especial
@Component({
  selector: "app-user",
  standalone: true,
  imports: [],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  //diz ao angular que a propriedade avatar assumirá o valor de um input para esse componente. Podemos passar um valor inicial padrão entre os parênteses. Entre o símbolo <> podemos informar o tipo do input. Input Signals são readonly
  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => {
    return "assets/users/" + this.avatar();
  });

  onSelectUser() {}
}
