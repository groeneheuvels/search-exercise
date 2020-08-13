import { Component } from "@angular/core";
import * as faker from "faker";
import { DataService } from "../services/data.service";
faker.seed(1);

interface Person {
  name: string;
  birthDate: Date;
  motto: string;
  email: string;
  phone: string;
}
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  private persons: Person[] = Array.from(new Array(150)).map(() => ({
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    birthDate: faker.date.between("1910", "1999"),
    motto: faker.hacker.phrase(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
  }));
  displayedPersons = this.persons.slice();
  constructor() {}

  search() {
    this.displayedPersons = this.persons.filter((x) => x);
  }
}
