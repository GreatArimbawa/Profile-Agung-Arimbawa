"use strict";

const skills = [
  { code: "LM", title: "Lean Manufacturing", text: "Waste reduction, standard work, Kaizen, productivity, and cost improvement.", level: 94, accent: "rgba(59,130,246,.38)" },
  { code: "PE", title: "Process Engineering", text: "Cycle time, process flow, bottleneck analysis, layout, and line readiness.", level: 96, accent: "rgba(20,184,166,.35)" },
  { code: "OEE", title: "OEE & KPI Control", text: "Availability, performance, quality, downtime, capacity, and management visibility.", level: 95, accent: "rgba(34,197,94,.32)" },
  { code: "RCA", title: "RCA & CAPA", text: "5 Why, Fishbone, corrective action, TFT coordination, and prevention routines.", level: 94, accent: "rgba(245,158,11,.3)" },
  { code: "LB", title: "Line Balancing", text: "Workload distribution, bottleneck removal, manpower utilization, and takt alignment.", level: 91, accent: "rgba(59,130,246,.35)" },
  { code: "PC", title: "Production Control", text: "Daily execution, scheduling support, manpower planning, material readiness, and output control.", level: 93, accent: "rgba(20,184,166,.3)" },
  { code: "QA", title: "Quality Systems", text: "QC checkpoints, process discipline, missed-process prevention, rework, and escalation.", level: 91, accent: "rgba(239,68,68,.27)" },
  { code: "DA", title: "Data Analysis", text: "KPI tracking, trend analysis, management reporting, and data-led prioritization.", level: 88, accent: "rgba(59,130,246,.34)" },
  { code: "PM", title: "Project Management", text: "Scope, schedules, milestones, risks, cross-functional actions, and follow-up.", level: 89, accent: "rgba(245,158,11,.28)" },
  { code: "DX", title: "Digital Manufacturing", text: "Production portals, monitoring concepts, skill matrix history, and management dashboards.", level: 84, accent: "rgba(20,184,166,.33)" },
  { code: "PP", title: "Production Planning", text: "Planning support, material coordination, purchasing follow-up, and budget input.", level: 89, accent: "rgba(34,197,94,.28)" },
  { code: "LD", title: "Leadership", text: "Team alignment, abnormality response, operator standards, and cross-functional execution.", level: 92, accent: "rgba(59,130,246,.36)" }
];

