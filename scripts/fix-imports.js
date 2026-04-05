import fs from 'fs/promises';
import path from 'path';

async function fixImports() {
  const filesToFix = [
    'src/components/Hero.tsx',
    'src/pages/CoachingWebDesign.tsx',
    'src/pages/GymWebDesign.tsx',
    'src/pages/RealEstateWebDesign.tsx',
    'src/pages/HyderabadWebDesign.tsx'
  ];

  for (const relativePath of filesToFix) {
    const fullPath = path.resolve(relativePath);
    try {
      let content = await fs.readFile(fullPath, 'utf-8');
      
      // Remove optimized picture imports
      content = content.replace(/import .* from '@\/assets\/images\/.*\?(w|format|blur).*;\n/g, '');
      content = content.replace(/import \{ OptimizedPicture \} from .*;\n/g, '');
      
      // Inject standard WebP import
      // Extract the basename of the mockup from the file
      const mockupMatch = content.match(/alt="(.*?Mockup.*?|.*?mockup.*?)"/i) || content.match(/Mockup/);
      // We know which mockup each file uses roughly, but let's just use strict regex to find what it was
      
      if (relativePath.includes('Hero')) {
        content = `import heroImage from '@/assets/images/desktop-mockup.webp';\n` + content;
        content = content.replace(/<OptimizedPicture[\s\S]*?\/>/g, `<img src={heroImage} alt="Web App Mockup" width="1200" height="800" fetchPriority="high" loading="eager" decoding="sync" className="w-full h-full object-cover" />`);
      }
      else if (relativePath.includes('Coaching')) {
        content = `import heroImage from '@/assets/images/coaching-mockup.webp';\n` + content;
        content = content.replace(/<OptimizedPicture[\s\S]*?\/>/g, `<img src={heroImage} alt="Coaching Web Design Mockup" width="1200" height="800" fetchPriority="high" loading="eager" decoding="sync" className="w-full h-full object-cover" />`);
      }
      else if (relativePath.includes('Gym')) {
        content = `import heroImage from '@/assets/images/gym-mockup.webp';\n` + content;
        content = content.replace(/<OptimizedPicture[\s\S]*?\/>/g, `<img src={heroImage} alt="Gym Web Design Mockup" width="1200" height="800" fetchPriority="high" loading="eager" decoding="sync" className="w-full h-full object-cover" />`);
      }
      else if (relativePath.includes('RealEstate')) {
        content = `import heroImage from '@/assets/images/real-estate-mockup.webp';\n` + content;
        content = content.replace(/<OptimizedPicture[\s\S]*?\/>/g, `<img src={heroImage} alt="Real Estate Web Design Mockup" width="1200" height="800" fetchPriority="high" loading="eager" decoding="sync" className="w-full h-full object-cover" />`);
      }
      else if (relativePath.includes('Hyderabad')) {
        content = `import heroImage from '@/assets/images/desktop-mockup.webp';\n` + content;
        content = content.replace(/<OptimizedPicture[\s\S]*?\/>/g, `<img src={heroImage} alt="Hyderabad Web Design Mockup" width="1200" height="800" fetchPriority="high" loading="eager" decoding="sync" className="w-full h-full object-cover" />`);
      }
      
      await fs.writeFile(fullPath, content, 'utf-8');
      console.log(`Updated ${relativePath}`);
    } catch(err) {
      console.error(`Skipped or Native Error on ${relativePath} (might not exist or match perfectly)`, err);
    }
  }
}

fixImports();
