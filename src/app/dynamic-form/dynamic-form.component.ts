import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DynamicFormService} from "../dynamic-form.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {
  @Input() config: any;
  form: FormGroup = new FormGroup([]);
  Object = Object;

  constructor(private fb: FormBuilder, private dynamicFormService: DynamicFormService) {}

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  createFormGroup() {
    const group: {[key: string]: FormControl<any>} = {};
    for (const key in this.config) {
      if (this.config.hasOwnProperty(key)) {
        group[key] = this.config[key].type === 'select' ?
          new FormControl(this.config[key].options[0]) :
          new FormControl('');
      }
    }
    return this.fb.group(group);
  }

  onSubmit() {
    if(this.form.valid) {
      this.dynamicFormService.sendForm(
        Object.keys(this.config).reduce((obj: any, item: string) => {
          obj[item] = this.form.get(item)!.value;
          return obj;
        }, {})
      );
    } else {
      console.log("Invalid");
    }
  }
}
