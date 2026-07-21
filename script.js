"use strict";

const skills = [
  { code: "LM", title: "Lean Manufacturing", text: "Improve flow, eliminate waste, establish standard work, strengthen productivity, and support disciplined continuous improvement.", level: 94, accent: "rgba(59,130,246,.38)" },
  { code: "PE", title: "Process Engineering", text: "Analyze process capability, cycle time, production flow, bottlenecks, layouts, operating methods, and readiness conditions.", level: 96, accent: "rgba(20,184,166,.35)" },
  { code: "OEE", title: "OEE & KPI Management", text: "Manage availability, performance, quality, downtime, capacity, output, losses, and operational visibility.", level: 95, accent: "rgba(34,197,94,.32)" },
  { code: "RCA", title: "RCA & CAPA", text: "Identify systemic causes through structured analysis and convert findings into corrective, preventive, and control actions.", level: 94, accent: "rgba(245,158,11,.3)" },
  { code: "CF", title: "Capacity & Flow Optimization", text: "Balance workloads, remove constraints, improve resource utilization, align capacity with demand, and stabilize flow.", level: 91, accent: "rgba(59,130,246,.35)" },
  { code: "PC", title: "Production Control", text: "Strengthen daily execution, scheduling, workforce allocation, material readiness, output control, and escalation routines.", level: 93, accent: "rgba(20,184,166,.3)" },
  { code: "QS", title: "Quality Systems", text: "Build process controls, verification points, defect-prevention routines, traceability, rework controls, and escalation standards.", level: 91, accent: "rgba(239,68,68,.27)" },
  { code: "DA", title: "Data Analysis", text: "Convert operational data into trends, priorities, management reports, and evidence-based decisions.", level: 88, accent: "rgba(59,130,246,.34)" },
  { code: "PM", title: "Project Management", text: "Define scope, milestones, ownership, risks, action plans, and cross-functional follow-up for operational improvements.", level: 89, accent: "rgba(245,158,11,.28)" },
  { code: "DM", title: "Digital Manufacturing", text: "Develop systems that improve production visibility, workforce control, traceability, KPI monitoring, and management reporting.", level: 84, accent: "rgba(20,184,166,.33)" },
  { code: "PP", title: "Production Planning", text: "Support production plans through capacity analysis, resource coordination, material alignment, schedule control, and cost awareness.", level: 89, accent: "rgba(34,197,94,.28)" },
  { code: "CL", title: "Cross-functional Leadership", text: "Align engineering, production, quality, planning, materials, and management around shared performance targets.", level: 92, accent: "rgba(59,130,246,.36)" }
];

