import { HttpBackend } from "@angular/common/http";

export const environment = {
  production: false,
  backendProduct: 'http://localhost:443/api/products',
  backendRegister: 'http://localhost:443/api/users/register',
  backendLogin: 'http://localhost:443/api/users/login',
  backendUser: 'http://localhost:443/api/users/user',
};