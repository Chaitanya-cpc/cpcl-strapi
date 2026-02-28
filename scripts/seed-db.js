'use strict';
/**
 * Direct SQLite seed — inserts all static data without needing HTTP/token.
 * Run from: /root/webapps/cpcl-strapi
 *   node scripts/seed-db.js
 */
const db = require('better-sqlite3')('.tmp/data.db');
const crypto = require('crypto');

const now = Date.now();
const uid = () => crypto.randomBytes(12).toString('hex');
const J = (v) => JSON.stringify(v);   // store JSON arrays

// ── JOBS ─────────────────────────────────────────────────────────────────────
const insertJob = db.prepare(`
  INSERT INTO job_postings
    (document_id, title, department, location, type, openings, experience, salary,
     posted, description, requirements, is_filled, created_at, updated_at, published_at)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
`);

const jobs = [
  ["Senior Highway Engineer","Engineering","Delhi / Site-based","Full-time",3,"8–14 years","₹ 15–22 LPA","2026-02-10","Lead design and supervision of highway projects including geometric design, pavement design and construction coordination with NHAI/NHIDCL clients.",J(["B.E./M.Tech Civil Engineering","8+ years in highway design/construction","Experience with MoRTH specifications","Proficiency in AutoCAD, Civil 3D","Knowledge of IRC codes and NHAI guidelines"]),0],
  ["Structural Engineer — Bridges","Engineering","Delhi / Site-based","Full-time",2,"5–10 years","₹ 12–18 LPA","2026-02-08","Design and detailing of RCC/PSC bridges and structures. Liaise with consultants, manage approvals and supervise construction.",J(["B.E./M.Tech Structural/Civil Engineering","5+ years in bridge design or construction","Knowledge of IRC:6, IRC:21, IRC:112","Experience with STAAD.Pro / SAP2000","Ability to read and interpret detailed drawings"]),0],
  ["Project Manager — Infrastructure","Operations","Field Sites, Maharashtra","Full-time",4,"12–18 years","₹ 20–32 LPA","2026-02-05","Lead end-to-end delivery of road/bridge projects from mobilisation to commissioning. Manage teams, budgets, schedule and client relationships.",J(["B.E. Civil Engineering; PMP or equivalent preferred","12+ years with large infrastructure projects","Experience managing ₹100 Cr+ projects","Strong client management and reporting skills","Proficiency in Primavera P6 or MS Project"]),0],
  ["Quantity Surveyor","Commercial","Delhi","Full-time",2,"5–10 years","₹ 10–16 LPA","2026-01-28","Prepare BOQ, rate analysis, interim payment certificates, variation orders and final accounts for civil infrastructure projects.",J(["B.E./Diploma Civil Engineering or B.Sc Quantity Surveying","5+ years in quantity surveying for infrastructure","Knowledge of CPWD/MoRTH schedule of rates","Proficiency in MS Excel and quantity software","Understanding of contract conditions (FIDIC / GCC)"]),0],
  ["Quality Control Engineer","Quality & HSE","Field Sites, Maharashtra","Full-time",5,"4–8 years","₹ 8–14 LPA","2026-02-12","Implement QA/QC plans on construction sites, conduct lab and field tests, maintain test records and prepare quality reports.",J(["B.E. Civil Engineering","4+ years in site quality control","Knowledge of MoRTH / IS standard testing","Familiarity with NHAI quality systems","Ability to manage site labs"]),0],
  ["HSE Officer","Quality & HSE","Field Sites, Maharashtra","Full-time",4,"3–7 years","₹ 7–12 LPA","2026-02-01","Implement health, safety and environment management systems on project sites, conduct hazard identification and safety audits.",J(["Diploma/B.E. Civil or Safety Engineering","3+ years in construction HSE","NEBOSH IGC or equivalent certification preferred","Knowledge of construction safety regulations","Incident investigation and reporting skills"]),0],
  ["Manager — Finance & Accounts","Finance","Delhi","Full-time",1,"8–14 years","₹ 14–20 LPA","2026-01-20","Manage project accounting, financial reporting, statutory compliance and subcontractor payment processes for a cluster of projects.",J(["CA / MBA Finance","8+ years in finance, preferably infrastructure sector","Experience with SAP or equivalent ERP","Knowledge of GST, TDS and project accounting","Strong financial analysis skills"]),0],
  ["Business Development Executive","Business Development","Mumbai / Delhi","Full-time",2,"4–8 years","₹ 10–16 LPA","2026-02-14","Identify new tenders, prepare pre-qualification documents, maintain client relationships and support bid preparation.",J(["B.E. Civil Engineering + MBA preferred","4+ years in BD or tendering for infrastructure","Understanding of NHAI, NHIDCL, state PWD tendering","Strong communication and presentation skills","Willingness to travel across Maharashtra"]),0],
  ["IT Systems Engineer","Corporate","Delhi","Full-time",1,"3–6 years","₹ 8–14 LPA","2026-02-18","Manage CPCL's IT infrastructure, ERP systems, project monitoring portals and cybersecurity systems.",J(["B.Tech IT / Computer Science","3+ years in enterprise IT","Experience with SAP S/4HANA or similar ERP","Network and server administration skills","Knowledge of cloud systems (AWS/Azure)"]),0],
  ["Civil Engineering Intern","Engineering","Multiple Sites, Maharashtra","Internship",10,"0–1 year (Final year students)","₹ 15,000–20,000 / month","2026-02-20","Six-month internship program for final year civil engineering students. Work on live highway and bridge construction projects.",J(["Pursuing B.E./B.Tech Civil Engineering (final year)","Strong academics (above 65%)","Willingness to work at field sites","Good communication skills","Eagerness to learn construction practices"]),0],
];

