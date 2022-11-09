import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor() { }

  toggle() {
    document.querySelector('#sidebar')?.classList.toggle('sidebar-visible');
  }

  ngOnInit(): void {
  }

}