const projects = [
  {
    id: "capacity-improvement",
    category: "Process Engineering",
    title: "Manufacturing Capacity Improvement",
    summary: "Redesigned production flow, operating readiness, and performance controls to increase throughput and available capacity.",
    metric: "+42% throughput",
    period: "2025–2026",
    code: "CAPACITY / 01",
    challenge: "Production output was constrained by uneven process flow, readiness gaps, workforce utilization, and inconsistent operating standards.",
    approach: "Analyzed the end-to-end production flow, cycle-time distribution, workforce utilization, operating readiness, tooling requirements, quality controls, and recurring execution constraints.",
    solution: "Rebalanced production activities, strengthened readiness controls, improved resource allocation, clarified process ownership, and standardized critical operating routines.",
    impact: "Daily output increased from 1,200 to 1,700 units, while production capacity increased from 420 to 630 units per day per line.",
    tags: ["Capacity Planning", "Process Flow", "Line Balancing", "Standard Work"],
    gradient: "linear-gradient(135deg,#172554 0%,#1d4ed8 48%,#0f766e 100%)"
  },
  {
    id: "oee-recovery",
    category: "Operational Excellence",
    title: "OEE & Downtime Recovery",
    summary: "Strengthened production readiness, operational controls, and abnormality response to restore equipment effectiveness and operating stability.",
    metric: "85.2% OEE",
    period: "2025–2026",
    code: "OEE / 02",
    challenge: "Downtime reached 79.2 hours while OEE remained at 69.4%, reducing operational reliability and limiting production performance.",
    approach: "Mapped major downtime drivers, reviewed readiness conditions, analyzed recurring operational interruptions, and evaluated response routines.",
    solution: "Strengthened readiness verification, planning visibility, operational ownership, abnormality escalation, and shop-floor response standards.",
    impact: "Downtime decreased from 79.2 hours to 3.4 hours, while OEE improved from 69.4% to 85.2%.",
    tags: ["OEE", "Downtime Reduction", "Operational Reliability", "Performance Control"],
    gradient: "linear-gradient(135deg,#052e2b 0%,#0f766e 48%,#1d4ed8 100%)"
  },
  {
    id: "quality-reduction",
    category: "Quality Systems",
    title: "Missed Process & Rework Reduction",
    summary: "Built a stronger process-control and corrective-action system to prevent missed operations, recurring defects, and avoidable rework.",
    metric: "−94% missed process",
    period: "2025–2026",
    code: "QUALITY / 03",
    challenge: "Missed processes and recurring defects created quality risk, production disruption, rework, and additional manufacturing cost.",
    approach: "Applied RCA, CAPA, cross-functional task-force coordination, defect escalation, process verification, and control-point analysis.",
    solution: "Standardized critical process controls, clarified verification responsibilities, strengthened corrective-action execution, and established disciplined escalation routines.",
    impact: "Missed process decreased from 1.25% to 0.07%, while rework and nonconforming output decreased from 2.00% to 0.24%.",
    tags: ["RCA", "CAPA", "Process Control", "Quality Improvement"],
    gradient: "linear-gradient(135deg,#450a0a 0%,#b91c1c 45%,#7c3aed 100%)"
  },
  {
    id: "cost-optimization",
    category: "Operational Excellence",
    title: "Manufacturing Cost Optimization",
    summary: "Combined production scale-up, resource optimization, material control, and operating discipline to reduce unit manufacturing cost.",
    metric: "−91% unit cost",
    period: "2022–2024",
    code: "COST / 04",
    challenge: "Pilot-scale production had a high unit cost, limited operating capacity, and an operating model not yet suitable for sustainable commercial output.",
    approach: "Reviewed equipment requirements, production methods, workforce structure, material consumption, resource allocation, capacity, and cost drivers.",
    solution: "Supported equipment investment, redesigned the operating method, established required resources, stabilized the manufacturing process, and strengthened cost control.",
    impact: "Production output scaled from 200 grams per day to 25 kilograms per day, while unit cost decreased from Rp1,011 per gram to Rp93 per gram.",
    tags: ["Production Scale-up", "Cost Reduction", "Resource Optimization", "Production Management"],
    gradient: "linear-gradient(135deg,#422006 0%,#b45309 48%,#065f46 100%)"
  },
  {
    id: "digital-control",
    category: "Digital Manufacturing",
    title: "Digital Production Control System",
    summary: "Developed an integrated digital-control concept for workforce visibility, capability records, production monitoring, and management reporting.",
    metric: "1 control ecosystem",
    period: "2025–2026",
    code: "DIGITAL / 05",
    challenge: "Operational information was distributed across separate routines and records, limiting visibility, traceability, and management response.",
    approach: "Mapped information requirements across workforce attendance, capability development, production monitoring, operational performance, and management reporting.",
    solution: "Developed a production-control portal concept connecting workforce data, skill records, operational monitoring, and standardized management reporting.",
    impact: "Created a foundation for faster operational visibility, improved traceability, stronger workforce-capability control, and more consistent reporting.",
    tags: ["Digital Manufacturing", "Production Control", "Skill Matrix", "Management Dashboard"],
    gradient: "linear-gradient(135deg,#111827 0%,#1e3a8a 50%,#0f766e 100%)"
  },
  {
    id: "process-flow",
    category: "Process Engineering",
    title: "Manufacturing Process Flow Improvement",
    summary: "Improved production methods and process flow to increase throughput without additional equipment investment.",
    metric: "+12.5% throughput",
    period: "2017–2022",
    code: "FLOW / 06",
    challenge: "The production system required additional throughput while capital-equipment expansion was not the preferred solution.",
    approach: "Reviewed workflow, operating methods, process constraints, equipment utilization, technical deviations, and available capacity.",
    solution: "Redesigned work methods and improved process flow to use the existing equipment base more effectively.",
    impact: "Production output increased from 2.0 tons per day to 2.25 tons per day without adding new machines.",
    tags: ["Process Flow", "Methods Engineering", "Capacity Improvement", "Asset Utilization"],
    gradient: "linear-gradient(135deg,#2e1065 0%,#6d28d9 48%,#1d4ed8 100%)"
  },
  {
    id: "process-nonconformity",
    category: "Quality Systems",
    title: "Process Nonconformity Reduction",
    summary: "Applied root-cause analysis, corrective action, and process standardization to eliminate recurring operational nonconformities.",
    metric: "−94% cases",
    period: "2017–2022",
    code: "CONTROL / 07",
    challenge: "Recurring process nonconformities caused technical deviations, inconsistent operating results, and repeated corrective work.",
    approach: "Investigated recurring causes, reviewed process conditions and workflows, defined corrective actions, and strengthened technical documentation.",
    solution: "Implemented systemic corrective actions and standardized improved process methods across production operations.",
    impact: "Process nonconformities decreased from 96 cases per year to 6 cases per year.",
    tags: ["Process Control", "RCA", "Standardization", "Quality Systems"],
    gradient: "linear-gradient(135deg,#1f2937 0%,#334155 46%,#0f766e 100%)"
  },
  {
    id: "kpi-control",
    category: "Digital Manufacturing",
    title: "Manufacturing KPI Management System",
    summary: "Structured performance tracking to keep daily operations aligned with capacity, quality, and management targets.",
    metric: "455.68 units/day/line",
    period: "2026",
    code: "KPI / 08",
    challenge: "Operational leaders required reliable visibility of production capacity, process quality, output, and performance against defined targets.",
    approach: "Established KPI definitions, tracking routines, review frequencies, escalation criteria, and ownership across key manufacturing indicators.",
    solution: "Connected daily operational data with structured management reviews, performance visibility, and corrective-action discipline.",
    impact: "Average capacity reached 455.68 units per day per line against a target of 420, while missed process remained below the 0.25% target during January–April 2026.",
    tags: ["KPI Management", "Capacity Control", "Management Reporting", "Data-driven Decisions"],
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
      "Lead cross-functional process-engineering improvements across high-volume manufacturing operations.",
      "Strengthen production flow, operating readiness, workforce utilization, quality controls, tooling readiness, and corrective-action execution.",
      "Improve throughput, capacity, OEE, downtime, missed process, rework, and unit cost through system-level improvement and KPI control.",
      "Develop digital production-control concepts for workforce visibility, capability records, operational monitoring, and management reporting."
    ]
  },
  {
    role: "Production Manager",
    company: "PT RekaLagam",
    location: "Sukabumi, West Java",
    period: "Sep 2022 — Dec 2024",
    points: [
      "Managed production planning, daily execution, output control, workforce allocation, material coordination, purchasing follow-up, cost estimation, and management reporting.",
      "Built the operating structure required to scale a pilot process into a stable commercial manufacturing operation.",
      "Increased production output from 200 grams per day to 25 kilograms per day and reduced unit manufacturing cost by 91%.",
      "Coordinated with commercial and technical functions on production feasibility, quality requirements, safety conditions, and new-product readiness."
    ]
  },
  {
    role: "Process Engineer",
    company: "PT Rajawali Hiyoto",
    location: "Cimahi, West Java",
    period: "Aug 2017 — Aug 2022",
    points: [
      "Improved production throughput by 12.5% without additional equipment by redesigning work methods and process flow.",
      "Reduced recurring process nonconformities from 96 cases per year to 6 cases per year.",
      "Provided technical support during process deviations, quality issues, equipment-related problems, and abnormal operating conditions.",
      "Reviewed workflows, identified improvement opportunities, established schedules, monitored milestones, and maintained technical documentation."
    ]
  },
  {
    role: "Process Control",
    company: "PT Rajawali Hiyoto",
    location: "Cimahi, West Java",
    period: "Jun 2015 — Aug 2017",
    points: [
      "Maintained process-control documentation and updated operating procedures following process changes.",
      "Supported process verification, product checks, measurement activities, rework control, operational recording, and shop-floor compliance."
    ]
  },
  {
    role: "Quality Control Intern",
    company: "PT Kino Kosmetik Indonesia",
    location: "Sukabumi, West Java",
    period: "Nov 2014 — Feb 2015",
    points: [
      "Maintained quality-test records and verified incoming materials and finished products against defined requirements.",
      "Reviewed data accuracy, identified quality concerns, and escalated nonconformities to the appropriate supervisors."
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

const GALLERY_DB_NAME = "agungPortfolioGallery";
const GALLERY_STORE_NAME = "images";
const GALLERY_MAX_IMAGES = 24;
const GALLERY_MAX_BYTES = 12 * 1024 * 1024;
let galleryObjectUrls = [];

function galleryEditModeEnabled() {
  return new URLSearchParams(window.location.search).get("gallery") === "edit";
}

function openGalleryDatabase() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("This browser does not support local gallery storage."));
      return;
    }
    const request = indexedDB.open(GALLERY_DB_NAME, 1);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(GALLERY_STORE_NAME)) {
        database.createObjectStore(GALLERY_STORE_NAME, { keyPath: "id", autoIncrement: true });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Unable to open gallery storage."));
  });
}