console.log('📋 Jobs...');
for (const j of jobs) {
  try { insertJob.run(uid(), ...j, now, now, now); console.log('  ✓', j[0]); }
  catch(e) { console.log('  ✗', j[0], e.message); }
}

// ── PROJECTS ──────────────────────────────────────────────────────────────────
const insertProject = db.prepare(`
  INSERT INTO projects
    (document_id, slug, title, sector, status, region, location, year, client,
     value, description, highlights, created_at, updated_at, published_at)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
`);

const projects = [
  ["delhi-vadodara-expressway-supervision","Delhi–Vadodara Greenfield Expressway (Pkg 4 & 7)","Transportation","Ongoing","Rajasthan / Gujarat","Rajasthan – Gujarat stretch, NH-148N",2023,"NHAI","₹ 2,880 Cr (project value)","Construction supervision and Independent Engineering for Packages 4 and 7 of the Delhi–Vadodara 8-lane access-controlled greenfield expressway. CPCL's team oversees quality, safety and contract compliance for one of India's flagship Bharatmala Pariyojana corridors.",J(["8-lane access-controlled greenfield alignment","Two supervision packages","Bharatmala Pariyojana Phase-I","Project value ~$347 Million"])],
  ["bharatmala-dpr-lot4-package5","Bharatmala DPR — Economic Corridors (645 km)","Transportation","Completed","Pan-India","Multiple states",2022,"MoRT&H / NHAI","₹ 38.6 Cr (consultancy fee)","Preparation of Detailed Project Reports for 645.18 km of Economic Corridors under Bharatmala Pariyojana (Lot 4 / Package 5). CPCL conducted comprehensive surveys, alignment studies, traffic analysis and cost estimation using LiDAR and satellite imagery.",J(["645.18 km of Economic Corridors","LiDAR and drone surveys","Consultancy fee: $4.65 Million","Bharatmala Phase-I"])],
  ["amritsar-jamnagar-economic-corridor","Amritsar–Jamnagar Economic Corridor","Transportation","Ongoing","Rajasthan","Rajasthan stretch, NH-754K",2023,"NHAI","Confidential","Project consultancy for the Amritsar–Jamnagar 6-lane greenfield economic corridor in Rajasthan. CPCL provides construction supervision and Independent Engineering services ensuring compliance with NHAI quality standards on this strategically important corridor.",J(["6-lane greenfield expressway","Bharatmala corridor","Rajasthan sector","NHAI supervision mandate"])],
  ["nh-75-jharkhand-widening","NH-75 Widening & Reconstruction, Jharkhand","Transportation","Completed","Jharkhand","Jharkhand, NH-75",2023,"NHAI","Confidential","Authority Engineering and construction supervision for widening and reconstruction of 194.93 km on NH-75 in Jharkhand. CPCL ensured quality and safety compliance across the full project length through structured site audits and real-time reporting.",J(["194.93 km supervision length","Widening and reconstruction","Authority Engineering mandate","NH-75, Jharkhand"])],
  ["south-central-railway-fls","South Central Railway — Final Location Survey (1613 km)","Transportation","Completed","Andhra Pradesh / Telangana","South Central Railway network",2023,"South Central Railway","₹ 23.8 Cr (consultancy fee)","Final Location Surveys for 1,613.11 km of railway projects across South Central Railway zone, covering doubling and new line construction. CPCL deployed LiDAR systems and advanced GIS tools to deliver high-accuracy Digital Elevation Models, alignment designs and DPRs for each section.",J(["1,613.11 km surveyed","LiDAR and drone-based surveys","Consultancy fee: $2.873 Million","Doubling & new line projects"])],
  ["western-railway-fls-ahmedabad-samakhiali","Western Railway FLS — Ahmedabad–Mahesana–Samakhiali","Transportation","Completed","Gujarat","Gujarat, Western Railway network",2022,"Western Railway","Confidential","Final Location Survey for doubling and quadrupling of the Ahmedabad–Mahesana–Samakhiali corridor (338.23 km) on Western Railway. CPCL used drone LiDAR, satellite stereo imagery and BISAG-N data to produce precise terrain models and route alignment reports.",J(["338.23 km survey length","Doubling & quadrupling study","Drone LiDAR + satellite DEM","Western Railway"])],
  ["brahmaputra-cable-stayed-bridge-assam","Extra-Dosed Cable-Stayed Bridge — River Brahmaputra, Assam","Structures","Ongoing","Assam","River Brahmaputra, Assam",2023,"NHIDCL","₹ 1,345 Cr (project value)","Construction supervision for a 3.6-kilometre extra-dosed cable-stayed bridge across the Brahmaputra River in Assam. CPCL provides supervision, quality control and Structural Health Monitoring (SHM) services on this iconic infrastructure project, which is one of the longest bridges in Northeast India.",J(["3.6 km extra-dosed cable-stayed bridge","River Brahmaputra crossing","Structural Health Monitoring (SHM)","Project value ~$162 Million"])],
  ["mahi-river-bridge-rajasthan","Extra-Dosed Cable-Stayed Bridge — Mahi River, Rajasthan","Structures","Ongoing","Rajasthan","River Mahi, Rajasthan",2023,"NHAI","Confidential","Construction supervision and SHM consultancy for a major extra-dosed cable-stayed bridge across the Mahi River in Rajasthan, forming part of the Amritsar–Jamnagar expressway corridor. CPCL's team monitors structural behaviour in real time using embedded sensor networks and IoT data loggers.",J(["Extra-dosed cable-stayed design","Mahi River crossing","Real-time SHM sensors","Amritsar–Jamnagar corridor"])],
  ["hatania-doania-bridge-west-bengal","Extra-Dosed Bridge — River Hatania Doania, West Bengal","Structures","Completed","West Bengal","River Hatania Doania, West Bengal",2022,"PWD / NHIDCL","Confidential","Construction supervision of an extra-dosed cable-stayed bridge over the Hatania Doania River in West Bengal. CPCL deployed SHM systems and conducted rigorous quality audits throughout construction, ensuring compliance with IS/IRC structural codes.",J(["Extra-dosed cable-stayed bridge","SHM system deployed","Rigorous quality audits","West Bengal"])],
  ["nhai-corridor-feasibility-study","Highway Corridor Feasibility Studies — Multiple Packages","Advisory","Completed","Pan-India","Multiple states",2023,"NHAI","Confidential","Comprehensive pre-feasibility and feasibility studies for proposed national highway corridors across multiple states. CPCL prepared traffic demand forecasts, alignment alternatives, cost estimates and financial viability analyses to support NHAI's network planning under the Bharatmala programme.",J(["Multi-corridor feasibility","Traffic and revenue modelling","Alignment alternatives analysis","Bharatmala support"])],
  ["nhidcl-northeast-highway-dpr","NHIDCL — Highways DPR, Northeast India","Advisory","Completed","Northeast India","Assam, Meghalaya, Manipur",2022,"NHIDCL","Confidential","Preparation of Detailed Project Reports for National Highway projects in Northeast India under NHIDCL's network expansion programme. CPCL's survey teams navigated challenging hill terrain using drone LiDAR and conducted geotechnical investigations across multiple packages.",J(["DPR for NH projects in Northeast","Hill terrain surveys — LiDAR","Geotechnical investigations","NHIDCL programme"])],
  ["ppp-transaction-advisory","PPP Highway Transaction Advisory","Advisory","Completed","Multiple States","Pan-India",2023,"State Governments / NHAI","Confidential","Transaction advisory services for state and national highway authorities structuring public-private partnership (PPP) concession projects. CPCL prepared bid documents, financial models, traffic studies and risk matrices to support competitive tender processes.",J(["PPP concession structuring","Financial modelling & toll projections","Risk analysis and contract design","Multiple highway authorities"])],
  ["urban-transport-master-plan","Urban Transport Master Plan — Smart City Initiative","Urban & Water","Completed","Multiple States","Select Smart Cities",2022,"Urban Local Bodies / Smart City SPV","Confidential","Integrated urban transport master plans for Smart City mission cities, encompassing junction improvements, non-motorised transport corridors, parking studies, public transit integration and traffic simulation. CPCL delivered GIS-based planning tools and implementation roadmaps for city administrations.",J(["Integrated urban transport planning","Traffic simulation and modelling","NMT corridors and pedestrian design","Smart City mission"])],
  ["environmental-impact-assessment-highway","Environmental Impact Assessments — Highway Corridors","Urban & Water","Completed","Pan-India","Multiple highway corridors",2023,"NHAI / State PWDs","Confidential","Environmental Impact Assessments and Environmental Management Plans for multiple national and state highway corridors. CPCL's environment team prepared MoEFCC-compliant EIA reports, conducted biodiversity surveys, stakeholder consultations and secured regulatory clearances.",J(["MoEFCC-compliant EIAs","Biodiversity and ecology surveys","Stakeholder consultations","Clearances facilitated"])],
];

