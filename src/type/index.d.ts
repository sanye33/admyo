export = AdmYo
export as namespace AdmYo

declare namespace AdmYo {
  // rotues config base
  interface routes {
    name: string;
    path: string;
    component: React.DOMElement;
    childrens?: routes
  }

  // menu
  interface menu {
    key: string;
    icon: string;
    name: string;
    childrens?: menu[]
  }
  
}