async function readGalleryImages() {
  const database = await openGalleryDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(GALLERY_STORE_NAME, "readonly");
    const request = transaction.objectStore(GALLERY_STORE_NAME).getAll();
    request.onsuccess = () => resolve(request.result.sort((a, b) => a.createdAt - b.createdAt));
    request.onerror = () => reject(request.error || new Error("Unable to read gallery images."));
    transaction.oncomplete = () => database.close();
  });
}

async function storeGalleryImage(file) {
  const database = await openGalleryDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(GALLERY_STORE_NAME, "readwrite");
    const request = transaction.objectStore(GALLERY_STORE_NAME).add({
      name: file.name,
      type: file.type,
      size: file.size,
      createdAt: Date.now() + Math.random(),
      blob: file
    });
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error(`Unable to store ${file.name}.`));
    transaction.oncomplete = () => database.close();
  });
}

async function deleteGalleryImage(id) {
  const database = await openGalleryDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(GALLERY_STORE_NAME, "readwrite");
    const request = transaction.objectStore(GALLERY_STORE_NAME).delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error || new Error("Unable to remove image."));
    transaction.oncomplete = () => database.close();
  });
}

async function clearGalleryImages() {
  const database = await openGalleryDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(GALLERY_STORE_NAME, "readwrite");
    const request = transaction.objectStore(GALLERY_STORE_NAME).clear();
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error || new Error("Unable to clear images."));
    transaction.oncomplete = () => database.close();
  });
}

