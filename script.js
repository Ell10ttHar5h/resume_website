document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const currentTheme = localStorage.getItem('theme') || 
                         (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Apply the current theme
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<span class="toggle-icon">☀️</span>';
    } else {
        document.body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<span class="toggle-icon">🌙</span>';
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        let theme;
        if (document.body.getAttribute('data-theme')) {
            document.body.removeAttribute('data-theme');
            theme = 'light';
            themeToggle.innerHTML = '<span class="toggle-icon">🌙</span>';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            theme = 'dark';
            themeToggle.innerHTML = '<span class="toggle-icon">☀️</span>';
        }
        localStorage.setItem('theme', theme);
    });
    
    // Watch for system theme changes
    prefersDarkScheme.addListener(e => {
        if (localStorage.getItem('theme')) return;
        
        if (e.matches) {
            document.body.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<span class="toggle-icon">☀️</span>';
        } else {
            document.body.removeAttribute('data-theme');
            themeToggle.innerHTML = '<span class="toggle-icon">🌙</span>';
        }
    });
});