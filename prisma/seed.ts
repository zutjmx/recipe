// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy recipes
  const recipe1 = await prisma.recipe.upsert({
    where: { title: 'Spaghetti Bolognese' },
    update: {},
    create: {
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian dish',
      ingredients:
        'Spaghetti, minced beef, tomato sauce, onions, garlic, olive oil, salt, pepper',
      instructions:
        '1. Cook the spaghetti. 2. Fry the minced beef. 3.Add the tomato sauce to the beef.4. Serve the spaghetti with the sauce.'
    }
  });

  const recipe2 = await prisma.recipe.upsert({
    where: { title: 'Chicken Curry' },
    update: {},
    create: {
      title: 'Chicken Curry',
      description: 'A spicy Indian dish',
      ingredients:
        'Chicken, curry powder, onions, garlic, coconut milk, olive oil, salt, pepper',
      instructions:
        '1. Fry the chicken. 2. Add the curry powder to the chicken. 3. Add the coconut milk. 4. Serve the curry with rice.'
    }
  });

  const recipe3 = await prisma.recipe.upsert({
    where: { title: 'Tacos de Suadero' },
    update: {},
    create: {
      title: 'Tacos de Suadero',
      description: 'Grasosos y deliciosos tacos de carne de res de la CDMX',
      ingredients:
        'Carne de Suadero, Manteca de la carne de res o aceite vegetal, Tortillas de maíz, Cebolla blanca, Sal al gusto, Salsa picante de su elección',
      instructions:
        'Comprar los tacos ya preparados en la taquería de su elección, por ejemplo, El principe del taco.'
    }
  });

  console.log({ recipe1, recipe2, recipe3 });
}

// execute the main function
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