function friendlyGalleryCaption(filename) {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, letter => letter.toUpperCase()) || "Manufacturing project";
}

async function renderLocalGalleryImages() {
  const grid = qs("#galleryGrid");
  const status = qs("#galleryStatus");
  if (!grid) return;

  galleryObjectUrls.forEach(url => URL.revokeObjectURL(url));
  galleryObjectUrls = [];
  qsa("[data-local-gallery-image]", grid).forEach(item => item.remove());

  try {
    const records = await readGalleryImages();
    const editing = galleryEditModeEnabled();
    records.forEach((record, index) => {
      const imageUrl = URL.createObjectURL(record.blob);
      galleryObjectUrls.push(imageUrl);
      const figure = document.createElement("figure");
      const sizeClass = index % 5 === 0 ? "gallery-wide" : index % 4 === 0 ? "gallery-tall" : "";
      figure.className = `gallery-item reveal is-visible ${sizeClass}`.trim();
      figure.dataset.localGalleryImage = String(record.id);
      figure.innerHTML = `
        <img src="${imageUrl}" alt="${friendlyGalleryCaption(record.name)}" loading="lazy">
        <figcaption>${friendlyGalleryCaption(record.name)}</figcaption>
        ${editing ? `<button class="gallery-delete" type="button" aria-label="Remove ${friendlyGalleryCaption(record.name)}" data-gallery-delete="${record.id}">×</button>` : ""}
      `;
      grid.appendChild(figure);
    });

    if (status) {
      status.textContent = records.length
        ? `${records.length} local image${records.length === 1 ? "" : "s"} available in this browser.`
        : "No local images added yet.";
    }

    qsa("[data-gallery-delete]", grid).forEach(button => {
      button.addEventListener("click", async event => {
        event.preventDefault();
        event.stopPropagation();
        await deleteGalleryImage(Number(button.dataset.galleryDelete));
        await renderLocalGalleryImages();
      });
    });
  } catch (error) {
    if (status) status.textContent = error.message;
  }
}

