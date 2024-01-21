import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent, ErrorInputComponent, InputComponent, LabelComponent } from './components';
@NgModule({
  imports: [
    ReactiveFormsModule,
    InputComponent,
    ErrorInputComponent,
    LabelComponent,
    ButtonComponent
  ],
  declarations: [
  ],
  exports: [
    InputComponent,
    LabelComponent,
    ButtonComponent
  ]
})
export class DesigModule { }
