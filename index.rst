.. include:: cyverse_rst_defined_substitutions.txt

|CyVerse logo|

Welcome to the CyVerse Learning Center
-----------------------------------------------

The CyVerse Learning center is a release of our learning materials in the
popular "Read the Docs" formatting. We are transitioning our leaning materials from our wiki
into this format to make them easier to search, use, and update. We will be
making regular contributions to these materials, and you can suggest new
materials or create and share your own. If you have ideas or suggestions please
email `Tutorials@CyVerse.org <mailto:Tutorials@cyverse.org>`_. You can also
view, edit, and submit contributions on |Github|.

Getting Started
---------------
There are several places to learn about CyVerse:

 - |Create a CyVerse account|
 - `Getting Started Webinar <https://www.youtube.com/channel/UC-gvdjTz9rq6RovZ57LoDDA>`_ : Every 1-2 months. Watch recent webinars: 
 - `Platform Guides <https://learning.cyverse.org/en/latest/#platform-guides>`_
 - |CyVerse FAQ| page
 - `Quick Starts <https://learning.cyverse.org/en/latest/#quick-starts>`_
 - `Tutorials <https://learning.cyverse.org/en/latest/#tutorials>`_

Advanced users can read how to `Integrate your own tools and apps <https://learning.cyverse.org/en/latest/#tool-and-app-integration>`_ or borrow materials from `CyVerse Workshops <https://learning.cyverse.org/en/latest/#workshops>`_ to reuse in your own teaching.


-----

.. toctree::
   :maxdepth: 1
   :caption: Quick Starts

   quick_starts

-----

Platform Guides
---------------

CyVerse offers an interconnected series of platforms, tools and services. These
guides will help you navigate the top-level user platforms. 

.. list-table::
    :header-rows: 1

    * - Platform/Service
      - Notes
      - Guide
      - Full documentation
    * - Discovery Environment
      - Use hundreds of bioinformatics apps and manage data in the CyVerse Data
        Store from a simple web interface
      - |Discovery Environment Guide|
      - |DE Manual|
    * - Atmosphere
      - Cloud computing platform for CyVerse
      - |Atmosphere Guide|
      - |Atmosphere Manual|
    * - Data Store
      - A unified system for managing and sharing your data across CyVerse's
        tools and services
      - |Data Store Guide|
      - |Data Store Manual|
    * - DNA Subway
      - Educator-focused access to data and informatics tools for modern biology
      - |DNA Subway Guide|
      - See Guide
    * - BisQue
      - Bio-Image Semantic Query User Environment for the exchange and
        exploration of image data
      - Coming Soon
      - |BisQue Manual|
    * - SciApps
      - A web-based platform for reproducible bioinformatics workflows
      - |SciApps Guide|
      - See Guide
    * - Science APIs
      - CyVerse provides programmatic access to its services through multiple
        APIs (application programming interfaces), access points with various
        levels of complexity
      - |Agave Live Docs|
      - See Live Docs
    * - VICE
      - Visual Interactive Computing Environment VICE introduces graphic user
        interfaces (GUIs) and common Integrated Development Environments (IDEs)
        such as Project Jupyter Notebooks & Lab, RStudio, Shiny Apps and Linux
        Desktop
      - |Vice Documentation|
      - See Vice Documentation
-----

Quick Starts
------------

..
    New Repositories will should be directly linked to the subproject path. For
    example: `/projects/base-tutorial-repo/`

These include short guides through common tasks.


