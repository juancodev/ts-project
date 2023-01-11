import { ROLES, User } from './01-enums';

const checkUserRole: User = {
  username: 'juancodev',
  roles: ROLES.ADMIN
};

const checkRole = (...role: string[]) => {
  if (role.includes(checkUserRole.roles)) {
    return true;
  } else {
    return false;
  };
};

const validatedWithoutRole = checkRole(ROLES.CUSTOMER, ROLES.SELLER);
console.log('validatedWithoutRole', validatedWithoutRole);

const validatedWithRole = checkRole(ROLES.CUSTOMER, ROLES.SELLER, ROLES.ADMIN);
console.log('validatedWithRole', validatedWithRole);