const projects = [
  {
    id: "assembly-output",
    category: "Process Engineering",
    title: "Laptop Assembly Capacity Improvement",
    summary: "Redesigned production readiness and operating flow to increase daily output and line capacity in electronics assembly.",
    metric: "+42% output",
    period: "2025–2026",
    code: "CAPACITY / 01",
    challenge: "Assembly output was constrained by process flow, readiness, manpower utilization, and inconsistent operating standards.",
    approach: "Reviewed line flow, operating readiness, manpower use, tooling needs, quality checkpoints, and daily execution constraints.",
    solution: "Optimized process flow, strengthened line readiness, supported manpower allocation, and standardized operating routines.",
    impact: "Daily output increased from 1,200 to 1,700 units, while line capacity increased from 420 to 630 units per day per line.",
    tags: ["Line Balancing", "Capacity", "Standard Work", "Electronics Assembly"],
    gradient: "linear-gradient(135deg,#172554 0%,#1d4ed8 48%,#0f766e 100%)"
  },
  {
    id: "oee-recovery",
    category: "Operational Excellence",
    title: "OEE & Downtime Recovery",
    summary: "Strengthened material control and abnormality response to recover equipment effectiveness and operating stability.",
    metric: "85.2% OEE",
    period: "2025–2026",
    code: "OEE / 02",
    challenge: "Downtime reached 79.2 hours and OEE remained at 69.4%, limiting production reliability.",
    approach: "Mapped downtime drivers, reviewed material checking and readiness, and tightened abnormality-response discipline.",
    solution: "Improved material checker controls, planning visibility, readiness routines, and shop-floor response standards.",
    impact: "Downtime fell from 79.2 hours to 3.4 hours, while OEE improved from 69.4% to 85.2%.",
    tags: ["OEE", "Downtime", "Material Readiness", "KPI Control"],
    gradient: "linear-gradient(135deg,#052e2b 0%,#0f766e 48%,#1d4ed8 100%)"
  },
  {
    id: "quality-reduction",
    category: "Quality Improvement",
    title: "Missed Process & Rework Reduction",
    summary: "Built a tighter corrective-action system to prevent missed processes and recurring assembly defects.",
    metric: "−94% missed process",
    period: "2025–2026",
    code: "QUALITY / 03",
    challenge: "Missed process and rework rates created avoidable quality risk, production disruption, and cost.",
    approach: "Used RCA, CAPA, TFT coordination, defect escalation, and process-control checkpoints to attack recurring causes.",
    solution: "Standardized critical process controls, strengthened corrective-action execution, and improved defect escalation routines.",
    impact: "Missed process decreased from 1.25% to 0.07%; rework/NG decreased from 2.00% to 0.24%.",
    tags: ["RCA", "CAPA", "TFT", "Quality Control"],
    gradient: "linear-gradient(135deg,#450a0a 0%,#b91c1c 45%,#7c3aed 100%)"
  },
  {
    id: "cost-optimization",
    category: "Operational Excellence",
    title: "Production Cost Optimization",
    summary: "Combined scale-up, resource optimization, material control, and process discipline to lower manufacturing cost.",
    metric: "−91% cost/gram",
    period: "2022–2024",
    code: "COST / 04",
    challenge: "Pilot-level production had a high unit cost and insufficient operating scale for sustainable commercial output.",
    approach: "Reviewed equipment needs, production method, manpower setup, material use, resource allocation, and cost structure.",
    solution: "Supported machine acquisition, production scale-up, process stabilization, and stronger cost discipline.",
    impact: "Output scaled from 200 g/day to 25 kg/day while cost decreased from Rp1,011/gram to Rp93/gram.",
    tags: ["Scale-up", "Cost Reduction", "Resource Optimization", "Production Management"],
    gradient: "linear-gradient(135deg,#422006 0%,#b45309 48%,#065f46 100%)"
  },
  {
    id: "production-portal",
    category: "Digital Manufacturing",
    title: "Production Portal & Skill Matrix",
    summary: "Developed digital control concepts for attendance visibility, skill history, production monitoring, and management reporting.",
    metric: "1 control ecosystem",
    period: "2025–2026",
    code: "DIGITAL / 05",
    challenge: "Production information was distributed across operational routines, reducing visibility and traceability for leaders.",
    approach: "Mapped key information needs across attendance, absence, skill development, monitoring, and management reporting.",
    solution: "Developed production portal concepts and control routines connecting workforce and production visibility.",
    impact: "Created a practical foundation for faster operational visibility, skill-history control, and standardized management reporting.",
    tags: ["Production Portal", "Skill Matrix", "Dashboard", "Digital Control"],
    gradient: "linear-gradient(135deg,#111827 0%,#1e3a8a 50%,#0f766e 100%)"
  },
  {
    id: "paint-flow",
    category: "Process Engineering",
    title: "Paint Production Flow Improvement",
    summary: "Improved process methods and production flow to gain output without additional equipment investment.",
    metric: "+12.5% output",
    period: "2017–2022",
    code: "FLOW / 06",
    challenge: "The production system needed higher throughput, but capital equipment expansion was not the preferred path.",
    approach: "Reviewed workflow, methods, constraints, process deviations, and opportunities to improve existing capacity.",
    solution: "Improved work methods and production flow using the installed equipment base.",
    impact: "Output increased from 2.0 tons/day to 2.25 tons/day without adding machines.",
    tags: ["Process Flow", "Methods Engineering", "Capacity", "Paint Manufacturing"],
    gradient: "linear-gradient(135deg,#2e1065 0%,#6d28d9 48%,#1d4ed8 100%)"
  },
  {
    id: "process-nonconformity",
    category: "Quality Improvement",
    title: "Process Nonconformity Reduction",
    summary: "Applied root-cause analysis and process standardization to eliminate recurring nonconformities.",
    metric: "−94% cases",
    period: "2017–2022",
    code: "CONTROL / 07",
    challenge: "Recurring process nonconformities created technical deviations and inconsistent operating results.",
    approach: "Investigated causes, reviewed workflows, defined corrective actions, and improved technical documentation.",
    solution: "Implemented corrective actions and standardized improved process methods across operations.",
    impact: "Process nonconformities decreased from 96 cases per year to 6 cases per year.",
    tags: ["Process Control", "RCA", "Standardization", "Quality"],
    gradient: "linear-gradient(135deg,#1f2937 0%,#334155 46%,#0f766e 100%)"
  },
  {
    id: "kpi-control",
    category: "Digital Manufacturing",
    title: "Manufacturing KPI Control",
    summary: "Structured capacity and missed-process tracking to keep daily operations aligned with management targets.",
    metric: "455.68 units/day/line",
    period: "2026",
    code: "KPI / 08",
    challenge: "Leaders needed reliable visibility of production capacity and process quality against defined targets.",
    approach: "Established KPI tracking routines around capacity, missed process, output, and operational follow-up.",
    solution: "Connected daily performance data with management review and corrective-action discipline.",
    impact: "NBAX capacity averaged 455.68 units/day/line against a 420 target, while missed process remained below the 0.25% target during Jan–Apr 2026.",
    tags: ["KPI", "Capacity", "Management Reporting", "Performance Control"],
    gradient: "linear-gradient(135deg,#082f49 0%,#0369a1 48%,#14b8a6 100%)"
  }
];

