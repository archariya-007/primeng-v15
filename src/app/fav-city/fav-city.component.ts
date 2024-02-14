import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';

interface Hero {
  name: string
  code: string
}

@Component({
  selector: 'app-fav-city',
  templateUrl: './fav-city.component.html',
  styleUrls: ['./fav-city.component.scss']
})


export class FavCityComponent implements OnInit {
  heros: Hero[] = [
  { name: 'Iron Man', code: 'IM' },
  { name: 'Captain America', code: 'CA' },
  { name: 'Thor', code: 'TH' },
  { name: 'Hulk', code: 'HK' },
  { name: 'Black Widow', code: 'BW' },
  { name: 'Hawkeye', code: 'HE' },
  { name: 'Spider-Man', code: 'SM' },
  { name: 'Black Panther', code: 'BP' },
  { name: 'Doctor Strange', code: 'DS' },
  { name: 'Ant-Man', code: 'AM' },
  { name: 'Wasp', code: 'WS' },
  { name: 'Vision', code: 'VS' },
  { name: 'Scarlet Witch', code: 'SW' },
  { name: 'Quicksilver', code: 'QS' },
  { name: 'Falcon', code: 'FC' },
  { name: 'Winter Soldier', code: 'WS' },
  { name: 'Star-Lord', code: 'SL' },
  { name: 'Gamora', code: 'GM' },
  { name: 'Rocket Raccoon', code: 'RR' },
  { name: 'Groot', code: 'GR' },
  { name: 'Ryu', code: 'RY' },
  { name: 'Ken', code: 'KN' },
  { name: 'Chun-Li', code: 'CL' },
  { name: 'Guile', code: 'GL' },
  { name: 'Zangief', code: 'ZF' },
  { name: 'Dhalsim', code: 'DH' },
  { name: 'Blanka', code: 'BK' },
  { name: 'E. Honda', code: 'EH' },
  { name: 'Vega', code: 'VG' },
  { name: 'Sagat', code: 'SG' },
  { name: 'M. Bison', code: 'MB' },
  { name: 'Balrog', code: 'BR' },
  { name: 'Akuma', code: 'AK' },
  { name: 'Cammy', code: 'CM' },
  { name: 'Fei Long', code: 'FL' },
  { name: 'Dee Jay', code: 'DJ' },
  { name: 'T. Hawk', code: 'TH' },
  { name: 'Rose', code: 'RS' },
  { name: 'Dan', code: 'DN' },
  { name: 'Sakura', code: 'SK' },
  { name: 'Superman', code: 'SM' },
  { name: 'Batman', code: 'BM' },
  { name: 'Wonder Woman', code: 'WW' },
  { name: 'Flash', code: 'FL' },
  { name: 'Green Lantern', code: 'GL' },
  { name: 'Aquaman', code: 'AQ' },
  { name: 'Cyborg', code: 'CY' },
  { name: 'Green Arrow', code: 'GA' },
  { name: 'Hawkman', code: 'HM' },
  { name: 'Supergirl', code: 'SG' }
  ];

  selectedHero: Hero | null = this.heros[1]
  value: string = ''
  frmSampleContent: FormGroup

  constructor() {
    this.frmSampleContent = new FormGroup({
      userIdFormControl: new FormControl('Hello World'),
      ddHero: new FormControl()
    })
  }
  ngOnInit() { }

}