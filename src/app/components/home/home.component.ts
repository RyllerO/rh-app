import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource: ['Apresentação e postura' , 'Comunicação oral', 'Comunicação gestual', 'Comunicação vosial',
    'Organização e estrutura de aula', 'Clima da aula', 'Clareza nas explicações', 'Controle do tempo',
    'Seguraça', 'Conhecimento do conteúdo'];

  constructor() { }

  ngOnInit() {
  }

}
