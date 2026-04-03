---
title: "Automated ETL & Predictive Analytics Pipeline (sample)"
date: 2026-02-19
tags: ["Python", "SQL", "ETL", "Scipy"]
summary: "Built a robust data pipeline for job market analysis."
---

<style>
    .content, .post, body, article {
        font-weight: 400;
        line-height: 1.6;
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        color: white;
    }
    
    h1, h2, h3, h4 {
        color: #F59E0B !important; 
        font-weight: 700 !important;
    }
    
    .social-icon:hover {
        filter: drop-shadow(0 0 8px #F59E0B);
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

## 🏗️ The Challenge
As a Data Engineer transitioning to Data Science, I wanted to automate the collection of job postings to identify which skills are trending in 2026.

## 🛠️ My Approach
I built a three-stage pipeline:

1. **Extraction:** A Python-based scraper utilizing `BeautifulSoup` and API integrations.
2. **Transformation:** Used **SQL Window Functions** and **CTEs** to deduplicate and normalize 50k+ records.
3. **Analysis:** Applied **Scipy** for statistical significance testing on salary differences between remote and hybrid roles.

## 📈 Results
* Reduced data processing time by **40%** through SQL optimization.
* Identified a **15% surge** in demand for Docker skills in entry-level roles.

[View Code on GitHub](https://github.com/guamanqj/project-repo)