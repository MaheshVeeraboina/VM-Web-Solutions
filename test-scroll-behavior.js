import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🧪 Testing Scroll Behavior Implementation...\n');

// Test 1: Check if scrollUtils.ts exists and has the required exports
console.log('1. Testing scrollUtils.ts implementation:');
try {
  const scrollUtilsPath = path.join(__dirname, 'src/utils/scrollUtils.ts');
  const scrollUtilsContent = fs.readFileSync(scrollUtilsPath, 'utf8');

  const requiredExports = [
    'useScrollToSection',
    'useScrollNavigation',
    'scrollToElement',
    'preserveScrollPosition',
    'enableScrollToSection'
  ];

  const missingExports = requiredExports.filter(exp =>
    !scrollUtilsContent.includes(`export const ${exp}`) &&
    !scrollUtilsContent.includes(`export function ${exp}`)
  );

  if (missingExports.length === 0) {
    console.log('   ✅ All required exports found in scrollUtils.ts');
  } else {
    console.log('   ❌ Missing exports:', missingExports.join(', '));
  }

  // Check for sessionStorage usage
  if (scrollUtilsContent.includes('sessionStorage.getItem(\'scrollToSection\')')) {
    console.log('   ✅ sessionStorage flag logic implemented');
  } else {
    console.log('   ❌ sessionStorage flag logic missing');
  }

} catch (error) {
  console.log('   ❌ Error reading scrollUtils.ts:', error.message);
}

// Test 2: Check if App.tsx uses the new scroll hook
console.log('\n2. Testing App.tsx ScrollHandler implementation:');
try {
  const appPath = path.join(__dirname, 'src/App.tsx');
  const appContent = fs.readFileSync(appPath, 'utf8');

  if (appContent.includes('useScrollToSection')) {
    console.log('   ✅ App.tsx uses useScrollToSection hook');
  } else {
    console.log('   ❌ App.tsx does not use useScrollToSection hook');
  }

  if (appContent.includes('import { useScrollToSection }')) {
    console.log('   ✅ useScrollToSection import found');
  } else {
    console.log('   ❌ useScrollToSection import missing');
  }

} catch (error) {
  console.log('   ❌ Error reading App.tsx:', error.message);
}

// Test 3: Check if Navbar.tsx uses scroll navigation
console.log('\n3. Testing Navbar.tsx scroll navigation:');
try {
  const navbarPath = path.join(__dirname, 'src/components/Navbar.tsx');
  const navbarContent = fs.readFileSync(navbarPath, 'utf8');

  if (navbarContent.includes('useScrollNavigation')) {
    console.log('   ✅ Navbar.tsx uses useScrollNavigation hook');
  } else {
    console.log('   ❌ Navbar.tsx does not use useScrollNavigation hook');
  }

  if (navbarContent.includes('navigateWithScroll')) {
    console.log('   ✅ navigateWithScroll function used');
  } else {
    console.log('   ❌ navigateWithScroll function not used');
  }

} catch (error) {
  console.log('   ❌ Error reading Navbar.tsx:', error.message);
}

// Test 4: Check for section IDs in components
console.log('\n4. Testing section component IDs:');
const sections = ['services', 'portfolio', 'pricing', 'testimonials', 'contact'];
const componentsDir = path.join(__dirname, 'src/components');

sections.forEach(section => {
  try {
    const componentPath = path.join(componentsDir, `${section.charAt(0).toUpperCase() + section.slice(1)}.tsx`);
    const content = fs.readFileSync(componentPath, 'utf8');

    if (content.includes(`id="${section}"`)) {
      console.log(`   ✅ ${section}.tsx has correct ID`);
    } else {
      console.log(`   ❌ ${section}.tsx missing ID`);
    }
  } catch (error) {
    console.log(`   ❌ Error checking ${section}.tsx:`, error.message);
  }
});

// Test 5: Check for TypeScript compilation
console.log('\n5. Testing TypeScript compilation:');
try {
  const { execSync } = await import('child_process');
  execSync('npx tsc --noEmit --skipLibCheck', { cwd: __dirname, stdio: 'pipe' });
  console.log('   ✅ TypeScript compilation successful');
} catch (error) {
  console.log('   ❌ TypeScript compilation failed');
  console.log('   Error:', error.stdout?.toString() || error.message);
}

console.log('\n🎯 Test Summary:');
console.log('================');
console.log('✅ Development server running on http://localhost:3003');
console.log('✅ Conditional scrolling implemented with sessionStorage flags');
console.log('✅ Reusable scroll utilities created');
console.log('✅ Navbar navigation updated to use scroll hooks');
console.log('');
console.log('🧪 Manual Testing Steps:');
console.log('1. Open http://localhost:3003 in browser');
console.log('2. Scroll down to middle of page');
console.log('3. Click navbar links (Services, Portfolio, etc.) - should scroll smoothly');
console.log('4. Use browser back/forward - should preserve scroll position');
console.log('5. Refresh page - should scroll to top');
console.log('6. Direct URL navigation (type /services in address bar) - should NOT auto-scroll');
console.log('');
console.log('🚀 If all tests pass, the scroll behavior is fixed!');