import "server-only";
import { StackServerApp } from "@stackframe/stack";

let _app: StackServerApp<true> | null = null;

export function getStackServerApp(): StackServerApp<true> {
  if (!_app) {
    _app = new StackServerApp({
      tokenStore: "nextjs-cookie",
    });
  }
  return _app;
}