const career = [
  {
    role: "Process Engineer",
    company: "PT Tera Data Indonusa Tbk (Axioo)",
    location: "Jakarta",
    period: "Jan 2025 — Present",
    points: [
      "Lead process-engineering improvements across laptop assembly operations.",
      "Improved output, line capacity, OEE, downtime, missed process, rework, and unit cost.",
      "Developed production portal concepts and control routines for operational visibility."
    ]
  },
  {
    role: "Production Manager",
    company: "PT RekaLagam",
    location: "Sukabumi, West Java",
    period: "Sep 2022 — Dec 2024",
    points: [
      "Managed planning, daily execution, output, manpower, materials, purchasing coordination, and cost input.",
      "Scaled production from 200 g/day pilot output to 25 kg/day.",
      "Reduced production cost per gram by 91%."
    ]
  },
  {
    role: "Process Engineer",
    company: "PT Rajawali Hiyoto",
    location: "Cimahi, West Java",
    period: "Aug 2017 — Aug 2022",
    points: [
      "Improved output by 12.5% without additional machines.",
      "Reduced process nonconformities from 96 to 6 cases per year.",
      "Supported technical deviations, equipment-related problems, and operating abnormalities."
    ]
  },
  {
    role: "Process Control",
    company: "PT Rajawali Hiyoto",
    location: "Cimahi, West Java",
    period: "Jun 2015 — Aug 2017",
    points: [
      "Maintained process-control documentation and updated procedures after process changes.",
      "Supported product checks, rework, measurement, recording, and shop-floor process discipline."
    ]
  },
  {
    role: "Quality Control Intern",
    company: "PT Kino Kosmetik Indonesia",
    location: "Sukabumi, West Java",
    period: "Nov 2014 — Feb 2015",
    points: [
      "Maintained quality-test records and checked raw materials and finished goods.",
      "Reviewed data accuracy and escalated quality concerns to supervisors."
    ]
  }
];

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function renderSkills() {
  qs("#skillsGrid").innerHTML = skills.map(skill => `
    <article class="skill-card reveal" style="--level:${skill.level}%;--accent:${skill.accent}">
      <span class="skill-icon">${skill.code}</span>
      <h3>${skill.title}</h3>
      <p>${skill.text}</p>
      <div class="skill-level" aria-label="Proficiency ${skill.level} percent"><span></span></div>
    </article>
  `).join("");
}

