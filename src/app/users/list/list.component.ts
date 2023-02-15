import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../../_services/user.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users?: any[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
  }

  deleteUser(id: string) {
    const user = this.users!.find(x => x.id === id);
    user.isDeleting = true;
    this.userService.delete(id)
        .pipe(first())
        .subscribe(() => this.users = this.users!.filter(x => x.id !== id));
}

}
