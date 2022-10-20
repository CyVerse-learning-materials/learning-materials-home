# QC Reads with FastQC

**Description:**

We will do a quality check to verify the sequencing data is of suitable
quality for downstream analysis.

------------------------------------------------------------------------

**Input Data:**

| Input | Description | Example |
|---|---|---|
fastq_file_metadata.csv | A CSV file containing metadata labels for the FastQ files | [FastQ metadata](https://datacommons.cyverse.org/browse/iplant/home/shared/cyverse_training/tutorials/pbv3/rna-seq-tutorial/metadata/fastq_file_metadata.csv)|

## *Use FastQC App to Report on Sequence Quality*

1.  In the [Discovery Environment](https://de.cyverse.org/) click on the **Data** icon and navigate to your
    **rna-seq-tutorial** tutorial folder and create a folder to store
    outputs, name the folder **fastqc_analyses**.
2.  In the **Apps** view, search for and launch the **FastQC 0.11.5
    (multi-file)** app. You can use this direct link: [FastQC app](https://de.cyverse.org/de/?type=quick-launch&quick-launch-id=033737f2-9add-4de9-a1b4-ad0dd49d56aa&app-id=dbd0de10-97da-11e6-8f91-008cfa5ae621)
3.  In **Analysis Info** you can name this analysis and provide any
    comments (optional). Under **Output folder**, navigate to the
    **fastqc_analyses** folder created earlier. Your outputs will
    automatically be placed in this folder; click **Next**.
4.  In **Parameters** for **Input** browse to the **fastq_files** folder
    previously created and add the 12 files (e.g., SRR9666131.sra.fastq,
    SRR9666132.sra.fastq); click **Next**.
5.  Click **Next** again to skip **Advanced Settings (optional)**; under
    **Review and Launch** click **Launch Analysis**.
6.  Click on **Analyses** view to see the current status of the job; you
    can also click on the **Analyses** icon to navigate to this section.
    When the job is complete, you can click on the **folder** icon next
    to the analyses name to browse the results. You may need to
    **Refresh** to see the current job status. This job is expected to
    take 30-40 minutes.
7.  When the job has status **Completed**, navigate to the output. The
    expected output will be 12 HTML formatted reports, and 12 zip files
    containing additional files including text-based metrics. You can
    click on and examine all the HTML files; they will open as new tabs
    in your web browser. Review of the example dataset indicates the
    samples are all of high quality and additional filtering or trimming
    would not improve our quantification results.

**Output/Results**

| Output | Description | Example | 
|---|---|---|
| HTML and ZIP files of FastQC reports | For each FastQ file an HTML file with an interactive report on sequence quality and a ZIP file with components of that report are created. | [FastQC Reports](https://datacommons.cyverse.org/browse/iplant/home/shared/cyverse_training/tutorials/pbv3/rna-seq-tutorial/FastQC_0.11.5__multi-file__analysis1-2020-10-07-22-18-23.5) |  

------------------------------------------------------------------------

**Description of output and results**

In the case of the tutorial data, the sequence quality is of very high
quality. If necessary, other applications (e.g. Trimmomatic) could be
used at this stage to do further filtering or trimming.
