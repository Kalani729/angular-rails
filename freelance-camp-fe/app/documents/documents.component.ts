import { Component } from '@angular/core';
import { Document } from './document'

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My First Doc",
      description: 'asdfasdfasdf asdfasdf',
      file_url: 'http://www.google.com',
      updated_at: '09/05/17',
      image_url: 'https://cdn.pixabay.com/photo/2013/09/06/14/43/brown-179454_960_720.jpg',
    },
    {
      title: "My Second Doc",
      description: 'asdfasdfasdf asdfasdf',
      file_url: 'http://www.google.com',
      updated_at: '09/05/17',
      image_url: 'https://cdn.pixabay.com/photo/2014/05/03/01/03/macbook-336704_960_720.jpg',
    },
    {
      title: "My Last Doc",
      description: 'asdfasdfasdf asdfasdf',
      file_url: 'http://www.google.com',
      updated_at: '09/05/17',
      image_url: 'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_960_720.jpg',
    }
  ]
}