.. list-table::
    :header-rows: 1

    * - Quickstart
      - Platform
      - Notes
    * - |Create a CyVerse account|
      - User Portal
      - Start here to create your own account
    * - |Import data from NCBI SRA using the Discovery Environment|
      -  Discovery Environment
      - The NCBI Sequence Read Archive (SRA) is a repository for high-throughput
        sequencing reads. These are valuable data for novel analysis and reuse.
        You can directly import data from SRA into your Data Store using a
        Discovery Environment app.
    * - |Evaluate High-throughput Sequencing Reads with FastQC|
      - Discovery Environment
      - FastQC is a popular tool for evaluating the quality of high-throughput sequencing
        reads such as from Illumina and PacBio.
    * - |Filter, Trim, and Process High-throughput Sequencing Reads with Trimmomatic|
      - Discovery Environment
      - Trimmomatic is a popular application for filtering and trimming high-
        throughput sequencing reads. Several functions can remove populations of
        low quality reads, remove sequencing adaptors, and trim low-quality
        regions of individual reads.
    * - |EZ installation of popular data science tools|
      - Atmosphere and Jetstream
      - Install anaconda (Python 2 or 3, R, Jupyter notebooks), Rstudio,
        Singularity, or Docker easily on any Atmosphere or Jetstream cloud
        computer (instance).
    * - |Submit High-throughput Sequencing Reads to NCBI Sequence Read Archive (SRA)|
      - Discovery Environment
      - The SRA is a canonical repository for sequencing data generated by
        high-throughput instruments. The CyVerse submission pipeline allows you
        to directly submit your data into an SRA-linked BioProject.
    * - |Request a DOI|
      - Data Store, Discovery Environment
      - Organize your dataset and request a DOI (Digital Object Identifier).
    * - |Create a Group Project|
      - Data Store, Discovery Environment
      - Learn the basic steps for setting up a collaborative project using
        CyVerse.
-----

Tutorials
---------

These are involved tutorials that cover popular science workflows.

.. list-table::
    :header-rows: 1

    * - Tutorial
      - Platform(s)
      - Notes
    * - |RNA-Seq with Kallisto and Sleuth|
      - Discovery Environment, Atmosphere
      - Kallisto is a quick, highly-efficient software
        for quantifying transcript abundances in an RNA-Seq
        experiment. Sleuth is designed to analyze and visualize the Kallisto
        results in R.
    * - |Genome Annotation with MAKER|
      - SciApps, Discovery Environment
      - This tutorial is a step-by-step guide for using SciApps to perform MAKER
        based annotation.
    * - |Association analysis with mixed models|
      - SciApps
      - A genome-wide association study (or GWAS) workflow using TASSEL, EMMAX,
        and MLMM for mixed model analysis.


-----

Workshops
------------
These are workshop formatted tutorials that can be used and/or remixed in
running your own CyVerse workshop.

.. list-table::
    :header-rows: 1

    * - Workshop
      - Platform(s)
      - Notes
    * - |CyVerse Tools and Services Workshop|
      - Discovery Environment, Atmosphere, Data Store
      - This is a generic agenda and slides for a one-day CyVerse Workshop
        overviewing the major components of the science infrastrutcure.
    * - |CyVerse NEON Data Institute 2018|
      - Discovery Environment, Atmosphere
      - Provision Atmosphere as a Data Science Workbench running Docker,
        Singularity, Project Jupyter, and RStudio-Server. The
        |NEON Data Institute 2018| focus is on remote sensing and reproducible
        workflows in Python and R.
    * - |CyVerse Container Camp 2019|
      - Discovery Environment, Atmosphere, VICE, Data Store
      - Topics on container technology for reproducible science.
    * - |Condensed R: 240-minute tutorial|
      - Discovery Environment, VICE, Data Store
      - A short introduction to using R and RStudio
    * - |CyVerse Foundational Open Science Skills 2019|
      - Workshop to train new PIs on advanced cyberinfrastructure
      - Discovery Environment, Atmosphere, VICE, DataStore

-----

Tool and App Integration
-----------
You can contribute to CyVerse - Here are documentation pieces of interest in
developing new applications.

.. list-table::
    :header-rows: 1

    * - Documentation
      - Platform(s)
      - Notes
    * - |Vice Documentation|
      - VICE
      - Quick guide to developing for VICE.
    * - |Creating and Running Docker Containers|
      - Discovery Environment, VICE, Atmosphere
      - A short guide to Docker and creating your own containerized applications.

----

