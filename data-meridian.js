// ═══════════════════════════════════════
// SHARED DATA — People & AI Employees
// Meridian Advisory Group
// The AI-Powered Accounting Firm
// Edit here, changes propagate to all views
// ═══════════════════════════════════════

const SHARED_ORG = {
  id:'sarah',name:'Sarah Mitchell',title:'Managing Partner',initials:'SM',isFounder:true,
  aiEmployees:[
    {name:'KPI Dashboard Builder',icon:'📊',cat:'analytics',desc:'Compiles weekly firm performance metrics — revenue, realization rate, client count, capacity utilization — into a single executive view',activation:'schedule',status:'built'},
    {name:'Goal Tracking Agent',icon:'🎯',cat:'analytics',desc:'Monitors progress toward annual firm goals and flags when key metrics drift off target',activation:'schedule',status:'built'},
    {name:'Financial Health Reporter',icon:'💰',cat:'finance',desc:'Monthly P&L summary, cash position, and AR aging report formatted for partner review',activation:'schedule',status:'built'},
    {name:'Strategic Advisor',icon:'🧠',cat:'strategy',desc:'Pressure-tests firm decisions — pricing changes, new service lines, hiring — against financial and capacity data',activation:'demand',status:'built'},
    {name:'Capacity Planner',icon:'📋',cat:'ops',desc:'Models team capacity against client load and flags hiring needs before bottlenecks become crises',activation:'schedule',status:'built'},
    {name:'Partner Meeting Prep',icon:'📅',cat:'ops',desc:'Compiles agenda, open items, and KPI snapshot before every leadership meeting',activation:'trigger',status:'built'},
    {name:'Proposal Generator',icon:'📄',cat:'sales',desc:'Builds engagement proposals with scope, pricing, and timeline from client intake data',activation:'demand',status:'built'},
    {name:'Client Profitability Analyzer',icon:'⚖️',cat:'finance',desc:'Ranks clients by revenue, hours invested, and margin — surfaces who to grow and who to fire',activation:'schedule',status:'new'},
    {name:'Competitive Intelligence Brief',icon:'🔭',cat:'research',desc:'Monthly scan of competing firms — pricing changes, service offerings, hiring signals, and market positioning',activation:'schedule',status:'new'},
    {name:'Firm Metrics Narrator',icon:'✍️',cat:'voice',desc:'Writes plain-English monthly summary of firm performance for partner review — no spreadsheet required',activation:'schedule',status:'new'},
  ],
  moreCount:0,
  children:[

    // ════════════════════════════════
    // COO / OPERATIONS
    // ════════════════════════════════
    {
      id:'james',name:'James Thornton',title:'COO / Firm Administrator',initials:'JT',
      aiEmployees:[
        {name:'Billing & Invoice Manager',icon:'🧾',cat:'finance',desc:'Generates invoices from time entries, tracks payment status, and flags overdue accounts automatically',activation:'schedule',status:'built'},
        {name:'AR Collections Agent',icon:'📬',cat:'finance',desc:'Sends overdue invoice reminders at 15, 30, and 60 days with escalating urgency — drafts ready for one-click send',activation:'trigger',status:'built'},
        {name:'Tech Stack Auditor',icon:'🔧',cat:'ops',desc:'Monthly review of all software subscriptions — flags redundancies, unused licenses, and upcoming renewals',activation:'schedule',status:'built'},
        {name:'Operations Health Reporter',icon:'📈',cat:'analytics',desc:'Weekly firm operations digest — billing status, capacity flags, open HR items, technology issues',activation:'schedule',status:'built'},
        {name:'Vendor Coordination Agent',icon:'📦',cat:'ops',desc:'Tracks technology vendor relationships — renewal reminders, support escalations, and contract terms',activation:'schedule',status:'new'},
        {name:'Firm SOP Architect',icon:'📋',cat:'ops',desc:'Turns process descriptions into standardized, deploy-ready operating procedures for the whole firm',activation:'demand',status:'new'},
      ],
      moreCount:0,
      children:[
        {
          id:'priya',name:'Priya Okafor',title:'Operations & Admin Coordinator',initials:'PO',
          aiEmployees:[
            {name:'Time Entry Reconciler',icon:'⏱️',cat:'finance',desc:'Matches time entries against project budgets and flags missing or inconsistent logs before billing runs',activation:'schedule',status:'new'},
            {name:'Overdue Invoice Tracker',icon:'🔔',cat:'finance',desc:'Maintains live list of unpaid invoices with days outstanding, contact history, and escalation status',activation:'schedule',status:'new'},
            {name:'Expense Report Processor',icon:'💳',cat:'finance',desc:'Categorizes firm expense submissions, flags policy exceptions, and routes for approval',activation:'trigger',status:'new'},
            {name:'Calendar Coordinator',icon:'📅',cat:'ops',desc:'Manages scheduling across the firm — client meetings, internal reviews, tax deadlines, and team check-ins',activation:'demand',status:'new'},
            {name:'Daily Task Prioritizer',icon:'✅',cat:'ops',desc:'Organizes daily task list by urgency and deadline — nothing falls through the cracks',activation:'schedule',status:'new'},
          ],
          moreCount:0,children:[]
        },
        {
          id:'megan',name:'Megan Torres',title:'Client Onboarding & Offboarding Coordinator',initials:'MT',
          aiEmployees:[
            {name:'New Client Welcome Sequence',icon:'👋',cat:'ops',desc:'Triggers full onboarding workflow the moment a new engagement is signed — welcome email, portal setup, intake checklist, kickoff scheduling',activation:'trigger',status:'built'},
            {name:'Engagement Letter Generator',icon:'📄',cat:'ops',desc:'Produces customized engagement letters with scope, fees, and terms based on service type — sent via DocuSign automatically',activation:'trigger',status:'built'},
            {name:'Client Portal Setup Agent',icon:'🔐',cat:'ops',desc:'Guides new clients through portal access, document upload instructions, and credential setup with automated follow-up if incomplete',activation:'trigger',status:'built'},
            {name:'Document Collection Tracker',icon:'📁',cat:'ops',desc:'Maintains real-time checklist of required onboarding documents — sends automated reminders until every item is received',activation:'schedule',status:'built'},
            {name:'Password & Credential Manager',icon:'🗝️',cat:'ops',desc:'Maintains secure log of all client system access credentials, software logins, and portal permissions — flags expired or changed access',activation:'schedule',status:'new'},
            {name:'Offboarding Coordinator',icon:'📤',cat:'ops',desc:'Triggers offboarding checklist when an engagement ends — final deliverables, data transfer, access revocation, and farewell sequence',activation:'trigger',status:'new'},
            {name:'Onboarding Status Reporter',icon:'📊',cat:'analytics',desc:'Weekly summary of all clients currently in onboarding — what stage they are in, what is outstanding, and who needs a nudge',activation:'schedule',status:'new'},
          ],
          moreCount:0,children:[]
        },
        {
          id:'derek',name:'Derek Shaw',title:'HR & People Operations',initials:'DS',
          aiEmployees:[
            {name:'Employee Onboarding Builder',icon:'🎉',cat:'hr',desc:'Generates personalized onboarding plan for every new hire — first-week schedule, system access list, role-specific training path, and welcome message',activation:'trigger',status:'built'},
            {name:'Payroll Processing Assistant',icon:'💵',cat:'finance',desc:'Compiles payroll data, flags discrepancies in hours or rates, and prepares payroll run summary for approval before submission',activation:'schedule',status:'built'},
            {name:'Employee Offboarding Agent',icon:'🚪',cat:'hr',desc:'Triggers full offboarding checklist — equipment return, system access revocation, final paycheck, benefits termination, and exit interview scheduling',activation:'trigger',status:'built'},
            {name:'Benefits Administration Tracker',icon:'🏥',cat:'hr',desc:'Tracks benefits enrollment, renewal dates, and employee eligibility — sends reminders during open enrollment windows',activation:'schedule',status:'new'},
            {name:'HR Compliance Monitor',icon:'🛡️',cat:'hr',desc:'Tracks compliance deadlines — I-9s, certifications, required training, and state-specific employment law requirements',activation:'schedule',status:'new'},
            {name:'Job Description Writer',icon:'📝',cat:'hr',desc:'Writes role-specific job descriptions aligned with firm culture, AI-enabled workflows, and current compensation benchmarks',activation:'demand',status:'new'},
            {name:'Interview Prep Builder',icon:'🧭',cat:'hr',desc:'Builds structured interview guides by role with culture-fit questions, technical assessments, and scoring rubrics',activation:'trigger',status:'new'},
            {name:'Team Pulse Analyzer',icon:'📊',cat:'hr',desc:'Analyzes team check-in data for engagement and satisfaction signals — flags burnout risk before it becomes turnover',activation:'schedule',status:'new'},
          ],
          moreCount:0,children:[]
        }
      ]
    },

    // ════════════════════════════════
    // CFO ADVISORY
    // ════════════════════════════════
    {
      id:'marcus',name:'Marcus Webb',title:'CFO Advisory Partner',initials:'MW',
      aiEmployees:[
        {name:'Monthly Report Builder',icon:'📊',cat:'finance',desc:'Pulls QBO data, populates report templates, and drafts narrative commentary — client-ready in 30 minutes instead of 3 hours',activation:'schedule',status:'built'},
        {name:'Cash Flow Forecaster',icon:'📈',cat:'finance',desc:'12-week rolling cash flow projection updated automatically from QBO — flags weeks where cash dips below threshold',activation:'schedule',status:'built'},
        {name:'Budget vs. Actual Analyzer',icon:'⚖️',cat:'analytics',desc:'Compares actual performance to budget each month and writes plain-English variance commentary clients can actually understand',activation:'schedule',status:'built'},
        {name:'KPI Dashboard Designer',icon:'🎯',cat:'analytics',desc:'Builds client-specific KPI dashboards with metrics that matter to their industry — revenue per employee, gross margin, DSO',activation:'demand',status:'built'},
        {name:'Strategic Business Advisor',icon:'🧠',cat:'strategy',desc:'Advises on pricing strategy, growth modeling, and capital allocation decisions using live financial data',activation:'demand',status:'built'},
        {name:'Board Meeting Prep Agent',icon:'📋',cat:'ops',desc:'Compiles financials, KPIs, and talking points for quarterly business reviews — formatted and ready 48 hours before the meeting',activation:'trigger',status:'built'},
        {name:'M&A Prep Researcher',icon:'🔭',cat:'research',desc:'Researches acquisition targets, builds financial comparison models, and prepares due diligence checklists',activation:'demand',status:'new'},
        {name:'Scenario Modeler',icon:'🔢',cat:'finance',desc:'Builds what-if models for hiring decisions, pricing changes, and major capital expenditures — three scenarios in 10 minutes',activation:'demand',status:'new'},
        {name:'Client Financial Narrator',icon:'✍️',cat:'voice',desc:'Translates complex financial data into plain-English stories business owners actually understand and act on',activation:'demand',status:'new'},
      ],
      moreCount:0,
      children:[
        {
          id:'rachel',name:'Rachel Park',title:'CFO Advisory Associate',initials:'RP',
          aiEmployees:[
            {name:'QBO Report Puller',icon:'📥',cat:'finance',desc:'Extracts P&L, balance sheet, and cash flow reports from QBO and formats them for client delivery — no manual export required',activation:'schedule',status:'built'},
            {name:'Slide Deck Builder',icon:'📐',cat:'creative',desc:'Populates advisory presentation templates with current financial data, charts, and variance callouts automatically',activation:'trigger',status:'built'},
            {name:'Narrative Draft Writer',icon:'✍️',cat:'voice',desc:'Writes plain-English financial commentary from the numbers — explains what happened, why it matters, and what to do next',activation:'demand',status:'built'},
            {name:'Data Anomaly Checker',icon:'🔍',cat:'analytics',desc:'Cross-checks QBO data against prior period for anomalies, duplicate entries, and miscategorizations before client delivery',activation:'trigger',status:'built'},
            {name:'Client Meeting Recap',icon:'📝',cat:'ops',desc:'Generates structured meeting notes with decisions made, action items, and next steps — sent to client within an hour of the call',activation:'trigger',status:'new'},
            {name:'Benchmark Researcher',icon:'📊',cat:'research',desc:'Pulls industry benchmarks for key ratios — gross margin, payroll percentage, overhead — so clients know how they compare to peers',activation:'demand',status:'new'},
          ],
          moreCount:0,children:[]
        }
      ]
    },

    // ════════════════════════════════
    // TAX DEPARTMENT
    // ════════════════════════════════
    {
      id:'diana',name:'Diana Reyes',title:'Senior Tax Manager',initials:'DR',
      aiEmployees:[
        {name:'Return Review Checklist',icon:'✅',cat:'ops',desc:'Generates a standardized review checklist for every return type — flags missing schedules, inconsistencies, and significant year-over-year changes',activation:'trigger',status:'built'},
        {name:'Tax Research Agent',icon:'🔍',cat:'research',desc:'Answers technical tax questions by searching current IRS guidance, code sections, and recent rulings — with citations',activation:'demand',status:'built'},
        {name:'Production Status Dashboard',icon:'📊',cat:'analytics',desc:'Live view of all returns in progress — status, assignee, missing items, deadlines, and bottlenecks at a glance',activation:'schedule',status:'built'},
        {name:'Client Tax Strategy Advisor',icon:'🧠',cat:'strategy',desc:'Builds personalized tax planning memos with actionable strategies based on client financials and current tax law',activation:'demand',status:'built'},
        {name:'IRS Notice Responder',icon:'📬',cat:'ops',desc:'Drafts professional, accurate responses to IRS correspondence using client records and current guidance',activation:'demand',status:'built'},
        {name:'Prior Year Comparison Analyst',icon:'🔄',cat:'analytics',desc:'Flags significant year-over-year changes in income, deductions, and credits — surfaces every anomaly before partner review',activation:'trigger',status:'built'},
        {name:'Deadline Alert System',icon:'⏰',cat:'ops',desc:'Tracks every filing deadline across all clients and sends internal alerts at 30, 14, and 3 days out',activation:'schedule',status:'new'},
        {name:'Extension Manager',icon:'📅',cat:'ops',desc:'Identifies clients needing extensions, prepares extension filings, and tracks the new deadlines automatically',activation:'trigger',status:'new'},
      ],
      moreCount:0,
      children:[
        {
          id:'tom',name:'Tom Nguyen',title:'Tax Associate — Review & Production',initials:'TN',
          aiEmployees:[
            {name:'Return Quality Checker',icon:'🔍',cat:'ops',desc:'Reviews completed returns against standardized checklist before they advance to the Senior Manager — catches errors at the production level',activation:'trigger',status:'built'},
            {name:'Prior Year Cross-Reference',icon:'🔄',cat:'analytics',desc:'Compares current return to prior year line by line and flags material differences that need explanation',activation:'trigger',status:'built'},
            {name:'Schedule Completeness Checker',icon:'✅',cat:'ops',desc:'Confirms all required schedules and supporting documents are attached before a return moves to the review queue',activation:'trigger',status:'new'},
            {name:'Client Communication Drafter',icon:'✉️',cat:'voice',desc:'Drafts professional client-facing emails for return delivery, clarification requests, and filing confirmations',activation:'demand',status:'new'},
            {name:'E-File Status Tracker',icon:'📡',cat:'ops',desc:'Monitors e-file acknowledgment status for all submitted returns and flags rejections immediately',activation:'schedule',status:'new'},
          ],
          moreCount:0,children:[]
        },
        {
          id:'emma',name:'Emma Castillo',title:'Tax Associate — Data Collection',initials:'EC',
          aiEmployees:[
            {name:'Document Collection Agent',icon:'📁',cat:'ops',desc:'Sends automated document request checklists to clients at engagement start — tracks what has arrived and what is still missing in real time',activation:'trigger',status:'built'},
            {name:'Missing Document Chaser',icon:'📬',cat:'ops',desc:'Sends personalized follow-up reminders at 7, 14, and 21 days for outstanding tax documents — escalates to coordinator if no response',activation:'schedule',status:'built'},
            {name:'Intake Packet Organizer',icon:'🗂️',cat:'ops',desc:'Sorts and labels incoming client documents into standardized folder structure — preparer receives a clean, organized packet every time',activation:'trigger',status:'built'},
            {name:'Document Receipt Confirmer',icon:'✅',cat:'ops',desc:'Sends client confirmation when their full packet is received and their return has entered the preparation queue',activation:'trigger',status:'new'},
            {name:'1099 & K-1 Tracker',icon:'📊',cat:'analytics',desc:'Maintains checklist of expected 1099s and K-1s per client and flags when known documents have not yet arrived by mid-February',activation:'schedule',status:'new'},
            {name:'PDF Data Extractor',icon:'🔢',cat:'ops',desc:'Pulls key figures from uploaded PDF statements and organizes them into a structured summary ready for the preparer',activation:'trigger',status:'new'},
          ],
          moreCount:0,children:[]
        }
      ]
    },

    // ════════════════════════════════
    // CAS / BOOKKEEPING
    // ════════════════════════════════
    {
      id:'lauren',name:'Lauren Chen',title:'CAS Manager / Senior Bookkeeper',initials:'LC',
      aiEmployees:[
        {name:'Month-End Close Checklist',icon:'✅',cat:'ops',desc:'Generates a standardized close checklist for every client — ensures reconciliations, payroll entries, and accruals are complete before books are closed',activation:'schedule',status:'built'},
        {name:'Books Review Agent',icon:'🔍',cat:'analytics',desc:'Reviews completed bookkeeper work against quality standards — flags miscategorizations, missing entries, and reconciliation gaps before delivery',activation:'trigger',status:'built'},
        {name:'Catch-Up Project Scoper',icon:'📋',cat:'ops',desc:'Assesses messy books and generates a prioritized cleanup plan with time estimates and task dependencies',activation:'demand',status:'built'},
        {name:'Chart of Accounts Standardizer',icon:'📐',cat:'ops',desc:'Applies Meridian\'s standard chart of accounts to new client QBO files — consistent categorization from day one',activation:'trigger',status:'built'},
        {name:'Client Books Health Reporter',icon:'📊',cat:'analytics',desc:'Weekly summary of all CAS clients — close status, outstanding items, reconciliation flags, and books that need attention',activation:'schedule',status:'built'},
        {name:'QBO Setup Coordinator',icon:'⚙️',cat:'ops',desc:'Builds new client QBO environments with correct chart of accounts, class tracking, bank connections, and user permissions',activation:'trigger',status:'new'},
        {name:'Bookkeeper Training Coach',icon:'🎓',cat:'hr',desc:'Generates role-specific training materials and quality standards for junior bookkeeping staff — consistent from hire one to hire ten',activation:'demand',status:'new'},
      ],
      moreCount:0,
      children:[
        {
          id:'mia',name:'Mia Kaufman',title:'Client Services Coordinator',initials:'MK',
          aiEmployees:[
            {name:'Bank Statement Collector',icon:'🏦',cat:'ops',desc:'Sends automated monthly requests to clients for bank statements, credit card statements, and supporting documents — tracks receipt status for every account',activation:'schedule',status:'built'},
            {name:'Missing Document Reminder',icon:'📬',cat:'ops',desc:'Follows up automatically when client documents are late — escalates to Lauren if statements are more than 5 business days overdue',activation:'schedule',status:'built'},
            {name:'Client Portal Manager',icon:'🔐',cat:'ops',desc:'Maintains current record of all client portal access, software logins, and credentials — flags expired or changed access immediately',activation:'schedule',status:'built'},
            {name:'New Client Intake Agent',icon:'👋',cat:'ops',desc:'Guides new bookkeeping clients through initial setup — bank connections, credit card feeds, and document submission process step by step',activation:'trigger',status:'built'},
            {name:'Client Communication Drafter',icon:'✉️',cat:'voice',desc:'Drafts professional, friendly client communications for document requests, status updates, and monthly check-ins',activation:'demand',status:'new'},
            {name:'Statement Receipt Logger',icon:'📁',cat:'ops',desc:'Logs incoming documents as they arrive and updates the master tracking sheet — bookkeepers always know exactly what is ready to work',activation:'trigger',status:'new'},
          ],
          moreCount:0,children:[]
        },
        {
          id:'carlos',name:'Carlos Rivera',title:'Bookkeeper',initials:'CR',
          aiEmployees:[
            {name:'Transaction Categorizer',icon:'🏷️',cat:'finance',desc:'Suggests correct QBO categories for uncategorized transactions based on vendor name, amount, and client history — learns preferences over time',activation:'trigger',status:'built'},
            {name:'Bank Reconciliation Assistant',icon:'🔢',cat:'finance',desc:'Walks through reconciliation step by step — flags unmatched transactions and suggests matches from the ledger',activation:'trigger',status:'built'},
            {name:'Payroll Entry Builder',icon:'💵',cat:'finance',desc:'Creates journal entries from payroll reports — maps wages, taxes, and benefits to the correct accounts automatically',activation:'trigger',status:'built'},
            {name:'Unclear Transaction Resolver',icon:'❓',cat:'ops',desc:'Drafts professional client inquiry messages for ambiguous transactions — specific, clear, and ready to send in one click',activation:'demand',status:'new'},
            {name:'AR/AP Tracker',icon:'📊',cat:'finance',desc:'Maintains current accounts receivable and accounts payable balances and flags aging items for client attention',activation:'schedule',status:'new'},
          ],
          moreCount:0,children:[]
        },
        {
          id:'stephanie',name:'Stephanie Moss',title:'Bookkeeper',initials:'SM2',
          aiEmployees:[
            {name:'Transaction Categorizer',icon:'🏷️',cat:'finance',desc:'Suggests correct QBO categories for uncategorized transactions based on vendor name, amount, and client history — learns preferences over time',activation:'trigger',status:'built'},
            {name:'Bank Reconciliation Assistant',icon:'🔢',cat:'finance',desc:'Walks through reconciliation step by step — flags unmatched transactions and suggests matches from the ledger',activation:'trigger',status:'built'},
            {name:'Payroll Entry Builder',icon:'💵',cat:'finance',desc:'Creates journal entries from payroll reports — maps wages, taxes, and benefits to the correct accounts automatically',activation:'trigger',status:'built'},
            {name:'New Client COA Builder',icon:'📐',cat:'finance',desc:'Sets up chart of accounts for new bookkeeping clients using Meridian\'s standard template — customized by industry in minutes',activation:'trigger',status:'new'},
            {name:'Month-End Prep Checklist',icon:'✅',cat:'ops',desc:'Generates personal close checklist for assigned client portfolio — tracks completion status for each item through the close cycle',activation:'schedule',status:'new'},
          ],
          moreCount:0,children:[]
        }
      ]
    }
  ]
};

