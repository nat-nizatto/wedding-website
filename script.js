document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. Sticky Header Scroll Effect
  // ==========================================================================
  const header = document.getElementById('main-header');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  // Call once on load in case the page is already scrolled
  handleScroll();


  // ==========================================================================
  // 2. Mobile Menu Navigation
  // ==========================================================================
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = mobileNav.querySelectorAll('a');

  const toggleMenu = (open) => {
    const isExpanded = open !== undefined ? open : menuToggle.getAttribute('aria-expanded') === 'true';
    const targetState = !isExpanded;
    
    menuToggle.setAttribute('aria-expanded', targetState);
    mobileNav.classList.toggle('open', targetState);
    
    // Lock/Unlock body scroll when menu is open
    if (targetState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  menuToggle.addEventListener('click', () => toggleMenu());

  // Close mobile menu when clicking any nav link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close mobile menu when clicking outside of it
  document.addEventListener('click', (e) => {
    if (
      mobileNav.classList.contains('open') && 
      !mobileNav.contains(e.target) && 
      !menuToggle.contains(e.target)
    ) {
      toggleMenu(false);
    }
  });


  // ==========================================================================
  // 3. RSVP Form Interactive Logic & Validation
  // ==========================================================================
  const rsvpForm = document.getElementById('rsvp-form');
  const rsvpSuccess = document.getElementById('rsvp-success');
  const editRsvpBtn = document.getElementById('edit-rsvp-btn');
  const guestNameInput = document.getElementById('guest-name');
  
  // Three-course meal selectors
  const mealStarterSelect = document.getElementById('meal-starter');
  const mealMainSelect = document.getElementById('meal-main');
  const mealDessertSelect = document.getElementById('meal-dessert');
  
  const attendanceAccept = document.getElementById('rsvp-accept');
  const attendanceDecline = document.getElementById('rsvp-decline');
  const successMessage = document.getElementById('rsvp-success-message');

  // Toggle meal selection validation based on attendance
  const updateMealRequirement = () => {
    const isAttending = attendanceAccept.checked;
    if (isAttending) {
      mealStarterSelect.setAttribute('required', '');
      mealMainSelect.setAttribute('required', '');
      mealDessertSelect.setAttribute('required', '');
    } else {
      mealStarterSelect.removeAttribute('required');
      mealMainSelect.removeAttribute('required');
      mealDessertSelect.removeAttribute('required');
      
      // Reset selections if they decline
      mealStarterSelect.value = '';
      mealMainSelect.value = '';
      mealDessertSelect.value = '';
      
      clearError(mealStarterSelect);
      clearError(mealMainSelect);
      clearError(mealDessertSelect);
    }
  };

  // Listen for changes in attendance radio buttons
  attendanceAccept.addEventListener('change', updateMealRequirement);
  attendanceDecline.addEventListener('change', updateMealRequirement);
  // Initial check on page load
  updateMealRequirement();

  // Helper functions for showing/clearing form field errors
  const showError = (inputElement, errorId) => {
    const group = inputElement.closest('.form-group');
    if (group) {
      group.classList.add('invalid');
      const errorMsg = document.getElementById(errorId);
      if (errorMsg) errorMsg.style.display = 'block';
    }
  };

  const clearError = (inputElement) => {
    const group = inputElement.closest('.form-group');
    if (group) {
      group.classList.remove('invalid');
      // Find error messages in this group and hide them
      const errorMsgs = group.querySelectorAll('.error-msg');
      errorMsgs.forEach(msg => msg.style.display = 'none');
    }
  };

  // Clear errors dynamically as user types/selects
  guestNameInput.addEventListener('input', () => {
    if (guestNameInput.value.trim() !== '') {
      clearError(guestNameInput);
    }
  });

  mealStarterSelect.addEventListener('change', () => {
    if (mealStarterSelect.value !== '') clearError(mealStarterSelect);
  });

  mealMainSelect.addEventListener('change', () => {
    if (mealMainSelect.value !== '') clearError(mealMainSelect);
  });

  mealDessertSelect.addEventListener('change', () => {
    if (mealDessertSelect.value !== '') clearError(mealDessertSelect);
  });

  // Handle RSVP Submission
  rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Guest Name
    if (guestNameInput.value.trim() === '') {
      showError(guestNameInput, 'name-error');
      isValid = false;
    } else {
      clearError(guestNameInput);
    }

    // Validate Meal Selections (only if accepting)
    const isAttending = attendanceAccept.checked;
    if (isAttending) {
      if (mealStarterSelect.value === '') {
        showError(mealStarterSelect, 'starter-error');
        isValid = false;
      } else {
        clearError(mealStarterSelect);
      }

      if (mealMainSelect.value === '') {
        showError(mealMainSelect, 'main-error');
        isValid = false;
      } else {
        clearError(mealMainSelect);
      }

      if (mealDessertSelect.value === '') {
        showError(mealDessertSelect, 'dessert-error');
        isValid = false;
      } else {
        clearError(mealDessertSelect);
      }
    }

    if (!isValid) {
      // Focus on first invalid input
      const firstInvalid = rsvpForm.querySelector('.form-group.invalid input, .form-group.invalid select');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Form is valid - run submission animation
    const submitBtn = rsvpForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'SUBMITTING...';
    submitBtn.disabled = true;

    // Simulate API request call
    setTimeout(() => {
      // Reset button state
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;

      // Personalize the success message based on attendance choice
      if (isAttending) {
        const guestFirstName = guestNameInput.value.split('&')[0].split('and')[0].trim();
        successMessage.innerHTML = `Your response has been received. We are thrilled to celebrate with you in West Sussex, <strong>${guestFirstName}</strong>!`;
      } else {
        successMessage.textContent = 'Thank you for letting us know. We will miss you, but we appreciate your response and will be celebrating from afar!';
      }

      // Smoothly hide form and show success card
      rsvpForm.style.opacity = '0';
      setTimeout(() => {
        rsvpForm.setAttribute('hidden', '');
        rsvpSuccess.removeAttribute('hidden');
        // Scroll slightly to success card
        rsvpSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 300);

    }, 1500);
  });

  // Edit Response behavior
  editRsvpBtn.addEventListener('click', () => {
    rsvpSuccess.setAttribute('hidden', '');
    rsvpForm.removeAttribute('hidden');
    rsvpForm.style.opacity = '1';
    guestNameInput.focus();
  });


  // ==========================================================================
  // 4. Scroll Reveal IntersectionObserver Fallback
  // ==========================================================================
  // Check if browser supports native scroll-driven animations
  const supportsScrollTimeline = CSS.supports('(animation-timeline: view()) and (animation-range: entry)');
  
  if (!supportsScrollTimeline) {
    const revealOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once revealed, we don't need to observe it anymore
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  }

});
