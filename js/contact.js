
// ============================================
// SHIFT PATTERN STUDIO - CONTACT JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  initContactForm();
  initWhatsAppForm();
});

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (validateForm()) {
      showSuccessMessage();
      form.reset();
    }
  });

  // Real-time validation
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => clearError(input));
  });
}

function validateForm() {
  const form = document.getElementById('contactForm');
  const inputs = form.querySelectorAll('[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });

  return isValid;
}

function validateField(field) {
  clearError(field);

  const value = field.value.trim();
  let isValid = true;
  let errorMessage = '';

  if (field.hasAttribute('required') && !value) {
    isValid = false;
    errorMessage = 'This field is required';
  } else if (value) {
    // Email validation
    if (field.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
      }
    }

    // Phone validation
    if (field.name === 'phone') {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
      }
    }

    // Min length for message
    if (field.name === 'message' && value.length < 10) {
      isValid = false;
      errorMessage = 'Message must be at least 10 characters';
    }
  }

  if (!isValid) {
    showError(field, errorMessage);
  }

  return isValid;
}

function showError(field, message) {
  field.classList.add('error');

  let errorEl = field.parentNode.querySelector('.error-message');
  if (!errorEl) {
    errorEl = document.createElement('span');
    errorEl.className = 'error-message';
    field.parentNode.appendChild(errorEl);
  }

  errorEl.textContent = message;
  errorEl.style.color = '#ff4444';
  errorEl.style.fontSize = '0.8rem';
  errorEl.style.marginTop = '0.3rem';
  errorEl.style.display = 'block';
}

function clearError(field) {
  field.classList.remove('error');
  const errorEl = field.parentNode.querySelector('.error-message');
  if (errorEl) {
    errorEl.remove();
  }
}

function showSuccessMessage() {
  const form = document.getElementById('contactForm');
  const successEl = document.createElement('div');
  successEl.className = 'success-message';
  successEl.innerHTML = `
    <div style="text-align: center; padding: 2rem; background: rgba(0, 255, 0, 0.05); border: 1px solid rgba(0, 255, 0, 0.2); border-radius: 8px; margin-top: 1rem;">
      <i class="fas fa-check-circle" style="font-size: 3rem; color: #00ff88; margin-bottom: 1rem;"></i>
      <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">Message Sent Successfully!</h3>
      <p style="color: var(--text-secondary);">Thank you for reaching out. We'll get back to you within 24 hours.</p>
    </div>
  `;

  form.parentNode.insertBefore(successEl, form.nextSibling);

  setTimeout(() => {
    successEl.remove();
  }, 5000);
}

// WhatsApp Form Integration
function initWhatsAppForm() {
  const whatsappBtn = document.getElementById('whatsappFormBtn');
  if (!whatsappBtn) return;

  whatsappBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    const name = formData.get('name') || '';
    const business = formData.get('business') || '';
    const phone = formData.get('phone') || '';
    const email = formData.get('email') || '';
    const type = formData.get('type') || '';
    const budget = formData.get('budget') || '';
    const message = formData.get('message') || '';

    let whatsappText = `Hi Shift Pattern Studio, I'm interested in your website design services.`;

    if (name) whatsappText += `\n\nName: ${name}`;
    if (business) whatsappText += `\nBusiness: ${business}`;
    if (phone) whatsappText += `\nPhone: ${phone}`;
    if (email) whatsappText += `\nEmail: ${email}`;
    if (type) whatsappText += `\nWebsite Type: ${type}`;
    if (budget) whatsappText += `\nBudget: ${budget}`;
    if (message) whatsappText += `\nMessage: ${message}`;

    const encodedText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/+919789174588?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  });
}
