
// ============================================
// SHIFT PATTERN STUDIO - PORTFOLIO JAVASCRIPT
// ============================================

// Portfolio Data
const projects = [
  {
    id: "mjr-construction",
    title: "Bluebeam",
    category: "Construction",
    image: "assets/projects/mjr.jpg",
    description: "Collaborative project efficiency and markup software for construction teams.",
    url: "https://www.bluebeam.com/",
    features: [
      "PDF markup and editing suite",
      "Real-time collaboration tools",
      "Smart drawing management",
      "Measurement and estimation toolsets",
      "Organized project dashboards",
      "Secure document sharing"
    ],
    challenge: "Enabling remote architecture and building teams to work simultaneously on blueprints without version conflicts.",
    solution: "Designed desktop and cloud solutions supporting instant annotations, studio workspaces, and automated metadata exports.",
    technologies: ["PDF Engine", "Cloud sync", "HTML5", "Collaboration Tools"],
    result: "Helps teams build faster with up to 85% reduced drawing coordination time."
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    category: "Restaurant",
    image: "assets/projects/restaurant.jpg",
    description: "An elegant restaurant website with digital menu, reservation system, location details, and WhatsApp table booking.",
    url: "https://www.nagarjunarestaurants.com/",
    features: [
      "Digital menu with categories",
      "Table reservation form",
      "Location and directions",
      "WhatsApp table booking",
      "Gallery section",
      "Customer reviews"
    ],
    challenge: "The restaurant needed to showcase their cuisine beautifully while allowing customers to book tables easily without complex third-party systems.",
    solution: "We created a visually appetizing website with high-quality food imagery, an easy-to-browse digital menu, and direct WhatsApp integration for instant reservations.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Google Maps"],
    result: "40% increase in table bookings and significantly reduced phone call volume for reservations."
  },
  {
    id: "fashion-store",
    title: "The Jesus Store",
    category: "E-Commerce",
    image: "assets/projects/fashion.jpg",
    description: "A premier faith-based e-commerce store offering custom apparel, accessories, and inspirational Christian products.",
    url: "https://jesus-store.vercel.app/",
    features: [
      "Faith-based product catalog",
      "Dynamic apparel shopping galleries",
      "Seamless checkout experience",
      "Responsive layout for mobile shoppers",
      "Secure payments integration",
      "Inspirational lookbook showcase"
    ],
    challenge: "Developing an engaging, high-performance online shop that showcases high-quality faith-inspired apparel with a clean brand story.",
    solution: "Designed a minimalist grid-based shop focusing on vivid product showcases, fast checkout navigation, and international shipping options.",
    technologies: ["HTML5", "CSS3", "JavaScript", "E-Commerce System"],
    result: "Successfully launched with widespread reach across US, CA, UK, and AU markets."
  },
  {
    id: "abish-portfolio",
    title: "Portfolio",
    category: "Portfolio",
    image: "assets/projects/portfolio.jpg",
    description: "A professional and modern personal portfolio showcasing skills, experience, and projects.",
    url: "https://abish-portfolio.vercel.app/",
    features: [
      "Modern interactive layout",
      "Dynamic project gallery",
      "About page with timeline integration",
      "Contact form integration",
      "Social media link-outs",
      "Resume download utility"
    ],
    challenge: "Creating a standout personal brand presence that highlights key engineering and design capabilities.",
    solution: "Developed a custom portfolio with sleek transitions, clean grid layouts, and user-centric navigation.",
    technologies: ["HTML5", "CSS3", "JavaScript", "CSS Animations"],
    result: "Successfully established a distinct professional online brand identity."
  },
  {
    id: "local-business",
    title: "Pista House",
    category: "Business",
    image: "assets/projects/business.jpg",
    description: "Famous bakery, restaurant, and haleem brand online presence.",
    url: "https://pistahouse.in/?srsltid=AfmBOopT3vreIKfw1TTPHSdC5XXbDSBJ6Ev73g-A-jjvZrhahANQG2_C",
    features: [
      "Online menu and ordering",
      "Famous haleem seasonal campaign",
      "Branch locator and map integration",
      "Customer reviews and ratings",
      "Event catering booking forms",
      "Secure contact and feedback"
    ],
    challenge: "Establishing a solid and unified digital presence that handles high peak seasonal traffic during Haleem season.",
    solution: "Developed a clean, fast-loading corporate and retail site with smooth navigation, visual menus, and instant location lookup.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Maps API"],
    result: "Significantly boosted direct customer enquiries and outlet footfall."
  },
  {
    id: "product-showcase",
    title: "Gymbold",
    category: "Landing Page",
    image: "assets/projects/product.jpg",
    description: "High-converting fitness and gym brand landing page.",
    url: "https://gymbold.netlify.app/",
    features: [
      "Hero brand showcase layout",
      "Dynamic gym program cards",
      "Trainer profile highlights",
      "Pricing tier table",
      "Membership sign-up CTA",
      "Fully responsive mobile layout"
    ],
    challenge: "Creating a bold and energetic visual brand presence to motivate and convert gym sign-ups online.",
    solution: "Built a dark, high-contrast energetic layout with smooth scroll actions, hover zooms, and quick-enquiry action triggers.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Netlify Deployment"],
    result: "Helps studios achieve up to 35% increased conversion on local digital campaigns."
  }
];

