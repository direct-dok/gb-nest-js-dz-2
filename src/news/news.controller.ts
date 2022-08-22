import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateSubCommentDto } from './dto/create-subcomment.dto';
import { Public } from 'src/decorators/public.decorator';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Post("comment")
  createComment(@Body() createCommentDto: CreateCommentDto) {
    return this.newsService.createComment(createCommentDto);
  }

  @Post("subcomment")
  createSubComment(@Body() createSubCommentDto: CreateSubCommentDto) {
    return this.newsService.createSubComment(createSubCommentDto);
  }

  @Get()
  @Public()
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.update(+id, updateNewsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(+id);
  }
}
