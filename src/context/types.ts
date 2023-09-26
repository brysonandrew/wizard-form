export type TUser = {
  surname: string;
  dateOfBirth: string;
} | null;

export type TForm = {
  name: string;
} | null;

export type TContext = {
  user: TUser;
  form: TForm;
};
