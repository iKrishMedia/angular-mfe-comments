import { Injectable } from '@angular/core';
import { Role } from '../enums/role.enum';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private role: Role | null = null;
  getRole(): Role | null {
    if (!this.role) {
      const token = (window as any)['mfeWindowToken'] || null;
      if (token) {
        const decoded: any = jwtDecode(token);
        this.role = decoded.role;
      }
    }

    return this.role;
  }
}
