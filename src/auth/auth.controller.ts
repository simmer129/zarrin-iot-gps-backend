import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Param,
  Body,
} from '@nestjs/common';
import { User } from '../core/entity/user.entity';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @Get('init/:query')
  isUserExist(@Param('query') query: string): Promise<User> {
    console.log(query);
    return this.authService.isUserExist(query);
  }

  @Public()
  @Post('register')
  register(@Body() body: User): Promise<User> {
    return this.authService.register(body);
  }

  @Public()
  @Get('sendToken/:mobile')
  sendSms(@Param('mobile') mobile: string): Promise<void> {
    return this.authService.sendToken(mobile);
  }
}
