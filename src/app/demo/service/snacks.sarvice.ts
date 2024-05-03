import { Injectable, signal } from "@angular/core";
import { SNACKS, Snack } from "../data/snack";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  // Hard-code data for now
  snacks = signal<Snack[]>(SNACKS);

  getUsers():Observable<Snack[]>{
    return of(this.snacks());
  }
}