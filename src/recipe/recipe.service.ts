import {Body, Injectable, Post } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipeService {

  constructor(private readonly prisma: PrismaService) {}

  create(createRecipeDto: CreateRecipeDto) {
    return this.prisma.recipe.create({
      data: createRecipeDto,
    });
  }

  findAll() {
    let recipes = this.prisma.recipe.findMany();
    console.log('recetas: ', recipes); 
    return recipes;
  }

  findOne(id: number) {
    let recipe = this.prisma.recipe.findUnique({
      where: { id },
    });
    console.log('receta: ', recipe);
    return recipe;
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
