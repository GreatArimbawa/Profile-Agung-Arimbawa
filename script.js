"use strict";

/* =========================================================
   Data — trimmed to 6 featured projects, condensed career
   bullets, and a flat skills badge list (no progress bars).
   Real, verifiable numbers are used where confirmed by CV;
   everything else is worded qualitatively rather than
   inventing a precise-sounding metric.
   ========================================================= */

const projects = [
  {
    id: "capacity-improvement",
    category: "Process Engineering",
    title: "Manufacturing Capacity Improvement",
    stat: "+42%",
    statLabel: "Daily Throughput",
    summary: "Lifted daily output from 1,200 to 1,700 units by redesigning production flow, readiness controls, and workforce utilization.",
    detail: "Output was constrained by uneven process flow and inconsistent operating standards. Rebalancing activities and standardizing critical routines took daily output from 1,200 to 1,700 units and per-line capacity from 420 to 630 units/day.",
    tags: ["Line Balancing", "Capacity Planning", "Standard Work"]
  },
  {
    id: "oee-recovery",
    category: "Operational Excellence",
    title: "OEE & Downtime Recovery",
    stat: "85.2%",
    statLabel: "OEE Achieved",
    summary: "Cut downtime from 79.2 to 3.4 hours and raised OEE from 69.4% to 85.2% by strengthening readiness checks and abnormality response.",
    detail: "Downtime at 79.2 hours was capping equipment effectiveness at 69.4% OEE. Strengthening material-readiness verification and escalation standards brought downtime to 3.4 hours and OEE to 85.2%.",
    tags: ["OEE", "Downtime Reduction", "Operational Reliability"]
  },
  {
    id: "production-portal",
    category: "Digital Manufacturing",
    title: "Production Portal",
    stat: "1 Source",
    statLabel: "Replacing Scattered Logs",
    summary: "Consolidated attendance, skill records, and production monitoring into a single portal concept instead of disconnected spreadsheets.",
    detail: "Operational information was spread across separate routines and records. The portal concept connects workforce attendance, capability records, and production monitoring into one place for management reporting.",
    tags: ["Digital Manufacturing", "Reporting"]
  },
  {
    id: "skill-matrix",
    category: "Organizational Design",
    title: "Skill Matrix System",
    stat: "Digital",
    statLabel: "Competency Mapping",
    summary: "Built a digital skill-matrix concept giving supervisors a clear, trackable view of workforce capability and training history.",
    detail: "Skill development and training history weren't tracked in one place. The skill-matrix concept gives supervisors a shared, trackable record of capability by role — a clearer basis for training and promotion decisions.",
    tags: ["Skill Matrix", "Workforce Planning"]
  },
  {
    id: "power-bi-dashboard",
    category: "Digital Manufacturing",
    title: "Power BI Dashboard",
    stat: "Real-Time",
    statLabel: "Manufacturing KPI Visibility",
    summary: "Turned scattered shift data into a live Power BI view of output, downtime, and quality — checked daily instead of dug out during a crisis.",
    detail: "Production data existed but lived in exports nobody opened until something had gone wrong. The dashboard surfaces output, downtime, and quality in one view built to be checked daily.",
    tags: ["Power BI", "KPI Tracking"]
  },
  {
    id: "windows-cloning",
    category: "Process Investigation",
    title: "Windows Cloning Investigation",
    stat: "Stabilized",
    statLabel: "Cloning Failure Rate",
    summary: "Solved recurring Windows-cloning instability on the laptop assembly line by redesigning the validation process.",
    detail: "Inconsistent OS-cloning steps were creating a bottleneck between IT imaging and the production line. Redesigning the validation process resolved the recurring failures at the source.",
    tags: ["Root Cause Analysis", "Process Validation"]
  }
];

