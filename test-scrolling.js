// Test script to verify scrolling functionality
const testScrolling = () => {
  console.log('Testing scrolling functionality...');

  // Test if elements exist
  const sections = ['services', 'portfolio', 'pricing', 'testimonials', 'contact'];
  const missingSections = [];

  sections.forEach(section => {
    const element = document.getElementById(section);
    if (!element) {
      missingSections.push(section);
      console.error(`❌ Section "${section}" not found!`);
    } else {
      console.log(`✅ Section "${section}" found at:`, element.offsetTop, 'px');
    }
  });

  if (missingSections.length === 0) {
    console.log('🎉 All sections found! Scrolling functionality should work.');
  } else {
    console.error('❌ Missing sections:', missingSections);
  }

  // Test URL navigation simulation
  console.log('Testing URL-based navigation...');
  const testUrls = ['/services', '/portfolio', '/pricing', '/testimonials', '/contact'];

  testUrls.forEach(url => {
    const sectionId = url.replace('/', '');
    const element = document.getElementById(sectionId);
    if (element) {
      console.log(`✅ URL "${url}" → element "${sectionId}" found`);
    } else {
      console.error(`❌ URL "${url}" → element "${sectionId}" NOT found`);
    }
  });
};

// Run test when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', testScrolling);
} else {
  testScrolling();
}