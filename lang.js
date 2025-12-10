/**
 * Multilingual System for Election Website
 */

// Language data - in production, this would be loaded from a JSON file
const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.about": "About",
        "nav.contact": "Contact",
        "nav.news": "News & Events",
        "nav.downloads": "Downloads",
        "nav.reviews": "Voter Reviews",
        "nav.map": "Village Map",
        "nav.notice": "Notice Board",
        "nav.developer": "Developer",
        
        // Common
        "common.welcome": "Welcome",
        "common.readMore": "Read More",
        "common.download": "Download",
        "common.submit": "Submit",
        "common.cancel": "Cancel",
        "common.save": "Save",
        "common.share": "Share",
        "common.back": "Back",
        "common.next": "Next",
        
        // Home Page
        "home.title": "Home - Election Campaign",
        "home.heroTitle": "Your Voice, Our Village",
        "home.slogan": "Together for a Better Tomorrow",
        "home.profession": "Union Member Candidate",
        "home.developmentTitle": "If elected, I will improve the village by...",
        "home.roadConstruction": "Road & Bridge Construction",
        "home.waterSupply": "Clean Water Supply",
        "home.drainage": "Drainage & Sanitation",
        "home.education": "Education Improvement",
        "home.elderly": "Benefits for Elderly & Widows",
        "home.farmers": "Support for Farmers",
        "home.digital": "Digital Service Access",
        "home.health": "Healthcare Facilities",
        "home.visionTitle": "My Vision & Goals",
        "home.visionText": "A prosperous, self-reliant village where every citizen has access to basic amenities, education, and opportunities for growth.",
        
        // About Page
        "about.title": "About the Candidate",
        "about.biography": "Biography",
        "about.mission": "Mission",
        "about.vision": "Vision",
        "about.story": "Personal Story",
        "about.whyVote": "Why Vote for Me?",
        "about.reasons": "Proven leadership, Transparent governance, Community-focused development, Accessible to all, Experience in local administration",
        
        // Contact Page
        "contact.title": "Contact Us",
        "contact.formTitle": "Send Message",
        "contact.name": "Your Name",
        "contact.number": "Phone Number",
        "contact.message": "Your Message",
        "contact.details": "Contact Details",
        "contact.address": "Village Office, Union Parishad",
        "contact.hours": "Available: 9 AM - 5 PM",
        
        // Footer
        "footer.about": "About Campaign",
        "footer.quickLinks": "Quick Links",
        "footer.contact": "Contact Info",
        "footer.copyright": "All rights reserved",
        
        // Buttons
        "btn.theme": "Theme",
        "btn.language": "বাংলা",
        "btn.share": "Share Campaign",
        
        // Development Items
        "dev.road": "Constructing durable roads and bridges",
        "dev.water": "Ensuring clean drinking water for all",
        "dev.drainage": "Modern drainage system implementation",
        "dev.education": "Improving school facilities and scholarships",
        "dev.elderly": "Monthly allowances and medical support",
        "dev.farmers": "Agricultural subsidies and training",
        "dev.digital": "Digital Union Parishad services",
        "dev.health": "Upgrading local healthcare center"
    },
    
    bn: {
        // Navigation
        "nav.home": "হোম",
        "nav.about": "পরিচিতি",
        "nav.contact": "যোগাযোগ",
        "nav.news": "খবর ও অনুষ্ঠান",
        "nav.downloads": "ডাউনলোড",
        "nav.reviews": "ভোটার মতামত",
        "nav.map": "গ্রামের মানচিত্র",
        "nav.notice": "নোটিশ বোর্ড",
        "nav.developer": "ডেভেলপার",
        
        // Common
        "common.welcome": "স্বাগতম",
        "common.readMore": "আরও পড়ুন",
        "common.download": "ডাউনলোড",
        "common.submit": "জমা দিন",
        "common.cancel": "বাতিল",
        "common.save": "সংরক্ষণ",
        "common.share": "শেয়ার করুন",
        "common.back": "পিছনে",
        "common.next": "পরবর্তী",
        
        // Home Page
        "home.title": "হোম - নির্বাচনী প্রচারণা",
        "home.heroTitle": "আপনার কণ্ঠস্বর, আমাদের গ্রাম",
        "home.slogan": "উন্নত ভবিষ্যতের জন্য একসাথে",
        "home.profession": "ইউনিয়ন সদস্য প্রার্থী",
        "home.developmentTitle": "নির্বাচিত হলে আমি গ্রামের উন্নয়ন করব...",
        "home.roadConstruction": "রাস্তা ও ব্রিজ নির্মাণ",
        "home.waterSupply": "পরিষ্কার পানির সরবরাহ",
        "home.drainage": "ড্রেনেজ ও স্যানিটেশন",
        "home.education": "শিক্ষার উন্নয়ন",
        "home.elderly": "বৃদ্ধ ও বিধবাদের সুবিধা",
        "home.farmers": "কৃষকদের সহায়তা",
        "home.digital": "ডিজিটাল সেবা প্রাপ্তি",
        "home.health": "স্বাস্থ্য সেবা সুবিধা",
        "home.visionTitle": "আমার দৃষ্টিভঙ্গি ও লক্ষ্য",
        "home.visionText": "একটি সমৃদ্ধ, স্বয়ংসম্পূর্ণ গ্রাম যেখানে প্রতিটি নাগরিকের মৌলিক সুবিধা, শিক্ষা এবং উন্নয়নের সুযোগ থাকবে।",
        
        // About Page
        "about.title": "প্রার্থীর পরিচিতি",
        "about.biography": "জীবনী",
        "about.mission": "মিশন",
        "about.vision": "ভিশন",
        "about.story": "ব্যক্তিগত গল্প",
        "about.whyVote": "কেন আমাকে ভোট দেবেন?",
        "about.reasons": "প্রমাণিত নেতৃত্ব, স্বচ্ছ শাসন, সম্প্রদায়-কেন্দ্রিক উন্নয়ন, সবার জন্য প্রবেশযোগ্য, স্থানীয় প্রশাসনে অভিজ্ঞতা",
        
        // Contact Page
        "contact.title": "যোগাযোগ করুন",
        "contact.formTitle": "বার্তা পাঠান",
        "contact.name": "আপনার নাম",
        "contact.number": "ফোন নম্বর",
        "contact.message": "আপনার বার্তা",
        "contact.details": "যোগাযোগের ঠিকানা",
        "contact.address": "গ্রাম অফিস, ইউনিয়ন পরিষদ",
        "contact.hours": "সহজলভ্য: সকাল ৯টা - বিকাল ৫টা",
        
        // Footer
        "footer.about": "প্রচারণা সম্পর্কে",
        "footer.quickLinks": "দ্রুত লিঙ্ক",
        "footer.contact": "যোগাযোগ তথ্য",
        "footer.copyright": "সর্বস্বত্ব সংরক্ষিত",
        
        // Buttons
        "btn.theme": "থিম",
        "btn.language": "English",
        "btn.share": "প্রচারণা শেয়ার করুন",
        
        // Development Items
        "dev.road": "টেকসই রাস্তা ও ব্রিজ নির্মাণ",
        "dev.water": "সবার জন্য পরিষ্কার পানীয় জল নিশ্চিতকরণ",
        "dev.drainage": "আধুনিক ড্রেনেজ সিস্টেম বাস্তবায়ন",
        "dev.education": "বিদ্যালয়ের সুবিধা ও বৃত্তি উন্নত করা",
        "dev.elderly": "মাসিক ভাতা ও চিকিৎসা সহায়তা",
        "dev.farmers": "কৃষি ভর্তুকি ও প্রশিক্ষণ",
        "dev.digital": "ডিজিটাল ইউনিয়ন পরিষদ সেবা",
        "dev.health": "স্থানীয় স্বাস্থ্য কেন্দ্র আধুনিকীকরণ"
    }
};

// Current language state
let currentLang = localStorage.getItem('language') || 'en';

// Update all elements with data-lang attributes
function updateLanguage() {
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // Update input placeholders
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        if (translations[currentLang][key]) {
            element.placeholder = translations[currentLang][key];
        }
    });
    
    // Update page title
    const pageTitleKey = document.body.getAttribute('data-page-title');
    if (pageTitleKey && translations[currentLang][pageTitleKey]) {
        document.title = translations[currentLang][pageTitleKey];
    }
    
    // Add Bangla font class if needed
    if (currentLang === 'bn') {
        document.body.classList.add('bangla-font');
    } else {
        document.body.classList.remove('bangla-font');
    }
    
    // Update language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.innerHTML = currentLang === 'en' ? 
            '🇧🇦 বাংলা' : '🇺🇸 English';
        langToggle.setAttribute('data-lang', 'btn.language');
    }
    
    // Save language preference
    localStorage.setItem('language', currentLang);
}

// Toggle between English and Bangla
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'bn' : 'en';
    updateLanguage();
}

// Initialize language when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language system
    updateLanguage();
    
    // Add language toggle event listener
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
});