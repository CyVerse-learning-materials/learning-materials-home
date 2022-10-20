# Obtain Accession Numbers and Metadata from the SRA

**Description:**

In this section, we will describe how to import data from the NCBI
Sequence Read Archive (SRA). The example dataset is available at the SRA
under the accession PRJNA553702. It is not possible to directly download
sequencing files from the SRA. Instead, we must obtain the accessions
for the individual sequencing files and use the 'sra-tools' software to
download those files.

------------------------------------------------------------------------

## *Get SRA Accession Metadata*

1.  Go to the [SRA](https://www.ncbi.nlm.nih.gov/sra).
2.  Enter the BioProject accession '**PRJNA553702**' in the search bar
    and press **Search**.
3.  This search should return 12 entries which are individual sequence
    files associated with this experiment. Click on any of the results
    (e.g., *GSM3936272: 100µM MEL rep3; Arabidopsis thaliana; RNA-Seq*).
    This will lead to a page with a detailed description of the
    experiment.
4.  Under the **Study** heading, find the link to **All runs** and click
    this to access the SRA Run Selector. (Direct link: [SRP214076](https://www.ncbi.nlm.nih.gov/Traces/study/?acc=SRP214076&o=acc_s%3Aa))
5.  Under the **Select** heading, there are two downloads (simple text
    files) available for download. Click on **Metadata** and
    **Accession** list to download both files. The metadata file will be
    called **SraRunTable.txt** and the accession list will be called
    **SRR_Acc_List.txt**.

!!! Note
        All metadata and accession lists from the SRA will have the same file
        names. Be sure to rename or carefully organize these files if you will
        be downloading other SRA data.


**Output/Results**

| Output | Description | Example |
|---|---|---|
| SraRunTable.txt | Metadata from the SRA | [SraRunTable](https://datacommons.cyverse.org/browse/iplant/home/shared/cyverse_training/tutorials/pbv3/rna-seq-tutorial/metadata/SraRunTable.txt) |
| SRR_Acc_List.txt | Accession list from the SRA | [SRR_Acc_List](https://datacommons.cyverse.org/browse/iplant/home/shared/cyverse_training/tutorials/pbv3/rna-seq-tutorial/metadata/SRR_Acc_List.txt) |

------------------------------------------------------------------------

**Description of output and results**

The **SraRunTable.txt** will be used to label our files using the Data
Store\'s metadata capabilities. We will use the **SRR_Acc_List.txt** as
input for importing files from the SRA.

------------------------------------------------------------------------