const TOTAL_HUMANS = 14;

// ═══════════════════════════════════════
// DEPT FILTERS
// ═══════════════════════════════════════
const DEPT_FILTERS = [
  { id: 'all',      label: 'All Departments',    color: '#D1B25A' },
  { id: 'advisory', label: 'CFO Advisory',        color: '#2A8F82' },
  { id: 'tax',      label: 'Tax',                 color: '#C26688' },
  { id: 'cas',      label: 'Bookkeeping / CAS',   color: '#4A8C5C' },
  { id: 'ops',      label: 'Operations',          color: '#3A7CA5' },
  { id: 'hr',       label: 'HR & People',         color: '#7B5EA7' },
  { id: 'finance',  label: 'Finance',             color: '#D47B2E' },
];

// ═══════════════════════════════════════
// MONDAY MORNING TIMELINE
// While the Meridian team slept — AI employees worked
// time = minutes from midnight (0 = 12:00am, 480 = 8:00am)
// ═══════════════════════════════════════
const TIMELINE_EVENTS = [

  // 12:00 – 1:00 AM
  { time: 5,   aiName: 'Bank Statement Collector',      icon: '🏦', owner: 'Mia',       dept: 'cas',      hoursSaved: 2.0, desc: 'Sent automated monthly document requests to all 85 active clients', output: '85 personalized requests delivered — tracking dashboard updated' },
  { time: 20,  aiName: 'Transaction Categorizer',       icon: '🏷️', owner: 'Carlos',    dept: 'cas',      hoursSaved: 2.5, desc: 'Processed 312 uncategorized transactions from last week across 14 client files', output: '94% auto-categorized — 18 flagged for human review this morning' },
  { time: 40,  aiName: 'AR Collections Agent',          icon: '📬', owner: 'James',     dept: 'finance',  hoursSaved: 1.5, desc: 'Identified 7 invoices past 30 days and drafted collection reminder emails', output: '7 professional reminder emails queued — ready for one-click send' },
  { time: 58,  aiName: 'Deadline Alert System',         icon: '⏰', owner: 'Diana',     dept: 'tax',      hoursSaved: 1.0, desc: 'Scanned all active tax engagements against the full filing calendar', output: '3 returns due in 14 days flagged — Slack alerts sent to tax team' },

  // 1:00 – 2:00 AM
  { time: 72,  aiName: 'Production Status Dashboard',   icon: '📊', owner: 'Diana',     dept: 'tax',      hoursSaved: 1.5, desc: 'Updated real-time status of all 47 returns currently in production', output: '12 in prep, 8 in review, 6 awaiting client docs — Diana walks in knowing everything' },
  { time: 90,  aiName: 'Cash Flow Forecaster',          icon: '📈', owner: 'Marcus',    dept: 'advisory', hoursSaved: 3.0, desc: 'Updated 12-week cash flow projections for all 23 advisory clients using latest QBO data', output: '4 clients flagged with cash dips below threshold in weeks 6 through 8' },
  { time: 112, aiName: 'Missing Document Chaser',       icon: '📬', owner: 'Emma',      dept: 'tax',      hoursSaved: 2.0, desc: 'Identified 31 clients with outstanding tax documents and sent personalized follow-up reminders', output: '31 reminder emails sent — 3 escalated to Megan for phone follow-up' },
  { time: 132, aiName: 'Transaction Categorizer',       icon: '🏷️', owner: 'Stephanie', dept: 'cas',      hoursSaved: 2.5, desc: 'Processed 278 transactions across 11 client bookkeeping files overnight', output: '91% auto-categorized — 24 flagged and waiting for Stephanie\'s morning review' },

  // 2:00 – 3:30 AM
  { time: 148, aiName: 'Monthly Report Builder',        icon: '📊', owner: 'Marcus',    dept: 'advisory', hoursSaved: 3.0, desc: 'Pulled QBO data for 6 advisory clients and populated monthly report templates with commentary', output: '6 draft client reports ready — Marcus reviews instead of building from scratch' },
  { time: 168, aiName: 'Books Review Agent',            icon: '🔍', owner: 'Lauren',    dept: 'cas',      hoursSaved: 2.0, desc: 'Reviewed completed bookkeeper work across 8 client files against quality standards checklist', output: '2 files flagged for miscategorization, 1 reconciliation gap — actionable notes attached' },
  { time: 188, aiName: 'KPI Dashboard Builder',         icon: '📊', owner: 'Sarah',     dept: 'finance',  hoursSaved: 2.0, desc: 'Compiled firm-wide KPI snapshot — revenue, realization rate, capacity utilization, AR aging', output: 'Executive dashboard updated — Sarah\'s morning brief is waiting at login' },
  { time: 208, aiName: '1099 & K-1 Tracker',           icon: '📊', owner: 'Emma',      dept: 'tax',      hoursSaved: 1.5, desc: 'Scanned all active tax files for expected 1099s and K-1s not yet received by clients', output: '14 missing documents identified — added to morning follow-up queue' },

  // 3:30 – 5:00 AM
  { time: 222, aiName: 'Bank Reconciliation Assistant', icon: '🔢', owner: 'Carlos',    dept: 'cas',      hoursSaved: 2.0, desc: 'Pre-staged reconciliation workpapers for 6 clients with statements received yesterday', output: '6 reconciliation files organized — matched items flagged, exceptions highlighted' },
  { time: 242, aiName: 'Prior Year Comparison Analyst', icon: '🔄', owner: 'Diana',     dept: 'tax',      hoursSaved: 2.0, desc: 'Ran year-over-year comparison on 9 returns currently sitting in the review queue', output: '14 material variances flagged across 9 returns — Diana reviews instead of hunts' },
  { time: 262, aiName: 'Payroll Processing Assistant',  icon: '💵', owner: 'Derek',     dept: 'hr',       hoursSaved: 1.5, desc: 'Compiled payroll data for the weekly firm payroll run — checked hours, rates, and PTO balances', output: 'Payroll summary ready for Derek approval — 1 rate discrepancy flagged' },
  { time: 282, aiName: 'Client Books Health Reporter',  icon: '📊', owner: 'Lauren',    dept: 'cas',      hoursSaved: 1.5, desc: 'Generated weekly CAS portfolio health summary across all 42 bookkeeping clients', output: '5 clients behind on close, 3 with unresolved reconciling items — prioritized list ready' },

  // 5:00 – 6:30 AM
  { time: 302, aiName: 'Onboarding Status Reporter',    icon: '📊', owner: 'Megan',     dept: 'ops',      hoursSaved: 1.0, desc: 'Checked status of all 4 clients currently in onboarding against their milestone checklists', output: '1 client stalled at portal setup — escalation drafted and waiting for Megan' },
  { time: 322, aiName: 'Budget vs. Actual Analyzer',    icon: '⚖️', owner: 'Marcus',    dept: 'advisory', hoursSaved: 2.5, desc: 'Ran budget-to-actual analysis for all advisory clients with the latest month of data', output: '6 variance reports with plain-English commentary — 2 clients significantly over budget' },
  { time: 342, aiName: 'HR Compliance Monitor',         icon: '🛡️', owner: 'Derek',     dept: 'hr',       hoursSaved: 1.0, desc: 'Checked team certifications, I-9 expiration dates, and required training completions', output: '1 certification expiring in 30 days — reminder drafted and queued for Derek to send' },
  { time: 362, aiName: 'Intake Packet Organizer',       icon: '🗂️', owner: 'Emma',      dept: 'tax',      hoursSaved: 1.5, desc: 'Sorted and labeled 23 client document uploads received over the weekend', output: '19 complete packets routed to preparers — 4 still missing key items' },

  // 6:30 – 8:00 AM
  { time: 387, aiName: 'Month-End Close Checklist',     icon: '✅', owner: 'Lauren',    dept: 'cas',      hoursSaved: 1.0, desc: 'Generated personalized month-end close checklists for each bookkeeper\'s full client portfolio', output: 'Carlos: 8 clients | Stephanie: 7 clients — both checklists in Notion, ready at login' },
  { time: 408, aiName: 'Financial Health Reporter',     icon: '💰', owner: 'Sarah',     dept: 'finance',  hoursSaved: 2.0, desc: 'Compiled monthly firm P&L, cash position, and AR aging report for partner review', output: 'Executive summary ready — revenue up 8% month over month, AR aging improved' },
  { time: 432, aiName: 'Document Collection Tracker',   icon: '📁', owner: 'Megan',     dept: 'ops',      hoursSaved: 1.0, desc: 'Updated master document tracking log with overnight submissions received from 12 clients', output: '3 new client files complete and routed to their assigned teams' },
  { time: 457, aiName: 'Operations Health Reporter',    icon: '📈', owner: 'James',     dept: 'ops',      hoursSaved: 1.0, desc: 'Compiled the weekly operations digest — billing, capacity, open HR items, and tech flags', output: 'COO morning brief ready — 2 items need James decision before the 10am standup' },
];

