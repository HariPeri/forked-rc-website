+++
categories = [
  "resources",
  "hpc",
]
tags = [
  "hpc",
  "ivy",
  "rivanna",
]
draft = false
date = "2017-01-16T09:30:12-05:00"
title = "High Performance Computing"
description = ""
author = "SOMRC Staff"
images = [
  "/2016/10/image.jpg",
]

+++

<img src="https://somrc.virginia.edu/images/cray-logo.png" alt="CRAY Supercomputers" align="right" />
<p class=lead>UVA has two local HPC facilities available to researchers: <b>Rivanna</b> and <b>Ivy</b>. Depending upon your use case, privacy requirements, and the application(s) you need to run, we can help you create an account and start processing your data.</p>

<div class="card">
  <div class="card-block">
    <h4 class="card-title">Rivanna</h4>
    <h6 class="card-subtitle mb-2 text-muted">Standard Security Cluster</h6>
    <p class="card-text">
    Rivanna provides a high-performance computing environment for all user levels. A majority of Rivanna’s nodes are Cray Cluster Solutions nodes connected by FDR (fourteen data rate) Infiniband, but there are also two nodes with NVIDIA Kepler K20 GPUs, several nodes with QDR (quad data rate) Infiniband, and quite a few older nodes connected with gigabit ethernet.
    </p><p class="card-text">
    All nodes share a Lustre filesystem for temporary storage called /scratch with up to 1.4PB of storage space for all users.   Each user is assigned space in <code>/scratch/$USER</code> with a default quota of 10TB of storage. 
    </p>
    <a href="http://arcs.virginia.edu/rivanna" class="card-link"><button class="btn btn-primary">Read more</button></a>
    <a href="http://arcs.virginia.edu/user-info/frequently-asked-questions" class="card-link"><button class="btn btn-primary">FAQs</button></a>
  </div>
</div>

<div style="height:40px;"></div>

<div class="card">
  <div class="card-block">
    <h4 class="card-title">Ivy</h4>
    <h6 class="card-subtitle mb-2 text-muted">High-Security / HIPAA Computing</h6>
    <p class="card-text">
    Ivy provides a secure computing environment for all user levels. It is made up of three tiers, each HIPAA-compliant out of the box:
    <ul>
      <li>VMware virtual compute instances (Windows Server 2012R2 / CentOS Linux)</li>
      <li>Apache Hadoop</li>
      <li>Domino Data Lab</li>
    </ul>
    </p>
    <a href="#" class="card-link"><button class="btn btn-primary disabled">Read more</button></a>
    <a href="#" class="card-link"><button class="btn btn-primary disabled">FAQs</button></a>
  </div>
</div>