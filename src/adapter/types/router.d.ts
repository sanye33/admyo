export = RouterTyping
export as namespace RouterTyping

declare namespace RouterTyping {
  // rotues config base
  interface routes {
    name: string;
    path: string;
    component: React.DOMElement;
    childrens?: routes
  }
}
