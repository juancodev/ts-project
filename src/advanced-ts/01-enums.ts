export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
};

export type User = {
  username: string,
  roles: ROLES
};

const user: User = {
  username: 'juancodev',
  roles: ROLES.ADMIN
}

let obj: object = {};
obj = {
  nombre: 'juan'
}

console.log(obj);