async function addGalleryFiles(fileList) {
  const status = qs("#galleryStatus");
  const files = [...fileList];
  if (!files.length) return;

  try {
    const existing = await readGalleryImages();
    const remainingSlots = Math.max(0, GALLERY_MAX_IMAGES - existing.length);
    const accepted = files
      .filter(file => file.type.startsWith("image/") && file.size <= GALLERY_MAX_BYTES)
      .slice(0, remainingSlots);
    const rejected = files.length - accepted.length;

    if (!remainingSlots) {
      if (status) status.textContent = `Local gallery limit reached (${GALLERY_MAX_IMAGES} images).`;
      return;
    }

    if (status) status.textContent = `Adding ${accepted.length} image${accepted.length === 1 ? "" : "s"}…`;
    for (const file of accepted) await storeGalleryImage(file);
    await renderLocalGalleryImages();
    if (rejected && status) {
      status.textContent += ` ${rejected} file${rejected === 1 ? " was" : "s were"} skipped because of type, size, or gallery limits.`;
    }
  } catch (error) {
    if (status) status.textContent = error.message;
  }
}

function setupGalleryEditor() {
  const editor = qs("#galleryEditor");
  const input = qs("#galleryFileInput");
  const dropzone = qs("#galleryDropzone");
  const clearButton = qs("#clearGalleryUploads");
  if (!editor || !input || !dropzone || !clearButton) return;

  if (galleryEditModeEnabled()) {
    editor.hidden = false;
    document.body.classList.add("gallery-edit-mode");
    input.addEventListener("change", async () => {
      await addGalleryFiles(input.files);
      input.value = "";
    });
    ["dragenter", "dragover"].forEach(type => dropzone.addEventListener(type, event => {
      event.preventDefault();
      dropzone.classList.add("is-dragging");
    }));
    ["dragleave", "drop"].forEach(type => dropzone.addEventListener(type, event => {
      event.preventDefault();
      dropzone.classList.remove("is-dragging");
    }));
    dropzone.addEventListener("drop", event => addGalleryFiles(event.dataTransfer.files));
    clearButton.addEventListener("click", async () => {
      if (!window.confirm("Remove all locally uploaded gallery images from this browser?")) return;
      await clearGalleryImages();
      await renderLocalGalleryImages();
    });
  }

  renderLocalGalleryImages();
}

function setupContactForm() {
  const form = qs("#contactForm");
  const status = qs("#formStatus");
  if (!form || !status) return;
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
  setupGalleryEditor();
  setupContactForm();
  setupParticles();
  setupMagneticButtons();
  qs("#currentYear").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", init);
