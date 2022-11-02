export namespace Ui {
  export type FormName =
    | 'sign_in'
    | 'sign_up'
    | 'movie_fetching'
    | 'movie_action';

  export type Loader = {
    name: FormName;
    loading: boolean;
  };
}