const career = [
  {
    role: "Process Engineer",
    company: "PT Tera Data Indonusa Tbk (Axioo)",
    location: "Jakarta",
    period: "Jan 2025 — Present",
    impact: "Lifted daily throughput +42% and OEE to 85.2%, while building digital production-control concepts for workforce and KPI visibility."
  },
  {
    role: "Production Manager",
    company: "PT RekaLagam",
    location: "Sukabumi, West Java",
    period: "Sep 2022 — Dec 2024",
    impact: "Scaled output from 200 g/day to 25 kg/day and cut unit cost 91% while building the operation up from a pilot line."
  },
  {
    role: "Process Engineer",
    company: "PT Rajawali Hiyoto",
    location: "Cimahi, West Java",
    period: "Aug 2017 — Aug 2022",
    impact: "Improved throughput 12.5% with zero new equipment and cut process nonconformities from 96 to 6 cases/year."
  },
  {
    role: "Process Control",
    company: "PT Rajawali Hiyoto",
    location: "Cimahi, West Java",
    period: "Jun 2015 — Aug 2017",
    impact: "Maintained process-control documentation and shop-floor quality discipline through a period of process change."
  },
  {
    role: "Quality Control Intern",
    company: "PT Kino Kosmetik Indonesia",
    location: "Sukabumi, West Java",
    period: "Nov 2014 — Feb 2015",
    impact: "Verified incoming materials and finished goods against quality standards, escalating nonconformities to supervisors."
  }
];

const skills = [
  "Lean Manufacturing", "Process Engineering", "OEE Management", "Automation",
  "Power BI", "MES", "ERP", "Root Cause Analysis", "CAPA", "Six Sigma",
  "Production Planning", "Project Management", "KPI Management", "Cross-functional Leadership"
];

const gallery = [
  {
    label: "Annual Business Review 2025 - Recognizing Outstanding Performance",
    image: "assets/gallery/Appresiasi-perusahaan.jpg",
    tall: true
  },
  {
    label: "Developing OEE",
    image: "assets/gallery/Develop-OEE.jpg",
    tall: true
  },
  {
    label: "Team Training",
    image: "assets/gallery/Training-produksi.jpg",
    tall: true
  },
  {
    label: "Developing Web Based IK",
    image: "assets/gallery/WEB-BASED-IK.jpg",
    tall: true
  },
  {
    label: "Developing Portal Produksi",
    image: "assets/gallery/Develop-Portal-produksi.jpg",
    tall: true
  },
  {
    label: "Developing KPI Dashboard",
    image: "assets/gallery/KPI-Dashboard.jpg",
    tall: true
  }
];

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

/* ---------------- Render ---------------- */

function renderProjects() {
  const grid = qs("#projectsGrid");
  if (!grid) return;
  grid.innerHTML = projects.map((project, i) => `
    <article class="project-card reveal" style="transition-delay:${i * 0.06}s" tabindex="0" role="button" aria-label="Open ${project.title} case study" data-project-id="${project.id}">
      <div class="project-card-top">
        <span class="project-num">${String(i + 1).padStart(2, "0")} · ${project.category}</span>
        <span class="project-stat">${project.stat}</span>
        <span class="project-stat-label">${project.statLabel}</span>
      </div>
      <div class="project-card-bottom">
        <h3>${project.title}</h3>
        <span class="project-open-link">Read more
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M7 7h10v10"/></svg>
        </span>
      </div>
    </article>
  `).join("");

  qsa(".project-card", grid).forEach(card => {
    const open = () => openProject(card.dataset.projectId);
    card.addEventListener("click", open);
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
}

function openProject(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;
  qs("#modalCategory").textContent = project.category;
  qs("#modalStat").textContent = project.stat;
  qs("#modalStatLabel").textContent = project.statLabel;
  qs("#modalTitle").textContent = project.title;
  qs("#modalSummary").textContent = project.detail;
  qs("#modalTags").innerHTML = project.tags.map(t => `<span>${t}</span>`).join("");
  const modal = qs("#projectModal");
  modal.showModal();
  document.body.style.overflow = "hidden";
}

function setupModal() {
  const modal = qs("#projectModal");
  if (!modal) return;
  const close = () => { modal.close(); document.body.style.overflow = ""; };
  qs("#modalClose").addEventListener("click", close);
  modal.addEventListener("click", e => {
    const r = modal.getBoundingClientRect();
    const outside = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    if (outside) close();
  });
}

function renderCareer() {
  const list = qs("#careerList");
  if (!list) return;
  list.innerHTML = career.map((item, i) => `
    <div class="career-item reveal" style="transition-delay:${i * 0.05}s">
      <time>${item.period}</time>
      <div class="career-role">
        <h3>${item.role}</h3>
        <p class="company">${item.company} · ${item.location}</p>
        <p class="impact">${item.impact}</p>
      </div>
    </div>
  `).join("");
}

function renderSkillBadges() {
  const cloud = qs("#badgeCloud");
  if (!cloud) return;
  cloud.innerHTML = skills.map((skill, i) => `<span class="badge reveal" style="transition-delay:${i * 0.03}s">${skill}</span>`).join("");
}
function renderGallery() {
  const grid = qs("#galleryGrid");
  if (!grid) return;

  grid.innerHTML = gallery.map(item => `
    <figure class="reveal gallery-card ${item.tall ? "tall" : ""}">
      <img src="${item.image}" alt="${item.label}" loading="lazy">
      <figcaption>${item.label}</figcaption>
    </figure>
  `).join("");
}

/* ---------------- Interactions ---------------- */

function setupHeaderAndNav() {
  const header = qs("#siteHeader");
  const progress = qs("#scrollProgress span");
  const sections = qsa("main section[id]");
  const links = qsa(".desktop-nav a");

  function update() {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 24);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    let current = "home";
    sections.forEach(s => { if (y >= s.offsetTop - 220) current = s.id; });
    links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
  }
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupMobileMenu() {
  const toggle = qs("#menuToggle");
  const menu = qs("#mobileMenu");
  if (!toggle || !menu) return;
  function close() {
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("open");
    menu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  toggle.addEventListener("click", () => {
    const open = !menu.classList.contains("open");
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  });
  qsa("a", menu).forEach(a => a.addEventListener("click", close));
}

function setupCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.target);
      const suffix = el.dataset.suffix || "";
      const start = performance.now();
      const duration = 1300;
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        el.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: .6 });
  qsa(".counter").forEach(el => observer.observe(el));
}

