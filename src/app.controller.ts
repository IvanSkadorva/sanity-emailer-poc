import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from './app.service';
import { SanityEvent } from "./models/sanity-event";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  handleSanityEvent(@Body() body: SanityEvent): void {
    console.log(body);
    return this.appService.handleSanityEvent(body);
  }
  @Get()
  sendHello(): string {
    return 'hello';
  }
}
