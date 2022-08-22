import { CreateCommentDto } from './dto/create-comment.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';
import { Comment } from './entities/comment.entity';

@Injectable()
export class NewsService {

  private news: News[] = [
    {
      id: 1,
      title: "Warren Buffett's company lost $44 billion last quarter, but it's not really bad news",
      text: "New York (CNN Business)Warren Buffett is just like the rest of us. He got crushed by the plunge in the stock market during the first half of the year. But the Oracle of Omaha is undeterred by the wildness on Wall Street. Berkshire Hathaway is still buying and many of the the company's diverse business lines are still thriving, even in these uncertain economic times.",
      author: 'John',
      comments: [
        {
          id: 1,
          author: 'Sergey',
          text: 'Comment 1',
          date: new Date(),
        }
      ],
      date: new Date(),
  },
  {
      id: 2,
      title: "China posts record $101 billion trade surplus but export boom could fade",
      text: "Hong Kong (CNN Business)China's export sector delivered robust growth in July, providing much-need support for the world's second largest economy that is almost certain to miss its GDP target this year.",
      author: "John",
      comments: [],
      date: new Date(),
  },
  {
      id: 3,
      title: "Axios agrees to sell itself to Cox Enterprises in $525 million deal",
      text: "New York (CNN Business)Axios, the buzzy digital media venture founded in in 2017, will sell itself to Cox Enterprises, the two companies announced on Monday.",
      author: "John",
      comments: [],
      date: new Date(),
  },
  {
      id: 4,
      title: "4 questions to ask when shopping for a new credit card",
      text: "New York (CNN)With so many options to consider, choosing a new credit card can be daunting. But for most Americans, it's a necessary step to establishing credit.",
      author: "John",
      comments: [],
      date: new Date(),
  },
  {
      id: 5,
      title: "The market read the Federal Reserve all wrong",
      text: "New York (CNN Business)After the Federal Reserve's July meeting, investors quickly reached a consensus: The central bank was turning slightly dovish.",
      author: "John",
      comments: [],
      date: new Date(),
  },
  ];

  create(createNewsDto: CreateNewsDto) {
    const createNews:News = {
      ...createNewsDto,
      id: this.news.length + 1,
      author: "Viktor",
      comments: [],
      date: new Date().toUTCString(),
    };

    this.news.push(createNews);
  }

  createComment(createCommentDto: CreateCommentDto) {
    const newsId = createCommentDto.id;
    const news = this.findOne(newsId);

    const comment:Comment = {
      id: news.comments.length + 1,
      author: "Viktor",
      text: createCommentDto.text,
      date: new Date().toUTCString(),
    };

    this.news[newsId - 1].comments.push(comment);
  }

  findAll() {
    return this.news;
  }

  findOne(id: number) {
    const news = this.news.find((news) => news.id === id);

    if(!news) {
      throw new NotFoundException();
    }

    return news;
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return `This action updates a #${id} news`;
  }

  remove(id: number) {
    return `This action removes a #${id} news`;
  }
}
