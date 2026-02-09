import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  // Sample data to display in your cards
  posts = [
    {
      id: 1,
      title: 'ang alamat ng bahay ni jose',
      description: 'the house of jose is a popular folk tale in the philippines that tells the story of a man named jose who lived in a small house. the story is often used to teach children about the importance of hard work and perseverance.'
    },
    {
      id: 2,
      title: 'bob agustero',
      description: 'bob agustero is a well-known figure in the world of comedy. he is known for his quick wit and hilarious jokes that have made him a favorite among audiences of all ages.'
    },
    {
      id: 3,
      title: 'jed surabasquez',
      description: 'jed surabasquez is a well-known figure in the world of technology and innovation. he is known for his contributions to software development and his work in advancing digital solutions.'
    }
  ];

  // Logic to handle the delete button
  deletePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}