// ═══════════════════════════════════════
// UTILITY: Flatten org tree
// ═══════════════════════════════════════
function flattenPeople(node, result = []) {
  result.push({ id: node.id, name: node.name, title: node.title, initials: node.initials, isFounder: node.isFounder });
  (node.children || []).forEach(c => flattenPeople(c, result));
  return result;
}
const ALL_PEOPLE = flattenPeople(SHARED_ORG);

function flattenAI(node, result = []) {
  (node.aiEmployees || []).forEach(ai => {
    result.push({ ...ai, ownerId: node.id, ownerName: node.name, ownerTitle: node.title });
  });
  (node.children || []).forEach(c => flattenAI(c, result));
  return result;
}
const ALL_AI_EMPLOYEES = flattenAI(SHARED_ORG);

// ═══════════════════════════════════════
// ECOSYSTEM LAYERS
// ═══════════════════════════════════════
const LAYER_DEFS = [
  { id: 'executive',  name: 'Executive Layer',         color: '#D1B25A', bg: 'rgba(209,178,90,.08)',  border: 'rgba(209,178,90,.2)',  desc: 'Firm strategy, KPIs, partner oversight, and business development', count: 2 },
  { id: 'advisory',   name: 'CFO Advisory Layer',      color: '#2A8F82', bg: 'rgba(42,143,130,.08)',  border: 'rgba(42,143,130,.2)',  desc: 'Financial reporting, cash flow, budgets, and strategic client advisory', count: 4 },
  { id: 'tax',        name: 'Tax Layer',               color: '#C26688', bg: 'rgba(194,102,136,.08)', border: 'rgba(194,102,136,.2)', desc: 'Return preparation, document collection, review, and tax planning', count: 4 },
  { id: 'cas',        name: 'Bookkeeping / CAS Layer', color: '#4A8C5C', bg: 'rgba(74,140,92,.08)',   border: 'rgba(74,140,92,.2)',   desc: 'Transaction processing, reconciliations, month-end close, and client coordination', count: 5 },
  { id: 'operations', name: 'Operations Layer',        color: '#3A7CA5', bg: 'rgba(58,124,165,.08)',  border: 'rgba(58,124,165,.2)',  desc: 'Billing, client onboarding, offboarding, tech stack, and firm administration', count: 4 },
  { id: 'hr',         name: 'HR & People Layer',       color: '#7B5EA7', bg: 'rgba(123,94,167,.08)',  border: 'rgba(123,94,167,.2)',  desc: 'Employee onboarding, offboarding, payroll, benefits, and compliance', count: 3 },
];

