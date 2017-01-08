import { Injectable } from '@angular/core';

@Injectable()
export class NamesService {

  private data = ['Christian', 'Martin', 'Thomas']

  get() {
    return new Promise<string[]>(resolve => resolve(this.data));
  }

  getByIndex(index: number){
    return new Promise<string>(resolve => resolve(this.data[index]));
  }

  update(index: number, data: string) {
    this.data[index] = data;
  }

  delete(index: number) {
    this.data.splice(index, 1);
  }

}