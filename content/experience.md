---
title: "Experience"
date: 2026-02-19
url: "/experience"
---

<!-- this is to keep the menu as active for the current page -->
<script>
  document.querySelectorAll('.navigation-item a').forEach(link => {
    if (link.href === window.location.href) {
      link.style.color = '#F59E0B';
      link.style.fontWeight = 'bold';
      link.style.borderBottom = '2px solid #F59E0B';
    }
  });
</script>

<style>
  .content, .post, body, article {
      font-weight: 400;
      line-height: 1.6;
      background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
      /* background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); */
      color: white;
  }

  p, ul {
    color: #F1F5F9; 
    line-height: 1.6;
  }

  /* Secondary info like dates or "2024" */
  .text-muted {
    color: #CBD5E1;
    font-size: 0.9rem;
  }

  h1 {
    color: #F1F5F9;
    display: inline-block;
    border-bottom: 1px solid #EAB308; /* Matches the gold/yellow in your screenshot */
    padding-bottom: 5px;
    margin-bottom: 20px;
  }
  
  h2, h3, h4 {
      color: #FBBF24 !important; 
      font-weight: 700 !important;
  }
  
  .social-icon:hover {
      filter: drop-shadow(0 0 8px #F59E0B);
  }

  /* Target the navigation title specifically */
    .navigation-title {
      color: #F1F5F9 !important; /* Pure Red */
      font-weight: 700 !important;
    }

  /* Optional: Change the color when you hover over it */
  .navigation-title:hover {
    color: #F59E0B !important; /* Darker Red on hover */
  }

  /* Style the individual links */
  .navigation-link {
    color: #42a3ff !important; /* Slate Gray */
    font-weight: 400;
    transition: color 0.3s ease;
  }

  /* Change color on hover to match your H1/H2 */
  .navigation-link:hover, .navigation-link:focus {
    color: #FBBF24 !important; /* Your Glowing Amber */
  }
    
  /* Normal state for general links */
  a {
      color: #94A3B8;
      transition: all 0.3s ease;
      text-decoration: none;
      border-bottom: 1px solid transparent;
  }
  
  /* Hover state for general links */
  a:hover {
      color: #FBBF24;
      border-bottom: 1px solid #FBBF24;
  }
  
  /* Specific styling for your Logic Amber buttons */
  .button {
      background-color: #F59E0B;
      color: #0f172a !important; /* Keep text dark for contrast */
  }
  
  .button:hover {
      background-color: #FBBF24;
      box-shadow: 0 0 15px rgba(245, 158, 11, 0.4); /* Subtle glow */
      transform: translateY(-2px);
  }
</style>


## Professional Journey


I am a Data Engineering professional with 11+ years of expertise across Data Engineering, BI Architecture, and Predictive Modeling. Currently, I am looking to pivot my career into Data Science, where I can apply my extensive background in data architecture and infrastructure to build scalable, high-impact machine learning solutions.

My tenure at Verizon has been a steady evolution from technical execution to strategic leadership. I began in Network Systems Engineering—focusing on ETL and BI development—before moving into a lead role for the Network Systems Financial Dashboard initiative. Most recently, I transitioned into platform management, overseeing the governance and reliability of Network Systems's Tableau and Looker ecosystems.

My "sweet spot" exists at the intersection of robust data architecture and actionable insights. Whether it’s integrating disparate data sources into a single source of truth or securing complex table structures via dynamic governance, my focus is always on architecting an ecosystem of dashboards and reports that empower stakeholders to drive the business forward.

Having recently completed my Master’s in Computer Science (2024), along with specialized certifications in Data Science from Harvard (2019) and Business Intelligence from Stevens Institute of Technology (2024), I am now focused on bridging the gap between engineering and data science. I am eager to apply my skills in machine learning, predictive modeling, and deep-dive analytics to solve large-scale, complex data challenges.

---

## 🏢 Verizon

**Engr III - Spec-Data Engineering** | _June 2021 – February 2026_

Lead the modernization, automation, and data governance of the network systems financial reporting ecosystem to ensure high-scale reliability and executive visibility. 
- Managed multi-tier, multi-node Tableau (Dev, Staging, UAT, Prod) and Google Looker Core (Dev, Prod) environments, supporting a combined user base of 28,000+ active users.
- Architected a unified executive interface by integrating 12 data sources, transitioning 20+ legacy reports, and developing over 60+ new dashboards into a single source of truth.
- Automated executive reporting workflows using Python, reducing manual data processing time by 80% and enabling real-time delivery of deep-dive analytics.
- Secured 100+ tables via Tableau dynamic user functions, automating data governance to provide executives with full-org visibility while preventing unauthorized access to financial data.

**MTS II - Sys Engineering** | _June 2017 – June 2021_

Accountable for the high-availability and performance of the Tableau/Looker ecosystem across global environments. 
- Directed global project lifecycles by coordinating 6 onshore/offshore resources, ensuring 100% alignment between data product delivery and core business requirements.
- Developed high-visibility Tableau Dashboards and reports for Network Systems, driving a 50% increase in platform usage across executive stakeholders.
- Administered a complex, multi-tier Tableau ecosystem consisting of Dev, Staging, UAT, and Production environments with 6 or 8-node clusters to support 20,000+ active users.
- Orchestrated end-to-end server administration, including OS patching, performance tuning, and version upgrades, maintaining 99.9% uptime.

**MTS I - Sys Engineering** | _June 2014 – June 2017_

Directed the end-to-end architecture of data ingestion and BI reporting frameworks to support the core analytical needs. 
- Designed 15+ new OBIEE executive dashboards and supported 100+ existing dashboards and KPI scorecards, converting complex network data into actionable insights for strategic decision-making.
- Modeled robust data warehouse schemas and developed optimized stored procedures to ensure 100% data integrity and optimal query performance for executive-level reporting.
- Architected and maintained robust ETL pipelines using Oracle Data Integrator (ODI), streamlining the ingestion of data from 100+ diverse source systems—including flat files, Oracle GG, and RDBMS—into a centralized data warehouse.

---

## 🎓 Education & Certifications

### **Academic Background**

- **M.S. in Computer Science** | Stevens Institute of Technology | 2024
- **B.S. in Information Technology** | Minor in Computer Science | 2014


### **Technical Certifications**

- **Certificate in Business Intelligence** | Stevens Institute of Technology | 2024
- **Certificate in Data Science** | Harvard University | 2019

---

## 🛠️ Core Competencies

| Domain                | Tools & Technologies                                                           |
| :-------------------- | :----------------------------------------------------------------------------- |
| **Languages**         | Python (Pandas, NumPy, Scikit-learn), SQL (Oracle, PostgreSQL, MySQL), C, Java |
| **Data Engineering**  | Oracle ODI, ETL/ELT, Schema Design, Oracle DB                                  |
| **Machine Learning**  | Supervised Learning, Unsupervised Learning, Deep Learning, Model Evaluation    |
| **BI Visualization**  | Tableau, Looker, Seaborn, Matplotlib                                           |
| **Developer Tools**   | PyTorch, Git, Docker, Linux/Unix, Docker, Google Cloud                         |

---

<a href="/resume/jguamanquispe_resume.pdf" 
   target="_blank" 
   rel="noopener noreferrer"
   style="background-color: #F59E0B; 
   color: #0f172a;
   padding: 12px 24px; 
   ext-decoration: none; 
   border-radius: 5px;
   font-weight: bold;
   display: inline-block;
   margin-top: 20px;">
📄 Download my Full Resume (PDF)
</a>
