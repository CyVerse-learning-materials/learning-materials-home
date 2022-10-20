# **Plant Bioinformatics Vol 3 RNA-Seq Tutorial**

## Goal

This tutorial is an online version of an RNA-Seq tutorial developed for
Vol. 3 of Plant Bioinformatics. It is an end-to-end RNA-seq analysis
using the Kallisto and Sleuth. The tutorial emphasizes reproducibility
features of the CyVerse platforms.

------------------------------------------------------------------------

## Tutorial Maintainer(s)

Who to contact if this guide needs fixing. You can also email
[learning@CyVerse.org](learning@CyVerse.org)

| Maintainer | Institution | Contact |
|---|---|---|
| Jason Williams | CyVerse / Cold Spring Harbor Laboratory  | <williams@cshl.edu> |

------------------------------------------------------------------------

## Prerequisites

### Downloads, access, and services

*In order to complete this tutorial you will need access to the
following services/software*

| Prerequisite | Preparation/Notes | Link/Download |
|---|---|---|
| CyVerse account | You will need a CyVerse account to complete this exercise | [CyVerse User Portal](https://user.cyverse.org/) |   
|Spreadsheet software | Software for editing spreadsheet data | User provided (e.g. Excel, Google Sheets, or Open Office) |
| Cyberduck (optional) | Standalone software for upload/download to Data Store | [Download Cyberduck](https://cyberduck.io/) | 

### Platform(s)

*We will use the following CyVerse platform(s):*

| Platform | Interface | Link | Platform Tour |
|---|---|---|---|
| Discovery Environment and Data Store| Web/Point-and-click | [Discovery Environment](https://de.cyverse.org/) | [Discovery Environment guide](https://learning.cyverse.org/de/manage_data/) | 

### Application(s) used

**Discovery Environment App(s):**

| App name | Version | Description | App link | Notes/other links |
|---|---|---|---|
sra-tools prefetch | SRA tools version 2.8.10, CyVerse App version 0.1 | Utility for downloading data from NCBI Sequence Read Archive |[sra-tools prefetch app](https://de.cyverse.org/de/?type=quick-launch&quick-launch-id=80451d08-2183-4085-8fa0-d29a764dca91&app-id=4f94e974-ff81-11ea-acb0-008cfa5ae621) |[SRA Tools Documentation](https://github.com/ncbi/sra-tools/wiki) |
sra-tools vdb-validate | SRA tools version 2.8.10, CyVerse App version 0.1 | Utility for validating downloaded data from NCBI Sequence Read Archive | [sra-tools vdb-validate app](ttps://de.cyverse.org/de/?type=quick-launch&quick-launch-id=0c6dcb40-afab-4bd2-8f91-9715212abe61&app-id=d563c068-0358-11eb-b24f-008cfa5ae621) | [SRA Tools Documentation](https://github.com/ncbi/sra-tools/wiki) |
sra-tools fasterq-dump | SRA tools version 2.8.10, CyVerse App version 0.1 | Convert SRA files to FastQ format | [sra-tools fasterq-dump app](https://de.cyverse.org/de/?type=quick-launch&quick-launch-id=fea0aadb-888d-420f-8d9c-989f65beb3c1&app-id=c32b39ea-035c-11eb-8c0c-008cfa5ae621) | [SRA Tools Documentation](https://github.com/ncbi/sra-tools/wiki) |
FastQC | 0.11.5 | Quality control reports for FastQ files | [FastQC app](https://de.cyverse.org/de/?type=quick-launch&quick-launch-id=033737f2-9add-4de9-a1b4-ad0dd49d56aa&app-id=dbd0de10-97da-11e6-8f91-008cfa5ae621) | [FastQC Documentation](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/) |
Kallisto | 0.43.1 | RNA-Seq quantification by pseudoalignment | [Kallisto app](https://de.cyverse.org/de/?type=quick-launch&quick-launch-id=6132e25c-6576-4c84-bd6f-9e343e5ef03a&app-id=c341ba8c-30ad-11e8-8fb4-008cfa5ae621) |[FastQC Documentation](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/) |
Sleuth | 0.30.0 | VICE application of RStudio with Sleuth and related R packages | [Sleuth app](https://de.cyverse.org/de/?type=quick-launch&quick-launch-id=afd0da48-455d-4201-aafb-fe92d38f7986&app-id=4809de5a-037b-11eb-a1cc-008cfa5ae621) |[FastQC Documentation](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/)|

### Input and example data

*In order to complete this tutorial you will need to have the following
inputs prepared*

| Input File(s) | Format | Preparation/Notes | Example Data |
|---|---|---|---|
| SRA files (from NCBI Sequence Read Archive) or FastQ files | ".sra", ".fastq" | This tutorial starts with importing data from the SRA. You could also start at [Organize files, validate import, and extract to FastQ format](step5.md) | [CyVerse Data Commons](https://datacommons.cyverse.org/browse/iplant/home/shared/cyverse_training/tutorials/pbv3) |
| SRA Metadata, custom metadata | ".csv" | This tutorial uses metadata provided from the SRA. If using your own FastQ files, you may create and use any metadata you wish. | [CyVerse Data Commons 2](https://datacommons.cyverse.org/browse/iplant/home/shared/cyverse_training/tutorials/pbv3/rna-seq-tutorial/metadata/SraRunTable.txt) |

!!! Warning "Sample-data"
    The data for this tutorial comes from Zia et al. 2019 which used RNA-Seq
    to explore overlap in signaling pathways in Arabidopsis treated with the
    hormones melatonin and auxin. Although these hormones have similar
    chemical structures (indoles), the study identified distinct signaling
    pathways and changes in gene expression. The dataset is available on the
    SRA under BioProject PRJNA553702. We will attempt to replicate the
    RNA-Seq portion of this analysis.

    Zia, S. F., Berkowitz, O., Bedon, F., Whelan, J., Franks, A. E., &
    Plummer, K. M. (2019). Direct comparison of Arabidopsis gene expression
    reveals different responses to melatonin versus auxin. BMC Plant
    Biology. https://doi.org/10.1186/s12870-019-2158-3

