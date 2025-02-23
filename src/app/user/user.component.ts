import { Component, computed, signal } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: "app-user",
  standalone: true,
  imports: [],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  //criamos um signal quando queremos que o angular seja informado quando há uma alteração do valor armazenado neste signal para que atualize as interfaces em que esse signal é utilizado. Funciona a partir do angular 16, mas se tornou parcialmente estável a partir do angular 17

  selectedUser = signal(DUMMY_USERS[randomIndex]);

  //Quando usamos o signal, podemos colocar a informação direto na propriedade sem precisar usar o get. Nesse caso, usamos a função computed que deve usar o signal em sua construção. Computed também é um signal, porém é um signal que mudará automaticamente quando, nesse caso, o signal selectedUser tiver seu valor alterado. Portanto, no html, também temos que executá-lo como uma função
  imagePath = computed(() => "assets/users/" + this.selectedUser().avatar);

  // //Quando usamos o get aqui, no html, iremos usar assim por ser uma propriedade: [src]="imagePath"
  // get imagePath() {
  //   return "assets/users/" + this.selectedUser.avatar;
  // }

  //Método
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //para mudarmos o valor de um signal, devemos usar o método set
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
