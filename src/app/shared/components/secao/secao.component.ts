import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secao',
  templateUrl: './secao.component.html',
  styleUrls: ['./secao.component.scss']
})
export class SecaoComponent implements OnInit {
  @Input()
  public titulo: string;

  @Input()
  public subtitulo: string;

  constructor() { }

  ngOnInit() {
  }

}
