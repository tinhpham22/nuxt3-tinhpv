export enum FIELD_TYPE {
  INPUT = 'INPUT',
  NUMBER = 'NUMBER',
  TEXTAREA = 'TEXTAREA',
  SELECT = 'SELECT',
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX',
  FORMULA = 'FORMULA',
}

export type FieldItem = {
  type: FIELD_TYPE;
  name?: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  value?: any;
  hide?: boolean;
  options?: { label: string; value: string | number }[];
};
