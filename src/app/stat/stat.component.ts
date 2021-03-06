import { Component, OnInit } from '@angular/core';
import {StatService} from '../stat.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  private stat = [0, 0, 0];

  constructor(private statService: StatService) { }

  ngOnInit() {
    this.statService.getStat().subscribe(stat => this.stat = stat);
  }
}
