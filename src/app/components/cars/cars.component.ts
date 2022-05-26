import { Component, OnInit } from '@angular/core';
import {ICar} from "../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../../services";
import {RegEx} from "../../constants";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[];
  form: FormGroup;
  carForUpdate: ICar | null;

  constructor(private carService: CarService) {
    this._createForm();
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value);
  }

  save(): void {
    if (!this.carForUpdate) {
      this.carService.create(this.form.value).subscribe(value => {
        this.cars.push(value)
        this.form.reset()
      })
    } else {
      this.carService.updateById(this.carForUpdate.id, this.form.value).subscribe(value => {
        const updateCar = this.cars.find(f => f.id === this.carForUpdate?.id);
        Object.assign(updateCar, value)
        this.carForUpdate = null
      })
    }
  }

  delete(id: number): void {
    this.carService.deleteById(id).subscribe(() => {
      const index = this.cars.findIndex(car => car.id ===id);
      this.cars.splice(index, 1)
    })
  }

  private _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.pattern(RegEx.model)]),
      price: new FormControl(0, [Validators.min(0), Validators.max(1000000)]),
      year: new FormControl(1900, [Validators.min(1900), Validators.max(new Date().getFullYear())]),
    })
  }

  update(car:ICar): void {
    this.carForUpdate = car
    this.form.setValue({model: car.model, price: car.price, year: car.year})
  }
}
