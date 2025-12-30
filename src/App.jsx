import React, { useEffect } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { showPage, observeAnimatedElements, setupCarousel } from './utils/helpers';

const App = () => {
  useEffect(() => {
    const pageLinks = document.querySelectorAll('a[data-page], button[data-page]');
    const pages = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.getElementById('menu-open-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');
    const header = document.getElementById('header');
    const logo = document.querySelector('img[alt="SuDhama Logo"]');
    const progressBar = document.getElementById('progress-bar');

    const handlePageNavigation = (e) => {
      e.preventDefault();
      showPage(e.target.dataset.page, pages, navLinks);
    };

    pageLinks.forEach(link => {
      link.addEventListener('click', handlePageNavigation);
    });

    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      menuOpenIcon.classList.toggle('hidden');
      menuCloseIcon.classList.toggle('hidden');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
      if (mobileMenu.classList.contains('open')) {
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
      } else {
        document.body.style.position = '';
        document.body.style.width = '';
      }
    });

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY > 20;
      header.classList.toggle('glassmorphism', scrolled);
      header.classList.toggle('shadow-sm', scrolled);
      if (logo) {
        logo.classList.toggle('h-12', scrolled);
        logo.classList.toggle('h-16', !scrolled);
      }

      const heroText = document.querySelector('.hero-text-parallax');
      if (heroText) {
        const scrolledY = window.scrollY;
        const parallaxSpeed = 0.5;
        const translateY = scrolledY * parallaxSpeed;
        heroText.style.transform = `translateY(${translateY}px)`;
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      if (progressBar) {
        progressBar.style.width = progress + '%';
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    observeAnimatedElements(document.querySelector('.page-section.active'));

    const carousel = document.querySelector('.carousel-container');
    setupCarousel(carousel);

    return () => {
      pageLinks.forEach(link => {
        link.removeEventListener('click', handlePageNavigation);
      });
      mobileMenuButton.removeEventListener('click', () => {});
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <div>
      <Header />
      <main id="main-content">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default App;