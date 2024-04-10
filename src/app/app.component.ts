import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dynamic-form';
  formConfig = {
    "ala": {"type": "text"},
    "ma": {"type": "number"},
    "mail": {"type": "email"},
    "kota": {"type": "select", "options": ["a", "b", "c"]}
  };
}
