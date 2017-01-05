import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ActionService {

  constructor(
    private router: Router
  ){}

  editName(index: number) {
    this.router.navigate(['/names', index]);
  }

}