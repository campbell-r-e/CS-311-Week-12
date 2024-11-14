const fs = require('fs');
const csv = require('csv-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function importData() {
  const results = [];

  // Read the CSV file
  fs.createReadStream('/Users/Campbell/Downloads/kids_movies_1980s_1990s.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      // Insert data into the database
      for (const movie of results) {
        try {
          await prisma.video.create({
            data: {
              id: parseInt(movie.id, 10), // Convert id to an integer
              name: movie.name,
              genre: movie.genre,
              pubdate: movie.pubdate,
            },
          });
        } catch (error) {
          console.error(`Error inserting movie: ${movie.name}`, error);
        }
      }
      console.log('Data import complete!');
      await prisma.$disconnect();
    });
}

importData();
