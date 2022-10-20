# Organize Files, Validate Import, and Extract to FastQ Format

**Description:**

At this point, we will put all of the files imported from the SRA into a
single location. We will verify the integrity of the files and then
extract and convert them from the SRA format into the FastQ format.

------------------------------------------------------------------------

**Input Data:**

| Input | Description | Example |
|---|---|---|
| SRA files (SRR9666131.sra, SRR9666132.sra ...) | These are sequence data in the SRA format  | [SRA files](https://datacommons.cyverse.org/browse/iplant/home/shared/cyverse_training/tutorials/pbv3/rna-seq-tutorial/imported_sra) | 

## *Organize Files*

1.  In the [Discovey Environment](https://de.cyverse.org/) click on the Data icon and navigate to your
    **rna-seq-tutorial** folder.
2.  Click on the **Folder** button create a new folder:
    **imported_sra**.
3.  Navigate to the output of the **sra-tools prefetch** analysis
    completed in the previous step. You can go the **Analyses** section
    of the Discovery Environment and click the **folder icon** next to
    the analyses name to navigate to this output.
4.  Select (checkbox) all 12 of the SRA folders (e.g., SRR9666131,
    SRR9666132, ...) and the folder of **logs** from this analysis;
    click the **More Actions** button and choose **Move**. Browse to the
    **imported_sra** folder created inside your tutorial folder
    (**rna-seq-tutorial**). Click **Move** to complete this action. It
    may take a few minutes to complete this move. You may need to
    refresh your browser to see changes.

## *Validate SRA Files*

5.  Before extracting these files, we can do a check here to verify the
    integrity of our import from the SRA. In the Discovery Environment
    click on the Data icon and navigate to your **rna-seq-tutorial**
    tutorial folder and create a folder to store outputs, name the
    folder **sra_validation**.
6.  In the **Apps** view, search for and launch the **sra-tools**
    **vdb-validate app**.
7.  In **Analysis Info** you can name this analysis and provide any
    comments (optional). Under **Output folder**, navigate to the
    **sra_validation** folder created earlier. Your outputs will
    automatically be placed in this folder; click **Next**.
8.  In **Parameters** under **SRA Files (Input)** browse to the
    **imported_sra** folder (created in step 2). Open an individual
    folder (e.g., "SRR966613") and select the **".sra"** file to add it;
    repeat for each of the 12 folders until you have added all 12
    **'.sra'** files (i.e. SRR9666131.sra, SRR9666131.sra...); click
    **Next**.
9.  Click **Next** again to skip **Advanced Settings (optional)**; under
    **Review and Launch** click **Launch Analysis**.
10. Click on **Analyses** view to see the current status of the job; you
    can also click on the **Analyses** icon to navigate to this section.
    When the job is complete, you can click on the **folder** icon next
    to the analyses name to browse the results. You may need to
    **Refresh** to see the current job status. This job is estimated to
    take about 5-10 minutes.
11. When the job has status **Completed**, navigate to the output. The
    output will be a text file (**vdb-validation.txt**). This is a
    report on a series of file checks (including checksums -- an
    algorithmically generated signature that confirms the file's
    integrity). A sample output is shown below with 'ok' indications for
    each test. A similar set of 8 lines should appear in the file for
    each of the verified SRA files.

!!! Note 
        *Sample Output*:
        ```
        2020-10-06T22:04:41 vdb-validate.2.10.8 info: Database 'SRR9666131.sra' metadata: md5 ok
        2020-10-06T22:04:41 vdb-validate.2.10.8 info: Table 'SEQUENCE' metadata: md5 ok
        2020-10-06T22:04:41 vdb-validate.2.10.8 info: Column 'ALTREAD': checksums ok
        2020-10-06T22:04:42 vdb-validate.2.10.8 info: Column 'QUALITY': checksums ok
        2020-10-06T22:04:43 vdb-validate.2.10.8 info: Column 'READ': checksums ok
        2020-10-06T22:04:43 vdb-validate.2.10.8 info: Column 'READ_LEN': checksums ok
        2020-10-06T22:04:44 vdb-validate.2.10.8 info: Column 'READ_START': checksums ok
        2020-10-06T22:04:44 vdb-validate.2.10.8 info: Column 'SPOT_GROUP': checksums ok
        ```

## *Convert SRA Files to FastQ Format*

11. In the Discovery Environment click on the Data icon and navigate to
    your **rna-seq-tutorial** folder and create a folder to store
    outputs, name the folder **fastq_files**.
12. In the **Apps** view, search for and launch the **sra-tools
    fasterq-dump** app.
13. In **Analysis Info** you can name this analysis and provide any
    comments (optional). Under **Output folder**, navigate to the
    **fastq_files** folder created earlier. Your outputs will
    automatically be placed in this folder; click **Next**.
14. In **Parameters** under **SRA Files (Input)** browse to the
    **imported_sra** folder (created in step 3) and open an individual
    folder (e.g., "SRR966613") and select the '.sra' file to add it;
    repeat for each of the 12 folders until you have added all 12
    '.sra' files (i.e. SRR9666131.sra, SRR9666131.sra...); click
    **Next**.
15. Click **Next** again to skip **Advanced Settings (optional)**; under
    **Review and Launch** click **Launch Analysis**.
16. Click on **Analyses** view to see the current status of the job; you
    can also click on the **Analyses** icon to navigate to this section.
    When the job is complete, you can click on the folder icon next to
    the analyses name to browse the results. You may need to **Refresh**
    to see the current job status. This job is expected to take 30-40
    minutes.
17. When the job has status **Completed**, navigate to the output. The
    expected output will be 12 FASTQ formatted files (e.g.,
    SRR9666131.sra.fastq, SRR9666132.sra.fastq...).
18. Since the SRA files are already maintained on NCBI, you can safely
    delete the original SRA files. While this deletion is not mandatory,
    it is a responsible use of public infrastructure to remove large
    unneeded files. Browse to the **rna-seq-tutorial** folder and select
    the **imported_sra** folder. Click the **More Actions** button and
    choose **Move to Trash**. Clicking your username in the **Data**
    view, choose **Trash**. Select the file you wish to delete and click
    the **Trash** button and then select **Delete** to permanently
    delete those files.

**Output/Results**

| Output | Description | Example |
|---|---|---|
|FastQ files (e.g. SRR9666131.sra.fastq,SRR9666132.sra.fastq...) | Sequencing data in FastQ format | [SRA FastQ Files](https://datacommons.cyverse.org/browse/iplant/home/shared/cyverse_training/tutorials/pbv3/rna-seq-tutorial/fastq_files|

------------------------------------------------------------------------

**Description of output and results**

In this section we have validated the imported SRA files and transformed
them into the FastQ format, the input for a variety of sequencing-based
analyses.