function renderProjectFilters() {
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  qs("#projectFilters").innerHTML = categories.map((category, index) => `
    <button class="project-filter ${index === 0 ? "active" : ""}" type="button" data-filter="${category}">${category}</button>
  `).join("");

  qsa(".project-filter").forEach(button => {
    button.addEventListener("click", () => {
      qsa(".project-filter").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      renderProjects(button.dataset.filter);
    });
  });
}

function renderProjects(filter = "All") {
  const filtered = filter === "All" ? projects : projects.filter(project => project.category === filter);
  qs("#projectsGrid").innerHTML = filtered.map(project => `
    <article class="project-card reveal" tabindex="0" role="button" aria-label="Open ${project.title} case study" data-project-id="${project.id}" style="--project-gradient:${project.gradient}">
      <div class="project-visual">
        <span class="project-code">${project.code}</span>
        <strong class="project-big-metric">${project.metric}</strong>
      </div>
      <div class="project-body">
        <div class="project-meta"><span>${project.category}</span><span>${project.period}</span></div>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="project-footer">
          <div class="project-tags">${project.tags.slice(0, 3).map(tag => `<span>${tag}</span>`).join("")}</div>
          <span class="project-open" aria-hidden="true">+</span>
        </div>
      </div>
    </article>
  `).join("");

  qsa(".project-card").forEach(card => {
    const open = () => openProject(card.dataset.projectId);
    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
  observeReveals();
}

function openProject(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  const modal = qs("#projectModal");
  qs("#modalVisual").style.setProperty("--project-gradient", project.gradient);
  qs("#modalLabel").textContent = `${project.category} • ${project.period}`;
  qs("#modalTitle").textContent = project.title;
  qs("#modalSummary").textContent = project.summary;
  qs("#modalMetric").textContent = project.metric;
  qs("#modalChallenge").textContent = project.challenge;
  qs("#modalApproach").textContent = project.approach;
  qs("#modalSolution").textContent = project.solution;
  qs("#modalImpact").textContent = project.impact;
  qs("#modalTags").innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join("");
  modal.showModal();
  document.body.style.overflow = "hidden";
}

function renderCareer() {
  qs("#careerTimeline").innerHTML = career.map((item, index) => `
    <article class="timeline-item reveal ${index === 0 ? "open" : ""}">
      <span class="timeline-dot" aria-hidden="true"></span>
      <button class="timeline-button" type="button" aria-expanded="${index === 0}">
        <div class="timeline-top">
          <div><h3>${item.role}</h3><p>${item.company} · ${item.location}</p></div>
          <time>${item.period}</time>
        </div>
        <span class="timeline-expand" aria-hidden="true">+</span>
      </button>
      <div class="timeline-details"><div><ul>${item.points.map(point => `<li>${point}</li>`).join("")}</ul></div></div>
    </article>
  `).join("");

  qsa(".timeline-button").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".timeline-item");
      const open = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
    });
  });
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
    }, { threshold: .13, rootMargin: "0px 0px -45px" });
  }
  qsa(".reveal:not([data-observed])").forEach(element => {
    element.dataset.observed = "true";
    revealObserver.observe(element);
  });
}

function setupCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      const target = Number(element.dataset.target);
      const decimals = String(target).includes(".") ? 1 : 0;
      const prefix = element.dataset.prefix || "";
      const suffix = element.dataset.suffix || "";
      const start = performance.now();
      const duration = 1400;

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = target * eased;
        element.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(element);
    });
  }, { threshold: .5 });
  qsa(".counter").forEach(counter => observer.observe(counter));
}