Contributing  to the Learning Center
-------------------------------------
You can contribute to the Learning Center - everything from fixing a typo to
adding new documentation pieces.

.. list-table::
    :header-rows: 1

    * - Tutorial
      - Platform(s)
      - Notes
    * - |documentation Quickstart|
      - Learning Center
      - Quick guide to simple contributions and creating new documentation
        pieces.
-----


CyVerse FAQ
---------------

For any and all other questions, check out our |CyVerse FAQ|.

----

Get Powered by CyVerse
----------------------
Third-party projects can leverage our cyberinfrastructure to provide services to their users, including the CyVerse Authentication system, Data Store, and High-performance framework. Projects requesting support by |Powered by CyVerse| must have the programming resources to integrate with CyVerse APIs and CI, as well as the resources to maintain their sites. 

----

External Collaborative Partnerships
-----------------------------------
The |External Collaborative Partnership| program pairs members of our user community with expert staff to address the computational needs of a specific scientific project. To participate, please review the required criteria and then complete the |ECP Request web form|. CyVerse does not provide funding support for external projects.

----

About CyVerse
-------------

**CyVerse Vision:** Transforming science through data-driven discovery.

**CyVerse Mission:** Design, deploy, and expand a national
cyberinfrastructure for life sciences research and train scientists in
its use. CyVerse provides life scientists with powerful computational
infrastructure to handle huge datasets and complex analyses, thus
enabling data-driven discovery. Our powerful extensible platforms
provide data storage, bioinformatics tools, image analyses, cloud
services, APIs, and more.


Originally created under the name iPlant Collaborative as a service to the
U.S. plant science communities, CyVerse cyberinfrastructure is relevant
to all life sciences disciplines and works equally well on data from
plants, animals, or microbes. By democratizing access to supercomputing
capabilities, we provide a crucial resource to enable scientists to find
solutions for the future. CyVerse is of, by, and for the community, and
community-driven needs shape our mission. We rely on your feedback to provide
the infrastructure you need most to advance your science, development, and
educational agenda.

**CyVerse Homepage:** |CyVerse Homepage|

Funding and Citations
---------------------

CyVerse is funded entirely by the National Science Foundation under
Award Numbers DBI-0735191, DBI-1265383, and DBI-1743442.

Please cite CyVerse appropriately when you make use of our resources,
|CyVerse citation policy|.

.. |CyVerse logo| image:: ./img/cyverse_cmyk.png
	:width: 500
	:height: 100

.. |platform_stack| image:: ./img/cyverse_platform_stack.png
  :width: 750


.. |GitHub| raw:: html

   <a href="https://github.com/CyVerse-learning-materials" target="blank">GitHub</a>

.. |documentation Quickstart| raw:: html

    <a href="https://learning.cyverse.org/projects/Documentation-Quickstart/en/latest/" target="blank">Documentation Quickstart</a>

.. |Create a CyVerse account| raw:: html

    <a href="http://learning.cyverse.org/projects/cyverse-account-creation-quickstart/" target="blank">Create a CyVerse account</a>

.. |Import data from NCBI SRA using the Discovery Environment| raw:: html

    <a href="http://learning.cyverse.org/projects/cyverse-importing-sradata-quickstart/" target="blank">Import data from NCBI SRA using the Discovery Environment</a>

.. |Evaluate High-throughput Sequencing Reads with FastQC| raw:: html

    <a href="https://cyverse-fastqc-quickstart.readthedocs-hosted.com/en/latest/" target="blank">Evaluate High-throughput Sequencing Reads with FastQC</a>

.. |Filter, Trim, and Process High-throughput Sequencing Reads with Trimmomatic| raw:: html

    <a href="https://cyverse-trimmomatic-quickstart.readthedocs-hosted.com/en/latest/" target="blank">Filter, Trim, and Process High-throughput Sequencing Reads with Trimmomatic</a>

.. |Submit High-throughput Sequencing Reads to NCBI Sequence Read Archive (SRA)| raw:: html

    <a href="https://learning.cyverse.org/projects/sra_submission_quickstart/en/latest/" target="blank">Submit High-throughput Sequencing Reads to NCBI Sequence Read Archive (SRA)</a>

