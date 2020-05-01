import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';

@Component({
  selector: 'app-queue-requests',
  templateUrl: './queue-requests.component.html',
  styleUrls: ['./queue-requests.component.css']
})
export class QueueRequestsComponent implements OnInit {

  constructor(private queueService: QueueService) { }

  ngOnInit(): void {
    this.getQueueRequests();
  }

  /**
   * function : getQueueRequests
   * purpose  : calling the api requests queue
   * version  : 1.0.1
   * author   : dileep_ravula
   */

  public getQueueRequests(): void {
    this.queueService.invoke('https://jsonplaceholder.typicode.com/posts', 'Get', null, null)
    .subscribe(console.log);
    this.queueService.invoke('https://jsonplaceholder.typicode.com/posts/1/comments', 'Get', null, null)
    .subscribe(console.log);
  }

}
