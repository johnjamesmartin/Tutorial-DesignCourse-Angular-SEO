import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('My spiffy home page');

    meta.addTags([
      { name: 'author',   content: 'John again'},
      { name: 'keywords', content: 'something'},
      { name: 'description', content: 'test' }
    ]);
  }

  ngOnInit() {
  }

}
