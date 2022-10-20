# Apply Metadata to FastQ Files

**Description:**

Here we make use of the Data Store's ability to tag files with
metadata. Many of these metadata descriptions will be required for
submission of data to a repository prior to publication. We will modify
the previously downloaded '*SraRunTable.txt*' on our local computer in
a spreadsheet program and then upload to the Discovery Environment and
link these descriptions to the files. This process of metadata
application can be applied to any dataset in the Data Store and is a
recommended practice.

!!! Tip 
        If you were using this tutorial with your own data, uploading your
        FastQ files and continuing from this section would be a recommended
        starting point. See the [Data Store Guide](https://learning.cyverse.org/de/manage_data/) for more information about uploading files to
        the Discovery Environment.

------------------------------------------------------------------------

**Input Data:**

| Input | Description | Example |
|---|---|---|
|FastQ files (e.g. SRR9666131.sra.fastq,SRR9666132.sra.fastq...) | Sequencing data in FastQ format | [SRA FastQ Files](https://datacommons.cyverse.org/browse/iplant/home/shared/cyverse_training/tutorials/pbv3/rna-seq-tutorial/fastq_files|

## *Apply Metadata*

1. In a spreadsheet program (e.g., Excel), open the **SraRunTable.txt**
file on your local computer.

!!! Tip
        Renaming the file with a '.csv' extension before opening the file
        may make it easier for your spreadsheet program to properly interpret.

2.  To the spreadsheet, add a new first column (left-most). Name this
    column "**file**."
3.  At this point, sort the spreadsheet by run (ascending). This will
    make it easier in the subsequent steps when file names will likely
    be alphanumerically sorted.
4.  In the **file** column we will list the path in the Data Store for
    each FASTQ file as corresponds to its accession in the Run column.
    (e.g., /iplant/home/**USERNAME**/rna-seq-tutorial/fastq_files/
    SRR9666132.sra.fastq). In the **Data** view, clicking the three dots
    next to any file/folder icon reveals a function menu which includes
    an option to **Copy Path**.

!!! Note

        Your first two columns should be similar to the below (with your
        username replacing username below:
        ```
        File Run
        /iplant/home/username/rna-seq-tutorial/fastq_files/SRR9666131.sra.fastq
        SRR9666131
        /iplant/home/username/rna-seq-tutorial/fastq_files/SRR9666132.sra.fastq
        SRR9666132
        /iplant/home/username/rna-seq-tutorial/fastq_files/SRR9666133.sra.fastq
        SRR9666133
        /iplant/home/username/rna-seq-tutorial/fastq_files/SRR9666134.sra.fastq
        SRR9666134
        /iplant/home/username/rna-seq-tutorial/fastq_files/SRR9666135.sra.fastq
        SRR9666135
        /iplant/home/username/rna-seq-tutorial/fastq_files/SRR9666136.sra.fastq
        SRR9666136
        /iplant/home/username/rna-seq-tutorial/fastq_files/SRR9666137.sra.fastq
        SRR9666137
        /iplant/home/username/rna-seq-tutorial/fastq_files/SRR9666138.sra.fastq
        SRR9666138
        /iplant/home/username/rna-seq-tutorial/fastq_files/SRR9666139.sra.fastq
        SRR9666139
        /iplant/home/username/rna-seq-tutorial/fastq_files/SRR9666140.sra.fastq
        SRR9666140
        /iplant/home/username/rna-seq-tutorial/fastq_files/SRR9666141.sra.fastq
        SRR9666141
        /iplant/home/username/rna-seq-tutorial/fastq_files/SRR9666142.sra.fastq
        SRR9666142
        ```

5\. (Optional) At this point, you can add any desired additional columns
with any metadata you want to add. For our tutorial this is not
necessary.

6.  Save this file as **fastq_file_metadata.csv** on your local
    computer.

7\. In the Discovery Environment **Data** view, navigate to the
**metadata** folder in your **rna-seq-tutorial** folder. Open the folder
and then click the **Upload** button, then select **Browse Local**.

8.  Browse your local computer to select the
    **fastq_file_metadata.csv**; upload the file. You will get a
    notification when upload is completed. You may need to refresh your
    browser to see the uploaded file.
9.  In the **Data** view, navigate to your **rna-seq-tutorial** folder
    and select (checkbox) the **fastq_files** folder.
10. Click the **More Actions** button and select **Apply Bulk
    Metadata**. Browse to and select the **fastq_file_metadata.csv**
    file in the **metadata** folder. Click **Done** to complete this
    action. You will get a notification when the metadata has been
    applied successfully.
11. To view the metadata, navigate to the **fastq_files** folder and
    select (checkbox) any individual FASTQ file. Click the **More
    Actions** button and select **Metadata**. You will then see the
    applied metadata. You can build custom search queries on any of
    these attributes (column names in your original spreadsheet) and the
    values (the entries for these columns). See [Data Store Guide](https://learning.cyverse.org/de/manage_data/) for more information about advanced search queries and smart folders.

**Output/Results**

| Output | Description | Example |
|---|---|---|
fastq_file_metadata.csv | A CSV file containing metadata labels for the FastQ files | [FastQ metadata](https://datacommons.cyverse.org/browse/iplant/home/shared/cyverse_training/tutorials/pbv3/rna-seq-tutorial/metadata/fastq_file_metadata.csv)|  

------------------------------------------------------------------------

**Description of output and results**

With metadata applied, this files are now more easy to search and
organize. These metadata properties will also be of use in data
submission to repositories like SRA.

------------------------------------------------------------------------

