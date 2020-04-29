import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  first = `I'm online`
  second = `I'm offline`
  third = `I'm Offline`

  constructor() {
    setTimeout(() => {
      this.first  = `I'm Offline`
      this.third = `i'm online`
    }, 2000)

    setTimeout(()=>{
      this.second = `I'm online`
    },10000)
  }

  ngOnInit(): void {
  }

  firstM() {
    return this.first.includes('online') ? 'green' : 'red';
  }
  secondM(){
    return this.second.includes('online') ? 'green' : 'red';
  }
 thirdM() {
    return this.third.includes('online') ? 'green' : 'red';
 }


}
