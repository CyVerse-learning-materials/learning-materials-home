# Frequently Asked Questions

## User Account

??? question "**How do I update my account information?**"

    CyVerse users should update their account information annually for continued access to services. To update, go to the [CyVerse User Portal](https://user.cyverse.org/){_target=_blank}, log in, and click the account icon in the upper right corner.

    In addition to updating your email, institution, occupation, preferences and other information that may have changed, please add your ORCID ID, a unique identifier which can help you receive credit for your work. Get an ORCID here <https://orcid.org/register>.

	By keeping your account information current, our funders can see the value of CyVerse to our community and we learn which of our services and platforms are most helpful to you.

-----------------------------------------------------------------------

## Data

??? question "**What if I need more space (storage) in the Data Store?**"

    Every user has a 100GB allocation in the Data Store. 
    You can request more space by completing an [Allocation Increase Form](https://user.cyverse.org/forms/2/overview).

-----------------------------------------------------------------------

??? question "**How do I publish a large set of public data?**"

    If you need assistance transferring a large dataset to CyVerse, please contact CyVerse Support (<support@cyverse.org> or use the blue chat icon at the bottom right). 
    
    For more information on our policies, see CyVerse's [Collaboration Policy](http://www.cyverse.org/collaboration-policy) and [Data Management Policy](http://www.cyverse.org/data-management-policy). 
    
    For more information on using data at CyVerse, see the Learning Center documentation on [working with data](ds/intro.md).

-----------------------------------------------------------------------

??? question "**What public datasets are in CyVerse?**"

    CyVerse provides web access to its public datasets via WebDav [https://data.cyverse.org](https://data.cyverse.org){_target=_blank} 
    
    Public datasets in CyVerse may also be accessed through the Discovery Environment, Atmosphere, the Science APIs and iCommands. 
    
    For more information on using public data at CyVerse, see the Learning Center documentation pages on [HTTP Access with WebDAV](https://cyverse-learning-materials.github.io/learning-materials-home/ds/webdav/#prerequisites).

-----------------------------------------------------------------------

??? question "**How do I request a Community Released Data Folder?**"
    
    Community Released Data folders are available for evolving datasets that individuals or communities want to make available as quickly as possible for research and reuse, especially within CyVerse analysis platforms. 
    
    Community Released Data folders are intended for datasets that are growing or changing frequently or that may not need long-term preservation.

    Before requesting a folder, please read this wiki article on [publishing data through the Data Commons](https://wiki.cyverse.org/wiki/display/DC/Publishing+Data+through+the+Data+Commons), and this one on [preparing community-released data folders](https://wiki.cyverse.org/wiki/display/DC/Preparing+Community+Released+Data+Folders).

    Then, if you meet the criteria, you can request a folder using [this form](https://user.cyverse.org/forms/7/overview).

-----------------------------------------------------------------------

??? question "**How do I connect to a shared or public folder with CyberDuck?**"

    See our [using CyberDuck documentation](ds/cyberduck.md).

-----------------------------------------------------------------------

??? question "**How do I open a connection to a private folder that is shared with me?**"

    See our [using the Data Store documentation](ds/intro.md).

-----------------------------------------------------------------------

??? question "**How do I make a folder public with iCommands?**"

    Although you can share files and folders in the DE and create public links, you must use iCommands make them visible to everyone. Permissions are set in iCommands by using `ichmod` (<https://docs.irods.org/4.2.1/icommands/user/#ichmod>).

    To make a folder public, you must give read permission to two users: 'public' (anyone signed in with a CyVerse account) and 'anonymous' (anyone on the web - no log in required). To recursively make a shared folder called 'myfolder' public, use the instructions below.

    ```bash
    ichmod -r read public /iplant/home/shared/myfolder
    ichmod -r read anonymous /iplant/home/shared/myfolder
    ```

    To remove public access to the folder, use:

    ```bash
    ichmod -r null public /iplant/home/shared/myfolder
    ichmod -r null anonymous /iplant/home/shared/myfolder
    ```
------------------------------------------------------------------------    

??? question "**When sharing a file or folder, what permission should I give to my collaborator?**"

    	It depends on what you want to allow the collaborator to do with the
    	file or folder. Options are: read, write (ability to edit the file or
    	folder), and own (in addition to edit, can also delete and move; use
    	this permission with caution). Learn more
    	[here](https://wiki.cyverse.org/wiki/display/DEmanual/Changing+and+Viewing+Data+Permission+Levels+in+the+DE).

------------------------------------------------------------------------

??? question "**Why can't I rename or delete files in a folder that has been shared with me?**"

    To rename a file or folder, you must have "write" permission, and to
    delete a file you must have "own" permission. To check the permission
    you have, click the checkbox for the item and look at the Permissions
    shown in the Details panel on the right. Contact the person who shared
    the file or folder with you if they did not give you the necessary level
    of permission. Learn more at [Changing and Viewing Data Permission
    Levels in the
    DE](https://wiki.cyverse.org/wiki/display/DEmanual/Changing+and+Viewing+Data+Permission+Levels+in+the+DE).

------------------------------------------------------------------------

??? question "**How can I manage shared files and folders for my lab group or project?**"

    See [Setting Up a Shared Directory for a Lab or Project](https://wiki.cyverse.org/wiki/display/DC/Setting+up+a+shared+directory+for+a+lab+or+project).

------------------------------------------------------------------------

??? question "**Why doesn't anything happen when I move a folder I own to the Trash?**"

    If a folder has hundreds of files, it can take several hours for the
    deletion to complete in the DE. Please be patient and try refreshing
    your browser periodically. You cannot delete 1000 files or more in the
    DE. You must [use
    iCommands](https://wiki.cyverse.org/wiki/display/DS/Using+iCommands)
    instead. Note that deleted files may still show up in the search for
    awhile, but eventually deleted files will be fully purged from the system.

------------------------------------------------------------------------

??? question "**Can I have spaces in file and folder names?**"

    No. Do not use spaces or special characters in file or folder names as
    they can cause analyses to fail. [Learn more
    here](https://wiki.cyverse.org/wiki/display/DEmanual/Using+Special+Characters+in+the+DE).

------------------------------------------------------------------------

??? question "**Can I view my files in a genome browser?**"

    You can view bam, vcf, and gff genome files you own in the genome
    browsers at Ensembl, UCSC, IGV, GBrowse, and jbrowse, and view Fasta
    genome files in CoGe. Learn more about viewing genome files in [a genome
    browser](https://wiki.cyverse.org/wiki/display/DEmanual/Viewing+Genome+Files+in+a+Genome+Browser)
    or in
    [CoGe](https://pods.iplantcollaborative.org/wiki/display/DEmanual/Viewing+Genome+Files+in+CoGe).

    
-----------------------------------------------------------------------

## Apps and Analyses

??? question "**Why has my job failed or been running forever?**"

    The following recommendations can help you determine what went wrong and
    collect information for CyVerse staff in case you cannot resolve the
    problem yourself.
    
    **Common things to check when troubleshooting an analysis**
    
    -   View the app\'s parameters to make sure you used the correct input
        files and settings
    -   Read through the app\'s documentation page
    -   It also may be helpful to read through documentation about the
        tool that was used to create the app. Check the app\'s
        documentation page to see if a link was provided. If no link was
        provided, you can find specifics about the tool that was used and
        search for more information on the web.
    -   Avoid the use of special characters and spaces in analysis names,
        file names, and folder names when submitting an analysis through
        the DE (e.g., ~ \` ! @ # $ % ^ & \* ( ) + = { } [ ] | \ : ;
        " ' < , ? / and spaces)
    
    **Getting Help with an analysis**
    
    If you know that an analysis typically completes in 20 minutes but you
    have one that still shows Running status 24 hours after you submitted
    it, the app used for the analysis seems to have a problem, or you
    didn\'t get any output files or the output files were not what you
    expected, you can submit a request for help directly in the Analyses
    window. The status of the analysis determines the Help information
    that is displayed.
    
    -   In the Analyses window, find the analysis with the possible issue
    -   Click the name of the failed analysis whose outputs you want to
        view
    -   Review the suggestions for review
    -   If you still need assistance, click I still need help and complete
        the form
    -   Please go through all the troubleshooting steps yourself before
        requesting help. The problem is often something that you can
        diagnose yourself.
    
    **Checking Log files for error**
    
    One of the main tools available for troubleshooting a failed analysis
    is the set of log files that are returned with each completed or
    failed analysis. These log files contain important information about
    the analysis, such as the settings that were used, files you used,
    and, in the case of a failed analysis, information to help explain why
    the analysis failed.
    
    Because different apps are based on different tools, there is no
    standard method used for error reporting, so the same type of error
    may land in different log files. For example, one app may return
    errors to the stdout files (usually the screen, although it can be
    redirected and is generally captured in a log file here), while
    another saves its errors to the stderr files (which usually writes to
    a file, but can also be redirected). This means you may have to
    look in more than one log file when troubleshooting a failed analysis.
    The log files that most commonly contain error information are
    (numerals in the filename correspond to the step number that was
    logged in your analysis):
    
    -   `condor-stderr` and `condor-input-stdout` log files contain errors
        and details about Condor, the batch manager program that handles
        the execution of your analyses submission in the analyses queue.
    -   `condor-input-stderr` and `condor-input-stdout` files contain
        details about outputs from the tool upon which the app is based.

------------------------------------------------------------------------

??? question "**How do I get help with a tool (app) or workflow?**"

    The steps to get help depend on whether you're a novice or an expert
    with the tool (executable or binary) on which the app or workflow is
    based.
    
    **If you are a novice:**
    
    1.  Learn more about the tools used:
    	-   Search the internet for the publication describing the tool and
        any related documentation.
    	-   Make sure you understand what the tool is designed to do, what
        inputs it can accept and in which format, and how to set any
        parameters.
    1.  Search the internet for informative sites in your domain. For
        example, [SEQanswers](<http://seqanswers.com>) is the go-to
        online forum for the next-generation sequencing community.
    2.  Talk with someone at your institution who is more experienced with
        the tool.
    3.  Try to use the app in the Discovery Environment. Click the info icon next to the app name to
        view the app manual and its sample test input files and expected
        outputs.
    
    **If you are experienced with the tool or workflow:**
    
    If you are experienced with the tool or workflow and need advice for
    how to work with very large-scale data or a complex workflow, you may
    request community support or [Extended Collaborative
    Support](<http://www.cyverse.org/collaborate>).

------------------------------------------------------------------------

??? question "**Why is my analysis sitting in the Submitted state for so long?**"

    Analyses that use an app that runs on an HPC system can remain in the
    Submitted state for hours or even days. They may sit in the queue in
    Submitted state waiting to run, along with other possibly long-running
    jobs that were in the queue first. Therefore, it may take several days
    for your analysis to get its turn to run. Once your analysis runs, its
    results will be returned to the Data Store and you will get a
    notification that the analysis status is now Completed.

------------------------------------------------------------------------

??? question "**Is there a limit to how many analyses (jobs) I can run at the same time in the Discovery Environment?**"

    Only 8 of your analyses will run at the same time. You can launch more,
    but they will not run until some of your analyses have completed.

------------------------------------------------------------------------

??? question "**I'm trying to run an analysis, but when I enter an input I can't see my files. Why? I know they are there.**"

    Because the app requires a *folder* as input, not a *file*, the files
    don't show since they aren't the appropriate inputs for the app. The
    files are indeed there but don't show. Check the app's input box; if it
    says "Select a folder", then it requires a folder input. Put the file(s)
    you want to input into a folder and then use that folder as input. Note:
    You can use Drag and Drop to input the folder by finding it in the Data
    window, making sure the folder name is shown in the center panel, and
    then
    [dragging](https://wiki.cyverse.org/wiki/display/DEmanual/Moving+a+Data+File+or+Folder#MovingaDataFileorFolder-DragDrop)
    the folder into the app's input box.

------------------------------------------------------------------------

??? question "**How do I rerun a job I previously ran in the DE, but I want to change some parameters or use a different input?**"

    You can easily relaunch the same analysis with different settings:
    
    In the Analyses window, click the app name in the App column for
    the analysis you want to rerun. This opens up an app window for that app, which
    is already configured with the inputs and settings you used for the
    previous analysis run. Change settings or inputs as needed.
    Click **Launch Analysis** to launch the new analysis.
    
    [Learn more
    here.](https://wiki.cyverse.org/wiki/pages/viewpage.action?pageId=11446455#Analyses%20Menu:%20View%20Outputs,%20Parameters,%20and%20Info;%20Relaunch,%20Cancel,%20and%20Delete-Relaunch)

------------------------------------------------------------------------

??? question "**How do I run the same analysis on a number of files most efficiently?**"

    You can create a file that contains a list of up to 16 files to use as
    input for high-throughput and batch file execution. Such a file is
    called an HT Analysis Path List file. Learn more
    [here](https://wiki.cyverse.org/wiki/display/TUT/Parallel+execution%2C+DE+%28Discovery+Environment%29+style),
    and if you still have questions, read
    [here](https://pods.iplantcollaborative.org/wiki/display/DEmanual/Creating+New+Files+and+Folders#CreatingNewFilesandFolders-HTanalysispathlist).

------------------------------------------------------------------------

??? question "**I have a series of files that I want to analyze with the same app, but the output files all have the same name. How do I distinguish them so I can use them in a workflow?**"

    You can avoid confusion by finding the output folder in your Data list
    and
    [renaming](https://wiki.cyverse.org/wiki/display/DEmanual/Renaming+a+Data+File+or+Folder)
    each output file with a unique name. After renaming the output files,
    you can then use them together in a step of the analysis workflow.

------------------------------------------------------------------------

??? question "**Why can't I find an app in the Discovery Environment?**"

    There are two common reasons why an app is not "visible" or doesn't come
    up in search in the Apps list:
    
    - 	The app may be an HPC (high-performance computing) app, which is
        only displayed after you have logged in to Tapis, where the HPC
        apps are stored. To do so, click the **HPC** tab in the Apps
        window and enter your CyVerse username and password.
    -   The app may not yet be public, or the app owner may not have
        shared the unpublished app with you. Check with the owner to see
        if it is indeed shared with you or is public.
    
    If you still can't find the app, it's possible it has been deprecated.
    If an app is no longer returned in a search query,
    [search](https://wiki.cyverse.org/wiki/display/DEmanual/Searching+for+an+App+or+Workflow#SearchingforanApporWorkflow)
    for an app with a similar name or one that uses the same tool, topic, or
    operation. If you are the app integrator and need the app returned to
    the catalog, [contact Support
    (support@cyverse.org)](mailto:support@cyverse.org) for assistance.
    [Learn more about deprecated
    apps](https://wiki.cyverse.org/wiki/display/DEmanual/Using+the+Apps+Window+and+Submitting+an+Analysis#UsingtheAppsWindowandSubmittinganAnalysis-ArchivedApp).
    
------------------------------------------------------------------------

??? question "**What apps and workflows are in CyVerse?**"

    CyVerse has hundreds of apps and workflows in the Discovery Environment
    (DE). You can view the list of applications available in the DE [here](https://cyverse.atlassian.net/wiki/spaces/DEapps/pages/241882146/List+of+Applications){_target=_blank}. Most
    apps in the DE have user manuals to help you use the
    app. You also can browse the list of tutorials to find help to learn a
    complicated workflow or how to use an app in the DE or VICE.
    
------------------------------------------------------------------------

??? question "**How do I make my app available for other people to use?**"

    You can create a new app interface in the Discovery Environment and
    share it with other users and you also can install the app on VICE. In
    most cases, providing a Docker container (or a link to one) with the
    application of your choice is all you need to start. See the
    [Develop](https://cyverse-learning-materials.github.io/learning-materials-home/de/create_apps/)
    section of the Learning Center.

------------------------------------------------------------------------

## Containers

??? question "**Does CyVerse have resources for GPU and containers (e.g., to stabilize R modules using the nvidia cuda)?**"

    Yes; please email Tyson at <tswetnam@cyverse.org> for details.

------------------------------------------------------------------------

??? question "**While container performance is greater than a VM, how much is container performance below that of native mode, in general?**"

    Please see the Conclusion section bullet #2 in [Evaluation of Docker
    Containers for Scientific Workloads in the
    Cloud](https://dl.acm.org/doi/pdf/10.1145/3219104.3229280).

------------------------------------------------------------------------

??? question "**Are there tools for scanning publicly available containers in Atmosphere VMs for malware?**"

    [Docker Hub](https://hub.docker.com/) and [Quay](https://quay.io/), two
    of the most popular public container image registries, both provide security
    scanning for images that are uploaded to their sites. Details about how
    to enable or use these registries' security scanning features can be
    found here:
    <https://developers.redhat.com/blog/2019/06/26/using-quay-io-to-find-vulnerabilities-in-your-container-images/>
    and <https://docs.docker.com/docker-hub/vulnerability-scanning/>.
    
    Other tools to scan your container images without using DockerHub and
    Quay include [Anchore](https://anchore.com/),
    [Clair](https://github.com/quay/clair), and
    [Trivy](https://github.com/aquasecurity/trivy), with new container-based
    security scanning software being developed all the time. Each solution
    seems to take a different approach to security scanning, so you might
    need to experiment to find the tool that works for your workflow. The
    easier tools to use are Anchore, which can be used as a container
    itself, and Trivy, which can be installed by a package manager.
    
    When using Singularity, there is built-in integration with Clair using
    Singularity's tools. Information about Singularity tools can be found
    here: <https://github.com/singularityhub/stools>

------------------------------------------------------------------------

## Bring Your Own (BYO)

??? question "**How can I use CyVerse's tools and resources from within my program/app?**"

    See the information about our [Science APIs](http://www.cyverse.org/science-apis); you can also contact Support using the
    blue chat icon at the bottom right of the platform. For projects
    requiring more extensive support, you can request community support or
    an external collaborative partnership (see Collaboration FAQ below).

------------------------------------------------------------------------


## Collaboration

??? question "**How can I get a letter of collaboration for my grant proposal that uses CyVerse?**"

    To request a letter of collaboration, email <info@cyverse.org>
    your request with the following information:  
    - the CyVerse resources your project will use (e.g., storage, computing power, expertise for scaling, etc.)
    and indicate if any resulting datasets will be made publicly available;
    - the name of the PI, proposal title, funding agency, the date you need the letter 
    - if there is a template that must be used, please attach it to your email.
 
------------------------------------------------------------------------

??? question "**What is an external collaborative partnership and how do I apply?**"

    External Collaborative Partnerships (ECP) pair member(s) of the CyVerse
    user community with expert CyVerse staff to address the computational
    needs of a scientific project. Requests are reviewed on an ongoing
    basis.
    
    The criteria CyVerse uses to review ECP requests are available here: [ECP Criteria](http://www.cyverse.org/criteria-for-assessing-ecs-requests).
    
    To help you complete the [ECP Application](https://user.cyverse.org/forms/3), the questions on the form are listed below.
    
    **External Collaborative Partnership Application Questions**
    
    -   Project Principal Investigator (PI)
    -   Institution
    -   Collaborating personnel:   
    	-   Provide a detailed list of students, technicians,
                informaticians and/or developers who will be able to assist
                with project design and implementation, their respective
                computational science skill sets (e.g., web design, Python,
                GWAS, etc.), and their specific time commitments during the
                project (e.g., 1.5 hrs/day).
    
    -   Previous interactions with CyVerse
    -   Funding sources
    -   Project title
    -   Project description
    -   Please summarize your proposal's activities and desired outcomes
        (500 chars or less)
    
    -   Scientific description:   
    	-   Provide a scientific description of your project. Describe
                how the proposed project is within the scope of CyVerse's
                scientific Enablement Vision. Illustrate how any resulting
                deliverables have the potential to enable science for
                scientists beyond your immediate network of collaborators.
    
    -   Technical description:   
    	-   Provide a technical description of your project. What is the
                computational need that Will be addressed with assistance
                from CyVerse? Identify specific potential deliverables to be
                implemented using CyVerse technologies, such as the
                Discovery Environment, Atmosphere, APIs, Data Store, Data
                Commons, etc.
    
    -   Timeline and milestones for completing the project:   
    	-   Provide a timeline of specific monthly milestones
                (deliverables). Projects of short duration (\~2 months)
                should provide weekly milestones.
    
    -   Scientific and technical impact:   
    	-   Describe how the success of this collaboration will benefit
                your project and the broader community.
    
    -   Communication and sharing plan:   
    	-   Will the data and/or workflows be made publicly available
                through CyVerse?
            -   Will you be blogging and/or tweeting about the work?
            -   Will you be giving a talk about your work at your
                institution or at a professional conference?
            -   Will you be writing a news article for the CyVerse website
                or newsletter?
            -   Will you be preparing a tutorial that uses the datasets or
                workflows?
            -   Will you be leading a workshop(s) or webinar(s) to teach
                others to use the data or workflow(s)?

------------------------------------------------------------------------

## Teaching and Training

??? question "**How can I use CyVerse in my course?**"

    A great teaching resource is to use containerized workflows in DE/VICE for a class. By
    loading a container with the software tools, datasets, and analysis
    parameters necessary to run an analysis, educators use containers to help overcome many
    technological and logistical (i.e., devices with different OS) hurdles for 
    both learning and teaching informatics and computational skills. See [Teaching with VICE](vice/teaching_vice) for more information.
    
    Also, [DNA Subway](https://cyverse-learning-materials.github.io/learning-materials-home/dna_subway_guide/#types-of-apps){_target=_blank} is especially useful for teaching the basics of computational genomics workflows: gene concepts,
    phylogenetics, DNA barcoding and RNA-Seq analysis. With a friendly user interface, DNA Subway uses the analogy of multiple subway 
    stops and lines to understand genomics workflows and has been used successfully by high school students and above.

------------------------------------------------------------------------

??? question "**Can CyVerse give a workshop at my institution?**"

    Funding to support workshop requests is very limioted, with priority for
    trainings at underserved institutions (rural,
    HBCU/Tribal/Hispanic-serving, etc.). Contact CyVerse's Education, Outreach, and
    Training Lead Jason Williams (<williams@cshl.edu>).

------------------------------------------------------------------------
