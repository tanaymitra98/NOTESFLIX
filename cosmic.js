// Create stars
function createStars() {
    const upperSection = document.querySelector('.upper');
    
    // Create 100 stars
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random size between 1-3px
        const size = Math.random() * 2 + 1;
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random animation delay
        const delay = Math.random() * 5;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;
        star.style.animationDelay = `${delay}s`;
        
        upperSection.appendChild(star);
    }
}

// Create orbiting planets
function createPlanets() {
    const upperSection = document.querySelector('.upper');
    const planetCount = 3;
    
    for (let i = 0; i < planetCount; i++) {
        const planet = document.createElement('div');
        planet.className = 'planet';
        
        // Different orbit sizes and speeds
        const orbitSize = 150 + (i * 100);
        const orbitTime = 30 + (i * 20); // Different orbit times for each planet
        
        planet.style.setProperty('--orbit-size', `${orbitSize}px`);
        planet.style.animation = `orbit ${orbitTime}s linear infinite`;
        planet.style.animationDelay = `${i * 5}s`; // Stagger the start
        
        // Create a glowing effect for each planet
        const glow = document.createElement('div');
        glow.className = 'planet-glow';
        planet.appendChild(glow);
        
        upperSection.appendChild(planet);
    }
}

// Initialize the cosmic effect
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createPlanets();
});
