// Konami Code Easter Egg
(function() {
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];
  
  let userInput = [];
  let retroModeActive = false;
  
  function showNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.className = 'konami-notification';
    notification.innerHTML = `> ${message} <span class="terminal-cursor"></span>`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, duration);
  }
  
  function toggleRetroMode() {
    retroModeActive = !retroModeActive;
    document.body.classList.toggle('retro-mode', retroModeActive);
    
    if (retroModeActive) {
      const authorName = document.querySelector('.indexHeader')?.textContent || 'user';
      showNotification(`RETRO_MODE_ACTIVATED // Welcome to the matrix, ${authorName}`);
      
      // Add terminal-style typing effect to page title
      const title = document.querySelector('h1');
      if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        title.classList.add('terminal-cursor');
        
        let i = 0;
        const typeWriter = setInterval(() => {
          if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
          } else {
            title.classList.remove('terminal-cursor');
            clearInterval(typeWriter);
          }
        }, 100);
      }
      
    } else {
      showNotification('NORMAL_MODE_RESTORED // Back to the surface world');
      
      // Restore original title
      const title = document.querySelector('h1');
      if (title) {
        title.classList.remove('terminal-cursor');
      }
      
    }
  }
  
  document.addEventListener('keydown', function(event) {
    userInput.push(event.code);
    
    // Keep only the last 10 inputs (length of Konami code)
    if (userInput.length > konamiCode.length) {
      userInput.shift();
    }
    
    // Check if the last inputs match the Konami code
    if (userInput.length === konamiCode.length) {
      const match = userInput.every((input, index) => input === konamiCode[index]);
      
      if (match) {
        toggleRetroMode();
        userInput = []; // Reset the input
      }
    }
  });
  
  // Secret key combination for quick toggle (Ctrl+Shift+T)
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.code === 'KeyT') {
      event.preventDefault();
      toggleRetroMode();
    }
  });
  
  // Console easter egg - dynamically get author info
  const getAuthorInfo = () => {
    const authorName = document.querySelector('.indexHeader')?.textContent || 'user';
    const authorDesc = document.querySelector('.authorDescription')?.textContent || 'mystery person';
    return { name: authorName, desc: authorDesc };
  };
  
  // Wait for DOM to load, then show console easter egg
  document.addEventListener('DOMContentLoaded', function() {
    const author = getAuthorInfo();
    console.log(`
  ╔══════════════════════════════════════╗
  ║                                      ║
  ║    ${author.name.padEnd(32)}    ║
  ║                                      ║
  ╚══════════════════════════════════════╝
  
  Welcome to the matrix, fellow hacker!
  
  Try the Konami code: ↑↑↓↓←→←→BA
  Or use Ctrl+Shift+T for quick access
  
  > whoami
  ${author.desc}
  
  > ls -la secrets/
  total 1337
  -rw-r--r-- 1 ${author.name} users   42 Jan  1 1970 .hidden_projects
  -rw-r--r-- 1 ${author.name} users 2048 Jan  1 1970 cool_stuff.txt
  -rwxr-xr-x 1 ${author.name} users 1337 Jan  1 1970 deploy_to_prod.sh
  `);
  });
})();