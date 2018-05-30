import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created";
  serverName: string = '';
  serverBool: any;
  serverRadio: any;
  serverSelect: any;
  userName: string;
  serverCreated: boolean = false;
  servers = ['server1', 'server2'];
  clickLogs = [];
  showParagraph: boolean = false;
  constructor() {
    this.userName = "";
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServerCreate(event: Event) {
    let serverName = (<HTMLInputElement>event.target).value;
    this.servers.push(serverName)
    this.serverCreated = true;
    this.serverCreationStatus = "A server was created";
  }

  onTextChange(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUserName() {
    this.userName = "";
  }
  toggleParagraphDisplay() {
    this.showParagraph = !this.showParagraph;
    this.clickLogs.push(Date.now());
  }
}
