/**
 * Election Campaign Website - Main JavaScript
 * Handles theme switching, navigation, and common functionality
 */

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const currentYear = document.getElementById('currentYear');

// Theme System
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggle(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggle(newTheme);
}

function updateThemeToggle(theme) {
    if (themeToggle) {
        const icon = theme === 'dark' ? '☀️' : '🌙';
        const text = theme === 'dark' ? 'Light' : 'Dark';
        themeToggle.innerHTML = `${icon} ${text}`;
    }
}

// Navigation
function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Update current year in footer
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Active page highlighting
function setActivePage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Form handling
function handleContactForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Simple form validation
    const name = formData.get('name');
    const number = formData.get('number');
    const message = formData.get('message');
    
    if (!name || !number || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // In a real application, you would send this data to a server
    alert('Thank you for your message! We will contact you soon.');
    form.reset();
}

// Share functionality
function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: 'Check out this election campaign website',
            url: window.location.href
        });
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    
    // Set active page
    setActivePage();
    
    // Add event listeners
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (langToggle) langToggle.addEventListener('click', toggleLanguage);
    if (menuToggle) menuToggle.addEventListener('click', toggleSidebar);
    if (closeMenu) closeMenu.addEventListener('click', closeSidebar);
    if (overlay) overlay.addEventListener('click', closeSidebar);
    
    // Close sidebar when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeSidebar);
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Share button
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', sharePage);
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});