const INFRASTRUCTURE = [
  { name: 'QuickBooks Online', icon: '📒', desc: 'Accounting platform — all client books, reports, and financial data' },
  { name: 'Canopy',            icon: '📋', desc: 'Practice management — project tracking, document requests, billing' },
  { name: 'Google Drive',      icon: '📁', desc: 'Document storage — client files, workpapers, deliverables' },
  { name: 'DocuSign',          icon: '✍️', desc: 'E-signature — engagement letters, authorizations, agreements' },
  { name: 'Gmail + Workspace', icon: '✉️', desc: 'Communication — client emails, internal team coordination' },
  { name: 'Slack',             icon: '💬', desc: 'Internal team — AI alerts, briefings, and department channels' },
  { name: 'UltraTax CS',       icon: '🧾', desc: 'Tax software — return preparation and filing for all entity types' },
  { name: 'Scheduling',        icon: '⏰', desc: 'Cron triggers, deadline monitoring, and automated follow-up sequences' },
];

// ═══════════════════════════════════════
// FLOW STORIES
// ═══════════════════════════════════════
const FLOW_STORIES = [
  {
    title: 'Tax Season Kicks Off',
    desc: 'A new tax engagement triggers a fully automated document collection and preparation pipeline — no manual steps.',
    steps: [
      { employeeId: 'client-onboarding-agent', action: 'Engagement letter generated and sent via DocuSign automatically at signing', output: 'Signed engagement letter received — onboarding pipeline triggered' },
      { employeeId: 'document-collector', action: 'Personalized document checklist sent to client with portal access instructions', output: 'Client portal active — every required document tracked in real time' },
      { employeeId: 'document-collector', action: 'Automated reminders sent at day 7 and day 14 for every outstanding item', output: 'Client responds — complete document packet uploaded and organized' },
      { employeeId: 'document-collector', action: 'Incoming documents sorted, labeled, and filed into standardized folder structure', output: 'Clean packet ready — preparer assigned and notified immediately' },
      { employeeId: 'return-reviewer', action: 'Year-over-year comparison run against prior return before preparer opens the file', output: 'Comparison report attached — Diana reviews flagged variances before the return is touched' },
    ]
  },
  {
    title: 'Monday Morning at Meridian',
    desc: 'Before the first person walks in, 14 AI employees have already completed hours of work across every department.',
    steps: [
      { employeeId: 'client-document-coordinator', action: 'Sent document requests to all 85 clients overnight while the team slept', output: '85 personalized requests delivered — 12 client responses already received' },
      { employeeId: 'transaction-processor', action: 'Processed 590 transactions across 25 client files automatically', output: '93% categorized — 41 flagged items ready for bookkeeper review at login' },
      { employeeId: 'advisory-report-builder', action: 'Pulled QBO data and built draft advisory reports for 6 clients', output: '6 reports with narrative commentary — Marcus reviews instead of builds from scratch' },
      { employeeId: 'tax-production-manager', action: 'Updated all 47 active tax returns with current production status', output: 'Diana walks in knowing exactly where every return stands — no status meeting needed' },
      { employeeId: 'kpi-reporter', action: 'Compiled firm KPIs, financial health snapshot, and capacity report', output: 'Sarah\'s morning brief is waiting at login — no meetings needed to get the update' },
    ]
  },
  {
    title: 'New Client Onboarded in 3 Days',
    desc: 'From signed engagement to first deliverable — a process that used to take 3 weeks now runs in 3 days.',
    steps: [
      { employeeId: 'client-onboarding-agent', action: 'Welcome sequence triggered the moment the engagement letter is countersigned', output: 'Welcome email sent, portal access created, kickoff call scheduled automatically' },
      { employeeId: 'client-onboarding-agent', action: 'Client guided through portal access, document upload, and bank connection setup', output: 'Client fully set up — first document submission received within 48 hours' },
      { employeeId: 'books-quality-reviewer', action: 'Standard chart of accounts applied to new QBO environment on day one', output: 'Books set up correctly from the start — no cleanup needed six months later' },
      { employeeId: 'client-document-coordinator', action: 'Client credentials logged and all team members given correct access permissions', output: 'Entire team has access — no password hunting, no access request delays' },
      { employeeId: 'operations-monitor', action: 'Onboarding status added to weekly tracking dashboard automatically', output: 'James and Megan see exactly where every new client stands — nothing falls through' },
    ]
  },
];

