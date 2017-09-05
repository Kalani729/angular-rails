import { Component } from '@angular/core';
import { Document } from './document'

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My First Doc",
      description: 'asdfasdfasdf asdfasdf',
      file_url: 'http://www.google.com',
      updated_at: '09/05/17',
      image_url: 'http://www.google.com',
    },
    {
      title: "My Second Doc",
      description: 'asdfasdfasdf asdfasdf',
      file_url: 'http://www.google.com',
      updated_at: '09/05/17',
      image_url: 'http://www.google.com',
    },
    {
      title: "My Last Doc",
      description: 'asdfasdfasdf asdfasdf',
      file_url: 'http://www.google.com',
      updated_at: '09/05/17',
      image_url: 'http://www.google.com',
    }
  ]
}