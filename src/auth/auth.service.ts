import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../core/entity/user.entity';
import { UserMicroservice } from '../core/microservices';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserMicroservice.name) private userMicroservice: ClientProxy,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userMicroservice
      .send<User>('users/search', username)
      .toPromise();
    if (!user) return null;
    if (user.password !== pass && !user.mobile) return null;
    if (user.password !== pass) {
      const tokenUser = await this.userMicroservice
        .send<User>('users/confirmToken', {
          mobilePhone: user.mobile,
          token: pass,
          userId: user.id,
        })
        .toPromise();
      if (!tokenUser) return null;
    }

    const { password, ...result } = user;
    return result;
  }

  async login(user: User) {
    const payload = user;
    return {
      ...user,
      token: this.jwtService.sign(payload),
    };
  }

  async register(user: User) {
    const savedUser = await this.userMicroservice
      .send<User>('users/save', user)
      .toPromise();
    return savedUser;
  }

  async isUserExist(query: string) {
    const user = await this.userMicroservice
      .send<User>('users/search', query)
      .toPromise();
    if (!user) throw new NotFoundException();
    if (user.password) user.password = '***';
    return user;
  }

  async sendToken(mobile: string) {
    return this.userMicroservice
      .send<void>('users/loginWithPhone', mobile)
      .toPromise();
  }
}
