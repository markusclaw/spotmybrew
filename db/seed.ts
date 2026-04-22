import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { beers } from './schema';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const seedBeers = [
  { name: "Amber Rebellion", brewery: "Cervecería Tecate Craft", origin: "Mexico", style: "Amber Ale", color: "Copper", abv: 6.5, ibu: 42, description: "A balanced amber ale with caramel notes and subtle citrus hop finish. Perfect for a warm evening.", rating: 4.3, reviews: 28 },
  { name: "Hoppy Horizon", brewery: "Craft House IPA Brewery", origin: "Mexico", style: "IPA", color: "Golden", abv: 7.2, ibu: 65, description: "Bold and aromatic IPA featuring Cascade and Centennial hops. Crisp finish with pine and citrus notes.", rating: 4.7, reviews: 45 },
  { name: "Midnight Porter", brewery: "Dark Matter Brewing Co.", origin: "Mexico", style: "Porter", color: "Black", abv: 8.1, ibu: 55, description: "Rich and roasty porter with chocolate and coffee undertones. Smooth, velvety mouthfeel with dry finish.", rating: 4.5, reviews: 32 },
  { name: "Red Dawn", brewery: "Tecate Valley Brewery", origin: "Mexico", style: "Red Ale", color: "Red/Amber", abv: 5.8, ibu: 35, description: "Smooth red ale with malty sweetness and light fruit notes. Approachable and refreshing.", rating: 4.1, reviews: 22 },
  { name: "Sunny Pilsner", brewery: "Border Light Brewery", origin: "Mexico", style: "Pilsner", color: "Pale", abv: 4.8, ibu: 28, description: "Clean and crisp Czech-style pilsner. Light and refreshing with a noble hop finish. Perfect for warm days.", rating: 4.4, reviews: 38 },
  { name: "Harvest Gold", brewery: "Oaxaca Craft Brewery", origin: "Mexico", style: "Lager", color: "Golden", abv: 6.9, ibu: 48, description: "Golden lager brewed with local grains. Smooth, malty, with light spice character. A regional favorite.", rating: 4.2, reviews: 35 },
  { name: "Midnight Echo Stout", brewery: "Eclipse Brewing", origin: "Mexico", style: "Stout", color: "Black", abv: 7.8, ibu: 62, description: "Deep black stout with notes of espresso, dark chocolate, and licorice. Bold and complex.", rating: 4.6, reviews: 41 },
  { name: "Sierra Blonde", brewery: "Mountain Peak Brewery", origin: "Mexico", style: "Pale Ale", color: "Golden", abv: 5.5, ibu: 38, description: "Light and easy-drinking pale ale with floral and citrus notes. Great for sessions.", rating: 4.0, reviews: 26 },
  { name: "Desert Storm IPA", brewery: "Border Craft Collective", origin: "Mexico", style: "IPA", color: "Amber", abv: 7.5, ibu: 72, description: "Intense and hoppy IPA with grapefruit and pine. Not for the faint of heart.", rating: 4.8, reviews: 52 },
  { name: "Copper Canyon Ale", brewery: "Copper Creek Brewery", origin: "Mexico", style: "Amber Ale", color: "Copper", abv: 6.2, ibu: 44, description: "Smooth amber with hints of caramel and wood. A true classic.", rating: 4.3, reviews: 30 },
  { name: "Night Rider Lager", brewery: "Nocturnal Brewing", origin: "Mexico", style: "Lager", color: "Brown", abv: 5.9, ibu: 32, description: "Dark lager with subtle malt sweetness. Perfect after a long day.", rating: 4.2, reviews: 24 },
  { name: "Artisan Porter Dark", brewery: "Artisan Craft Works", origin: "Mexico", style: "Porter", color: "Dark Brown", abv: 7.3, ibu: 58, description: "Crafted porter with rich chocolate and bread crust flavors.", rating: 4.4, reviews: 29 },
  { name: "Golden Gate Wheat", brewery: "Pacific Craft Co.", origin: "USA", style: "Wheat", color: "Pale", abv: 4.5, ibu: 18, description: "Light and hazy wheat beer with hints of citrus and coriander.", rating: 4.1, reviews: 19 },
  { name: "Baja Session IPA", brewery: "Coastal Brewing", origin: "Mexico", style: "IPA", color: "Golden", abv: 4.2, ibu: 45, description: "Low-ABV session IPA packed with tropical hop flavor. Refreshing and sessionable.", rating: 4.3, reviews: 27 },
  { name: "Obsidian Stout", brewery: "Volcanic Ales", origin: "Mexico", style: "Stout", color: "Black", abv: 9.2, ibu: 70, description: "Imperial stout with roasted malt, dark fruit, and vanilla. A sipper.", rating: 4.9, reviews: 63 },
  { name: "Marigold Saison", brewery: "Flores Brewing", origin: "Mexico", style: "Saison", color: "Golden", abv: 6.1, ibu: 25, description: "Farmhouse saison brewed with local marigold petals. Floral and spicy finish.", rating: 4.5, reviews: 34 },
  { name: "Cerro Rojo Red", brewery: "Highland Cervecería", origin: "Mexico", style: "Red Ale", color: "Red/Amber", abv: 5.6, ibu: 38, description: "A hearty red ale with toasted malt and a dry hop finish.", rating: 4.2, reviews: 21 },
  { name: "Pacific Pale Ale", brewery: "West Coast Collective", origin: "USA", style: "Pale Ale", color: "Golden", abv: 5.3, ibu: 42, description: "Clean West Coast pale ale with pine and citrus notes. A crowd-pleaser.", rating: 4.0, reviews: 18 },
  { name: "Tequila Barrel Lager", brewery: "Barrica Brewing", origin: "Mexico", style: "Lager", color: "Amber", abv: 6.8, ibu: 20, description: "Lager aged in tequila barrels for a unique agave twist. Smooth and unexpected.", rating: 4.6, reviews: 48 },
  { name: "Piloncillo Porter", brewery: "Dulce Craft Ales", origin: "Mexico", style: "Porter", color: "Dark Brown", abv: 7.0, ibu: 50, description: "Porter brewed with piloncillo (raw cane sugar) for a caramel-sweet, roasty finish.", rating: 4.4, reviews: 36 },
];

async function seed() {
  console.log('Seeding beers...');
  const result = await db.insert(beers).values(seedBeers).onConflictDoNothing().returning();
  console.log(`Inserted ${result.length} beers`);
}

seed().catch(console.error);
