import {Component, OnInit} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  newPost = '';
  book = {
    id: 11,
    cover: 'action.jpg',
    background: 'bookshelf.jpg',
    title: 'book1',
    genre: 'action, comedy',
    summary: 'dasda dsads adsad adsa asds ad sadsa dsad asdas ad aw awdaw dawdaw daw d asd asd asdsa f ',
    author: 'best11',
    views: 100,
    score: 9.70,
    likes: 15,
    position: 1,
    status: 'completed',
    chapters: [
      {
        order: 1,
        date: '2019',
        title: 'chapter 1',
        likes: 15,
        description: 'asd asdsa dsa dasd asd sa asd asdsa dsa dasd asd sa asd asdsa dsa dasd asd ',
        text: 'koniec',
        comments: [
          {
            title: 'epic',
            date: '2019',
            likes: 2,
            user: 'wwwQQQ',
            text: 'adas sad sadsa dad sad asdsa dsad asd asd asd sadsa dsa dsa dsad as dsad sadsasaad as',
            likedBy: ['wwwQQQ', 'wwwQQQs']
          },
          {
            title: 'nice',
            date: '2019',
            likes: 2,
            user: 'wwwQQQ',
            text: 'adas sad sadsa dad sad asdsa dsad asd asd asd sadsa dsa dsa dsad as dsad sadsasaad as',
            likedBy: ['wwwQQQ', 'wwwQQQs']
          }
        ]
      },
      {
        order: 2,
        date: '2019',
        title: 'chapter 2',
        likes: 15,
        description: 'asd asdsa dsa dasd asd sa',
        text: 'hjk hkhj hk hjk jhk hkj hkjhk hk hkh kk',
        comments: [
          {
            title: 'epic',
            likes: 2,
            date: '2019',
            user: 'wwwQQQ',
            text: 'adas sad sadsa dad sad asdsa dsad asd asd asd sadsa dsa dsa dsad as dsad sadsasaad as',
            likedBy: ['wwwQQQ', 'wwwQQQs']
          },
          {
            title: 'nice',
            date: '2019',
            likes: 2,
            user: 'wwwQQQ',
            text: 'adas sad sadsa dad sad asdsa dsad asd asd asd sadsa dsa dsa dsad as dsad sadsasaad as',
            likedBy: ['wwwQQQ', 'wwwQQQs']
          }
        ]
      }
    ],
    comments: [
      {
        title: 'epic',
        likes: 2,
        date: '2019',
        user: 'wwwQQQ',
        text: 'adas sad sadsa dad sad asdsa dsad asd asd asd sadsa dsa dsa dsad as dsad sadsasaad as',
        likedBy: ['wwwQQQ', 'wwwQQQs']
      },
      {
        title: 'nice',
        likes: 2,
        date: '2019',
        user: 'wwwQQQ',
        text: 'adas sad sadsa dad sad asdsa dsad asd asd asd sadsa dsa dsa dsad as dsad sadsasaad as',
        likedBy: ['wwwQQQ', 'wwwQQQs']
      }
    ],
    likedBY: ['wwwQQQ', 'wwwQQQs']
  };
  topAllTime = [
    {
      id: 11,
      title: 'book1',
      genre: 'action, comedy',
      summary: 'dasda dsads adsad adsa asds ad sadsa dsad asdas ad aw awdaw dawdaw daw d',
      author: 'best11',
      views: 100,
      score: 9.70,
      chapters: 11,
      status: 'completed'
    },
    {
      id: 111,
      title: 'book12',
      genre: 'action, comedy',
      summary: 'dasda dsads adsad adsa asds ad sadsa dsad asdas ad aw awdaw dawdaw daw d',
      author: 'best11',
      views: 90,
      score: 9.70,
      chapters: 11,
      status: 'completed'
    },
    {
      id: 12,
      title: 'book13',
      genre: 'action, comedy',
      summary: 'dasda dsads adsad adsa asds ad sadsa dsad asdas ad aw awdaw dawdaw daw d',
      author: 'best11',
      views: 80,
      score: 9.70,
      chapters: 11,
      status: 'completed'
    },
    {
      id: 13,
      title: 'book14',
      genre: 'action, comedy',
      summary: 'dasda dsads adsad adsa asds ad sadsa dsad asdas ad aw awdaw dawdaw daw d',
      author: 'best11',
      views: 70,
      score: 9.70,
      chapters: 11,
      status: 'completed'
    },
    {
      id: 14,
      title: 'book15',
      genre: 'action, comedy',
      summary: 'dasda dsads adsad adsa asds ad sadsa dsad asdas ad aw awdaw dawdaw daw d',
      author: 'best11',
      views: 60,
      score: 9.70,
      chapters: 11,
      status: 'completed'
    },
    {
      id: 15,
      title: 'book16',
      genre: 'action, comedy',
      summary: 'dasda dsads adsad adsa asds ad sadsa dsad asdas ad aw awdaw dawdaw daw d',
      author: 'best11',
      views: 50,
      score: 9.70,
      chapters: 11,
      status: 'completed'
    },
    {
      id: 16,
      title: 'book17',
      genre: 'action, comedy',
      summary: 'dasda dsads adsad adsa asds ad sadsa dsad asdas ad aw awdaw dawdaw daw d',
      author: 'best11',
      views: 40,
      score: 9.70,
      chapters: 11,
      status: 'completed'
    },
    {
      id: 17,
      title: 'book18',
      genre: 'action, comedy',
      summary: 'dasda dsads adsad adsa asds ad sadsa dsad asdas ad aw awdaw dawdaw daw d',
      author: 'best11',
      views: 30,
      score: 9.70,
      chapters: 11,
      status: 'completed'
    },
    {
      id: 18,
      title: 'book19',
      genre: 'action, comedy',
      summary: 'dasda dsads adsad adsa asds ad sadsa dsad asdas ad aw awdaw dawdaw daw d',
      author: 'best11',
      views: 20,
      score: 9.70,
      chapters: 11,
      status: 'completed'
    },
    {
      id: 19,
      title: 'book10',
      genre: 'action, comedy',
      summary: 'dasda dsads adsad adsa asds ad sadsa dsad asdas ad aw awdaw dawdaw daw d',
      author: 'best11',
      views: 10,
      score: 9.70,
      chapters: 11,
      status: 'completed'
    }
  ];

  sendComment(comment: HTMLTextAreaElement) {
    this.newPost = comment.value;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
