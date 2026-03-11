import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  'cat-muebles.jpg',
  'cat-joyeria.jpg',
  'cat-decoracion.jpg',
  'sillon-escandinavo.jpg',
  'mesa-nogal.jpg',
  'estanteria-industrial.jpg',
  'anillo-geometrico.jpg',
  'collar-cuarzo.jpg',
  'pulsera-oro.jpg',
  'lampara-vintage.jpg',
  'lampara-rattan.jpg',
  'espejo-art-deco.jpg',
  'espejo-macrame.jpg'
];

const targetDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function main() {
  console.log('Descargando imágenes placeholder...');
  for (const img of images) {
    const seed = img.replace('.jpg', '');
    const url = `https://picsum.photos/seed/${seed}/800/600`;
    process.stdout.write(`Descargando ${img}... `);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(path.join(targetDir, img), buffer);
      console.log('¡Listo!');
    } catch (e) {
      console.log('Fallo:', e.message);
    }
  }
}

main().catch(console.error);
