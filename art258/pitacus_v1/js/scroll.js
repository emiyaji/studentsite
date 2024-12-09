
document.addEventListener("DOMContentLoaded", () => {
    "use strict";
   
   
    const root = (() => {
      if ("scrollingElement" in document) return document.scrollingElement;
      const html = document.documentElement;
      const start = html.scrollTop;
      html.scrollTop = start + 1;
      const end = html.scrollTop;
      html.scrollTop = start;
      return end > start ? html : document.body;
    })();
   
   
    const ease = (duration, elapsed, start, end) =>
      Math.round(end * (-Math.pow(2, -10 * elapsed / duration) + 1) + start);
   
   
    const getCoordinates = hash => {
      const start = root.scrollTop;
      const delta = (() => {
        if (hash.length < 2) return -start;
        const target = document.querySelector(hash);
        if (!target) return;
        const top = target.getBoundingClientRect().top;
        const max = root.scrollHeight - window.innerHeight;
        return start + top < max ? top : max - start;
      })();
      if (delta) return new Map([["start", start], ["delta", delta]]);
    };
   
   
    const scroll = link => {
      const hash = link.getAttribute("href");
      const coordinates = getCoordinates(hash);
      if (!coordinates) return;
   
   
      const tick = timestamp => {
        progress.set("elapsed", timestamp - start);
        root.scrollTop = ease(...progress.values(), ...coordinates.values());
        progress.get("elapsed") < progress.get("duration")
          ? requestAnimationFrame(tick)
          : complete(hash, coordinates);
      };
   
   
      const progress = new Map([["duration", 800]]);
      const start = performance.now();
      requestAnimationFrame(tick);
    };
   
   
    const complete = (hash, coordinates) => {
      history.pushState(null, null, hash);
      root.scrollTop = coordinates.get("start") + coordinates.get("delta");
    };
   
   
    const attachHandler = (links, index) => {
      const link = links.item(index);
      link.addEventListener("click", event => {
        event.preventDefault();
        scroll(link);
      });
      if (index) return attachHandler(links, index - 1);
    };
   
   
    const links = document.querySelectorAll("a.scroll");
    const last = links.length - 1;
    if (last < 0) return;
    attachHandler(links, last);
   });
   // Select all elements with the fade-in class
   const fadeInElements = document.querySelectorAll(".fade-in");
   
   
   const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Add the visible class when in view
        observer.unobserve(entry.target); // Stop observing once faded in
      }
    });
   }, {
    threshold: 0.1 // Trigger when 10% of the element is in view
   });
   
   
   // Attach the observer to each element
   fadeInElements.forEach(el => observer.observe(el));
   
   
   // NEWS PHOTO SECTION
   function revealPhotos() {
    const photoContainer = document.querySelector('.photo-container');
    const firstPhoto = document.querySelector('.first-photo');
    const secondPhoto = document.querySelector('.second-photo');
   
   
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            firstPhoto.classList.add('visible');
          }, 0);
          setTimeout(() => {
            secondPhoto.classList.add('visible');
          }, 300);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
   
   
    observer.observe(photoContainer);
   }
   
   
   document.addEventListener('DOMContentLoaded', revealPhotos);
   