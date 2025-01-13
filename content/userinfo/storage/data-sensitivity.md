+++
title = "RC Systems Data Sensitivity"
description = ""
author = "RC Staff"
images = [""]
categories = ["userinfo"]
date = "2024-12-12T17:45:12-05:00"
tags = [
    "rivanna",
    "hpc",
    "research",
    "storage",
    "public-data",
    "internal-use-data"
]
draft = false
+++

<style>
  table tbody td {
    text-align: center;
    vertical-align: middle; 
  }
</style>

<!-- Version w/out Rio -->
<table class="table table-sm table-striped" style="font-size:90%; margin-top: 1rem;">
  <thead class="thead-dark">
    <tr>
        <th></th>
      <th colspan="3" style="text-align:center; background-color:lightblue;">Standard-Security Zone (SSZ)</th>
      <th colspan="3" style="text-align:center; background-color:lightcoral;">High-Security Zone (HSZ)</th>
    </tr>
    <tr>
        <th></th>
        <th colspan="2" style="text-align:center; vertical-align:middle; background-color:lightgray; align-items: center;">Storage</th>
        <th colspan="1" style="text-align:center; vertical-align:middle; background-color:darkgray;">Computing Environments</th>
        <th colspan="1" style="text-align:center; vertical-align:middle; background-color:lightgray; align-items: center;">Storage</th>
        <th colspan="2" style="text-align:center; vertical-align:middle; background-color:darkgray;">Computing Environments</th>
    </tr>
    <tr>
      <th style="width:16%;">Data Classification</th>
      <th style="width:12%;">Research Project Storage (/project)</th>
      <th style="width:12%;">Research Standard Storage (/standard)</th>
      <th style="width:12%;">Rivanna/Afton (/home &amp; /scratch)</th>
      <th style="width:12%;">High-Security Research Standard Storage</th>
      <th style="width:12%;">Ivy VM (/home)</th>
      <th style="width:12%;">ACCORD</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Public</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Internal-Use</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Sensitive</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td> 
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Highly-Sensitive</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Limited Dataset<sup> <a href="#footnote1"> 1 </a> </sup></td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>De-Identified Dataset<sup> <a href="#footnote2"> 2 </a> </sup></td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>HIPAA<sup> <a href="#footnote3"> 3 </a> </sup></td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>CUI<sup> <a href="#footnote4"> 4 </a> </sup></td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>dbGaP</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>FERPA<sup> <a href="#footnote5"> 5 </a> </sup></td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>ITAR<sup> <a href="#footnote6"> 6 </a> </sup></td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
  </tbody>
</table>

<!-- Version w/ Rio -->
<!-- <table class="table table-sm table-striped" style="font-size:90%; margin-top: 1rem;">
  <thead class="thead-dark">
    <tr>
        <th></th>
      <th colspan="3" style="text-align:center; background-color:lightblue;">Standard-Security Zone (SSZ)</th>
      <th colspan="4" style="text-align:center; background-color:lightcoral;">High-Security Zone (HSZ)</th>
    </tr>
    <tr>
        <th></th>
        <th colspan="2" style="text-align:center; vertical-align:middle; background-color:lightgray; align-items: center;">Storage</th>
        <th colspan="1" style="text-align:center; vertical-align:middle; background-color:darkgray;">Computing Environments</th>
        <th colspan="1" style="text-align:center; vertical-align:middle; background-color:lightgray; align-items: center;">Storage</th>
        <th colspan="3" style="text-align:center; vertical-align:middle; background-color:darkgray;">Computing Environments</th>
    </tr>
    <tr>
      <th style="width:16%;">Data Classification</th>
      <th style="width:12%;">Research Project Storage (/project)</th>
      <th style="width:12%;">Research Standard Storage (/standard)</th>
      <th style="width:12%;">Rivanna/Afton (/home &amp; /scratch)</th>
      <th style="width:12%;">High-Security Research Standard Storage</th>
      <th style="width:12%;">Ivy VM (/home)</th>
      <th style="width:12%;">Rio (/home &amp; /scratch)</th>
      <th style="width:12%;">ACCORD</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Public</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Internal-Use</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Sensitive</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td> 
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>Highly-Sensitive</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Limited Dataset<sup> <a href="#footnote1"> 1 </a> </sup></td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>De-Identified Dataset<sup> <a href="#footnote2"> 2 </a> </sup></td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
    </tr>
    <tr>
      <td>HIPAA<sup> <a href="#footnote3"> 3 </a> </sup></td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>CUI<sup> <a href="#footnote4"> 4 </a> </sup></td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>dbGaP</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>FERPA<sup> <a href="#footnote5"> 5 </a> </sup></td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>   
    </tr>
    <tr>
      <td>ITAR<sup> <a href="#footnote6"> 6 </a> </sup></td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
      <td>✅</td>
      <td>✅</td>
      <td>✅</td>
      <td>❌</td>
    </tr>
  </tbody>
</table> -->

<style>
        .footnote {
            display: block;
            margin-bottom: 10px;
            font-size: 80%;
        }
</style>

<p style="font-size:80%;">
    <span id="footnote1" class="footnote"> <sup>1</sup> Limited datasets have direct identifiers removed, but may contain indirect identifiers including, complete dates, age, city, state, and complete ZIP code.  </span> <br>
    <span id="footnote2" class="footnote"> <sup>2</sup> De-identified datasets contain no identifiers. Note: identifiers can be recoded such that the source information is anonymized (e.g. date shifting, urban/rural determinations vs. ZIP codes, randomly generated subject identifier, etc.) </span> <br>
    <span id="footnote3" class="footnote"> <sup>3</sup> Health Insurance Portability and Accountability Act (HIPAA). Information protected under HIPAA includes any protected health information (PHI) in the medical record that can identify an individual. More information can be found <a href="https://hrpp.research.virginia.edu/teams/irb-hsr/researcher-guide-irb-hsr/protected-health-information-hipaa-regulations-and-research" target="_blank">here.</a> </span> <br>
    <span id="footnote4" class="footnote"> <sup>4</sup> Controlled Unclassified Information (CUI). CUI data is information the government creates or possesses that requires safeguarding or dissemination controls when handling. More information can be found at <a href="https://security.research.virginia.edu/research-data-security-compliance/controlled-unclassified-information" target="_blank">this link</a>.
    Includes data downloaded from the following controlled-access data repositories: Database of genotypes and phenotypes (dbGaP), BioData Catalyst, NCI Genomic Data Commons, ‌‌The NHGRI Genomic Data Science Analysis, Visualization, and Informatics Lab-Space (AnVIL), National Institute of Mental Health Data Archive (NDA), NIA Genetics of Alzheimer's Disease Data Storage Site (NIAGADS).
    The full list of controlled-access repositories can be found at <a href="https://sharing.nih.gov/accessing-data/NIH-security-best-practices" target="_blank">this link</a>. </span> <br>
    <span id="footnote5" class="footnote"> <sup>5</sup> Family Educational Rights & Privacy Act (FERPA). FERPA is a federal law that governs access to student education records. This includes personally identifiable information (PII) like name, SSN, date of birth, grades, and course schedules. More information can be found at <a href="https://uvapolicy.virginia.edu/policy/STU-002" target="_blank">this link</a>.</span> <br>
    <span id="footnote6" class="footnote"> <sup>6</sup> International Traffic in Arms Regulations (ITAR). This includes military technology and software, technical data, and services. More information can be found at <a href="https://security.research.virginia.edu/export-controls/export-controls-regulations" target="_blank">this link</a>. </span> <br>
</p>