console.log('\n🏗  Projects...');
for (const p of projects) {
  try { insertProject.run(uid(), ...p, now, now, now); console.log('  ✓', p[1]); }
  catch(e) { console.log('  ✗', p[1], e.message); }
}

// ── DIRECTORS ─────────────────────────────────────────────────────────────────
const insertDirector = db.prepare(`
  INSERT INTO directors
    (document_id, name, title, short_title, bio, education, expertise, experience,
     display_order, is_board_member, created_at, updated_at, published_at)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)
`);

console.log('\n👤 Directors...');
const directors = [
  ["Sanjay Kumar Sinha","Founder & Managing Director","Founder & MD","Sanjay Kumar Sinha founded Chaitanya Projects Consultancy in 2004 with a vision to deliver world-class infrastructure consultancy to India's growing transport sector. An IIT-Delhi alumnus, he has built CPCL from a lean consultancy into a 1,500-professional firm with 25+ offices nationwide, delivering critical projects for NHAI, MoRT&H, NHIDCL and Indian Railways. He is widely regarded for building a culture of technical excellence, humility and integrity — values he describes as the bedrock of CPCL's reputation in India's construction and consultancy world.",J(["B.E. Civil Engineering, REC Warangal (Now NIT Warangal)","M.Tech Structural Engineering, IIT Delhi"]),J(["Infrastructure Consultancy","Project Management","Business Strategy","Highways & Expressways"]),25,1,1],
  ["Neeraj Sinha","Director — Operations","Director (Ops)","Neeraj Sinha oversees all technical operations and quality control at CPCL. An IIT-Delhi alumnus with a specialisation in Transportation Engineering, he has led the delivery of marquee projects including multi-package supervision on the Delhi-Vadodara Expressway, LiDAR-assisted Final Location Surveys for Indian Railways, and construction supervision of extra-dosed cable-stayed bridges across India. His team has deployed cutting-edge technologies including drone LiDAR, satellite stereo imagery and sensor-based Structural Health Monitoring on complex bridge projects.",J(["B.Tech Civil Engineering","M.Tech Transportation Engineering, IIT Delhi"]),J(["Transportation Engineering","LiDAR & Remote Sensing","Structural Health Monitoring","Railway Surveys"]),20,2,1],
];
for (const d of directors) {
  try { insertDirector.run(uid(), ...d, now, now, now); console.log('  ✓', d[0]); }
  catch(e) { console.log('  ✗', d[0], e.message); }
}

