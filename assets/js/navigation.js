// Highlight current page in navigation
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll('.headerLinks a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (href) {
      // Extract just the pathname from the full URL
      let linkPath;
      try {
        linkPath = new URL(href).pathname.toLowerCase();
      } catch (e) {
        // If it's a relative URL, just use it as is
        linkPath = href.toLowerCase();
        if (!linkPath.startsWith('/')) {
          linkPath = '/' + linkPath;
        }
      }
      
      // Check for exact match or if current path starts with link path
      const isMatch = currentPath === linkPath || 
                     (linkPath !== '/' && currentPath.startsWith(linkPath));
      
      if (isMatch) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});