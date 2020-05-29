import { Component } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import { Message } from 'primeng/api/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private confirmationService: ConfirmationService) {}

    msgs: Message[] = [];

    confirm1() {
        this.confirmationService.confirm({
            key: 'test',
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }
}