// ── SERVICES ──────────────────────────────────────────────────────────────────
const insertService = db.prepare(`
  INSERT INTO services
    (document_id, slug, title, short_title, icon, short_desc, full_desc,
     scope, methodology, projects_count, created_at, updated_at, published_at)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)
`);

const services = [
  ["transportation-services","Transportation Services","Transportation","Route","End-to-end consultancy for highways, expressways, and railway infrastructure — from DPR and feasibility to construction supervision and independent engineering.","CPCL's Transportation division is the cornerstone of the firm, delivering comprehensive consultancy across India's national highway and railway expansion programmes. Our teams have prepared DPRs for thousands of kilometres of Bharatmala corridors, supervised multi-package expressway construction for NHAI, and conducted Final Location Surveys for Indian Railways across major networks. We combine decades of domain expertise with the latest geospatial and remote-sensing technologies to deliver accurate, timely and cost-effective solutions.",J(["Detailed Project Reports (DPR) for highways and expressways","Construction supervision and Independent Engineering (IE) for NH projects","Authority Engineering (AE) under NHAI and MoRT&H frameworks","Final Location Surveys (FLS) for railway doubling, quadrupling and gauge conversion","Feasibility studies for new highway corridors and bypasses","Traffic impact assessments and road safety audits"]),J(["LiDAR and drone survey for precise terrain modelling","Stereo satellite imagery via NRSC and BISAG-N for DEM generation","GIS-based alignment design and optimisation","IRC / IS code-compliant design standards","Earned Value Management (EVM) for project monitoring"]),80],
  ["structural-bridge-engineering","Structural & Bridge Engineering","Structures","Landmark","Design review, construction supervision and structural health monitoring for major bridges including extra-dosed cable-stayed and long-span river crossings.","CPCL's Structures division brings deep expertise in complex bridge types — from balanced cantilever PSC bridges to landmark extra-dosed cable-stayed structures. We have supervised the construction of major bridges across the Brahmaputra (Assam), Hatania Doania (West Bengal) and Mahi (Rajasthan) rivers, combining rigorous quality systems with advanced sensor-based Structural Health Monitoring (SHM). Our teams ensure that every structure meets international safety standards while delivering on time and within budget.",J(["Construction supervision for major and special-type bridges","Extra-dosed and cable-stayed bridge design review","Independent structural audits and load assessments","Structural Health Monitoring (SHM) — sensor installation and data interpretation","Bridge rehabilitation and repair consultancy","Hydraulic modelling for bridge site selection"]),J(["Finite element analysis (STAAD, MIDAS Civil)","Real-time SHM through strain gauges, accelerometers and IoT data loggers","IS / IRC bridge codes and international standards","Third-party inspection and non-destructive testing (NDT)","Load testing protocols and post-construction monitoring"]),35],
  ["urban-water-infrastructure","Urban & Water Infrastructure","Urban & Water","Building2","Planning and consultancy for smart urban roads, water supply, drainage and environmental infrastructure across India's fast-growing cities.","CPCL supports urban local bodies, development authorities and state governments in planning and implementing integrated urban infrastructure. Our multidisciplinary teams develop urban transport master plans, design water supply and sewerage networks, conduct environmental impact assessments and advise on sustainable drainage systems. We leverage GIS, hydraulic simulation and modern planning tools to deliver future-ready urban infrastructure solutions.",J(["Urban transport planning and traffic simulation","Water supply design and distribution network planning","Sewerage network and STP design consultancy","Storm water drainage planning using hydraulic models","Environmental Impact Assessments (EIA) for infrastructure projects","Architectural design and urban landscaping"]),J(["GIS-based network mapping and demand analysis","Hydraulic simulation (SWMM, WaterGEMS, SewerGEMS)","MoEFCC-compliant EIA methodology","Smart city integration — SCADA, IoT, sensor networks","Stakeholder consultation and public hearing management"]),30],
  ["advisory-services","Advisory Services","Advisory","ClipboardCheck","Strategic infrastructure advisory — transaction advisory, feasibility studies, DPR preparation, and Independent/Authority Engineer services for major government programmes.","CPCL's Advisory Services division provides high-value strategic and technical advisory to governments, public sector undertakings, multilateral agencies and private developers. From transaction advisory on PPP highway concessions to feasibility studies for new corridors, our advisory teams apply rigorous analytical frameworks and deep sectoral knowledge to help clients make informed infrastructure investment decisions. We also serve as Independent Engineers and Authority Engineers on major NHAI, NHIDCL and state highway projects.",J(["Transaction advisory for PPP highway concessions","Pre-feasibility and detailed feasibility studies","Lender's Independent Engineer (LIE) services","Authority Engineer (AE) and Independent Engineer (IE) for NHAI / NHIDCL","Project appraisal and due diligence for financiers","DPR preparation under Bharatmala and state highway programmes"]),J(["Traffic and revenue modelling (toll feasibility, traffic counts)","Financial modelling and NPV / IRR analysis","Concession agreement review and contract management","Risk matrix analysis and mitigation planning","PMBOK-based project monitoring frameworks"]),50],
];