// ═══════════════════════════════════════
// ECOSYSTEM DATA — Meridian AI Employees
// Full detail: skills, data sources, tools, cadence
// ═══════════════════════════════════════

const LAYER_DEFS_ECO = [
  { id: 'executive',  name: 'Executive Layer',         color: '#D1B25A', bg: 'rgba(209,178,90,.08)',  border: 'rgba(209,178,90,.2)',  desc: 'Firm strategy, KPIs, partner oversight, and business development', count: 2 },
  { id: 'advisory',   name: 'CFO Advisory Layer',      color: '#2A8F82', bg: 'rgba(42,143,130,.08)',  border: 'rgba(42,143,130,.2)',  desc: 'Financial reporting, cash flow, budgets, and strategic client advisory', count: 3 },
  { id: 'tax',        name: 'Tax Layer',               color: '#C26688', bg: 'rgba(194,102,136,.08)', border: 'rgba(194,102,136,.2)', desc: 'Return preparation, document collection, review, and tax planning', count: 4 },
  { id: 'cas',        name: 'Bookkeeping / CAS Layer',  color: '#4A8C5C', bg: 'rgba(74,140,92,.08)',   border: 'rgba(74,140,92,.2)',   desc: 'Transaction processing, reconciliations, month-end close, and client coordination', count: 4 },
  { id: 'operations', name: 'Operations Layer',        color: '#3A7CA5', bg: 'rgba(58,124,165,.08)',  border: 'rgba(58,124,165,.2)',  desc: 'Billing, client onboarding, offboarding, tech stack, and firm administration', count: 3 },
  { id: 'hr',         name: 'HR & People Layer',       color: '#7B5EA7', bg: 'rgba(123,94,167,.08)',  border: 'rgba(123,94,167,.2)',  desc: 'Employee onboarding, offboarding, payroll, benefits, and compliance', count: 2 },
];

