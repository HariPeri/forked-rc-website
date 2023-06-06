+++
images = [""]
author = "Staff"
description = ""
date = "2023-12-11T00:00:00-05:00"
title = "Rivanna Maintenance: December 18, 2023"
# url = "/maintenance"
draft = false
tags = ["rivanna"]
categories = ["feature"]
+++

{{< alert-green >}}Rivanna will be down for maintenance on <strong>December 18, 2023</strong> beginning at 6 a.m.{{< /alert-green >}}

You may continue to submit jobs until the maintenance period begins, but if the system determines your job will not have time to finish, it will not start until Rivanna is returned to service.

All systems are expected to return to service by **6 a.m. on , December **.

## IMPORTANT MAINTENANCE NOTES

The operating system will be upgraded to Rocky 8.7 with system glibc 2.28 and GCC 8.5.0. Due to fundamental changes in system libraries, the entire software stack is rebuilt. Users should rebuild all in-house codes; please contact us [here](https://www.rc.virginia.edu/form/support-request/) if you need assistance.

The NVIDIA driver version is upgraded to 52x.xx (CUDA 12).

### Modules

1. Toolchains have been consolidated to the following:
    - GCC: `gcc/12.2.0`, `goolf/12.2.0_4.1.4` 
    - Intel: `intel/2023.1`, `intel/18.0` (for legacy software)
    - NVIDIA: `nvhpc/23.3`

2. There are many module version upgrades and deprecation of older versions. Please run `module spider NAME` to check the available versions and the corresponding load command. Contact us [here](https://www.rc.virginia.edu/form/support-request/) if you need a different version. Only the most important changes are listed below:

{{< table title="Replacements" class="table table-striped" >}}
|Name       |Default version|Other versions|Removed|
|---|---|---|---|
|JupyterLab | 3.6.3 | - | 2.2.9 |
|anaconda   |2023.03-py3.10 | 2019.10-py2.7 | 2020.11-py3.8|
|clang      |15.0.7| - | 10.0.1 |
|cuda       |12.0.1|10.2.89, 11.4.2| 10.1.168, 11.0.228 |
|julia      |1.8.5 | - | 1.5.3, 1.6.0 |
|perl       |5.36.0| - | 5.24.0 |
|R          |4.2.3 | - | 3.5.3, 3.6.3, 4.0.3, 4.1.1, 4.2.1 |
|ruby       |3.1.2 | - | 2.3.4 |
{{< /table >}}