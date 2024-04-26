import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

var useRouter = false;
var adminRouter = true;
var tokenkey = 'token';
var tokenDecoded: string = '';
 
export const loginGuard: CanActivateFn = (route, state) => {
  console.log(`route keldi${route}`)
  console.log(route)
  console.log(`state keldi${state}`)
  console.log(route)
  return true;   
};

export const registerGuard: CanActivateFn = (route, state) => {
  return true ;
};

export const usersGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)

  

 if(localStorage.getItem(tokenkey) != null) {
  const tokenDecoded: any = jwtDecode(localStorage.getItem(tokenkey)!)

  // console.log('users dan kelyabdi');
  // console.log(tokenDecoded.role);
  const data = tokenDecoded.role;
  // console.log(tokenDecoded);

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if(element == 'Admin') {
      console.log('usersga navigate');
      router.navigate(['/login'])
      return true
    } else if(element == 'Student') {
      console.log('student profilega navigate');
      router.navigate(['/student-profile'])
      return true
    }
  }
 }
  
  console.log('navigate boldi');
  router.navigate(['/login'])
  return false;

};

export const studentProfileGuard: CanActivateFn = (route, state) => {
  return false;
};