const ECOSYSTEM_EMPLOYEES = [

  // ═══ EXECUTIVE LAYER ═══
  {
    id: 'firm-strategist', name: 'Firm Strategist', layer: 'executive',
    icon: '🧠', role: 'Pressure-tests firm decisions — pricing changes, new service lines, staffing, and market positioning. Thinks like a $10M+ managing partner.',
    managedBy: 'Sarah Mitchell', managedByTitle: 'Managing Partner',
    skills: [
      { name: 'Capacity Planning Model', status: 'built' },
      { name: 'Client Profitability Analyzer', status: 'built' },
      { name: 'Service Line ROI Calculator', status: 'built' },
      { name: 'Pricing Strategy Advisor', status: 'built' },
      { name: 'Competitive Positioning Brief', status: 'needs-build' },
    ],
    dataSets: ['Firm P&L', 'Client roster and billing data', 'Team capacity and utilization', 'Industry benchmarks'],
    tools: ['QuickBooks Online', 'Canopy', 'Google Sheets', 'Slack'],
    cadence: ['Monthly: Firm KPI review', 'Quarterly: Strategic planning session', 'On demand: Pricing and hiring decisions'],
  },
  {
    id: 'kpi-reporter', name: 'KPI & Performance Reporter', layer: 'executive',
    icon: '📊', role: 'Compiles and delivers firm-wide performance metrics to the managing partner. Monitors revenue, realization, capacity, and AR aging — weekly without being asked.',
    managedBy: 'Sarah Mitchell', managedByTitle: 'Managing Partner',
    skills: [
      { name: 'Weekly KPI Dashboard', status: 'built' },
      { name: 'AR Aging Report', status: 'built' },
      { name: 'Realization Rate Tracker', status: 'built' },
      { name: 'Capacity Utilization Monitor', status: 'built' },
      { name: 'Goal Progress Tracker', status: 'needs-build' },
    ],
    dataSets: ['Canopy time and billing data', 'QBO financial data', 'Team capacity data', 'Annual firm goals'],
    tools: ['Canopy', 'QuickBooks Online', 'Google Sheets', 'Slack'],
    cadence: ['Weekly: KPI digest to Sarah', 'Monthly: Full performance report', 'Triggered: Alert when metric drifts off target'],
  },

  // ═══ CFO ADVISORY LAYER ═══
  {
    id: 'advisory-report-builder', name: 'Advisory Report Builder', layer: 'advisory',
    icon: '📊', role: 'Pulls QBO data, populates monthly report templates, and drafts narrative commentary for every advisory client. Turns 3 hours of formatting into 30 minutes of review.',
    managedBy: 'Marcus Webb', managedByTitle: 'CFO Advisory Partner',
    skills: [
      { name: 'QBO Monthly Report Extractor', status: 'built' },
      { name: 'Variance Commentary Writer', status: 'built' },
      { name: 'Cash Flow Forecast Builder', status: 'built' },
      { name: 'Budget vs. Actual Analyzer', status: 'built' },
      { name: 'KPI Dashboard Designer', status: 'built' },
      { name: 'Board Meeting Prep Builder', status: 'needs-build' },
    ],
    dataSets: ['QuickBooks Online (all advisory clients)', 'Prior period reports', 'Client budgets', 'Industry benchmarks'],
    tools: ['QuickBooks Online', 'Google Slides', 'Google Sheets', 'Canopy'],
    cadence: ['Monthly: Full report package per client', 'Weekly: Cash flow update', 'Pre-meeting: Board prep 48 hours out'],
  },
  {
    id: 'financial-narrator', name: 'Financial Narrator', layer: 'advisory',
    icon: '✍️', role: 'Translates complex financial data into plain-English stories business owners actually understand and act on. No jargon. No confusion. Just clarity.',
    managedBy: 'Rachel Park', managedByTitle: 'CFO Advisory Associate',
    skills: [
      { name: 'Variance Explanation Writer', status: 'built' },
      { name: 'Executive Summary Builder', status: 'built' },
      { name: 'Client-Facing Narrative Draft', status: 'built' },
      { name: 'Action Item Extractor', status: 'needs-build' },
    ],
    dataSets: ['Monthly financial reports', 'Prior period comparisons', 'Client industry context', 'Advisory meeting notes'],
    tools: ['Google Docs', 'QuickBooks Online', 'Notion'],
    cadence: ['Monthly: Narrative draft with every report', 'Post-meeting: Recap with action items', 'On demand: Ad hoc explanations'],
  },
  {
    id: 'scenario-modeler', name: 'Scenario & Forecast Modeler', layer: 'advisory',
    icon: '🔢', role: 'Builds what-if models for hiring, pricing, and capital decisions. Three scenarios in 10 minutes. Gives clients the confidence to make big moves with real numbers behind them.',
    managedBy: 'Marcus Webb', managedByTitle: 'CFO Advisory Partner',
    skills: [
      { name: 'Hiring Impact Model', status: 'built' },
      { name: 'Pricing Change Scenario', status: 'built' },
      { name: 'Cash Flow Stress Test', status: 'built' },
      { name: 'M&A Target Analyzer', status: 'needs-build' },
      { name: 'Break-Even Calculator', status: 'built' },
    ],
    dataSets: ['Client P&L history', 'QBO financial data', 'Industry salary benchmarks', 'Market comparables'],
    tools: ['Google Sheets', 'QuickBooks Online', 'Notion'],
    cadence: ['On demand: Decision-point modeling', 'Quarterly: Strategic scenario review', 'Pre-meeting: Scenarios ready 24 hours out'],
  },

  // ═══ TAX LAYER ═══
  {
    id: 'tax-production-manager', name: 'Tax Production Manager', layer: 'tax',
    icon: '📋', role: 'Manages the entire tax production pipeline — status tracking, deadline alerts, review queues, and bottleneck identification. Diana always knows exactly where every return stands.',
    managedBy: 'Diana Reyes', managedByTitle: 'Senior Tax Manager',
    skills: [
      { name: 'Return Status Dashboard', status: 'built' },
      { name: 'Deadline Alert System', status: 'built' },
      { name: 'Review Queue Manager', status: 'built' },
      { name: 'Extension Filing Tracker', status: 'built' },
      { name: 'Bottleneck Identifier', status: 'needs-build' },
    ],
    dataSets: ['Canopy project data', 'Client engagement list', 'Filing calendar', 'Prior year return dates'],
    tools: ['Canopy', 'Slack', 'Google Sheets', 'UltraTax CS'],
    cadence: ['Daily: Status dashboard update', 'Weekly: Production health report', 'Triggered: Deadline alerts at 30/14/3 days'],
  },
  {
    id: 'tax-researcher', name: 'Tax Research Agent', layer: 'tax',
    icon: '🔍', role: 'Answers technical tax questions by searching current IRS guidance, code sections, and recent rulings — with citations. Turns a 2-hour research project into a 5-minute answer.',
    managedBy: 'Diana Reyes', managedByTitle: 'Senior Tax Manager',
    skills: [
      { name: 'IRS Guidance Search', status: 'built' },
      { name: 'Code Section Lookup', status: 'built' },
      { name: 'Tax Planning Memo Writer', status: 'built' },
      { name: 'IRS Notice Response Drafter', status: 'built' },
      { name: 'Prior Year Comparison Analyst', status: 'built' },
      { name: 'State Tax Guidance Search', status: 'needs-build' },
    ],
    dataSets: ['IRS publications', 'Tax code sections', 'Recent rulings and guidance', 'Client tax history'],
    tools: ['Web search', 'UltraTax CS', 'Notion', 'Google Drive'],
    cadence: ['On demand: Technical questions', 'Pre-filing: Strategy memo for complex clients', 'Triggered: IRS notice response'],
  },
  {
    id: 'document-collector', name: 'Document Collection Agent', layer: 'tax',
    icon: '📁', role: 'Runs the entire client document collection process — intake checklists, automated follow-ups, receipt confirmation, and packet organization. Nobody chases paper manually anymore.',
    managedBy: 'Emma Castillo', managedByTitle: 'Tax Associate — Data Collection',
    skills: [
      { name: 'Intake Checklist Generator', status: 'built' },
      { name: 'Automated Reminder Sequence', status: 'built' },
      { name: 'Receipt Confirmation Sender', status: 'built' },
      { name: 'Packet Organizer', status: 'built' },
      { name: '1099 and K-1 Tracker', status: 'built' },
      { name: 'PDF Data Extractor', status: 'needs-build' },
    ],
    dataSets: ['Client engagement list', 'Document requirement templates by return type', 'Canopy portal data', 'Prior year document logs'],
    tools: ['Canopy', 'Gmail', 'Google Drive', 'DocuSign'],
    cadence: ['Per engagement: Checklist sent at signing', 'Weekly: Follow-up sequence for outstanding items', 'Triggered: Confirmation when packet is complete'],
  },
  {
    id: 'return-reviewer', name: 'Return Quality Reviewer', layer: 'tax',
    icon: '✅', role: 'Reviews completed returns against standardized checklists before they reach the Senior Manager. Catches errors at the production level so Diana reviews clean work — not sloppy first drafts.',
    managedBy: 'Tom Nguyen', managedByTitle: 'Tax Associate — Review & Production',
    skills: [
      { name: 'Return Checklist Review', status: 'built' },
      { name: 'Prior Year Cross-Reference', status: 'built' },
      { name: 'Schedule Completeness Check', status: 'built' },
      { name: 'E-File Status Monitor', status: 'built' },
      { name: 'Client Delivery Email Drafter', status: 'needs-build' },
    ],
    dataSets: ['Completed return files', 'Prior year returns', 'UltraTax CS data', 'Review checklist standards'],
    tools: ['UltraTax CS', 'Canopy', 'Google Drive', 'Gmail'],
    cadence: ['Per return: Quality check before advancing to review', 'Weekly: Production quality report', 'Triggered: E-file acknowledgment monitoring'],
  },

  // ═══ CAS / BOOKKEEPING LAYER ═══
  {
    id: 'transaction-processor', name: 'Transaction Processing Agent', layer: 'cas',
    icon: '🏷️', role: 'Categorizes transactions, suggests QBO codes, builds payroll entries, and flags ambiguous items for human review. Processes hundreds of transactions before the bookkeeper opens their laptop.',
    managedBy: 'Lauren Chen', managedByTitle: 'CAS Manager / Senior Bookkeeper',
    skills: [
      { name: 'Transaction Categorizer', status: 'built' },
      { name: 'Payroll Entry Builder', status: 'built' },
      { name: 'Vendor Memory Engine', status: 'built' },
      { name: 'Ambiguous Transaction Flagger', status: 'built' },
      { name: 'New Client COA Builder', status: 'built' },
    ],
    dataSets: ['QBO transaction feeds', 'Chart of accounts standards', 'Vendor history by client', 'Payroll reports'],
    tools: ['QuickBooks Online', 'Google Sheets', 'Notion'],
    cadence: ['Daily: Overnight transaction processing', 'Monthly: New client COA setup', 'Triggered: Ambiguous item flagged for review'],
  },
  {
    id: 'reconciliation-agent', name: 'Reconciliation Agent', layer: 'cas',
    icon: '🔢', role: 'Pre-stages bank reconciliation workpapers, matches transactions to ledger entries, and highlights exceptions. Bookkeepers walk in to organized reconciliation files — not blank spreadsheets.',
    managedBy: 'Carlos Rivera', managedByTitle: 'Bookkeeper',
    skills: [
      { name: 'Reconciliation Workpaper Builder', status: 'built' },
      { name: 'Transaction Matcher', status: 'built' },
      { name: 'Exception Highlighter', status: 'built' },
      { name: 'AR/AP Aging Tracker', status: 'built' },
      { name: 'Undeposited Funds Monitor', status: 'needs-build' },
    ],
    dataSets: ['Bank statements', 'QBO ledger data', 'Prior reconciliations', 'Outstanding check lists'],
    tools: ['QuickBooks Online', 'Google Sheets', 'Canopy'],
    cadence: ['Monthly: Workpapers staged when statements arrive', 'Weekly: AR/AP aging update', 'Triggered: Exception flagged immediately'],
  },
  {
    id: 'books-quality-reviewer', name: 'Books Quality Reviewer', layer: 'cas',
    icon: '🔍', role: 'Reviews completed bookkeeper work against Meridian quality standards before delivery. Flags miscategorizations, reconciliation gaps, and missing entries so Lauren reviews clean books — not messy ones.',
    managedBy: 'Lauren Chen', managedByTitle: 'CAS Manager / Senior Bookkeeper',
    skills: [
      { name: 'Categorization Accuracy Check', status: 'built' },
      { name: 'Reconciliation Gap Detector', status: 'built' },
      { name: 'Month-End Completeness Check', status: 'built' },
      { name: 'Client-Ready Books Verifier', status: 'built' },
      { name: 'Catch-Up Project Scoper', status: 'built' },
    ],
    dataSets: ['Completed client QBO files', 'Meridian quality standards', 'Prior period books', 'Month-end checklist templates'],
    tools: ['QuickBooks Online', 'Notion', 'Canopy'],
    cadence: ['Monthly: Pre-delivery quality review per client', 'Weekly: Books health portfolio report', 'On demand: Catch-up project scoping'],
  },
  {
    id: 'client-document-coordinator', name: 'Client Document Coordinator', layer: 'cas',
    icon: '🏦', role: 'Manages all client document collection for bookkeeping — bank statements, credit card feeds, receipts. Sends automated requests, tracks receipts, and logs everything so bookkeepers always know what is ready.',
    managedBy: 'Mia Kaufman', managedByTitle: 'Client Services Coordinator',
    skills: [
      { name: 'Monthly Statement Request Sender', status: 'built' },
      { name: 'Document Receipt Logger', status: 'built' },
      { name: 'Overdue Document Chaser', status: 'built' },
      { name: 'Portal Access Manager', status: 'built' },
      { name: 'Client Communication Drafter', status: 'built' },
    ],
    dataSets: ['Client contact list', 'Monthly document requirements', 'Canopy portal data', 'Statement receipt history'],
    tools: ['Canopy', 'Gmail', 'Google Drive', 'Slack'],
    cadence: ['Monthly: Statement requests sent on the 1st', 'Weekly: Outstanding document follow-up', 'Triggered: Receipt confirmation when documents arrive'],
  },

  // ═══ OPERATIONS LAYER ═══
  {
    id: 'client-onboarding-agent', name: 'Client Onboarding Agent', layer: 'operations',
    icon: '👋', role: 'Runs the complete new client onboarding pipeline — engagement letters, portal setup, document collection, credential management, and kickoff scheduling. Onboarding that used to take 3 weeks now takes 3 days.',
    managedBy: 'Megan Torres', managedByTitle: 'Client Onboarding & Offboarding Coordinator',
    skills: [
      { name: 'Engagement Letter Generator', status: 'built' },
      { name: 'Welcome Sequence Sender', status: 'built' },
      { name: 'Portal Setup Guide', status: 'built' },
      { name: 'Onboarding Status Tracker', status: 'built' },
      { name: 'Credential Manager', status: 'built' },
      { name: 'Offboarding Checklist Runner', status: 'needs-build' },
    ],
    dataSets: ['New client engagement data', 'Service line templates', 'DocuSign templates', 'Portal access logs'],
    tools: ['DocuSign', 'Canopy', 'Gmail', 'Google Drive', 'Slack'],
    cadence: ['Triggered: Full pipeline starts at engagement signing', 'Weekly: Onboarding status report', 'Triggered: Offboarding at engagement end'],
  },
  {
    id: 'billing-manager', name: 'Billing & Collections Manager', layer: 'operations',
    icon: '🧾', role: 'Generates invoices, monitors payment status, and runs the collections sequence for overdue accounts. AR is always current. Nobody manually chases invoices.',
    managedBy: 'James Thornton', managedByTitle: 'COO / Firm Administrator',
    skills: [
      { name: 'Invoice Generator', status: 'built' },
      { name: 'Payment Status Monitor', status: 'built' },
      { name: 'Collections Reminder Sequence', status: 'built' },
      { name: 'Overdue Account Escalator', status: 'built' },
      { name: 'Time Entry Reconciler', status: 'built' },
    ],
    dataSets: ['Canopy time entries', 'Client billing rates', 'Invoice history', 'Payment records'],
    tools: ['Canopy', 'QuickBooks Online', 'Gmail', 'Slack'],
    cadence: ['Monthly: Invoice generation after close', 'Weekly: AR aging review', 'Triggered: Collections at 15/30/60 days'],
  },
  {
    id: 'operations-monitor', name: 'Operations Monitor', layer: 'operations',
    icon: '📈', role: 'Tracks the operational health of the entire firm — tech stack, vendor contracts, software renewals, and open administrative items. James always knows what needs attention before it becomes a problem.',
    managedBy: 'Priya Okafor', managedByTitle: 'Operations & Admin Coordinator',
    skills: [
      { name: 'Tech Stack Auditor', status: 'built' },
      { name: 'Vendor Renewal Tracker', status: 'built' },
      { name: 'Operations Health Reporter', status: 'built' },
      { name: 'Expense Report Processor', status: 'built' },
      { name: 'Firm SOP Architect', status: 'needs-build' },
    ],
    dataSets: ['Software subscription list', 'Vendor contracts', 'Firm expense data', 'Operations task logs'],
    tools: ['Google Sheets', 'Slack', 'Gmail', 'Notion'],
    cadence: ['Weekly: Operations digest to James', 'Monthly: Tech stack and vendor audit', 'Triggered: Renewal alert 60 days out'],
  },

  // ═══ HR & PEOPLE LAYER ═══
  {
    id: 'people-ops-agent', name: 'People Operations Agent', layer: 'hr',
    icon: '👥', role: 'Manages the full employee lifecycle — onboarding, offboarding, payroll prep, benefits tracking, and compliance monitoring. Derek handles people. The AI handles the paperwork.',
    managedBy: 'Derek Shaw', managedByTitle: 'HR & People Operations',
    skills: [
      { name: 'Employee Onboarding Builder', status: 'built' },
      { name: 'Offboarding Checklist Runner', status: 'built' },
      { name: 'Payroll Data Compiler', status: 'built' },
      { name: 'Benefits Enrollment Tracker', status: 'built' },
      { name: 'HR Compliance Monitor', status: 'built' },
      { name: 'Team Pulse Analyzer', status: 'needs-build' },
    ],
    dataSets: ['Employee records', 'Payroll data', 'Benefits enrollment information', 'Compliance calendar', 'I-9 and certification records'],
    tools: ['Gusto', 'Gmail', 'Google Drive', 'Slack', 'Notion'],
    cadence: ['Per hire: Onboarding plan generated', 'Per departure: Offboarding checklist triggered', 'Weekly: Payroll prep', 'Monthly: Compliance check'],
  },
  {
    id: 'talent-recruiter', name: 'Talent & Recruiting Agent', layer: 'hr',
    icon: '📝', role: 'Writes job descriptions, builds interview guides, and manages the recruiting pipeline. When Meridian needs to hire, the process is ready — not built from scratch every time.',
    managedBy: 'Derek Shaw', managedByTitle: 'HR & People Operations',
    skills: [
      { name: 'Job Description Writer', status: 'built' },
      { name: 'Interview Guide Builder', status: 'built' },
      { name: 'Candidate Evaluation Scorer', status: 'needs-build' },
      { name: 'Offer Letter Generator', status: 'needs-build' },
      { name: 'Compensation Benchmarker', status: 'needs-build' },
    ],
    dataSets: ['Role requirements', 'Compensation benchmarks', 'Firm culture standards', 'Past job descriptions'],
    tools: ['Gmail', 'Google Docs', 'Notion', 'Slack'],
    cadence: ['On demand: Job posting when role opens', 'Per candidate: Interview guide before interview', 'Post-hire: Onboarding handoff to People Ops Agent'],
  },
];

