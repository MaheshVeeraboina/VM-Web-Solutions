import fs from 'fs/promises';
import path from 'path';

// Since vite-imagetools acts as an intermediate compiler, we can manually 
// invoke sharp to strictly enforce physical WEBP conversion over the massive PNGs.
import sharp from 'sharp';

async function optimizeImages() {
  const dir = path.resolve('src/assets/images');
  const files = await fs.readdir(dir);
  
  for (const file of files) {
    if (file.endsWith('.png')) {
      const inputPath = path.join(dir, file);
      const outputPath = path.join(dir, file.replace('.png', '.webp'));
      
      console.log(`Processing: ${file}...`);
      
      await sharp(inputPath)
        .resize(1200, null, { withoutEnlargement: true }) // enforce max width
        .webp({ quality: 80, effort: 6 }) // Aggressive compression
        .toFile(outputPath);
        
      const stats = await fs.stat(outputPath);
      console.log(`Converted ${file} to WEBP -> Size: ${(stats.size / 1024).toFixed(2)} KB`);
      
      // Delete original PNG to enforce strictly optimized assets
      await fs.unlink(inputPath);
    }
  }
}

optimizeImages().catch(console.error);
