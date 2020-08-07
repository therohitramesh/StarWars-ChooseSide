import { StarWarsService } from './../star-wars.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  // @Output() newName:string = "";
  // @Output() newSide:string = "";

  availableSides = [
    {display: 'None', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', value: 'dark'}
  ];

  // newName = "";
  // newSide = "";

  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  // onAddNew(name, side){
  //   this.swService.addCharacter(name,side);
  // }

  ngOnInit(): void {
  }

  onSubmit(form) {
    if (form.invalid) {
      return;
    }
    this.swService.createCharacter(form.value.name, form.value.side);
  }
}
