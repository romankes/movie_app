export namespace App {
  export type BaseAction<T, P = {}> = {
    type: T;
    payload: P;
  };
}
