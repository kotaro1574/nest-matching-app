import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    const newUser = this.prisma.user.create({
      data: { name: createUserInput.name },
    });

    return newUser;
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    const user = this.prisma.user.findUnique({ where: { id } });
    return user;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    const targetUser = this.prisma.user.update({
      where: { id },
      data: { name: updateUserInput.name },
    });

    return targetUser;
  }

  remove(id: number) {
    const targetUser = this.prisma.user.delete({ where: { id } });

    return targetUser;
  }
}