let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .12, rootMargin: "0px 0px -40px" });
  }
  qsa(".reveal:not([data-observed])").forEach(el => {
    el.dataset.observed = "true";
    revealObserver.observe(el);
  });
}

function setupMagneticButtons() {
  if (!window.matchMedia("(pointer:fine)").matches) return;
  qsa(".btn").forEach(btn => {
    btn.addEventListener("mousemove", e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * .12}px, ${y * .22}px)`;
    });
    btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
  });
}

function setupParticles() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = qs("#particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = 0, height = 0, dpr = Math.min(window.devicePixelRatio || 1, 2), particles = [];
  const pointer = { x: -9999, y: -9999 };

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width; height = rect.height;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr; canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(60, Math.floor(width / 22));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width, y: Math.random() * height,
      vx: (Math.random() - .5) * .2, vy: (Math.random() - .5) * .2,
      r: Math.random() * 1.2 + .5
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const goldRgb = isDark ? "211,172,94" : "169,129,47";
    const blueRgb = isDark ? "110,147,232" : "29,63,143";
    const dotAlpha = isDark ? .55 : .4;
    const linkAlpha = isDark ? .08 : .05;

    particles.forEach((p, i) => {
      const dx = pointer.x - p.x, dy = pointer.y - p.y;
      if (Math.hypot(dx, dy) < 120) { p.x -= dx * .0007; p.y -= dy * .0007; }
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.fillStyle = i % 3 === 0 ? `rgba(${goldRgb},${dotAlpha})` : `rgba(${blueRgb},${dotAlpha * .8})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const o = particles[j];
        const d = Math.hypot(p.x - o.x, p.y - o.y);
        if (d < 95) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${blueRgb},${linkAlpha * (1 - d / 95)})`;
          ctx.lineWidth = .5;
          ctx.moveTo(p.x, p.y); ctx.lineTo(o.x, o.y); ctx.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", e => { pointer.x = e.clientX; pointer.y = e.clientY; }, { passive: true });
  window.addEventListener("pointerleave", () => { pointer.x = -9999; pointer.y = -9999; });
  resize();
  draw();
}

function init() {
  renderProjects();
  renderCareer();
  renderSkillBadges();
  renderGallery();
  setupModal();
  setupHeaderAndNav();
  setupMobileMenu();
  setupCounters();
  setupMagneticButtons();
  setupParticles();
  observeReveals();
  const yearEl = qs("#currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", init);
