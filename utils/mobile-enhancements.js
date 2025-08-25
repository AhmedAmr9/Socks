// Mobile Enhancements for Socks Coffee
// This script adds mobile-specific classes without modifying original components

export function enhanceMobileExperience() {
  // Add mobile-specific classes to components
  addMobileClasses();
  
  // Set up resize listener for dynamic adjustments
  setupResizeListener();
  
  // Commented out the addition of the touch-friendly class
  // addTouchEnhancements();
  
  console.log('Mobile enhancements applied successfully');
}

function addMobileClasses() {
  // Add classes to header
  const header = document.querySelector('header');
  if (header) {
    header.classList.add('header-professional-mobile');
  }
  
  // Add classes to hero section
  const heroSection = document.querySelector('section#home');
  if (heroSection) {
    heroSection.classList.add('hero-section-mobile');
    
    // Add classes to hero buttons container
    const heroButtons = heroSection.querySelector('.flex.flex-col.sm\\:flex-row');
    if (heroButtons) {
      heroButtons.classList.add('hero-buttons-mobile');
    }
    
    // Add classes to stats container
    const heroStats = heroSection.querySelector('.grid.grid-cols-3');
    if (heroStats) {
      heroStats.classList.add('hero-stats-mobile');
    }
  }
  
  // Add classes to about section
  const aboutSection = document.querySelector('section#about');
  if (aboutSection) {
    aboutSection.classList.add('about-section-mobile');
    
    // Add classes to about content
    const aboutContent = aboutSection.querySelector('.about-content');
    if (aboutContent) {
      aboutContent.classList.add('about-content-mobile');
    }
    
    // Add classes to about text
    const aboutText = aboutSection.querySelector('.about-text');
    if (aboutText) {
      aboutText.classList.add('about-text-mobile');
    }
    
    // Add classes to about image
    const aboutImage = aboutSection.querySelector('.about-image');
    if (aboutImage) {
      aboutImage.classList.add('about-image-mobile', 'mobile-image');
    }
  }
  
  // Add classes to staff section
  const staffSection = document.querySelector('section#team');
  if (staffSection) {
    staffSection.classList.add('staff-section-mobile');
    
    // Add classes to scroll container
    const scrollContainer = staffSection.querySelector('.flex.gap-6.overflow-x-scroll');
    if (scrollContainer) {
      scrollContainer.classList.add('staff-scroll-container-mobile', 'scroll-smooth-mobile');
    }
    
    // Add classes to staff avatars
    const staffAvatars = staffSection.querySelectorAll('.flex.flex-col.items-center');
    staffAvatars.forEach(avatar => {
      avatar.classList.add('staff-avatar-mobile');
    });
    
    // Add classes to staff description
    const staffDescription = staffSection.querySelector('.max-w-3xl.mx-auto');
    if (staffDescription) {
      staffDescription.classList.add('staff-description-mobile', 'mobile-text-wrap');
    }
    
    // Add classes to navigation arrows
    const arrows = staffSection.querySelectorAll('button.bg-yellow-500');
    arrows.forEach(arrow => {
      arrow.classList.add('staff-arrows-mobile');
    });
  }
  
  // Add container padding class to main containers
  const containers = document.querySelectorAll('.container, .mx-auto');
  containers.forEach(container => {
    if (container.textContent && container.textContent.trim() !== '') {
      container.classList.add('container-padding-mobile');
    }
  });
}

function setupResizeListener() {
  let resizeTimeout;
  
  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateMobileClasses();
    }, 250);
  }
  
  window.addEventListener('resize', handleResize);
}

function updateMobileClasses() {
  // Update classes based on current viewport
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // Ensure mobile-specific optimizations are applied
    document.body.classList.add('mobile-optimized');
  } else {
    document.body.classList.remove('mobile-optimized');
  }
}

// Initialize when DOM is loaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceMobileExperience);
  } else {
    enhanceMobileExperience();
  }
}

// Export for manual initialization if needed
export default enhanceMobileExperience;
