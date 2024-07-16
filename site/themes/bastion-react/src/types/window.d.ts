import ZolaContext from "./zola-context";

declare global {
  interface Window {
    context: ZolaContext
  }
}