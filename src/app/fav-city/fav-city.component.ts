import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';

interface City {
  name: string
  code: string
}

@Component({
  selector: 'app-fav-city',
  templateUrl: './fav-city.component.html',
  styleUrls: ['./fav-city.component.scss']
})


export class FavCityComponent implements OnInit {
  cities: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  selectedCity: City | null = this.cities[1]
  value: string = ''
  frmSampleContent: FormGroup

  constructor() {
    this.frmSampleContent = new FormGroup({
      userIdFormControl: new FormControl('Hello World'),
      ddCities: new FormControl()
    })
  }
  ngOnInit() { }

}