.. |RNA-Seq with Kallisto and Sleuth| raw:: html

    <a href="https://cyverse-kallisto-tutorial.readthedocs-hosted.com/en/latest/" target="blank">RNA-Seq with Kallisto and Sleuth</a>

.. |CyVerse NEON Data Institute 2018| raw:: html

    <a href="https://cyverse-neon-data-institute-2018.readthedocs-hosted.com/en/latest/" target="blank">2018 NEON Data Institute</a>

.. |NEON Data Institute 2018| raw:: html

    <a href="https://www.neonscience.org/neon-data-institute-2018/" target="blank">NEON Data Institute 2018</a>

.. |EZ installation of popular data science tools| raw:: html

    <a href="https://cyverse-ez-quickstart.readthedocs-hosted.com/en/latest/" target="blank">EZ installation of popular data science tools</a>

.. |CyVerse citation policy| raw:: html

    <a href="http://www.cyverse.org/acknowledge-cite-cyverse" target="blank">CyVerse citation policy</a>

.. |CyVerse homepage| raw:: html

    <a href="http://www.cyverse.org" target="blank">http://www.cyverse.org</a>

.. |Association analysis with mixed models| raw:: html

    <a href="https://cyverse-sciapps-guide.readthedocs-hosted.com/en/latest/association.html" target="blank">Association analysis with mixed models</a>

.. |Genome Annotation with MAKER| raw:: html

    <a href="https://cyverse-sciapps-guide.readthedocs-hosted.com/en/latest/annotation.html" target="blank">Genome Annotation with MAKER</a>

.. |Vice Documentation| raw:: html

    <a href="https://learning.cyverse.org/projects/vice" target="blank">Vice Documentation</a>

.. |Request a DOI| raw:: html

    <a href="https://cyverse-doi-request-quickstart.readthedocs-hosted.com/en/latest/" target="blank">Request a DOI</a>

.. |Create a Group Project| raw:: html

    <a href="https://cyverse-group-project-quickstart.readthedocs-hosted.com/en/latest/" target="blank">Create a Group Project</a>

.. |CyVerse Container Camp 2019| raw:: html

    <a href="https://learning.cyverse.org/projects/container_camp_workshop_2019/en/latest/" target="blank">CyVerse Container Camp 2019</a>

.. |Creating and Running Docker Containers| raw:: html

    <a href="https://cyverse-creating-docker-containers-quickstart.readthedocs-hosted.com/en/latest/" target="blank">Creating and Running Docker Containers</a>

.. |CyVerse FAQ| raw:: html

    <a href="https://cyverse-learning-center-faq.readthedocs-hosted.com/en/latest/" target="blank">CyVerse FAQ</a>

.. |Condensed R: 240-minute tutorial| raw:: html

    <a href="https://cyverse-240-minute-r-tutorial.readthedocs-hosted.com/en/latest/" target="blank">Condensed R: 240-minute tutorial</a>

.. |CyVerse Tools and Services Workshop| raw:: html

    <a href="https://cyverse-cyverse-tools-and-services-workshop.readthedocs-hosted.com/en/latest/" target="blank">CyVerse Tools and Services Workshop</a>

.. |CyVerse Foundational Open Science Skills 2019| raw:: html

    <a href="https://cyverse-foundational-open-science-skills-2019.readthedocs-hosted.com/en/latest/" target="blank">CyVerse Foundational Open Science Skills 2019</a>
    
.. |Powered by CyVerse| raw:: html

   <a href="https://cyverse.org/Powered%20by%20CyVerse" target="blank">Powered by CyVerse</a>

.. |External Collaborative Partnership| raw:: html

    <a href="https://www.cyverse.org/researchers" target="blank">External Collaborative Partnership</a>

.. |ECP Request web form| raw:: html
   
    <a href="https://user.cyverse.org/forms/3" target="blank">ECP Request web form</a>
