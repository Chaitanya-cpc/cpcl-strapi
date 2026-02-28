'use strict';
/**
 * Seed script — posts all static data from cpcl-website/src/data/ into Strapi.
 * Run from: /root/webapps/cpcl-strapi
 *   node scripts/seed.js
 */

const BASE  = 'http://127.0.0.1:1337/api';
const TOKEN = process.env.STRAPI_TOKEN; // export STRAPI_TOKEN=<full-access token> before running

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${TOKEN}`,
};

async function post(endpoint, data) {
  const res = await fetch(`${BASE}/${endpoint}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ data }),
  });
  const json = await res.json();
  if (!res.ok) {
    console.error(`  ✗ POST ${endpoint}:`, JSON.stringify(json.error?.message ?? json));
    return null;
  }
  return json.data;
}

async function put(endpoint, data) {
  const res = await fetch(`${BASE}/${endpoint}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ data }),
  });
  const json = await res.json();
  if (!res.ok) {
    console.error(`  ✗ PUT ${endpoint}:`, JSON.stringify(json.error?.message ?? json));
    return null;
  }
  return json.data;
}

// ── DATA ─────────────────────────────────────────────────────────────────────

const jobs = [
  { title: "Senior Highway Engineer", department: "Engineering", location: "Delhi / Site-based", type: "Full-time", openings: 3, experience: "8–14 years", salary: "₹ 15–22 LPA", posted: "2026-02-10", description: "Lead design and supervision of highway projects including geometric design, pavement design and construction coordination with NHAI/NHIDCL clients.", requirements: ["B.E./M.Tech Civil Engineering", "8+ years in highway design/construction", "Experience with MoRTH specifications", "Proficiency in AutoCAD, Civil 3D", "Knowledge of IRC codes and NHAI guidelines"], is_filled: false },
  { title: "Structural Engineer — Bridges", department: "Engineering", location: "Delhi / Site-based", type: "Full-time", openings: 2, experience: "5–10 years", salary: "₹ 12–18 LPA", posted: "2026-02-08", description: "Design and detailing of RCC/PSC bridges and structures. Liaise with consultants, manage approvals and supervise construction.", requirements: ["B.E./M.Tech Structural/Civil Engineering", "5+ years in bridge design or construction", "Knowledge of IRC:6, IRC:21, IRC:112", "Experience with STAAD.Pro / SAP2000", "Ability to read and interpret detailed drawings"], is_filled: false },
  { title: "Project Manager — Infrastructure", department: "Operations", location: "Field Sites, Maharashtra", type: "Full-time", openings: 4, experience: "12–18 years", salary: "₹ 20–32 LPA", posted: "2026-02-05", description: "Lead end-to-end delivery of road/bridge projects from mobilisation to commissioning. Manage teams, budgets, schedule and client relationships.", requirements: ["B.E. Civil Engineering; PMP or equivalent preferred", "12+ years with large infrastructure projects", "Experience managing ₹100 Cr+ projects", "Strong client management and reporting skills", "Proficiency in Primavera P6 or MS Project"], is_filled: false },
  { title: "Quantity Surveyor", department: "Commercial", location: "Delhi", type: "Full-time", openings: 2, experience: "5–10 years", salary: "₹ 10–16 LPA", posted: "2026-01-28", description: "Prepare BOQ, rate analysis, interim payment certificates, variation orders and final accounts for civil infrastructure projects.", requirements: ["B.E./Diploma Civil Engineering or B.Sc Quantity Surveying", "5+ years in quantity surveying for infrastructure", "Knowledge of CPWD/MoRTH schedule of rates", "Proficiency in MS Excel and quantity software", "Understanding of contract conditions (FIDIC / GCC)"], is_filled: false },
  { title: "Quality Control Engineer", department: "Quality & HSE", location: "Field Sites, Maharashtra", type: "Full-time", openings: 5, experience: "4–8 years", salary: "₹ 8–14 LPA", posted: "2026-02-12", description: "Implement QA/QC plans on construction sites, conduct lab and field tests, maintain test records and prepare quality reports.", requirements: ["B.E. Civil Engineering", "4+ years in site quality control", "Knowledge of MoRTH / IS standard testing", "Familiarity with NHAI quality systems", "Ability to manage site labs"], is_filled: false },
  { title: "HSE Officer", department: "Quality & HSE", location: "Field Sites, Maharashtra", type: "Full-time", openings: 4, experience: "3–7 years", salary: "₹ 7–12 LPA", posted: "2026-02-01", description: "Implement health, safety and environment management systems on project sites, conduct hazard identification and safety audits.", requirements: ["Diploma/B.E. Civil or Safety Engineering", "3+ years in construction HSE", "NEBOSH IGC or equivalent certification preferred", "Knowledge of construction safety regulations", "Incident investigation and reporting skills"], is_filled: false },
  { title: "Manager — Finance & Accounts", department: "Finance", location: "Delhi", type: "Full-time", openings: 1, experience: "8–14 years", salary: "₹ 14–20 LPA", posted: "2026-01-20", description: "Manage project accounting, financial reporting, statutory compliance and subcontractor payment processes for a cluster of projects.", requirements: ["CA / MBA Finance", "8+ years in finance, preferably infrastructure sector", "Experience with SAP or equivalent ERP", "Knowledge of GST, TDS and project accounting", "Strong financial analysis skills"], is_filled: false },
  { title: "Business Development Executive", department: "Business Development", location: "Mumbai / Delhi", type: "Full-time", openings: 2, experience: "4–8 years", salary: "₹ 10–16 LPA", posted: "2026-02-14", description: "Identify new tenders, prepare pre-qualification documents, maintain client relationships and support bid preparation.", requirements: ["B.E. Civil Engineering + MBA preferred", "4+ years in BD or tendering for infrastructure", "Understanding of NHAI, NHIDCL, state PWD tendering", "Strong communication and presentation skills", "Willingness to travel across Maharashtra"], is_filled: false },
  { title: "IT Systems Engineer", department: "Corporate", location: "Delhi", type: "Full-time", openings: 1, experience: "3–6 years", salary: "₹ 8–14 LPA", posted: "2026-02-18", description: "Manage CPCL's IT infrastructure, ERP systems, project monitoring portals and cybersecurity systems.", requirements: ["B.Tech IT / Computer Science", "3+ years in enterprise IT", "Experience with SAP S/4HANA or similar ERP", "Network and server administration skills", "Knowledge of cloud systems (AWS/Azure)"], is_filled: false },
  { title: "Civil Engineering Intern", department: "Engineering", location: "Multiple Sites, Maharashtra", type: "Internship", openings: 10, experience: "0–1 year (Final year students)", salary: "₹ 15,000–20,000 / month", posted: "2026-02-20", description: "Six-month internship program for final year civil engineering students. Work on live highway and bridge construction projects.", requirements: ["Pursuing B.E./B.Tech Civil Engineering (final year)", "Strong academics (above 65%)", "Willingness to work at field sites", "Good communication skills", "Eagerness to learn construction practices"], is_filled: false },
];

const projects = [
  { slug: "delhi-vadodara-expressway-supervision", title: "Delhi–Vadodara Greenfield Expressway (Pkg 4 & 7)", sector: "Transportation", status: "Ongoing", region: "Rajasthan / Gujarat", location: "Rajasthan – Gujarat stretch, NH-148N", year: 2023, client: "NHAI", value: "₹ 2,880 Cr (project value)", description: "Construction supervision and Independent Engineering for Packages 4 and 7 of the Delhi–Vadodara 8-lane access-controlled greenfield expressway. CPCL's team oversees quality, safety and contract compliance for one of India's flagship Bharatmala Pariyojana corridors.", highlights: ["8-lane access-controlled greenfield alignment", "Two supervision packages", "Bharatmala Pariyojana Phase-I", "Project value ~$347 Million"] },
  { slug: "bharatmala-dpr-lot4-package5", title: "Bharatmala DPR — Economic Corridors (645 km)", sector: "Transportation", status: "Completed", region: "Pan-India", location: "Multiple states", year: 2022, client: "MoRT&H / NHAI", value: "₹ 38.6 Cr (consultancy fee)", description: "Preparation of Detailed Project Reports for 645.18 km of Economic Corridors under Bharatmala Pariyojana (Lot 4 / Package 5). CPCL conducted comprehensive surveys, alignment studies, traffic analysis and cost estimation using LiDAR and satellite imagery.", highlights: ["645.18 km of Economic Corridors", "LiDAR and drone surveys", "Consultancy fee: $4.65 Million", "Bharatmala Phase-I"] },
  { slug: "amritsar-jamnagar-economic-corridor", title: "Amritsar–Jamnagar Economic Corridor", sector: "Transportation", status: "Ongoing", region: "Rajasthan", location: "Rajasthan stretch, NH-754K", year: 2023, client: "NHAI", value: "Confidential", description: "Project consultancy for the Amritsar–Jamnagar 6-lane greenfield economic corridor in Rajasthan. CPCL provides construction supervision and Independent Engineering services ensuring compliance with NHAI quality standards on this strategically important corridor.", highlights: ["6-lane greenfield expressway", "Bharatmala corridor", "Rajasthan sector", "NHAI supervision mandate"] },
  { slug: "nh-75-jharkhand-widening", title: "NH-75 Widening & Reconstruction, Jharkhand", sector: "Transportation", status: "Completed", region: "Jharkhand", location: "Jharkhand, NH-75", year: 2023, client: "NHAI", value: "Confidential", description: "Authority Engineering and construction supervision for widening and reconstruction of 194.93 km on NH-75 in Jharkhand. CPCL ensured quality and safety compliance across the full project length through structured site audits and real-time reporting.", highlights: ["194.93 km supervision length", "Widening and reconstruction", "Authority Engineering mandate", "NH-75, Jharkhand"] },
  { slug: "south-central-railway-fls", title: "South Central Railway — Final Location Survey (1613 km)", sector: "Transportation", status: "Completed", region: "Andhra Pradesh / Telangana", location: "South Central Railway network", year: 2023, client: "South Central Railway", value: "₹ 23.8 Cr (consultancy fee)", description: "Final Location Surveys for 1,613.11 km of railway projects across South Central Railway zone, covering doubling and new line construction. CPCL deployed LiDAR systems and advanced GIS tools to deliver high-accuracy Digital Elevation Models, alignment designs and DPRs for each section.", highlights: ["1,613.11 km surveyed", "LiDAR and drone-based surveys", "Consultancy fee: $2.873 Million", "Doubling & new line projects"] },
  { slug: "western-railway-fls-ahmedabad-samakhiali", title: "Western Railway FLS — Ahmedabad–Mahesana–Samakhiali", sector: "Transportation", status: "Completed", region: "Gujarat", location: "Gujarat, Western Railway network", year: 2022, client: "Western Railway", value: "Confidential", description: "Final Location Survey for doubling and quadrupling of the Ahmedabad–Mahesana–Samakhiali corridor (338.23 km) on Western Railway. CPCL used drone LiDAR, satellite stereo imagery and BISAG-N data to produce precise terrain models and route alignment reports.", highlights: ["338.23 km survey length", "Doubling & quadrupling study", "Drone LiDAR + satellite DEM", "Western Railway"] },
  { slug: "brahmaputra-cable-stayed-bridge-assam", title: "Extra-Dosed Cable-Stayed Bridge — River Brahmaputra, Assam", sector: "Structures", status: "Ongoing", region: "Assam", location: "River Brahmaputra, Assam", year: 2023, client: "NHIDCL", value: "₹ 1,345 Cr (project value)", description: "Construction supervision for a 3.6-kilometre extra-dosed cable-stayed bridge across the Brahmaputra River in Assam. CPCL provides supervision, quality control and Structural Health Monitoring (SHM) services on this iconic infrastructure project, which is one of the longest bridges in Northeast India.", highlights: ["3.6 km extra-dosed cable-stayed bridge", "River Brahmaputra crossing", "Structural Health Monitoring (SHM)", "Project value ~$162 Million"] },
  { slug: "mahi-river-bridge-rajasthan", title: "Extra-Dosed Cable-Stayed Bridge — Mahi River, Rajasthan", sector: "Structures", status: "Ongoing", region: "Rajasthan", location: "River Mahi, Rajasthan", year: 2023, client: "NHAI", value: "Confidential", description: "Construction supervision and SHM consultancy for a major extra-dosed cable-stayed bridge across the Mahi River in Rajasthan, forming part of the Amritsar–Jamnagar expressway corridor. CPCL's team monitors structural behaviour in real time using embedded sensor networks and IoT data loggers.", highlights: ["Extra-dosed cable-stayed design", "Mahi River crossing", "Real-time SHM sensors", "Amritsar–Jamnagar corridor"] },
  { slug: "hatania-doania-bridge-west-bengal", title: "Extra-Dosed Bridge — River Hatania Doania, West Bengal", sector: "Structures", status: "Completed", region: "West Bengal", location: "River Hatania Doania, West Bengal", year: 2022, client: "PWD / NHIDCL", value: "Confidential", description: "Construction supervision of an extra-dosed cable-stayed bridge over the Hatania Doania River in West Bengal. CPCL deployed SHM systems and conducted rigorous quality audits throughout construction, ensuring compliance with IS/IRC structural codes.", highlights: ["Extra-dosed cable-stayed bridge", "SHM system deployed", "Rigorous quality audits", "West Bengal"] },
  { slug: "nhai-corridor-feasibility-study", title: "Highway Corridor Feasibility Studies — Multiple Packages", sector: "Advisory", status: "Completed", region: "Pan-India", location: "Multiple states", year: 2023, client: "NHAI", value: "Confidential", description: "Comprehensive pre-feasibility and feasibility studies for proposed national highway corridors across multiple states. CPCL prepared traffic demand forecasts, alignment alternatives, cost estimates and financial viability analyses to support NHAI's network planning under the Bharatmala programme.", highlights: ["Multi-corridor feasibility", "Traffic and revenue modelling", "Alignment alternatives analysis", "Bharatmala support"] },
  { slug: "nhidcl-northeast-highway-dpr", title: "NHIDCL — Highways DPR, Northeast India", sector: "Advisory", status: "Completed", region: "Northeast India", location: "Assam, Meghalaya, Manipur", year: 2022, client: "NHIDCL", value: "Confidential", description: "Preparation of Detailed Project Reports for National Highway projects in Northeast India under NHIDCL's network expansion programme. CPCL's survey teams navigated challenging hill terrain using drone LiDAR and conducted geotechnical investigations across multiple packages.", highlights: ["DPR for NH projects in Northeast", "Hill terrain surveys — LiDAR", "Geotechnical investigations", "NHIDCL programme"] },
  { slug: "ppp-transaction-advisory", title: "PPP Highway Transaction Advisory", sector: "Advisory", status: "Completed", region: "Multiple States", location: "Pan-India", year: 2023, client: "State Governments / NHAI", value: "Confidential", description: "Transaction advisory services for state and national highway authorities structuring public-private partnership (PPP) concession projects. CPCL prepared bid documents, financial models, traffic studies and risk matrices to support competitive tender processes.", highlights: ["PPP concession structuring", "Financial modelling & toll projections", "Risk analysis and contract design", "Multiple highway authorities"] },
  { slug: "urban-transport-master-plan", title: "Urban Transport Master Plan — Smart City Initiative", sector: "Urban & Water", status: "Completed", region: "Multiple States", location: "Select Smart Cities", year: 2022, client: "Urban Local Bodies / Smart City SPV", value: "Confidential", description: "Integrated urban transport master plans for Smart City mission cities, encompassing junction improvements, non-motorised transport corridors, parking studies, public transit integration and traffic simulation. CPCL delivered GIS-based planning tools and implementation roadmaps for city administrations.", highlights: ["Integrated urban transport planning", "Traffic simulation and modelling", "NMT corridors and pedestrian design", "Smart City mission"] },
  { slug: "environmental-impact-assessment-highway", title: "Environmental Impact Assessments — Highway Corridors", sector: "Urban & Water", status: "Completed", region: "Pan-India", location: "Multiple highway corridors", year: 2023, client: "NHAI / State PWDs", value: "Confidential", description: "Environmental Impact Assessments and Environmental Management Plans for multiple national and state highway corridors. CPCL's environment team prepared MoEFCC-compliant EIA reports, conducted biodiversity surveys, stakeholder consultations and secured regulatory clearances.", highlights: ["MoEFCC-compliant EIAs", "Biodiversity and ecology surveys", "Stakeholder consultations", "Clearances facilitated"] },
];

const directors = [
  { name: "Sanjay Kumar Sinha", title: "Founder & Managing Director", short_title: "Founder & MD", bio: "Sanjay Kumar Sinha founded Chaitanya Projects Consultancy in 2004 with a vision to deliver world-class infrastructure consultancy to India's growing transport sector. An IIT-Delhi alumnus, he has built CPCL from a lean consultancy into a 1,500-professional firm with 25+ offices nationwide, delivering critical projects for NHAI, MoRT&H, NHIDCL and Indian Railways. He is widely regarded for building a culture of technical excellence, humility and integrity — values he describes as the bedrock of CPCL's reputation in India's construction and consultancy world.", education: ["B.E. Civil Engineering, REC Warangal (Now NIT Warangal)", "M.Tech Structural Engineering, IIT Delhi"], expertise: ["Infrastructure Consultancy", "Project Management", "Business Strategy", "Highways & Expressways"], experience: 25, display_order: 1, is_board_member: true },
  { name: "Neeraj Sinha", title: "Director — Operations", short_title: "Director (Ops)", bio: "Neeraj Sinha oversees all technical operations and quality control at CPCL. An IIT-Delhi alumnus with a specialisation in Transportation Engineering, he has led the delivery of marquee projects including multi-package supervision on the Delhi-Vadodara Expressway, LiDAR-assisted Final Location Surveys for Indian Railways, and construction supervision of extra-dosed cable-stayed bridges across India. His team has deployed cutting-edge technologies including drone LiDAR, satellite stereo imagery and sensor-based Structural Health Monitoring on complex bridge projects.", education: ["B.Tech Civil Engineering", "M.Tech Transportation Engineering, IIT Delhi"], expertise: ["Transportation Engineering", "LiDAR & Remote Sensing", "Structural Health Monitoring", "Railway Surveys"], experience: 20, display_order: 2, is_board_member: true },
];

const services = [
  { slug: "transportation-services", title: "Transportation Services", short_title: "Transportation", icon: "Route", short_desc: "End-to-end consultancy for highways, expressways, and railway infrastructure — from DPR and feasibility to construction supervision and independent engineering.", full_desc: "CPCL's Transportation division is the cornerstone of the firm, delivering comprehensive consultancy across India's national highway and railway expansion programmes. Our teams have prepared DPRs for thousands of kilometres of Bharatmala corridors, supervised multi-package expressway construction for NHAI, and conducted Final Location Surveys for Indian Railways across major networks. We combine decades of domain expertise with the latest geospatial and remote-sensing technologies to deliver accurate, timely and cost-effective solutions.", scope: ["Detailed Project Reports (DPR) for highways and expressways", "Construction supervision and Independent Engineering (IE) for NH projects", "Authority Engineering (AE) under NHAI and MoRT&H frameworks", "Final Location Surveys (FLS) for railway doubling, quadrupling and gauge conversion", "Feasibility studies for new highway corridors and bypasses", "Traffic impact assessments and road safety audits"], methodology: ["LiDAR and drone survey for precise terrain modelling", "Stereo satellite imagery via NRSC and BISAG-N for DEM generation", "GIS-based alignment design and optimisation", "IRC / IS code-compliant design standards", "Earned Value Management (EVM) for project monitoring"], projects_count: 80 },
  { slug: "structural-bridge-engineering", title: "Structural & Bridge Engineering", short_title: "Structures", icon: "Landmark", short_desc: "Design review, construction supervision and structural health monitoring for major bridges including extra-dosed cable-stayed and long-span river crossings.", full_desc: "CPCL's Structures division brings deep expertise in complex bridge types — from balanced cantilever PSC bridges to landmark extra-dosed cable-stayed structures. We have supervised the construction of major bridges across the Brahmaputra (Assam), Hatania Doania (West Bengal) and Mahi (Rajasthan) rivers, combining rigorous quality systems with advanced sensor-based Structural Health Monitoring (SHM). Our teams ensure that every structure meets international safety standards while delivering on time and within budget.", scope: ["Construction supervision for major and special-type bridges", "Extra-dosed and cable-stayed bridge design review", "Independent structural audits and load assessments", "Structural Health Monitoring (SHM) — sensor installation and data interpretation", "Bridge rehabilitation and repair consultancy", "Hydraulic modelling for bridge site selection"], methodology: ["Finite element analysis (STAAD, MIDAS Civil)", "Real-time SHM through strain gauges, accelerometers and IoT data loggers", "IS / IRC bridge codes and international standards", "Third-party inspection and non-destructive testing (NDT)", "Load testing protocols and post-construction monitoring"], projects_count: 35 },
  { slug: "urban-water-infrastructure", title: "Urban & Water Infrastructure", short_title: "Urban & Water", icon: "Building2", short_desc: "Planning and consultancy for smart urban roads, water supply, drainage and environmental infrastructure across India's fast-growing cities.", full_desc: "CPCL supports urban local bodies, development authorities and state governments in planning and implementing integrated urban infrastructure. Our multidisciplinary teams develop urban transport master plans, design water supply and sewerage networks, conduct environmental impact assessments and advise on sustainable drainage systems. We leverage GIS, hydraulic simulation and modern planning tools to deliver future-ready urban infrastructure solutions.", scope: ["Urban transport planning and traffic simulation", "Water supply design and distribution network planning", "Sewerage network and STP design consultancy", "Storm water drainage planning using hydraulic models", "Environmental Impact Assessments (EIA) for infrastructure projects", "Architectural design and urban landscaping"], methodology: ["GIS-based network mapping and demand analysis", "Hydraulic simulation (SWMM, WaterGEMS, SewerGEMS)", "MoEFCC-compliant EIA methodology", "Smart city integration — SCADA, IoT, sensor networks", "Stakeholder consultation and public hearing management"], projects_count: 30 },
  { slug: "advisory-services", title: "Advisory Services", short_title: "Advisory", icon: "ClipboardCheck", short_desc: "Strategic infrastructure advisory — transaction advisory, feasibility studies, DPR preparation, and Independent/Authority Engineer services for major government programmes.", full_desc: "CPCL's Advisory Services division provides high-value strategic and technical advisory to governments, public sector undertakings, multilateral agencies and private developers. From transaction advisory on PPP highway concessions to feasibility studies for new corridors, our advisory teams apply rigorous analytical frameworks and deep sectoral knowledge to help clients make informed infrastructure investment decisions. We also serve as Independent Engineers and Authority Engineers on major NHAI, NHIDCL and state highway projects.", scope: ["Transaction advisory for PPP highway concessions", "Pre-feasibility and detailed feasibility studies", "Lender's Independent Engineer (LIE) services", "Authority Engineer (AE) and Independent Engineer (IE) for NHAI / NHIDCL", "Project appraisal and due diligence for financiers", "DPR preparation under Bharatmala and state highway programmes"], methodology: ["Traffic and revenue modelling (toll feasibility, traffic counts)", "Financial modelling and NPV / IRR analysis", "Concession agreement review and contract management", "Risk matrix analysis and mitigation planning", "PMBOK-based project monitoring frameworks"], projects_count: 50 },
];

const financialMetrics = [
  { label: "Revenue from Ops (FY25)", value: "₹ 136.25 Cr", change: "+49.8%", positive: true },
  { label: "Total Income (FY25)", value: "₹ 137.43 Cr", change: "+49.4%", positive: true },
  { label: "Profit After Tax", value: "₹ 11.63 Cr", change: "+30.7%", positive: true },
  { label: "Net Profit Ratio", value: "8.54%", change: "", positive: true },
  { label: "Return on Equity (ROE)", value: "26.95%", change: "", positive: true },
  { label: "Debt / Equity Ratio", value: "0.64x", change: "+0.13x", positive: false },
];

const analyticalRatios = [
  { label: "Current Ratio", fy25: "1.60", fy24: "1.45", note: "Improved liquidity" },
  { label: "Debt-Equity Ratio", fy25: "0.64", fy24: "0.51", note: "Higher borrowings for growth" },
  { label: "ROE", fy25: "26.95%", fy24: "—", note: "" },
  { label: "Net Profit Ratio", fy25: "8.54%", fy24: "—", note: "" },
  { label: "Trade Payables Turnover", fy25: "13.70", fy24: "—", note: "Higher professional fees" },
  { label: "Total Assets (₹ Cr)", fy25: "105.21", fy24: "76.27", note: "+38% asset growth" },
];

const shareholdings = [
  { name: "Promoters", value: 65.0, color: "#0b3b5b" },
  { name: "Strategic Investors", value: 12.0, color: "#0ca582" },
  { name: "Institutional", value: 10.0, color: "#1a5276" },
  { name: "Public / Others", value: 13.0, color: "#0ec99c" },
];

const incomeStatements = [
  { particulars: "Revenue from Operations", fy25: "13,624.59", fy24: "9,095.08" },
  { particulars: "Total Income", fy25: "13,742.64", fy24: "9,200.79" },
  { particulars: "Profit Before Tax (PBT)", fy25: "1,636.98", fy24: "1,196.81" },
  { particulars: "Profit After Tax (PAT)", fy25: "1,163.01", fy24: "889.65" },
  { particulars: "Total Assets", fy25: "10,521.14", fy24: "7,627.18" },
  { particulars: "Share Capital", fy25: "1,352.40", fy24: "8.40" },
];

const companyInfo = {
  name: "Chaitanya Projects Consultancy Limited",
  short_name: "CPCL",
  tagline: "Building Infrastructure. Delivering Excellence.",
  founded_year: 2004,
  cin: "—",
  registered_address: "907-908, Tower A, The Address, Plot No. 4B, District Centre, Mayur Vihar, New Delhi – 110091",
  corporate_office: "C-5, 2nd Floor, R.K. Tower, Sector-4, Dwarka, New Delhi",
  phone: "+91-120-4110472",
  tollfree: "",
  email: "info@chaitanyaprojects.com",
  contact_email: "contact@chaitanyaprojects.com",
  hr_email: "careers@chaitanyaprojects.com",
  investor_email: "investors@chaitanyaprojects.com",
  website: "https://www.chaitanyaprojects.com",
  linkedin: "https://linkedin.com/company/chaitanya-projects",
  credit_rating_long_term: "CRISIL BBB- / Stable",
  credit_rating_short_term: "CRISIL A3",
  clients: ["NHAI", "MoRT&H", "NHIDCL", "Indian Railways"],
  market_cap: "Unlisted",
  stock_code: "Not listed",
  listing: "Public Ltd. (Oct 2024)",
  dividend_yield: "—",
  book_value: "₹ 34.19 Cr (Net Worth)",
  eps: "₹ 11.63 Cr (PAT FY25)",
};

// ── SEED ─────────────────────────────────────────────────────────────────────

async function seed() {
  console.log('🌱 Seeding Strapi...\n');

  // Job Postings
  console.log(`📋 Jobs (${jobs.length})...`);
  for (const job of jobs) {
    const r = await post('job-postings', { ...job, status: 'published' });
    console.log(r ? `  ✓ ${job.title}` : `  ✗ ${job.title}`);
  }

  // Projects
  console.log(`\n🏗  Projects (${projects.length})...`);
  for (const p of projects) {
    const r = await post('projects', { ...p, status: 'published' });
    console.log(r ? `  ✓ ${p.title}` : `  ✗ ${p.title}`);
  }

  // Directors
  console.log(`\n👤 Directors (${directors.length})...`);
  for (const d of directors) {
    const r = await post('directors', { ...d, status: 'published' });
    console.log(r ? `  ✓ ${d.name}` : `  ✗ ${d.name}`);
  }

  // Services
  console.log(`\n⚙️  Services (${services.length})...`);
  for (const s of services) {
    const r = await post('services', { ...s, status: 'published' });
    console.log(r ? `  ✓ ${s.title}` : `  ✗ ${s.title}`);
  }

  // Financial Metrics (no draft/publish)
  console.log(`\n📊 Financial Metrics (${financialMetrics.length})...`);
  for (const m of financialMetrics) {
    const r = await post('financial-metrics', m);
    console.log(r ? `  ✓ ${m.label}` : `  ✗ ${m.label}`);
  }

  // Analytical Ratios
  console.log(`\n📈 Analytical Ratios (${analyticalRatios.length})...`);
  for (const r of analyticalRatios) {
    const res = await post('analytical-ratios', r);
    console.log(res ? `  ✓ ${r.label}` : `  ✗ ${r.label}`);
  }

  // Shareholdings
  console.log(`\n🥧 Shareholdings (${shareholdings.length})...`);
  for (const s of shareholdings) {
    const r = await post('shareholdings', s);
    console.log(r ? `  ✓ ${s.name}` : `  ✗ ${s.name}`);
  }

  // Income Statements
  console.log(`\n💰 Income Statement (${incomeStatements.length})...`);
  for (const i of incomeStatements) {
    const r = await post('income-statements', i);
    console.log(r ? `  ✓ ${i.particulars}` : `  ✗ ${i.particulars}`);
  }

  // Company Info (single type — PUT)
  console.log('\n🏢 Company Info...');
  const ci = await put('company-info', companyInfo);
  console.log(ci ? '  ✓ Company Info saved' : '  ✗ Company Info failed');

  console.log('\n✅ Seed complete.\n');
}

seed().catch(console.error);
