import { FormControl, FormGroup } from '@angular/forms';

type RequiredInputType = {
  name: string;
  type: 'number' | 'text' | 'email' | 'password';
  label: string;
};

type OptionalInputType = {
  value: string | number;
  id: string;
  formGroup: FormGroup;
  formControl: FormControl;
  placeholder: string;
  disabled?: boolean;
};

export type InputType = RequiredInputType & Partial<OptionalInputType>;