// ═══ SHARED SKILLS (used by 2+ employees) ═══
const SHARED_SKILLS = [
  { name: 'QBO Report Extractor', employees: ['advisory-report-builder', 'scenario-modeler', 'reconciliation-agent'] },
  { name: 'Variance Commentary Writer', employees: ['advisory-report-builder', 'financial-narrator'] },
  { name: 'Client Communication Drafter', employees: ['client-document-coordinator', 'document-collector'] },
  { name: 'Month-End Completeness Check', employees: ['books-quality-reviewer', 'transaction-processor'] },
  { name: 'Onboarding Checklist Runner', employees: ['client-onboarding-agent', 'people-ops-agent'] },
  { name: 'Compliance Monitor', employees: ['people-ops-agent', 'operations-monitor'] },
  { name: 'Status Dashboard Builder', employees: ['tax-production-manager', 'kpi-reporter'] },
];

// ═══ FLOW STORIES (reused from main data) ═══
const ECO_FLOW_STORIES = [
  {
    title: 'A Tax Season Document Lands',
    desc: 'Watch a single client document upload trigger a chain of AI actions across the tax department.',
    steps: [
      { employeeId: 'document-collector', action: 'Document receipt logged and packet completeness checked', output: 'Packet status updated — 2 items still outstanding' },
      { employeeId: 'document-collector', action: 'Automated follow-up sent for remaining missing items', output: 'Client responds — final documents uploaded' },
      { employeeId: 'document-collector', action: 'Complete packet organized into standardized folder structure', output: 'Clean packet ready — preparer assigned and notified' },
      { employeeId: 'return-reviewer', action: 'Prior year comparison run before preparer opens the file', output: 'Comparison report attached — 3 variances flagged for attention' },
      { employeeId: 'tax-production-manager', action: 'Return status updated in production dashboard', output: 'Diana sees the return enter the queue — no status meeting needed' },
    ]
  },
  {
    title: 'Month-End Close at Meridian',
    desc: 'How AI employees run the bookkeeping production line from statement collection to client-ready books.',
    steps: [
      { employeeId: 'client-document-coordinator', action: 'Monthly bank statement requests sent to all CAS clients', output: '42 requests delivered — tracking begins immediately' },
      { employeeId: 'transaction-processor', action: 'Transactions processed overnight as statements arrive', output: '93% categorized — exceptions flagged for bookkeeper review' },
      { employeeId: 'reconciliation-agent', action: 'Reconciliation workpapers staged for each client', output: 'Bookkeepers open organized files — not blank spreadsheets' },
      { employeeId: 'books-quality-reviewer', action: 'Completed books reviewed against quality standards', output: '2 files flagged — Lauren reviews exceptions, not every line' },
      { employeeId: 'advisory-report-builder', action: 'QBO data pulled and advisory reports drafted for advisory clients', output: '6 client reports with commentary — Marcus reviews, not builds' },
    ]
  },
];

