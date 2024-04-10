import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dynamic-form';
  formConfig = {
    "ala": {"type": "text"},
    "ma": {"type": "number"},
    "kota": {"type": "select", "options": ["a", "b", "c"]}
  };
}
