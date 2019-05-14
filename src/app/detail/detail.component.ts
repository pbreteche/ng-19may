import {Component, OnInit} from '@angular/core';
import {Task} from '../task';
import {TaskProviderService} from '../task-provider.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  task = new Task();

  constructor(
    private provider: TaskProviderService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) =>
        this.task = this.provider.getById(+params.get('id'))
    );
  }
}
