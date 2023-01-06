import _ from 'lodash';

const data = [
  {
    user: 'Juan Carlos',
    rol: 'admin'
  },
  {
    user: 'Cynthia Carolina',
    rol: 'seller'
  },
  {
    user: 'Maria',
    rol: 'seller'
  },
  {
    user: 'Titina',
    rol: 'customer'
  }
];

const result = _.groupBy(data, (roles) => roles.rol);
console.log(result);
