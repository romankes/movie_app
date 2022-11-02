export namespace Auth {
  export type BaseForm = {
    email: string;
    password: string;
  };

  export type SignUpForm = BaseForm & {
    name: string;
    confirmPassword: string;
  };

  export type ReqSignIn = BaseForm;
  export type ResSignIn = {
    token: string;
  };

  export type ReqSignUp = SignUpForm;
  export type ResSignUp = {
    token: string;
  };

  export type ReqUpdateToken = {
    token: string;
  };
}
