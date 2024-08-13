import { Component , input} from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export default class FormComponent {
  title = 'Change of  writer';
  inputText: string = '';
  displayedText: string = '';

  mostrarTexto() {
    this.displayedText = this.inputText;
  }
}
