+++
images = [""]
author = "Staff"
description = ""
date = "2024-07-18T00:00:00-05:00"
title = "Reinstatement of file purging of personal /scratch files on Afton and Rivanna"
# url = "/maintenance"
draft = true
tags = ["scratch"]
categories = ["feature"]
+++

On Sep 1, 2024 RC system engineers will reinstate a file purging policy for personal <code> /scratch</code> files and folders. From Sep 1 forward, files not accessed for over 90 days will be permanently deleted on a daily rolling basis.  

The <code> /scratch</code> filesystem is intended as a temporary work directory. It is not backed up and old files must be removed periodically to maintain a stable HPC environment. 

{{% callout %}}
## Key Points:

- Purging of personal scratch files will start on 9/1/24. Files that have not been accessed since Jun 1, 2024 will be deleted on that day. 
- Directories that have been emptied as part of the file purging process will be removed as well. 
- Scratch data should be backed up to other storage options. [Learn more](/userinfo/storage) about storage options.  

{{% /callout %}}

{{% highlight %}}

**Do you have additional questions?** 

Please contact our <a href="/form/support-request/?category=Storage&request_title=Project%20storage%20data%20migration" class="card-link" target="_blank">user services team</a>, or join us for our [virtual office hours](/support/#office-hours) every Tuesday, 3-5 p.m. and Thursday, 10-12 p.m. starting March 6.

{{% /highlight %}}

{{% accordion-group title="Email Communications" id="commgroup" %}}

{{% accordion-item title="Email Communications" id="emails" %}}

{{% accordion-group title="Emails" id="emailgroup" %}}

{{% accordion-item title="No Emails" id="email-3" %}}

{{% /accordion-item %}}

{{% /accordion-group %}}

{{% /accordion-item %}}

{{% /accordion-group %}}

## FAQ

{{% accordion-group title="Group" id="faqgroup"%}}

{{% accordion-item title="1. Why are files being deleted? " id="faq-1" %}}
Scratch is intended as a temporary work directory, not for long-term storage. It is not backed up, and old files need to be purged periodically to maintain system stability and filesystem performance. This is generally an accepted best practice at HPC centers. 
{{% /accordion-item %}}

{{% accordion-item title="2. How does the file purging work? " id="faq-2" %}}
Starting Sep 1, 2024, the Afton and Rivanna systems execute a daily script that identifies the last access time for each scratch file. Each day the script will permanently delete those files identified with an access time older than 90 days. Directories that are left empty as a result of the file purging process will be removed as well. 
{{% /accordion-item %}}

{{% accordion-item title="3. How is a file’s last access time being determined? " id="faq-3" %}}
A file’s last access corresponds to the date and time that file was last opened (read) or modified (written to). 
{{% /accordion-item %}}

{{% accordion-item title="4. How can I find out what files will be purged? " id="faq-4" %}}
From the Open OnDemand interface find the CheckScratchForPurge application under the System tab 

Alternatively, from the command line, run:

<code> check-scratch-for-purge > outfile </code>

where outfile is the path of the file to which you wish to save the results. 
{{% /accordion-item %}}

{{% accordion-item title="5. What should I do with files that I still need? " id="faq-5" %}}
We encourage users to back up their important data. Data can be transferred to either your home storage (50G) or leased storage (if applicable). Learn more about available data transfer tools. 
{{% /accordion-item %}}

{{% accordion-item title="6. Can deleted files be restored if needed later? " id="faq-6" %}}
No. Scratch is a high-performance filesystem without any snapshots or backups. Deleted files cannot be restored.  
{{% /accordion-item %}}

{{% accordion-item title="7. What storage options does RC provide? " id="faq-7" %}}
RC offers several low-cost storage options to researchers. Home directory storage provides up to 50G with daily and weekly snapshots of data. PIs with an active allocation account can request 10TB of free Research Standard storage.  PIs also have the option to purchase additional leased storage through our website. For more information, visit [https://www.rc.virginia.edu/userinfo/storage/] 
{{% /accordion-item %}}

{{% accordion-item title="8. How can I get help? " id="faq-8" %}}
If you have any questions, please contact our <a href="/form/support-request/?category=Storage&request_title=Project%20storage%20data%20migration" class="card-link" target="_blank">user services team</a>, or join us for our [virtual office hours](/support/#office-hours) every Tuesday, 3-5 p.m. and Thursday, 10-12 p.m. starting March 6.
{{% /accordion-item %}}