// ═══════════════════════════════════════
// REQUIRED VARIABLES FOR ECOSYSTEM PAGE
// ═══════════════════════════════════════

const SHARED_CAPABILITIES = [
  { name: 'QBO Report Extractor', icon: '📒', desc: 'Pulls financial data from QuickBooks Online for any client', usedBy: ['advisory-report-builder', 'scenario-modeler', 'reconciliation-agent'] },
  { name: 'Client Communication Drafter', icon: '✉️', desc: 'Writes professional client-facing emails in Meridian\'s voice', usedBy: ['client-document-coordinator', 'document-collector', 'return-reviewer'] },
  { name: 'Compliance Checklist Runner', icon: '✅', desc: 'Generates and tracks compliance checklists for tax and HR', usedBy: ['people-ops-agent', 'tax-production-manager'] },
  { name: 'Status Dashboard Builder', icon: '📊', desc: 'Builds real-time status views for production pipelines', usedBy: ['tax-production-manager', 'kpi-reporter', 'books-quality-reviewer'] },
];

// Note: original code uses INFASTRUCTURE (typo preserved for compatibility)
const INFASTRUCTURE = [
  { name: 'QuickBooks Online', icon: '📒', desc: 'Accounting platform — all client books, reports, and financial data' },
  { name: 'Canopy', icon: '📋', desc: 'Practice management — project tracking, document requests, billing' },
  { name: 'Google Drive', icon: '📁', desc: 'Document storage — client files, workpapers, deliverables' },
  { name: 'DocuSign', icon: '✍️', desc: 'E-signature — engagement letters, authorizations, agreements' },
  { name: 'Gmail + Workspace', icon: '✉️', desc: 'Communication — client emails, internal team coordination' },
  { name: 'Slack', icon: '💬', desc: 'Internal team — AI alerts, briefings, and department channels' },
  { name: 'UltraTax CS', icon: '🧾', desc: 'Tax software — return preparation and filing for all entity types' },
];