function setupHeaderAndNavigation() {
  const header = qs("#siteHeader");
  const progress = qs("#scrollProgress");
  const sections = qsa("main section[id]");
  const navLinks = qsa(".desktop-nav a");

  function update() {
    const scrollY = window.scrollY;
    header.classList.toggle("scrolled", scrollY > 30);
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0}%`;

    let current = "home";
    sections.forEach(section => {
      if (scrollY >= section.offsetTop - 220) current = section.id;
    });
    navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
  }
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupMobileMenu() {
  const toggle = qs("#menuToggle");
  const menu = qs("#mobileMenu");
  function close() {
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("open");
    menu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
  }
  toggle.addEventListener("click", () => {
    const open = !menu.classList.contains("open");
    toggle.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("open", open);
    menu.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("menu-open", open);
  });
  qsa("a", menu).forEach(link => link.addEventListener("click", close));
}

function setupModal() {
  const modal = qs("#projectModal");
  const close = () => {
    modal.close();
    document.body.style.overflow = "";
  };
  qs("#modalClose").addEventListener("click", close);
  modal.addEventListener("click", event => {
    const rect = modal.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) close();
  });
  modal.addEventListener("close", () => { document.body.style.overflow = ""; });
}

function setupCarousel() {
  const track = qs("#principlesTrack");
  const cards = qsa(".principle-card", track);
  const dots = qs("#carouselDots");
  let index = 0;
  dots.innerHTML = cards.map((_, i) => `<button class="carousel-dot ${i === 0 ? "active" : ""}" type="button" aria-label="Show principle ${i + 1}"></button>`).join("");

  function goTo(next) {
    index = (next + cards.length) % cards.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    qsa(".carousel-dot", dots).forEach((dot, i) => dot.classList.toggle("active", i === index));
  }
  qs("#prevPrinciple").addEventListener("click", () => goTo(index - 1));
  qs("#nextPrinciple").addEventListener("click", () => goTo(index + 1));
  qsa(".carousel-dot", dots).forEach((dot, i) => dot.addEventListener("click", () => goTo(i)));

  let timer = setInterval(() => goTo(index + 1), 6500);
  qs("#principlesCarousel").addEventListener("mouseenter", () => clearInterval(timer));
  qs("#principlesCarousel").addEventListener("mouseleave", () => { timer = setInterval(() => goTo(index + 1), 6500); });
}

function setupContactForm() {
  const form = qs("#contactForm");
  const status = qs("#formStatus");
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}${data.get("company") ? ` — ${data.get("company")}` : ""}`);
    const body = encodeURIComponent(`Hello Agung,\n\n${data.get("message")}\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "-"}`);
    status.textContent = "Opening your email application…";
    window.location.href = `mailto:great.arimbawa@gmail.com?subject=${subject}&body=${body}`;
  });
}

function setupParticles() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = qs("#particleCanvas");
  const context = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let particles = [];
  const pointer = { x: -9999, y: -9999 };

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(80, Math.floor(width / 18));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - .5) * .22,
      vy: (Math.random() - .5) * .22,
      r: Math.random() * 1.25 + .45
    }));
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    particles.forEach((particle, index) => {
      const dx = pointer.x - particle.x;
      const dy = pointer.y - particle.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 130) {
        particle.x -= dx * .0008;
        particle.y -= dy * .0008;
      }
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;

      context.beginPath();
      context.fillStyle = index % 4 === 0 ? "rgba(20,184,166,.8)" : "rgba(148,184,255,.65)";
      context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      context.fill();

      for (let j = index + 1; j < particles.length; j += 1) {
        const other = particles[j];
        const linkDistance = Math.hypot(particle.x - other.x, particle.y - other.y);
        if (linkDistance < 100) {
          context.beginPath();
          context.strokeStyle = `rgba(100,145,220,${.09 * (1 - linkDistance / 100)})`;
          context.lineWidth = .5;
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", event => { pointer.x = event.clientX; pointer.y = event.clientY; }, { passive: true });
  window.addEventListener("pointerleave", () => { pointer.x = -9999; pointer.y = -9999; });
  resize();
  draw();
}

function setupMagneticButtons() {
  if (!window.matchMedia("(pointer:fine)").matches) return;
  qsa(".magnetic").forEach(button => {
    button.addEventListener("mousemove", event => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * .08}px, ${y * .12}px)`;
    });
    button.addEventListener("mouseleave", () => { button.style.transform = ""; });
  });
}

function init() {
  renderSkills();
  renderProjectFilters();
  renderProjects();
  renderCareer();
  observeReveals();
  setupCounters();
  setupHeaderAndNavigation();
  setupMobileMenu();
  setupModal();
  setupCarousel();
  setupContactForm();
  setupParticles();
  setupMagneticButtons();
  qs("#currentYear").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", init);