// Initialize Portfolio
function initPortfolio() {
  renderProjects('all');
  initFilters();
}

// Render Projects
function renderProjects(filter) {
  const grid = document.querySelector('.portfolio-grid');
  if (!grid) return;

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  grid.innerHTML = '';

  filtered.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'portfolio-card reveal stagger-' + ((index % 6) + 1);
    
    const targetLink = project.url ? project.url : `project.html?id=${project.id}`;
    const targetAttr = project.url ? 'target="_blank"' : '';
    const btnText = 'View Project';
    
    card.innerHTML = `
      <a href="${targetLink}" ${targetAttr} style="display: block; color: inherit;">
        <div class="portfolio-image img-zoom">
          <div class="portfolio-placeholder" style="background: linear-gradient(135deg, #1a1a1a, #0a0a0a); height: 280px; display: flex; align-items: center; justify-content: center; color: var(--text-muted); font-size: 3rem;">
            <i class="fas fa-image"></i>
          </div>
          <div class="portfolio-overlay">
            <span class="btn btn-primary btn-shine">${btnText}</span>
          </div>
        </div>
      </a>
      <div class="portfolio-info">
        <span class="portfolio-category">${project.category}</span>
        <h3><a href="${targetLink}" ${targetAttr}>${project.title}</a></h3>
        <p>${project.description}</p>
        <a href="${targetLink}" ${targetAttr} class="portfolio-link">
          ${btnText} <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;
    grid.appendChild(card);
  });

  // Re-init scroll reveal for new elements
  if (window.initScrollReveal) {
    window.initScrollReveal();
  }
}

// Initialize Filters
function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      renderProjects(filter);
    });
  });
}

// Load Project Detail
function loadProjectDetail() {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('id');

  if (!projectId) {
    showProjectNotFound();
    return;
  }

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    showProjectNotFound();
    return;
  }

  // Update page title
  document.title = `${project.title} | Shift Pattern Studio`;

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = project.description;

  // Populate content
  const titleEl = document.querySelector('.project-title');
  const categoryEl = document.querySelector('.project-category');
  const descEl = document.querySelector('.project-description');
  const challengeEl = document.querySelector('.project-challenge');
  const solutionEl = document.querySelector('.project-solution');
  const resultEl = document.querySelector('.project-result');
  const featuresEl = document.querySelector('.project-features');
  const techEl = document.querySelector('.project-technologies');

  if (titleEl) titleEl.textContent = project.title;
  if (categoryEl) categoryEl.textContent = project.category;
  if (descEl) descEl.textContent = project.description;
  if (challengeEl) challengeEl.textContent = project.challenge;
  if (solutionEl) solutionEl.textContent = project.solution;
  if (resultEl) resultEl.textContent = project.result;

  if (featuresEl) {
    featuresEl.innerHTML = project.features.map(f => 
      `<li><i class="fas fa-check-circle text-gold"></i> ${f}</li>`
    ).join('');
  }

  if (techEl) {
    techEl.innerHTML = project.technologies.map(t => 
      `<span class="tech-tag">${t}</span>`
    ).join('');
  }
}

function showProjectNotFound() {
  const container = document.querySelector('.project-detail-container');
  if (container) {
    container.innerHTML = `
      <div class="text-center" style="padding: 4rem 0;">
        <h2 class="text-gradient-gold" style="font-size: 3rem; margin-bottom: 1rem;">Project Not Found</h2>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">The project you're looking for doesn't exist.</p>
        <a href="portfolio.html" class="btn btn-primary">View All Projects</a>
      </div>
    `;
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.portfolio-grid')) {
    initPortfolio();
  }

  if (document.querySelector('.project-detail-container')) {
    loadProjectDetail();
  }
});