console.log('\n⚙️  Services...');
for (const s of services) {
  try { insertService.run(uid(), ...s, now, now, now); console.log('  ✓', s[1]); }
  catch(e) { console.log('  ✗', s[1], e.message); }
}

// ── FINANCIAL METRICS ─────────────────────────────────────────────────────────
const insertMetric = db.prepare(`
  INSERT INTO financial_metrics (document_id, label, value, change, positive, created_at, updated_at, published_at)
  VALUES (?,?,?,?,?,?,?,?)
`);

const metrics = [
  ["Revenue from Ops (FY25)","₹ 136.25 Cr","+49.8%",1],
  ["Total Income (FY25)","₹ 137.43 Cr","+49.4%",1],
  ["Profit After Tax","₹ 11.63 Cr","+30.7%",1],
  ["Net Profit Ratio","8.54%","",1],
  ["Return on Equity (ROE)","26.95%","",1],
  ["Debt / Equity Ratio","0.64x","+0.13x",0],
];

console.log('\n📊 Financial Metrics...');
for (const m of metrics) {
  try { insertMetric.run(uid(), ...m, now, now, now); console.log('  ✓', m[0]); }
  catch(e) { console.log('  ✗', m[0], e.message); }
}

// ── ANALYTICAL RATIOS ─────────────────────────────────────────────────────────
const insertRatio = db.prepare(`
  INSERT INTO analytical_ratios (document_id, label, fy_25, fy_24, note, created_at, updated_at, published_at)
  VALUES (?,?,?,?,?,?,?,?)
`);

