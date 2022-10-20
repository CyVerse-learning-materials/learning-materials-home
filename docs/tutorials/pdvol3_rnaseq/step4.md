# Import Files from SRA with the SRA Toolkit

**Description:**

Now that we have a list of accessions, we can use our first application.
The sra-tools prefetch app will allow us to import data from the SRA.
All of the applications we will be using in the Discovery Environment
have been collected together. You may access them by going to the
Collections icon in the Discovery Environment. Select the All
Collections view and scroll to find the **Plant Bioinformatics Vol. 3
Tutorial** collection. You may also search for any application by name
in the Apps catalogue.

------------------------------------------------------------------------

**Input Data:**

| Input | Description | Example |
|---|---|---|
| SRR_Acc_List.txt | Accession list from the SRA | [SRR_Acc_List](https://datacommons.cyverse.org/browse/iplant/home/shared/cyverse_training/tutorials/pbv3/rna-seq-tutorial/metadata/SRR_Acc_List.txt) |

## *Use 'sra-tools prefetch' App to Import SRA Data*

1.  In the , go to **Apps** and search for **sra-tools prefetch**. You
    can use this direct link: [sra-tools prefetch app](https://de.cyverse.org/de/?type=quick-launch&quick-launch-id=80451d08-2183-4085-8fa0-d29a764dca91&app-id=4f94e974-ff81-11ea-acb0-008cfa5ae621)

!!! Note 
        All applications used in this tutorial are collected in the **Plant
        Bioinformatics Vol. 3 Tutorial** collection - See **Collections** in
        the Discovery Environment.


2.  In **Analysis Info** you can name this analysis and provide any
    comments (optional). Under **Output folder**, navigate to the
    **rna-seq-tutorial** folder created earlier. Your outputs will
    automatically be placed in this folder); click **Next**.

!!! Tip
        For future analyses, from the **Settings** icon in the Discovery
        Environment under **Default analysis output folder** you can change
        the default setting for your outputs. This can be useful when you will
        be doing several analyses and you want them to go to a folder other
        than your analyses folder (the default setting).

3.  In **Parameters** under **Accession list** browse to your
    **rna-seq-tutorial** folder and enter the **metadata** folder;
    select **SRR_Acc_List.txt** as input; click **Next**.
4.  In **Advanced Settings (optional)**, each application in the
    Discovery Environment has a 'Resource Requirements' option. These
    are some minimal computational resources that you can choose for the
    application. When the Discovery Environment launches an analysis
    job, it may be run on computing hardware of various capabilities
    (according to what "nodes" are available to accept the job). App
    developers may have set minimums here but you may choose to make
    adjustments. If you don't know which minimums to choose, you can
    ignore these options. If you do run into errors, you can contact
    CyVerse support. Also contact support if the resources you need for
    an app do not appear in the list of options; CyVerse can increase
    these minimums. We will **not** make any changes; click **Next**.
5.  In **Review and Launch**, click **Launch Analysis** to begin the
    analysis job. You will get notification(s) in the Discovery
    Environment about the status of the job, including an email (by
    default preferences settings) when the job is complete.
6.  Click on **Analyses** view to see the current status of the job; you
    can also click on the **Analyses** icon to navigate to this section.
    When the job is complete, you can click on the **folder icon** next
    to the analyses name to browse the results. You may need to Refresh
    to see the current job status. This job will vary on connection
    speed between the CyVerse servers and NCBI. This job is estimated to
    take about 15-30 minutes.
7.  When the job has status Completed, navigate to the output. The
    resulting output will be 12 folders (one for each accession), each
    containing a single SRA file (e.g., SRR9666131.sra, SRR9666132.sra
    ... ). There will also be a logs folder containing output logs from
    the CyVerse Discovery Environment analysis.

**Output/Results**

| Output | Description | Example |
|---|---|---|
| SRA files (SRR9666131.sra, SRR9666132.sra ...) | These are sequence data in the SRA format  | [SRA files](https://datacommons.cyverse.org/browse/iplant/home/shared/cyverse_training/tutorials/pbv3/rna-seq-tutorial/imported_sra) |

------------------------------------------------------------------------

**Description of output and results**

The imported SRA files should be validated for their integrity - these
are large files and we want to make sure the data has not be corrupted.
We will do this integrity check in the next step.
