import {Injectable} from "@angular/core";
import {User} from "../user/User";
import {Observable, of} from "rxjs";
import {USERS} from "./mock-user";





@Injectable({providedIn: "root"})
export class UserService {

  private users : User[] = USERS;
  private selectedUser : User;
  public addUser(user: User){
    this.users.push(user);
  }
  public getUsers() : Observable<User[]> {
    return of (USERS);
  }
  public selectUser(id: number): User{
    return this.selectedUser = this.users.find(el => id === el.id);
  }

}