const ratios = [
  ["Current Ratio","1.60","1.45","Improved liquidity"],
  ["Debt-Equity Ratio","0.64","0.51","Higher borrowings for growth"],
  ["ROE","26.95%","—",""],
  ["Net Profit Ratio","8.54%","—",""],
  ["Trade Payables Turnover","13.70","—","Higher professional fees"],
  ["Total Assets (₹ Cr)","105.21","76.27","+38% asset growth"],
];

console.log('\n📈 Analytical Ratios...');
for (const r of ratios) {
  try { insertRatio.run(uid(), ...r, now, now, now); console.log('  ✓', r[0]); }
  catch(e) { console.log('  ✗', r[0], e.message); }
}

// ── SHAREHOLDINGS ─────────────────────────────────────────────────────────────
const insertShare = db.prepare(`
  INSERT INTO shareholdings (document_id, name, value, color, created_at, updated_at, published_at)
  VALUES (?,?,?,?,?,?,?)
`);

const shareholdings = [
  ["Promoters",65.0,"#0b3b5b"],
  ["Strategic Investors",12.0,"#0ca582"],
  ["Institutional",10.0,"#1a5276"],
  ["Public / Others",13.0,"#0ec99c"],
];

console.log('\n🥧 Shareholdings...');
for (const s of shareholdings) {
  try { insertShare.run(uid(), ...s, now, now, now); console.log('  ✓', s[0]); }
  catch(e) { console.log('  ✗', s[0], e.message); }
}

