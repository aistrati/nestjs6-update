import { Controller, Get, UseGuards, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorators/roles.decorator';

@Controller()
@UseGuards(AuthGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(RolesGuard)
  @Roles(['superadmin', 'admin'])
  getHello(): string {
    return this.appService.getHello();
  }

  @Get() // without guard
  anotherHello(): string {
    return this.appService.getHello();
  }

  @Post('test')
  @UseGuards(RolesGuard)
  @Roles(['superadmin', 'admin'])
  createHello(): string {
    return this.appService.getHello();
  }
}
