import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-problem-item',
  templateUrl: './problem-item.component.html',
  styleUrls: ['./problem-item.component.css']
})
export class ProblemItemComponent implements OnInit {

  constructor() { }

  @Input() problem: any;

  ngOnInit() {
  }

}