// ── INCOME STATEMENTS ─────────────────────────────────────────────────────────
const insertIncome = db.prepare(`
  INSERT INTO income_statements (document_id, particulars, fy_25, fy_24, created_at, updated_at, published_at)
  VALUES (?,?,?,?,?,?,?)
`);

const income = [
  ["Revenue from Operations","13,624.59","9,095.08"],
  ["Total Income","13,742.64","9,200.79"],
  ["Profit Before Tax (PBT)","1,636.98","1,196.81"],
  ["Profit After Tax (PAT)","1,163.01","889.65"],
  ["Total Assets","10,521.14","7,627.18"],
  ["Share Capital","1,352.40","8.40"],
];

console.log('\n💰 Income Statement...');
for (const i of income) {
  try { insertIncome.run(uid(), ...i, now, now, now); console.log('  ✓', i[0]); }
  catch(e) { console.log('  ✗', i[0], e.message); }
}

// ── COMPANY INFO (single type) ────────────────────────────────────────────────
const insertCompany = db.prepare(`
  INSERT INTO company_infos
    (document_id, name, short_name, tagline, founded_year, cin,
     registered_address, corporate_office, phone, tollfree,
     email, contact_email, hr_email, investor_email, website, linkedin,
     credit_rating_long_term, credit_rating_short_term, clients,
     market_cap, stock_code, listing, dividend_yield, book_value, eps,
     created_at, updated_at, published_at)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
`);

console.log('\n🏢 Company Info...');
try {
  insertCompany.run(
    uid(),
    "Chaitanya Projects Consultancy Limited", "CPCL",
    "Building Infrastructure. Delivering Excellence.", 2004, "—",
    "907-908, Tower A, The Address, Plot No. 4B, District Centre, Mayur Vihar, New Delhi – 110091",
    "C-5, 2nd Floor, R.K. Tower, Sector-4, Dwarka, New Delhi",
    "+91-120-4110472", "",
    "info@chaitanyaprojects.com", "contact@chaitanyaprojects.com",
    "careers@chaitanyaprojects.com", "investors@chaitanyaprojects.com",
    "https://www.chaitanyaprojects.com", "https://linkedin.com/company/chaitanya-projects",
    "CRISIL BBB- / Stable", "CRISIL A3",
    J(["NHAI","MoRT&H","NHIDCL","Indian Railways"]),
    "Unlisted", "Not listed", "Public Ltd. (Oct 2024)", "—",
    "₹ 34.19 Cr (Net Worth)", "₹ 11.63 Cr (PAT FY25)",
    now, now, now
  );
  console.log('  ✓ Company Info saved');
} catch(e) { console.log('  ✗ Company Info:', e.message); }

console.log('\n✅ Seed complete.\n');
