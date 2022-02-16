[Learning Center Home](http://learning.cyverse.org/)

# DNA Subway

![subway_logo](assets/dna_subway/dnasubway-icon.png)

## Goal

DNA Subway is an educational bioinformatics platform developed by CyVerse. 
It bundles research-grade bioinformatics tools, high-performance computing, and databases into workflows with an easy-to-use interface. 
"Riding" DNA Subway lines, students can predict and annotate genes in up to 150kb of DNA (Red Line), identify homologs in sequenced genomes (Yellow Line), identify species using DNA barcodes and phylogenetic trees (Blue Line), examine RNA-Seq datasets for differential transcript abundance (Green Line), and analyze
metabarcoding and eDNA samples using QIIME (Purple Line).

------------------------------------------------------------------------

## Prerequisites

*In order to complete this tutorial you will need access to the following services/software*

| Prerequisite | Preparation/Notes | Link/Download |
| --- | --- | --- |
| CyVerse account | You will need a CyVerse account to complete this exercise | [Register](https://user.cyverse.org/) |
| DNA Subway Access | DNA Subway access is by request access | Check or request access: [CyVerse User Portal](https://user.cyverse.org/services/mine) |

------------------------------------------------------------------------

## DNA Subway Basics and Logging in to Subway

DNA Subway is designed to be a classroom-friendly approach to
bioinformatics. Unlike most CyVerse platforms, you can even use Subway
without registering for a CyVerse account. We do encourage you to
register however, only work from registered users can be saved. DNA
Subway uses the same open-source bioinformatics tools used by
researchers. See a [complete list of the
tools](https://dnasubway.cyverse.org/about/resources.html) provided in
the Subway pipelines.

**Some things to remember about the platform**

*Registered user and Guest user account types*

-   DNA Subway access must be requested through the CyVerse user portal.
    You can check if you already have access, or request access by
    logging into the portal and visiting the [My
    Services](https://user.cyverse.org/services/mine) page. If DNA
    Subway is not listed, click on
    [Available](https://user.cyverse.org/services/available) services to
    request access.
-   Guest users will not have their worked saved beyond a single DNA
    Subway session. They are also disallowed from using one of the gene
    predictors (FGenesH) in the genomic annotation pipeline (Red Line).
-   We suggest that every student using DNA Subway obtain their own
    account.

*Sample Datasets and reference data*

All Subway lines accept user data and also have sample data that can be
immediately used to create a project.

-   **Red Line - Genome Annotation:** Samples of plant and animal
    genomes that can be used in annotation projects
-   **Yellow Line - TARGeT Search for transposons and other DNA
    Sequences:** Several model plant genomes
-   **Blue Line - DNA Barcoding and Phylogenetics:** Sample sequence
    from plant, animal, fungal, and bacterial barcoding regions; human
    mitochondrial DNA sequence
-   **Green Line - RNA-Seq for differential expression:** Sample
    high-throughput reads from RNA-Seq experiments

If there is a reference data set or sample sequence you would like
added, you can contact CyVerse using the DNA Subway [Contact
page](https://dnasubway.cyverse.org/feedback.html)

*Public and private projects* - DNA Subway projects are private by
default, but can be shared by making them public. Public projects are
searchable and are a great way to share data or present analysis for
grading in a classroom project.

------------------------------------------------------------------------

### *Logging into DNA Subway as a registered user*

> 1.  Access the DNA Subway website at <https://dnasubway.cyverse.org/>
> 2.  If you wish to use DNA Subway as a guest click \'Enter As Guest\'
>
> > ::: note
> > ::: title
> > Note
> > :::
> >
> > When using DNA Subway as a guest, you will be able to work only on
> > the Red, Yellow, and Blue lines. Additionally, some Red Line
> > functionalities will be disabled. Finally, after logging out, or a
> > period of inactivity (\>\~ 30 min) you work will be discarded.
> > :::
>
> 3.  Enter your CyVerse username and CyVerse password.

### *Logging into DNA Subway as a guest user*

> 1.  Access the DNA Subway website at <https://dnasubway.cyverse.org/>
>     ;click \'Enter as Guest\'

------------------------------------------------------------------------









## Accessing Saved Private and Public DNA Subway Projects

DNA Subway projects are automatically saved for registered users. By
default, Subway projects are private upon creation and visible only to
you. You may make project public, in which case users will have the
ability to view those projects, but may not edit those projects.

------------------------------------------------------------------------

### *Accessing Private Projects*

> 1.  Access the DNA Subway website at <https://dnasubway.cyverse.org/>.
>
> 2.  Upon login, you will see a listing of your private projects.
>     Access the project by clicking the project title.
>
>     ::: tip
>     ::: title
>     Tip
>     :::
>
>     All projects in DNA Subway are associated with the color of their
>     respective DNA Subway lines, and with a project ID number. You may
>     see the comments and species associated with the project
>
>     ![private_projects](./img/dna_subway/private_projects.png){width="275px"
>     height="200px"}
>
>     **Deleting a project**
>
>     To delete a project, click the \'trash can\' icon. Once deleted,
>     all data related to that project will be lost and unrecoverable.
>     :::
>
> 3.  From any DNA Subway page, you may access private projects by
>     clicking the \'My Projects\' button on the navigation menu on the
>     left side of the page.

------------------------------------------------------------------------

### *Accessing Public Projects*

> 1.  Access the DNA Subway website at
>     [https://dnasubway.cyverse.org/](); login to Subway or enter as a
>     guest user.
>
> 2.  On the navigation menu on the left side of the screen, click
>     \'Public Projects\'
>
>     > ::: tip
>     > ::: title
>     > Tip
>     > :::
>     >
>     > You can sort by project date or type, and you can search for a
>     > project by title, organism, or the name of the project owner.
>     > When searching, click the double arrow \'\>\>\' to search by
>     > your selected term.
>     > :::

------------------------------------------------------------------------

### *Make a DNA Subway Project Private or Public*

> 1.  Access the DNA Subway website at
>     [https://dnasubway.cyverse.org/](); login to Subway.
>
> 2.  Access your selected project by clicking the project title.
>
> 3.  Under the \'Project Information\' tab, toggle the project setting
>     to \'Public\' or \'Private\' as desired.
>
>     ![project_info_tab](./img/dna_subway/project_info_tab.png){width="150px"
>     height="100px"}

------------------------------------------------------------------------

## Walkthrough of DNA Subway Red Line - Genome Annotation

Annotation adds features and information to a DNA sequence -- such as
genes and their locations, structures, and functions. A good
introduction to annotation can be found in the paper [A beginner's guide to eukaryotic genome annotation](https://www.nature.com/nrg/journal/v13/n5/full/nrg3174.html).
We\'ll also suggest the DNA Subway\'s primer on [annotation evidence](https://dnasubway.cyverse.org/project/ngs/panel/1946#). This
guide contains an explanation of basic functions for this line, as well
as exercises that might be used in the classroom.

**Some things to remember about the platform**

-   On Red Line, you can annotate up to 150KB of your own DNA sequence
-   We provide sample sequence for you to try, or you can upload your
    own

------------------------------------------------------------------------

### *DNA Subway Red Line - Create an Annotation Project with Apollo*

> ::: note
> ::: title
> Note
> :::
>
> DNA Subway is transitioning away from the original Java-based Apollo
> software as most popular web browsers will no longer support Java. The
> new Apollo is Java-free.
> :::
>
> 1.  Log-in to [DNA Subway](https://dnasubway.cyverse.org/) -
>     unregistered users may \'Enter as Guest\'
>
> 2.  Click 'Annotate a genomic sequence.' (Red Square); select the
>     \'Web Apollo\' version
>
> 3.  For \'Select Organism type\' choose \'Animal\' or \'Plant\' and
>     then select the appropriate subtype.
>
>     ::: tip
>     ::: title
>     Tip
>     :::
>
>     The \'Select Organism\' step will load appropriate sample
>     sequences and will also adjust the models used in the de novo gene
>     finding process.
>     :::
>
> 4.  For \'Select Sequence Source\' select a sample sequence.
>
> > ::: note
> > ::: title
> > Note
> > :::
> >
> > Currently, the Java-free Apollo version of Subway does not support
> > upload of a custom DNA Sequence. This feature is coming soon, but we
> > will help you upload custom genomes/regions for your use in the
> > classroom
> > :::
>
> 5.  (Optional) If you have a GFF file of annotated features, you may
>     load these import these annotations from the Green Line, or from a
>     custom GFF file.
> 6.  Name your project and organism (required) and give a description
>     if desired. Click \'Continue\' to proceed.

#### **Example Exercise - Project Creation: Arabidopsis ChrI**

In this and subsequent steps, we will annotate a 75KB section of
Arabidopsis chromosome I.

> 1.  Log-in to [DNA Subway]() - unregistered users may \'Enter as
>     Guest\'.
> 2.  Click 'Annotate a genomic sequence.' (Red Square); select the
>     \'Web Apollo\' version.
> 3.  For \'Select Organism type\' choose \'Plant\' and then
>     \'Dicotyledon\'.
> 4.  from \'Select a sample sequence\' chose \'Arabidopsis thaliana
>     (mouse-ear cress) chr1, 75.00 kb\'.
> 5.  Provide your project with a title, then Click 'Continue.'
>
> ::: tip
> ::: title
> Tip
> :::
>
> You can view your DNA sequence by clicking the \'Sequence\' link in
> the \'Project Information\' tab at the bottom of the page.
> :::

------------------------------------------------------------------------

### *DNA Subway Red Line - Find and Mask Repetitive DNA*

One you have created a Red Line Project, you may begin the process of
generating and assembling predictions and evidence that can be used to
annotate genes.

> 1.  Click 'RepeatMasker'
>
> 2.  When \'RepeatMasker\' turns \'green\' and the icon displays a
>     \'V\' (view); click \'RepeatMasker\' again to view results.
>
>     ![repeat_results](./img/dna_subway/repeat_results.png){width="300px"
>     height="200px"}

### **Example Exercise - Repeat Masking: Arabodopsis ChrI**

-   **Example Sequence:** Arabidopsis thaliana (mouse-ear cress) ChrI,
    75 kb
-   **Tool(s):** RepeatMasker
-   **Concept(s):** Non-coding DNA, sequence repeats, mobile genetic
    elements (transposons)

Following the RepeatMasking steps for the Arabidopsis ChrI sample above,
answer the following *discussion questions*:

> 1.  How many hits were detected in your sample?
> 2.  RepeatMasker reports the length of the repetitive sequences
>     (Length) as well as the class (Attributes).
>
> > -   What is the average length of sequences identified as "simple
> >     repeats"?
> > -   What is the average length of sequences identified as "low
> >     complexity"?
>
> 3.  What is the total percentage of repetitive DNA in your sequence?
>     (Sum of the length of all repetitive sequence / sequence length
>     (75 kb)

::: tip
::: title
Tip
:::

**Some Useful Definitions for Repetitive Sequence**

-   **Simple repeats:** 1-5bp repeats (e.g. repetitive dinucleotides
    'AT' etc.)
-   **Low Complexity DNA:** Poly-purine/ poly-pyrimidine stretches, or
    regions of extremely high AT or GC content.
-   **Processed Pseudogenes, SINES, Retrotranscripts:** Non-functional
    RNAs present within genomic sequence.
-   **Transposons (DNA, Retroviral, LINES):** Genetic elements which
    have the ability to be amplified and redistributed within a genome.
:::

**Additional Investigation:** In the results table under 'Attributes'
each repeat sequence is labeled "RepeatMasker#-XXX" The '#' is the
ordinal number of the hit, the XXX is the class of DNA element (e.g.
"Simple_repeat" or "Low_complexity"). There are other types of
repetitive elements such as transposons and pseudogenes (e.g. Helitron
and COPIA) Use online resources to learn more:
(<http://gydb.org/index.php/Main_Page>).

------------------------------------------------------------------------

### *DNA Subway Red Line - Making Gene Predictions*

De novo gene predictors can be run on a sample sequence to generate
predictions of gene structure and location based solely on the sequence
nucleotides.

> 1.  Click on one or more gene prediction tools under the \'Gene
>     Prediction\' stop. to view the results table, click the gene
>     predictor again once the indicator displays \'V\' (view).

#### **Example Exercise - Predict Genes: Arabidopsis ChrI**

-   **Example Sequence:** Arabidopsis thaliana (mouse-ear cress) ChrI,
    75 kb
-   **Tool(s):** Augustus, FGenesH, Snap, tRNA Scan
-   **Concept(s):** Genomic DNA, Gene Structure, Canonical sequences

Following the gene prediction steps for the Arabidopsis ChrI sample
above, answer the following *discussion questions*:

> 1.  Look at the 'Type' column in the gene prediction report.
>     Considering the Augustus results, find the 6th gene prediction
>     (hint: AUGUSTUS006;ID=g6) and then locate the first mention of the
>     term 'gene' and copy down the gene's 'start' (i.e. the starting
>     basepair). Note the number of times you see the term 'exon' (i.e.
>     number of exons predicted).
>
>       ---------------- ----------------- ----------------
>       Gene Predictor   Exon Start (bp)   Exon Stop (bp)
>       Augustus         23456             23684
>       Augustus                           
>       Augustus                           
>       Augustus                           
>       Augustus                           
>       ---------------- ----------------- ----------------
>
>       : :header-rows: 1
>
> 2.  Based on the chart, did all the gene predictors yield genes
>     starting at the same location? Did all the gene predictions have
>     the same number of exons?
>
> 3.  Looking at the number of results returned by tRNA Scan, why are
>     they so different from results made by other predictors? Are their
>     places in the genome where tRNAs are more or less densely
>     concentrated?

**Additional Investigation:** Look for the background link at the bottom
of the DNA Subway home page and review the section entitled 'Gene
Finding,'

------------------------------------------------------------------------

### *DNA Subway Red Line - Visualize predicted genes in a Genome Browser*

A genome browser is an essential tool for visualization genomic data in
context. The integrated JBrowse genome browser will allow you to see the
visualized gene predictions generated so far.

> 1.  Click 'JBrowse' and allow browser to load.
>
> 2.  Zoom into a region (for example, paste the region
>     **1:3740638..3749063** into the location window.
>
>     ::: tip
>     ::: title
>     Tip
>     :::
>
>     \- JBrowse will load multiple tracks of data. Since the entire
>     genome is loaded, we recommend using the \'highlight a region\'
>     feature to help keep your place. You may also wish to record the
>     coordinates you are viewing as shown in the coordinates window.
>     \- You may also adjust the settings for a particular track by
>     clicking on the track name.
>     -   Right-click on any gene to view additional details about that
>         gene.
>
>     ![jbrowse](./img/dna_subway/jbrowse.png){width="400px"
>     height="250px"}
>     :::
>
> 3.  Examine gene details by double-clicking on a gene to select; then
>     right-click to open the \'View Details\' menu.
>
> 4.  To view more tracks, click on \'Full-Screen View\' in the
>     upper-left of the JBrowse window to see any additional tracks
>     available.

::: tip
::: title
Tip
:::

**Some Useful Definitions**

**Genome Browser:** A GUI (Graphical User Interface) for viewing
biological information. GBrowse (DNA Subway's Browser) is "designed to
view genomes. It displays a graphical representation of a section of a
genome, and shows the positions of genes and other functional elements.
It can be configured to show both qualitative data such as the splicing
structure of a gene, and quantitative data such as microarray expression
levels." [\[citation\]](http://gmod.org/wiki/GBrowse_FAQ)

**Track:** The individual regions of the display where information
imported into the browser. For each type (or source) of information,
there is usually an associated track.
:::

#### **Example Exercise - Visualize predicted genes: Arabidopsis ChrI**

-   **Example Sequence:** Arabidopsis thaliana (mouse-ear cress) ChrI,
    75 kb
-   **Tool(s):** Local Browser (JBrowse)
-   **Concept(s):** Gene orientation/structure, transposons, chromosome
    organization

Following the gene browser steps for the Arabidopsis ChrI sample above,
answer the following *discussion questions* (the locations of the genes
are given in parentheses and can be pasted into the browser):

> *Considering the following genes:*
>
> -   BFN1-201 (1:3748591..3753070)
> -   SCAMP5-201 (1:3744556..3749035)
> -   STP1-201 (1:3776366..3780845)
> -   At1G11270.2 (1:3780041..3789000)
>
> 1.  Do all the gene predictors agree with each other?
> 2.  Which gene predictions seem to match the Ensemble genes most
>     closely?

------------------------------------------------------------------------

### *DNA Subway Red Line - Search Databases using BLAST*

DNA Subway searches customized versions of UniGene and UniProt that
contain only validated plant proteins, and are free of predicted or
hypothetical proteins.

> 1.  Click 'BLASTN'; wait until the flashing icon displays 'V' (view)
> 2.  Click 'BLASTN' again to view the results.
> 3.  Click 'BLASTX'; wait until the flashing icon displays 'V' (view).
> 4.  Click 'BLASTX' again to view the results.
> 5.  Click on \'JBrowse\' and then click \'Full-screen View\' in the
>     upper-left.
> 6.  In the \'Available Tracks\' menu, add the Blastn and Blastx
>     tracks.
>
> ::: tip
> ::: title
> Tip
> :::
>
> **Some Useful Definitions**
>
> -   **BLAST:** Basic Local Alignment Search Tool (BLAST) is an
>     algorithm that search databases of biological sequence information
>     (e.g. DNA, RNA, or Protein sequence) and return matches. The
>     BLASTN program is specific to nucleotide data, and the BLASTX
>     algorithm works with sequence data translated into amino acid
>     sequences.
> -   **UniGene:** A database of transcript data, "each UniGene entry is
>     a set of transcript sequences that appear to come from the same
>     transcription locus (gene or expressed pseudogene), together with
>     information on protein similarities, gene expression, cDNA clone
>     reagents, and genomic location."
>     [\[citation\]](http://www.ncbi.nlm.nih.gov/unigene)
> -   **cDNA:** DNA produced by reverse transcribing mRNA using reverse
>     transcriptase. cDNAs are used to investigate mRNA within a
>     biological sample.
> -   **ESTs:** "Small pieces of DNA sequence (usually 200 to 500
>     nucleotides long) that are generated by sequencing either one or
>     both ends of an expressed gene. The idea is to sequence bits of
>     DNA that represent genes expressed in certain cells, tissues, or
>     organs from different organisms."
>     [\[citation\]](http://www.ncbi.nlm.nih.gov/About/primer/est.html)
> :::

#### **Example Exercise - Search Databases using BLAST: Arabidopsis ChrI**

-   **Example Sequence:** Arabidopsis thaliana (mouse-ear cress) ChrI,
    75 kb
-   **Tool(s):** BLASTN, BLASTX, Upload Data
-   **Concept(s):** RNA, cDNAs, ESTs, Biological Databases

Following the BLAST steps for the Arabidopsis ChrI sample above, answer
the following *discussion questions* (the locations of the genes are
given in parentheses and can be pasted into the browser):

> 1.  Both BLASTN and BLASTX returns the 'Length' of your resulting
>     matches. Do you notice differences in the average lengths of
>     BLASTN and BLASTX matches? Explain.
> 2.  Under 'Type' both BLASTN and BLASTX returns 'match' and
>     'match_part.' 'Match' is describing the overall length of a single
>     match, but individual significant matches may be fragmented, i.e.
>     'match_part.' Do BLASTN and BLASTX return 'match' and 'match_part'
>     results in different frequencies? Explain.

------------------------------------------------------------------------

### *DNA Subway Red Line - Build Gene Models using Apollo*

Apollo is an extension of JBrowse which allows the user to build and
edit gene models. Apollo has a number of features but in this tutorial,
we will give brief intro covering the conceptual steps.

**A. Import Blastn model to match for transcript length** Blast searches
are matched against UniGene(blastn) and UniProt(blasts). UniGen models
are derived from cDNA and ESTs (transcriptome evidence) produced by
experiment.

> 1.  Open Apollo and zoom into a region of interest (e.g.
>     **1:3793981..3802033**)
>
> 2.  
>
>     Ensure at least the following tracks are selected (on):
>
>     :   -   Augustus (and other gene predictors: FGenesH, SNAP, etc.)
>         -   Blastn
>
> 3.  Double-click on the Blastn result, and drag this transcript into
>     the yellow \'User-created Annotations\' section.
>
>     ![apollo_1](./img/dna_subway/apollo_1.png){width="400px"
>     height="250px"}

**B. Select a scaffold model** Use transcriptome evidence (UniGene -
BLASTN) to select the best possible gene model for a scaffold. If no
gene model exists or significantly reflects the UniGene model, use the
UniGene model itself as a scaffold.

> 1.  Drag a plausible model into the yellow \'User-created
>     Annotations\' - in this case we will choose the Augustus model;
>     double-click the Augustus model to select the entire model and
>     drag into \'User-created Annotations\'.
> 2.  Adjust the Augustus model to match the 5\' and 3\' configuration
>     of the blastn model
>
> > -   Delete the extraneous 5\' exon (single-click to select;
> >     right-click to delete)
> > -   Adjust the new 5\' end to match the length of the blastn-derived
> >     transcript
> > -   Adjust the 3\' end of the Augustus-derived model (single-click
> >     to select; use your cursor/mouse to adjust the model length)
> >
> > ![apollo_2](./img/dna_subway/apollo_2.png){width="420px"
> > height="250px"}

**C. Edit model for splice sites and variants** Protein and EST data can
be used to examine possible alternative transcripts. Proteins give clues
to the actual length of the translated protein at that locus and its
reading frame. Like full length cDNAs, ESTs give valuable information on
transcript diversity. ESTs are generated by high throughput methods, and
although the data may be fragmentary, it may capture biologically
relevant information about splice variants.

> 1.  Turn on the blastx track
>
> 2.  Examine the additional evidence to consider making adjustments to
>     your Augustus-derived model. If you wish to make additional
>     isoforms of your gene:
>
>     > -   Double-click to select the entire Augustus-derived model
>     > -   Right-click on the model to duplicate
>     > -   Make adjustments to the model as desired
>
> > ![apollo_3](./img/dna_subway/apollo_3.png){width="420px"
> > height="250px"}

You also have the option of adding additional [EST
evidence](https://en.wikipedia.org/wiki/Expressed_sequence_tag). For the
Arabodopsis 75KB section, we have prepared a selection of EST data. You
will need to **close Apollo to load this data**.

> 1.  Download the Arabidopsis ESTs for this region to your computer
>     from [this
>     link](https://de.cyverse.org/dl/d/A9BED6DE-83F3-4F38-A3FE-0AA0A9AF5D53/EST_Chr1_3729956..3804955.fasta)
>
> 2.  Click on \'Upload Data\'; under \"Add DNA data in FASTA format\"
>     upload the EST file from the link in step 1.
>
> 3.  Click on \'User BLASTN\' to align the ESTs to this section of the
>     Arabidopsis genome
>
> 4.  Open \'Web Apollo\'. The \"Blastn User\" track should be loaded.
>     You may move this track to a convenient position on the browser
>
>     ![apollo_5](./img/dna_subway/apollo_5.png){width="420px"
>     height="280px"}

While EST evidence is always incomplete, these sequences can help you
determine features of the gene model.

> ::: tip
> ::: title
> Tip
> :::
>
> Learn More about Gene Evidence:
>
> -   J.Craig Venter on [ESTs](http://dnaftb.dev.dnalc.org/39/av-2.html)
> -   \"Dynamic Gene\" [Evidence
>     animation](http://dynamicgene.dnalc.org/evidence/evidence.html)
>     (requires Flash)
> :::

**D. Determine translation start/stop sites** After making your
adjustments, you can confirm that your gene model(s) represents the
longest possible transcripts:

> 1.  Double-click the model; right-click and select \'Set longest ORF\'

**E. Compare gene model(s) with existing annotations** After making your
gene models you can compare them with existing annotations by turning on
the \'Ensemble genes\' track. In this case, our work confirms the first
gene model made, but a potential isoform supported by blastx data is
likely incorrect.

> ![apollo_4](./img/dna_subway/apollo_4.png){width="420px"
> height="150px"}

#### **Example Exercise - Build Gene Models using Apollo: Arabodopsis ChrI**

-   **Example Sequence:** Arabidopsis thaliana (mouse-ear cress) ChrI,
    75 kb
-   **Tool(s):** Apollo
-   **Concept(s):** Synthesizing multiple lines of evidence

Following the Apollo steps for the Arabidopsis ChrI sample above, answer
the following *discussion questions* (the locations of the genes are
given in parentheses and can be pasted into the browser):

> 1.  Try annotation of the following genes and take notes on your
>     annotation ( right-click on the gene model, open the \'Information
>     Editor\' and scroll down to the comments section to enter
>     comments). How do your annotations compare with the Ensembl
>     annotations?
>
>     *Genes to try:*
>
>     -   AT1G11270.2 (1:3781511..3790520)
>     -   STP1-201 (1:3776261..3785270)
>     -   T28P6.11-201 (1:3762877..3764678)

------------------------------------------------------------------------

[Learning Center Home](http://learning.cyverse.org/)

## Walkthrough of DNA Subway Yellow Line - Sequence Detection

Genome prospecting uses a query sequence (DNA or protein of up to 10,000
base pairs/amino acids) to find related sequences in specific genomes or
in a database. A major purpose of genome prospecting is to identify
members of gene or transposon families. DNA Subway uses the TARGeT
workflow, which integrates BLAST searches, multiple sequence alignments,
and tree-drawing utilities. Yellow line uses TARGeT (Tree Analysis of
Related Genes and Transposons) uses either a DNA or amino acid 'seed'
query to: (i) automatically identify and retrieve gene family homologs
from a genomic database, (ii) characterize gene structure and (iii)
perform phylogenetic analysis. Due to its high speed, TARGeT is also
able to characterize very large gene families, including transposable
elements (TEs).
[\[citation\]](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2699529/)

**Some things to remember about the platform**

-   Yellow Line will return sequences that would normally be excluded
    from a BLAST search of a genome (e.g. repetitive sequences,
    transposons).
-   Yellow Line is implemented only for plant genomes

------------------------------------------------------------------------

### *DNA Subway Yellow Line - Create a Yellow Line Project*

> 1.  Log-in to [DNA Subway](https://dnasubway.cyverse.org/) -
>     unregistered users may \'Enter as Guest\'
>
> 2.  Click 'Prospect Genomes using TARGeT' (Yellow Square)
>
> 3.  Select a sample sequence, or paste in a sequence to search for.
>
>     ::: note
>     ::: title
>     Note
>     :::
>
>     DNA Subway Yellow Line is only implemented to search a limited set
>     of plant genomes.
>     :::
>
> 4.  Provide your project with a title, then Click 'Continue'

#### **Example Exercise - Project Creation: mPing Mite element to search plant genomes for an active transposon**

The [mPing MITE
element](https://www.nature.com/nature/journal/v421/n6919/full/nature01214.html)
is an example of an active transposon in rice.
[Transposons](http://www.dnaftb.org/32/animation.html) are a major class
of DNA elements that impact the function of the genome.

> 1.  Create a Yellow Line project following the steps above and using
>     the mPing Mite Element (Oryza sativa/Rice)

### *DNA Subway Yellow Line - Search Plant Genomes with TARGeT*

> 1.  Click and select the genome(s) you wish to search and the click;
>     \'Run\' to search those genomes.
> 2.  Click the \'Alignment Viewer\' button to view the results of the
>     search as a multiple alignment.
> 3.  Click the \'Tree Viewer\' button to view a tree that will group
>     results by similarity.
>
> > ::: tip
> > ::: title
> > Tip
> > :::
> >
> > **Alignment Viewer** Generates an alignment of all search results
> >
> > ![yellow_alignment](./img/dna_subway/yellow_alignment.png){width="420px"
> > height="150px"}
> >
> > **Tree Viewer** Displays the results of sequence matches as a tree,
> > grouped by sequence similarity
> >
> > ![yellow_tree](./img/dna_subway/yellow_tree.png){width="420px"
> > height="300px"}
> >
> > ::: tip
> > ::: title
> > Tip
> > :::
> >
> > **Some Useful Definitions** - **Transposons (DNA, Retroviral,
> > LINES):** Genetic elements which have the ability to be amplified
> > and redistributed within a genome. - **Non-autonomous transposons:**
> > Transposons which lack an active transposase gene, thus requiring
> > help from another transposon to move. - **Autonomous transposons:**
> > Transposons which have a functional transposase and can move within
> > the genome.
> > :::
> > :::

#### **Example Exercise - Search Plant Genomes: mPing Mite element**

> 1.  After loading the mPing Mite Element as the query, search the
>     Oryza Sativa genome, and examine the results in the Alignment and
>     Tree Viewers.
> 2.  Repeat this analysis with a new project using the Ping transposase
>     gene and the Ping Transposase protein.

## Walkthrough of DNA Subway Blue Line - DNA Barcoding and Phylogenetics

You can analyze relationships between DNA sequences by comparing them to
a set of sequences you have compiled yourself, or by comparing your
sequences to other that have been published in database such as GenBank
(National Center for Biotechnology Information). Generating a
phylogenetic tree from DNA sequences derived from related species can
also allow you to draw inferences about how these species may be
related. By sequencing variable sections of DNA (barcode regions) you
can also use the Blue Line to help you identify an unknown species, or
publish a DNA barcode for a species you have identified, but which is
not represented in published databases like GenBank.

**Some things to remember about the platform**

-   Wet lab protocols and other resources are available at
    <http://dnabarcoding101.org/>
-   The DNA Barcoding 101 site also contains information on low-cost
    sequencing for U.S.-based educators.

------------------------------------------------------------------------

> ::: admonition
> Sample data
>
> **How to use provided sample data**
>
> In this guide, we will use a mosquito dataset that includes DNA
> sequences isolated from mosquito larvae collected from Virginia's
> Shenandoah Valley (*\"Mosquito dataset\"*). There is a complete
> two-hour classroom bioinformatics lab with detailed instructions for
> instructors and students on QUBES hub
> [here](https://qubeshub.org/qubesresources/publications/165/2). Where
> appropriate, a note (in this orange colored background) in the
> instructions will indicate which options to select to make use of this
> provided dataset.
>
> **Sample data citation**: Williams, J., Enke, R. A., Hyman, O.,
> Lescak, E., Donovan, S. S., Tapprich, W., Ryder, E. F. (2018). Using
> DNA Subway to Analyze Sequence Relationships. (Version 2.0). QUBES
> Educational Resources.
> [doi:10.25334/Q4J111](http://dx.doi.org/10.25334/Q4J111)
>
> **Video Course**
>
> Here is a video series on analyzing data with DNA Subway using the
> above mosquito dataset and lesson:
>
> > ```{=html}
> > <div class="video-container">
> > <iframe width="560" height="315" align="center"
> > src="https://www.youtube.com/embed/videoseries?list=PLRosqf3DDcTFqyPDG04Ed9EjrjaC_UTQo"
> > frameborder="0" allow="accelerometer; autoplay; encrypted-media;
> > gyroscope; picture-in-picture" allowfullscreen></iframe>
> > </div>
> > ```
> :::
>
> ::: tip
> ::: title
> Tip
> :::
>
> See a Course Source paper with protocols and recommendations for
> implementing a Barcoding CURE (course-based undergraduate research
> experience):
> :::

### *DNA Subway Blue Line - Create a Barcoding Project*

> 1.  Log-in to [DNA Subway](https://dnasubway.cyverse.org/) -
>     unregistered users may \'Enter as Guest\'
>
>     ::: tip
>     ::: title
>     Tip
>     :::
>
>     Only registered users submitting novel, high-quality sequences
>     will be able to submit sequence to GenBank
>     :::
>
> 2.  
>
>     Choose a project type:
>
>     :   -   Phylogenetics: build phylogenetic trees from any DNA,
>             protein, or mtDNA sequence)
>         -   Barcoding: DNA Barcoding for plants (rbcL), animals (COI),
>             bacteria (16S), and fungi (ITS)
>
>     ::: admonition
>     Sample data
>
>     *\"Mosquito\"* dataset:
>
>     Select **COI**.
>     :::
>
> 3.  Under \'Select Sequence Source\' select a sequence buy uploading
>     either a FASTA file or AB1 Sanger sequencing tracefile; pasting in
>     a sequence in FASTA format, or selecting and importing a trace
>     file from DNALC. If you do not have a file, you may select any of
>     the available sample sequences.
>
>     ::: admonition
>     Sample data
>
>     *\"Mosquito\"* dataset:
>
>     From **Select a set of sample sequences** select **Intro to
>     Barcoding Bioinformatics: Mosquitoes**.
>     :::
>
> 4.  Name your project, and give a description if desired; click
>     \'Continue.\'

------------------------------------------------------------------------

### *DNA Subway Blue Line - View and Clean Barcoding Sequence Data*

**A. View Sequencing Trace File**

If you provided AB1 trace files, or imported files from DNALC, you will
be able to view the sequence electropherogram.

> 1.  Click 'Sequence Viewer' to show a list of your sequences.
> 2.  Click on a sequence name to show the sequences' trace file.
>
> > ![blue_trace](./img/dna_subway/blue_trace.png){width="400px"
> > height="200px"}

**B. Trim sequence, reverse complement and pair**

By default, DNA Subway assumes that all reads are in the forward
orientation, and displays an 'F' to the right of the sequence. If any
sequence is not in that orientation, click the "F" to reverse compliment
the sequence. The sequence will display an "R" to indicate the change.

> 1.  Click 'Sequence Trimmer.'
>
> 2.  Click 'Sequence Trimmer' again to examine to changes made in the
>     sequence
>
> 3.  Click 'Pair Builder.'
>
> 4.  Select the check boxes next to the sequences that represent
>     bidirectional reads of the same sequence set. Alternatively Select
>     the 'Auto Pair' function and verify the pairs generated.
>
>     ::: admonition
>     Sample data
>
>     *\"Mosquito\"* dataset:
>
>     Click **Try Auto Pairing**. One pair of horsefly sequences and 4
>     pairs of mosquito sequences will be created. Finally, click
>     `&Save`{.interpreted-text role="guilabel"}.
>     :::
>
> 5.  As necessary, Reverse Compliment sequences that were sequenced in
>     the reverse orientation by clicking the 'F' next to the sequence
>     name. The 'F' will become an 'R' to indicate the sequence has been
>     reverse complimented.
>
> 6.  Click `&Save`{.interpreted-text role="guilabel"} to save the
>     created pairs.

**C. Build a consensus sequence** This step remove poor quality areas at
the 5' and/or 3' ends of the consensus sequence.

> 1.  Click on "Trim Consensus." Once the job is ready to view, click
>     \"Trim Consensus\" again to view the results. Scroll left and
>     right in the consensus editor window to identify what string of
>     nucleotides from the consensus sequence you want to trim.
>
> 2.  Click on the last consensus sequence nucleotide that you want to
>     trim. A red line will indicate what nucleotides will be removed
>     from the consensus sequences.
>
> 3.  Click `&Trim`{.interpreted-text role="guilabel"}. A new "Consensus
>     Editor" window will pop up displaying the trimmed sequences.
>
>     ::: admonition
>     Sample data
>
>     *\"Mosquito\"* dataset:
>
>     All of the sequences in this dataset benefit from trimming. Follow
>     the steps above to trim sequences. We recommending trimming at the
>     first and last \"grey\" (lower quality) nucleotide on the right
>     and left ends.
>     :::

------------------------------------------------------------------------

### *DNA Subway Blue Line - Find Matches with BLAST*

DNA Subway Blue Line will search a local copy of a BLAST databases to
check for published matches in GenBank.

> ::: tip
> ::: title
> Tip
> :::
>
> At the end of the BLAST results page, you can see the latest update to
> the DNA Subway BLAST database.
> :::
>
> 1.  Click 'BLASTN\' then click the \'BLAST\' link to BLAST the
>     sequence of interest. When the search is completed a \'View\' link
>     will appear.
>
> 2.  Examine the BLAST matches for candidate identification. Clicking
>     the species name given in the BLAST hit will also give additional
>     information/photos of the listed species.
>
> 3.  If desired, select the check box next to any hit, and click
>     `&Add BLAST hits to project`{.interpreted-text role="guilabel"} to
>     add selected sequences to your project.
>
>     > ![blue_blast](./img/dna_subway/blue_blast.png){width="400px"
>     > height="200px"}
>
>     ::: admonition
>     Sample data
>
>     *\"Mosquito\"* dataset:
>
>     We recommend performing a BLASTN search for all samples and saving
>     the top 2 matches to your project for additional analysis (as in
>     Step 3).
>     :::

------------------------------------------------------------------------

### *DNA Subway Blue Line - Add Reference Data*

Depending on the project type you have created, you will have access to
additional sequence data that may be of interest. For example, if you
are doing a DNA barcoding project using the rbcL gene, samples of rbcL
sequence from major plant groups (Angiosperms, Gymnosperms, etc.) will
be provided. Choose any data set to add it to your analysis; you will be
able to include or exclude individual sequences within the set in the
next step.

> 1.  Click 'Reference Data.'
>
> 2.  Select sequences of your choice.
>
> 3.  Click `&Add ref data`{.interpreted-text role="guilabel"} to add
>     the data to your project.
>
>     ::: admonition
>     Sample data
>
>     *\"Mosquito\"* dataset:
>
>     Select **Common insects** and then click
>     `&Add ref data`{.interpreted-text role="guilabel"}.
>     :::

------------------------------------------------------------------------

### *DNA Subway Blue Line - Build a Multiple Sequence Alignment and Phylogenetic Tree*

**A. Build a multiple sequence alignment and phylogenetic tree**

> 1.  Click 'Select Data.'
>
> 2.  Select any and all sequences you wish to add to your tree.
>
>     ::: admonition
>     Sample data
>
>     *\"Mosquito\"* dataset:
>
>     We suggest first adding your \"user data\" and building an
>     alignment and tree. You can return to this step later to build
>     additional trees. Once Selected, click
>     `&Save Selections`{.interpreted-text role="guilabel"}. Follow the
>     rest of the steps in this section and section B to create your
>     tree.
>     :::
>
> 3.  Click `&Save Selections`{.interpreted-text role="guilabel"} to
>     select data
>
> 4.  Click 'MUSCLE.' to run the MUSCLE program.
>
> 5.  Click 'MUSCLE' again to open the sequence alignment window.
>
> > ![blue_align](./img/dna_subway/blue_align.png){width="400px"
> > height="200px"}
>
> 6.  Examine the alignment and then select the
>     `&Trim Alignment`{.interpreted-text role="guilabel"} button in the
>     upper-left of the Alignment viewer\'

**B. Build phylogenetic tree**

> 1.  Click \'PHYLIP NJ\' and then click again to examine a
>     neighbor-joining tree
>
> > ![blue_nj](./img/dna_subway/blue_nj.png){width="400px"
> > height="200px"}
>
> 2.  Click \'PHYLIP ML\' and then click again to examine a
>     maximum-likelihood tree
>
> > ![blue_ml](./img/dna_subway/blue_ml.png){width="400px"
> > height="200px"}
> >
> > > ::: admonition
> > > Sample data
> > >
> > > *\"Mosquito\"* dataset:
> > >
> > > We suggest setting \"horsefly\" as outgroup for both trees.
> > > :::

------------------------------------------------------------------------

## Walkthrough of DNA Subway Green Line

The Green line runs within CyVerse DNA Subway and was developed
leverages powerful computing and data storage infrastructure and uses
the [Stampede](https://www.tacc.utexas.edu/systems/stampede)
supercomputer cluster to provide a high performance analytical platform
with a simple user interface suitable for both teaching and research.

> ::: note
> ::: title
> Note
> :::
>
> **Discontinuing support for Tuxedo workflow**
>
> > The Tuxedo workflow previously implemented for the Green Line will
> > be removed in **June 2019**. After that time you will no longer be
> > able to use that workflow to analyze your data. Your data and
> > previously analyzed results will still be available on the CyVerse
> > Data Store.
> >
> > Until then, **you can still view and use the Tuexdo workflow** by
> > toggling between Kallisto and Tuexdo by selecting the Workflow
> > button in the Project Information menu at the bottom of the Green
> > Line page. See the next page on the new Kallisto/Sleuth Green Line
> > workflow.
> :::

**Some things to remember about the platform**

-   You must be a registered CyVerse user to use Green Line
-   The Green line was designed to make RNA-Seq data analysis
    \"simple\". However, we ask that users thoughtfully decide what
    \"jobs\" they want to submit.
-   A single Green Line project may take a week to process since HPC
    computing is subject to queues which hundreds of other jobs may be
    staging for. Additionally these systems undergo regular maintenance
    and are subject to periodic disruption.
-   DNA Subway implements the [Tuxedo
    Protocol](https://www.nature.com/nprot/journal/v7/n3/fig_tab/nprot.2012.016_F2.html);
    RNA-Seq is a rapidly evolving method, and we anticipate upgrades to
    newer more efficient protocols. The important concepts behind
    RNA-Seq are still embodied in the current Subway architecture.

------------------------------------------------------------------------

### *DNA Subway Green Line - Create an RNA-Seq Project to Examine Differential Expression*

**A. Create a project in Subway**

> 1.  Log-in to [DNA Subway](https://dnasubway.cyverse.org/) -
>     unregistered users may NOT use Green Line.
>
> 2.  Click on the Green \"Next Generation Sequencing\" square to start
>     a Green Line project.
>
> 3.  For \'Select Project Type\' select either Single End Reads or
>     Paired End Reads
>
> 4.  For \'Select an Organism\' select a species and genome build.
>
>     ::: tip
>     ::: title
>     Tip
>     :::
>
>     If you don\'t see a desired species/genome [contact
>     us](https://dnasubway.cyverse.org/feedback.html) to have it added
>     :::
>
> 5.  Enter a project title, and description; click \'Continue\'

**B. Upload Read Data to CyVerse Data Store** The sequence read files
used in these experiments are too large to upload using the Subway
internet interface. You must upload your files (either .fastq or
.fastq.gz) directly to the CyVerse Data Store.

> 1.  Upload your reads to the CyVerse Data Store using Cyberduck. See
>     instructions: [CyVerse Data Store
>     Guide](https://cyverse-data-store-guide.readthedocs-hosted.com/en/latest/step1.html)

------------------------------------------------------------------------

### *DNA Subway Green Line - Manage Data and Check Quality with FASTQC*

**A. Select and pair files**

> 1.  Click on the "Manage Data" stop: this opens a Data store window
>     that says \"Select your FASTQ files from the Data Store\" (if you
>     are not logged in to CyVerse, it will ask you to do so)
> 2.  Click on the folder that matches your CyVerse username and
>     Navigate to the folder where your sequencing files are located.
> 3.  Select the sequencing files you want to analyze (either .fastq or
>     .fastq.gz format).
> 4.  If working with paired-end reads, click the \'Pair Mode\' button
>     to toggle to on; check each pair of sequencing files to pair them.

**B. Check sequencing quality with FastQC** It is important to only work
with high quality data.
[FastQC](http://www.bioinformatics.babraham.ac.uk/projects/fastqc/) is a
popular tool for determining sequencing quality.

> 1.  Once files have been loaded, in the \'Manage Data\' window, click
>     the \'Run\' link in the \'QC\' column to run FastQC.
> 2.  One the job is complete, click the \'View\' link to view
>     repeat_results

------------------------------------------------------------------------

### *DNA Subway Green Line - Trim and Filter Reads with FastX Toolkit*

Raw reads are first \"quality trimmed\" (remove poor quality bases off
the end(s) of a read) and then are \"quality filtered\" (filter out
entire poor quality reads) prior to aligning to the genome. After
trimming and filtering, FastQC is run on the trimmed/filtered files.

> 1.  Click "FastX ToolKit" to open the FastX Toolkit panel for all your
>     data.
>
> 2.  For each file, under \'Basic\', Click \'Run\' to filter the reads
>     using default parameters or click \'Advanced\' to run with desired
>     parameters; repeat this process for all the FASTQ files in your
>     dataset.
>
> 3.  Once the job completes, click the \'View\' link to view a
>     generated FastQC report.
>
>     ::: tip
>     ::: title
>     Tip
>     :::
>
>     -   Starting at this step, DNA Subway results are labeled with a
>         job ID (e.g. fx####). These jobs are available in a
>         \'DNASubway\' folder in the home directory of your CyVerse
>         Data Store.
>     -   Starting at this step, you may see \'Basic\' and \'Advanced\'
>         options for analyses. Clicking the \'Advanced\' option allows
>         you to set parameters. The Parameters shown in the
>         \'Advanced\' step are the defaults used in the \'Basic\'
>         option.
>     :::
>
> 4.  Since you may trim reads multiple times to achieve the desired
>     quality of data record the job IDs (e.g. fx####) that you wish to
>     use in the subsequent steps.

------------------------------------------------------------------------

### *DNA Subway Green Line - Map Reads to Genome with TopHat*

TopHat is the first component of the Tuxedo Protocol. This program
aligns individual RNA-Seq reads to a previously assembled "reference"
genome using a component program called Bowtie. TopHat then uses
information from the newly mapped reads to determine what the
intron/exon boundaries are for mapped transcripts, determining their
splice sites.

**TopHat Basic**

> 1.  For each file, under \'Basic\', Click \'Run\' to begin the
>     alignment using default parameters. (The reads will be aligned to
>     the reference genome you selected when you created your project)
> 2.  Repeat this process for all the FASTQ files in your dataset.

**TopHat Advanced**

> 1.  Click \'TopHat\' to open the TopHat panel for all your data.
> 2.  Under \'Advanced\' Click \'Run\'.
> 3.  Set the parameters as desired; Click \'Submit\' to begin the
>     alignment using default parameters. (The reads will be aligned to
>     the reference genome you selected when you created your project).
> 4.  Repeat this process for all the FASTQ files in your dataset.
>
> > ::: tip
> > ::: title
> > Tip
> > :::
> >
> > We generally recommend selecting the \'No novel junctions\' option
> > unless you have very high-coverage data (e.g. \>100 million reads
> > for a \~3Gb genome).
> > :::

When this step completed you can view the summary mapping statistics, or
view the aligned reads using the Integrated Genome Viewer (IGV).

------------------------------------------------------------------------

### *DNA Subway Green Line - Assemble Transcripts with Cufflinks*

Cufflinks assembles or "links" the RNA-Seq alignments into a set of
transcripts which are best estimates (determined by parsimony) of your
sample's actual transcripts. In other words, Cufflinks makes hypotheses
about how related reads could be merged into transcripts. Cufflinks also
makes estimates about the relative abundance of each transcript.

> ::: note
> ::: title
> Note
> :::
>
> This step is optional, and can be skipped
> :::

**Cufflinks Basic**

> 1.  Click \'Cufflinks\' to open the Cufflinks panel for all your data.
> 2.  For each file, under \'Basic\', Click \'Run\' to begin the
>     assembly using default parameters. (The reads will be assembled
>     using the reference genome you selected when you created your
>     project).
> 3.  Repeat this process for all the FASTQ files in your dataset.

**Cufflinks Advanced**

> 1.  Click \'Cufflinks\' to open the Cufflinks panel for all your data.
> 2.  Under \'Advanced\' Click \'Run\'
>
> 3\. Set the parameters as desired; Click \'Submit\' to begin the assembly using
>
> :   default parameters. (The reads will be aligned to the reference
>     genome you selected when you created your project).
>
> 4.  Repeat this process for all the FASTQ files in your dataset.

### *DNA Subway Green Line - Examine Differential Expression with CuffDiff*

Cuffdiff uses the Cufflinks output (and/or or reference genome) to
calculate gene and transcript expression levels in one or more condition
and tests them for significant differences. Depending on how many
replicates and conditions you have, you may ultimately create several
Cuffdiff jobs to test your desired combinations.

> 1.  Click \'Cuffdiff\' to open the Cuffdiff panel for all your data.
> 2.  Under \'Assign TopHat alignment files to samples and replicates\'
>     assign all of your samples (e.g. wild type, time point 1, control,
>     etc.) to a grouping (e.g. \'Sample 1\', \'Sample 2\', etc.)
> 3.  For each sample, select from the drop-down menu the TopHat job
>     (previously TopHat mapped reads) and their replicates that belong
>     with that sample group. (you may need to review the TopHat job
>     names from the TopHat step).
> 4.  Either click \'Submit\' (Basic) to run with default parameters, or
>     use the \'Advanced\' link to adjust parameters.

For the result you wish to examine, click the graph icon to view a
collection of graphs that illustrate differences in expression between
samples. You can also view a table of the results, including expression
levels and comparison for each annotated gene.

------------------------------------------------------------------------

## Walkthrough of DNA Subway Green Line: Kallisto/Sleuth RNA-Seq

The Green Line runs within CyVerse DNA Subway and leverages powerful
computing and data storage infrastructure and uses the supercomputer
cluster to provide a high performance analytical platform with a simple
user interface suitable for both teaching and research. is a quick,
highly-efficient software for quantifying transcript abundances in an
RNA-Seq experiment. Even on a typical laptop, Kallisto can quantify 30
million reads in less than 3 minutes. Integrated into CyVerse, you can
take advantage of CyVerse DNA Subway to process your reads, do the
Kallisto quantification, and analyze reads with the Kallisto companion
software in an R-Shiny app.

**Some things to remember about the platform**

-   You must be a registered CyVerse user to use Green Line.

-   The Green Line was designed to make RNA-Seq data analysis
    \"simple\". However, we ask that users thoughtfully decide what
    \"jobs\" they want to submit. **Each user is limited to a maximum of
    4 concurrent jobs running on Green Line**.

-   A single Green Line project may take a week to process since HPC
    computing is subject to queues which hundreds of other jobs may be
    staging for. Additionally these systems undergo regular maintenance
    and are subject to periodic disruption.

    > ::: note
    > ::: title
    > Note
    > :::
    >
    > **New, faster Green Line**
    >
    > Green Line is now running on . This should greatly reduce queue
    > times (The entire running time for this tutorial is about 60
    > minutes). We have designed Green Line for a lower number of
    > concurrent users (\<50), and still recommend teaching using jobs
    > you have made public, and only running the entire workflow when
    > you are working with novel data. Please let us know about your
    > experience .
    >
    > ```{=html}
    > <div class="video-container">
    > <iframe width="560" height="315" align="center" src="https://www.youtube.com/embed/XLBpway_jG8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    > </div>
    > ```
    > :::
    >
    > ::: note
    > ::: title
    > Note
    > :::
    >
    > **Discontinuing support for Tuxedo workflow**
    >
    > The Tuxedo workflow previously implemented for the Green Line will
    > be removed in **June 2019**. After that time you will no longer be
    > able to use that workflow to analyze your data. Your data and
    > previously analyzed results will still be available on the CyVerse
    > Data Store. Until then, **you can still view and use the Tuexdo
    > workflow** by toggling between Kallisto and Tuexdo by selecting
    > the Workflow button in the Project Information menu at the bottom
    > of the Green Line page.
    > :::

------------------------------------------------------------------------

> ::: admonition
> Sample data
>
> **How to use provided sample data**
>
> In this guide, we will use an RNA-Seq dataset (*\"Zika infected
> hNPCs\"*). This experiment compared human neuroprogenetor cells
> (hNPCs) infected with the Zika virus to non-infected hNPCs. You can
> read more about the experimental conditions and methods in this .
> Where appropriate, a note (in this orange colored background) in the
> instructions will indicate which options to select to make use of this
> provided dataset.
>
> **Sample data citation**: Yi L, Pimentel H, Pachter L (2017) Zika
> infection of neural progenitor cells perturbs transcription in
> neurodevelopmental pathways. PLOS ONE 12(4): e0175744. .
>
> **Video Course**
>
> Here is a video series on analyzing data with DNA Subway using the
> above Zika dataset and lesson:
>
> > ```{=html}
> > <div class="video-container">
> > <iframe width="560" height="315" align="center"
> > src="https://www.youtube.com/embed/videoseries?list=PLRosqf3DDcTHLTsiCTT8tnA2ZAfMM5AWb"
> > frameborder="0" allow="accelerometer; autoplay; encrypted-media;
> > gyroscope; picture-in-picture" allowfullscreen></iframe>
> > </div>
> > ```
> :::

### *DNA Subway Green Line: Kallisto/Sleuth - Create an RNA-Seq Project to Examine Differential Abundance*

**A. Create a project in Subway**

> 1.  Log-in to - unregistered users may NOT use Green Line.
> 2.  Click on the Green \"Next Generation Sequencing\" square to start
>     a Green Line project.
> 3.  For \'Select Project Type\' select either \"Single End Reads\" or
>     \"Paired End Reads\".
>
> > ::: admonition
> > Sample data
> >
> > *\"Zika infected hNPCs\"* dataset:
> >
> > Select **Paired End Reads**
> > :::
>
> 4.  For \'Select an Organism\' select a species and genome build.
>
> > ::: admonition
> > Sample data
> >
> > *\"Zika infected hNPCs\"* dataset:
> >
> > Select **Homo sapiens - Ensembl 78 GrCh38**
> > :::
> >
> > ::: tip
> > ::: title
> > Tip
> > :::
> >
> > If you don\'t see a desired species/genome to have it added
> > :::
>
> 5.  Enter a project title, and description; click \'Continue\'

**B. Upload Read Data to CyVerse Data Store** The sequence read files
used in these experiments are too large to upload using the Subway
internet interface. You must upload your files (either .fastq or
.fastq.gz) directly to the CyVerse Data Store.

> 1.  Upload your reads to the CyVerse Data Store using Cyberduck. See
>     instructions:
>
>     ::: tip
>     ::: title
>     Tip
>     :::
>
>     This step is not directly connected with DNA Subway. You can use
>     any data uploaded to the CyVerse Data Store.
>     :::
>
> > ::: note
> > ::: title
> > Note
> > :::
> >
> > There is a limit of 6GB per file for samples on Green Line. For
> > larger file sizes, you may wish to use the Kallisto tools in the
> > CyVerse Discovery Environment. See the for more information.
> > :::

------------------------------------------------------------------------

### *DNA Subway Green Line: Kallisto/Sleuth - Manage Data and Check Quality with FASTQC*

**A. Select and pair files**

> 1.  Click on the "Manage Data" step: this opens a Data store window
>     that says \"Select your FASTQ files from the Data Store\" (if you
>     are not logged in to CyVerse, it will ask you to do so).
>
> 2.  Click on the folder that matches your CyVerse username and
>     Navigate to the folder where your sequencing files are located.
>
>     ::: admonition
>     Sample data
>
>     *\"Zika infected hNPCs\"* dataset:
>
>     Select **Sample Data**.
>     :::
>
> 3.  Select the sequencing files you want to analyze (either .fastq or
>     .fastq.gz format).
>
>     ::: admonition
>     Sample data
>
>     *\"Zika infected hNPCs\"* dataset:
>
>     You will be presented with the following 8 files; **check-select
>     all of the files** and click the `&+ Add files`{.interpreted-text
>     role="guilabel"} button:
>
>     > -   SRR3191542_1.fastq.gz
>     > -   SRR3191542_2.fastq.gz
>     > -   SRR3191543_1.fastq.gz
>     > -   SRR3191543_2.fastq.gz
>     > -   SRR3191544_1.fastq.gz
>     > -   SRR3191544_2.fastq.gz
>     > -   SRR3191545_1.fastq.gz
>     > -   SRR3191545_2.fastq.gz
>
>     The SRR3191542 and SRR3191543 files are 2 replicates (paired-end)
>     of the uninfected cells and the SRR3191544 and SRR3191545 file are
>     from the Zika infected cells.
>     :::
>
> 4.  If working with paired-end reads, click the
>     `&Pair Mode OFF`{.interpreted-text role="guilabel"} button to
>     toggle to on; check each pair of sequencing files to pair them.
>
>     ::: admonition
>     Sample data
>
>     *\"Zika infected hNPCs\"* dataset:
>
>     Right reads end in \"\_1\" and left reads end in \"\_2\". **Click
>     the** `&Pair Mode OFF`{.interpreted-text role="guilabel"}
>     **button** to turn pairing on, and **check-select each of the
>     paired samples** (e.g. SRR3191543_1.fastq.gz and
>     SRR3191543_2.fastq.gz).
>     :::

**B. Check sequencing quality with FastQC**

It is important to only work with high quality data. is a popular tool
for determining sequencing quality.

> ::: tip
> ::: title
> Tip
> :::
>
> This step takes place in the same **Manage data** window as the steps
> above.
> :::
>
> 1\. Once files have been loaded, in the \'Manage Data\' window, click
> the \'Run\' link in the \'QC\' column to run FastQC.
>
> ::: tip
> ::: title
> Tip
> :::
>
> There is a limit of 4 concurrent jobs. These jobs should take less
> than 20 minutes to complete (depending on file size) and you may need
> to let several jobs finish before proceeding. If you have previously
> processed reads for quality, you can skip the FastQC step.
> :::
>
> 2.  One the jobs are complete, click the \'View\' link to view the
>     results.
>
> ::: tip
> ::: title
> Tip
> :::
>
> You can see a description and explanation of the FastQC report on the
> CyVerse Learning Center and a more detailed set of explanations on the
> website.
> :::

------------------------------------------------------------------------

### *DNA Subway Green Line: Kallisto/Sleuth - Trim and Filter Reads with FastX Toolkit*

Raw reads are first \"quality trimmed\" (remove poor quality bases off
the end(s) of a read) and then are \"quality filtered\" (filter out
entire poor quality reads) prior to aligning to the transcriptome. After
trimming and filtering, FastQC is run on the trimmed/filtered files.

> 1.  Click "FastX ToolKit" to open the FastX Toolkit panel for all your
>     data.
>
> 2.  For each file, under \'Basic\', Click \'Run\' to filter the reads
>     using default parameters or click \'Advanced\' to run with desired
>     parameters; repeat this process for all the FASTQ files in your
>     dataset.
>
>     ::: admonition
>     Sample data
>
>     *\"Zika infected hNPCs\"* dataset:
>
>     The quality of the reads in this dataset is relatively good. You
>     can **skip the FastX Toolkit step for this dataset**.
>     :::
>
>     ::: tip
>     ::: title
>     Tip
>     :::
>
>     The \'Basic\' setting for FastX Toolkit uses the same settings as
>     the defaults in the \'Advanced\' run:
>
>     -   **quality_trimmer: minimum quality**: 20
>     -   **quality_trimmer: minimum trimmed read length**: 20
>     -   **quality_filter: minimum quality**: 20
>     -   **quality_filter: minimum quality**: 50
>     :::
>
> 3.  Once the job completes, click the \'View\' link to view a
>     generated FastQC report.
>
> 4.  Since you may trim reads multiple times to achieve the desired
>     quality of data record the job IDs (e.g. fx####) that you wish to
>     use in the subsequent steps.

------------------------------------------------------------------------

### *DNA Subway Green Line: Kallisto/Sleuth - Quantify reads with Kallisto*

Kallisto uses a 'hash-based' pseudo alignment to deliver extremely fast
matching of RNA-Seq reads against the transcriptome index (which was
selected when you created your Green Line project). A Kallisto analysis
must be run for each mapping of RNA-Seq reads to the index. In this
tutorial, we have 12 fastQ files (6 pairs), so you will need to launch 6
Kallisto analyses.

> ::: tip
> ::: title
> Tip
> :::
>
> You can find a detailed video series on the science behind the
> Kallisto software and pseudoalignment: .
> :::
>
> 1.  Click the \"Quantification\" step and enter a sample and condition
>     name for each of your samples. You will typically have several
>     replicates (at least 3 minimum) for each sample. For your
>     condition, our implementation of the Kallisto/Sleuth workflow
>     supports **two conditions**.
>
> > ::: warning
> > ::: title
> > Warning
> > :::
> >
> > When naming your samples and conditions, avoid spaces and special
> > characters (e.g. !#\$%\^&/, etc.). Also be sure to be consistent
> > with spelling.
> > :::
> >
> > ::: admonition
> > Sample data
> >
> > *\"Zika infected hNPCs\"* dataset:
> >
> > We suggest the following names for this dataset:
> >
> > >   Left/Right Pair                               Sample name   Condition
> > >   --------------------------------------------- ------------- -----------
> > >   SRR3191542_1.fastq.gz SRR3191542_2.fastq.gz   Mock1-1       Mock
> > >   SRR3191543_1.fastq.gz SRR3191543_1.fastq.gz   Mock2-1       Mock
> > >   SRR3191544_1.fastq.gz SRR3191544_2.fastq.gz   ZIKV1-1       Zika
> > >   SRR3191545_1.fastq.gz SRR3191545_2.fastq.gz   ZIKV2-1       Zika
> > :::
>
> 2.  After naming the samples and conditions, click the
>     `&Submit`{.interpreted-text role="guilabel"} button to submit a
>     job. Typically, within \~1 minute you will be provided with a job
>     number. The job will be entered into the queue at the TACC
>     Stampede supercomputing system. You can come back and click the
>     Quantification stop to see the status of the job. The indication
>     for the quantification stop will show \"R\" (running) while the
>     job is running.
>
>     > ::: admonition
>     > Sample data
>     >
>     > *\"Zika infected hNPCs\"* dataset:
>     >
>     > Under parameters **uncheck** the *Build pseudo-bam files*
>     > option.
>     > :::
>
> > ::: tip
> > ::: title
> > Tip
> > :::
> >
> > You can select some of the advanced options for your Kallisto job by
> > clicking the \"Parameters\" link in the Quantification stop. See
> > more about these advanced parameters in the .
> > :::

------------------------------------------------------------------------

### *DNA Subway Green Line: Kallisto/Sleuth- Visualize data using IGV*

In the \"View Results\" steps you have access to alignment
visualizations, data download, and interactive visualization of your
differential expression results.

> 1.  Click the \"View results\" step and choose one of the following
>     options:

**IVG - Integrated Genome Viewer**

> ::: tip
> ::: title
> Tip
> :::
>
> IGV visualization will only be possible if you have built pseudo-bam
> files in the Kallisto step.
> :::
>
> 1\. Click the icon in the \"IGV\" column to view a visualization of
> your reads pseudoaligned to the reference transcriptome. You will need
> to click the `&Make it public`{.interpreted-text role="guilabel"}
> button (and possibly be re-directed to the CyVerse Discovery
> Environment). After making the data \"public\" which allows DNA Subway
> to access your files on the CyVerse Data Store, you must also select a
> memory size to launch this Java application. If you are not sure of
> which value to select, use the default 750MB option.
>
> ::: warning
> ::: title
> Warning
> :::
>
> Using IGV requires Java software. Java is increasingly unsupported for
> security reasons on the internet.
> :::
>
> ::: tip
> ::: title
> Tip
> :::
>
> **Java Help**
>
> Java must be available and enabled in your Internet browser to use the
> IGV function. Java frequently is the source of security
> vulnerabilities and so its not uncommon to experience configuration
> issues due to safety. Follow the tips below to configure Java for your
> computer. Alternatively, you can use the Download link (see
> instructions in the section below) to download your data (you will
> need the .bam and .bam.bai files) and download and install yourself.
>
> *Internet Browser*
>
> We highly recommend using Firefox as your browser for DNA Subway.
>
> -   Verify your Java availability for your browser:
> -   Java must be in your browser
>
> *Java Configuration*
>
> -   Open the Java control panel on your computer. (On Mac, open System
>     Preferences \> Java. On PC, open Control Panel \> Programs \>
>     Java.)
> -   Click the Security tab and check \"Enable Java in the browser\"
>     and set the security level for applications to \"high\". Add
>     \"<http://dnasubway.cyverse.org>\" and \"<http://gfx.dnalc.org>\"
>     to the \"Exception Site List\" in the Java Security tab.
> :::

**Download Data - Abundance**

> 1.  Click the folder icon to be redirected to the CyVerse Discovery
>     Environment (you may be required to log in). You will be directed
>     to all outputs from you Kallisto analysis. You may preview them in
>     the Discovery Environment or use the path listed to download the
>     files using Cyberduck (see ). A tab-separated file of abundances
>     for each sequence pair is available at the download link.

### *DNA Subway Green Line: Kallisto/Sleuth- Visualize data using Sleuth*

**Differential analysis - Shiny App**

> 1.  Click the \"Sleuth R Shiny\" link to launch an interactive window
>     which contains data and graphics from your analysis.
>
>     **R Shiny App Walkthrough**
>
>     The R Shiny App allows you to explore your differential expression
>     results as generated by the . We will cover highlights to for each
>     menu in the app.
>
>     > ::: tip
>     > ::: title
>     > Tip
>     > :::
>     >
>     > It can take a few minutes for data to be transferred to the R
>     > Shiny server after the quantification step completes. If R Shiny
>     > does not load, try again in a few minutes. If you still have an
>     > issue, use the link and include your project number in the
>     > feedback form.
>     > :::
>
>     **Results Menu**
>
>     ![sleuth_results_1](./img/dna_subway/sleuth_results_1.png){width="800px"
>     height="400px"}
>
>     This menu is an interactive table of your results. You can choose
>     which columns to display in the table using the checkboxes on the
>     left of the screen. Several important values selected by default
>     include:
>
> > -   **Target_id**: This is the name of the transcript (gene) from
> >     the selected reference transcriptome.
> >
> > -   **qval**: This is a corrected (for multiple testing) p-value
> >     indicating the significance test of differential abundance.
> >     Lower numbers indicate greater significance.
> >
> > -   **b**: This is an estimate of the fold change between the
> >     conditions
> >
> > -   **ext_gene**: If available, these are gene names pulled from
> >     Ensemble
> >
> >     > ::: tip
> >     > ::: title
> >     > Tip
> >     > :::
> >     >
> >     > Click the `&Download`{.interpreted-text role="guilabel"}
> >     > button to download these results.
> >     > :::
> >
> > > **Bootstrap**
> > >
> > > ![sleuth_bootstrap_1](./img/dna_subway/sleuth_bootstrap_1.png){width="800px"
> > > height="400px"}
> > >
> > > This menu will display a box plot that indicates the difference in
> > > expression between conditions. The box plots themselves indicate
> > > variation between replicates as estimated by bootstrap sampling of
> > > the reads. A dropbox enables you to select any transcript.
> > > Clicking the \"Show genes\" will load alternative gene names if
> > > available.
> > >
> > > > ::: tip
> > > > ::: title
> > > > Tip
> > > > :::
> > > >
> > > > Right-click a graph to download this and other images
> > > > :::
> > >
> > > **PCA**
> > >
> > > ![sleuth_pca_1](./img/dna_subway/sleuth_pca_1.png){width="800px"
> > > height="400px"}
> > >
> > > This graph displays principle components of each of the
> > > conditions/replicates. In general replicates of the same condition
> > > should cluster closely together.
> > >
> > > **Volcano Plot**
> > >
> > > ![sleuth_volcano_1](./img/dna_subway/sleuth_volcano_1.png){width="800px"
> > > height="400px"}
> > >
> > > This scatter plot displays all transcripts colored by significance
> > > of differential abundance. You may also use menu on the left of
> > > the screen to highlight specific genes/transcripts or previously
> > > set filters from the results menu.
> > >
> > > **Loadings**
> > >
> > > ![sleuth_loadings_1](./img/dna_subway/sleuth_loadings_1.png){width="800px"
> > > height="400px"}
> > >
> > > This barplot indicates which genes/transcripts explain most of the
> > > variance computed in the principle components analysis.
> > >
> > > **Heatmap**
> > >
> > > ![sleuth_heatmap_1](./img/dna_subway/sleuth_heatmap_1.png){width="800px"
> > > height="400px"}
> > >
> > > This heatmap gives a measure of the similarity between the
> > > possible comparison of the samples and their replicates.

------------------------------------------------------------------------

## Walkthrough of DNA Subway Purple Line (beta testing documentation)

::: warning
::: title
Warning
:::

**Beta Release:** Purple line is in beta release. Please send feedback
to [DNALC Admin](mailto:dnalcadmin@cshl.edu)
:::

The Purple Line provides the capability for analysis of microbiome and
eDNA (environmental DNA) by implementing a simplified version of the
(pronounced \"chime two\") workflow. Using the Purple Line, you can
analyze uploaded high throughput sequencing reads to identify species in
microbial or environmental DNA samples.

Metabarcoding uses high-throughput sequencing to analyze hundreds of
thousands of DNA barcodes from complex mixtures of DNA. In a typical
experiment, DNA is isolated from sterile swabs or material taken from
different environmental locations or conditions. PCR is used to amplify
a variable region, such as COI, or 12S or 16S ribosomal RNA genes, and
sequence reads identify the variety and abundance of species from
different samples. The analysis requires specialized software, such as
QIIME 2.

The Purple Line integrates sequence data and metadata imported from
CyVerse\'s Data Store, demultiplexing of samples, quality control, and
taxonomic identification and quantitation. Once sequences are analyzed,
the results can be visualized to allow comparisons between samples and
different conditions summarized in the metadata.

**Some things to remember about the platform**

-   You must be a registered CyVerse user to use Purple Line (register
    for a CyVerse account at )
-   The Purple line was designed to make microbiome/eDNA data analysis
    \"simple\". However, we ask that users very carefully and
    thoughtfully decide what \"jobs\" they want to submit.
-   A single Purple Line project may take hours to process since HPC
    computing is subject to queues which may support hundreds of other
    jobs. These systems also undergo regular maintenance and are subject
    to periodic disruption.
-   DNA Subway implements the software. This software is in continual
    development. Our version may not be the most current, and our
    documentation and explanation is not meant to replace the full .
-   We have made design decisions to create a straightforward
    classroom-friendly workflow. While this Subway Line does not have
    all possible features of QIIME 2, we purpose to cover important
    concepts behind microbiome and eDNA analysis.

------------------------------------------------------------------------

> ::: admonition
> Sample data
>
> **How to use provided sample data** In this guide, we will use a
> microbiome dataset (*\"ubiome-test-data\"*) collected from various
> water sources in Montana (down-sampled and de-identified).Where
> appropriate, a note (in this orange colored background) in the
> instructions will indicate which options to select to make use of this
> provided dataset.
> :::

### *DNA Subway Purple Line - Metadata file and Sequencing Prerequisites*

If you are generating data for a project (i.e. sequencing samples), you
will need to provide the sequencing data (fastq files) as well as a
metadata file that describes the data contained in these sequencing
files. This metadata must conform to strict guidelines, or analyses will
fail. QIIME 2 metadata is stored in a TSV (tab-separated values) file.
These files typically have a .tsv or .txt file extension, though it
doesn\'t matter to QIIME 2 what file extension is used. TSV files are
simple text files used to store tabular data, and the format is
supported by many types of software, such as editing, importing, and
exporting from spreadsheet programs and databases. Thus, it\'s usually
straightforward to manipulate QIIME 2 metadata using the software of
your choosing. If in doubt, we recommend using a spreadsheet program
such as Microsoft Excel or Google Sheets to edit and export your
metadata files.

**Handling Project Metadata**

Before you create your project, you will have generated metadata (as
described above) for your project. You have two options for preparing
this metadata to ensure that it conforms to the required QIIME2
parameters. The file must be validated (which you can do on your own or
using Subway). If there are errors in your file (this is common), they
must be fixed.

> ::: tip
> ::: title
> Tip
> :::
>
> Here are a few reminders for formatting your metadata.
>
> **Leading and trailing whitespace characters**
>
> If any cell in the metadata contains leading or trailing whitespace
> characters (e.g. spaces, tabs), those characters will be ignored when
> the file is loaded. Thus, leading and trailing whitespace characters
> are not significant, so cells containing the values \'gut\' and \' gut
> \' are equivalent. This rule is applied before any other rules
> described below
>
> **ID column**
>
> The first column MUST be the ID column name (i.e. ID header) and the
> first line of this column should be #SampleID or one of a few
> alternative.
>
> > -   Case-insensitive: id; sampleid; sample id; sample-id; featureid;
> >     feature id; feature-id.
> > -   Case-sensitive: #SampleID; #Sample ID; #OTUID; #OTU ID;
> >     sample_name
>
> **Sample IDs**
>
> For the sample IDs, there are some simple rules to comply with QIIME 2
> requirements:
>
> > -   IDs may consist of any Unicode characters, with the exception
> >     that IDs must not start with the pound sign (#), as those rows
> >     would be interpreted as comments and ignored. IDs cannot be
> >     empty (i.e. they must consist of at least one character).
> > -   IDs must be unique (exact string matching is performed to detect
> >     duplicates).
> > -   At least one ID must be present in the file.
> > -   IDs cannot use any of the reserved ID column names (the sample
> >     ID names, above).
> > -   The ID column can optionally be followed by additional columns
> >     defining metadata associated with each sample or feature ID.
> >     Metadata files are not required to have additional metadata
> >     columns, so a file containing only an ID column is a valid QIIME
> >     2 metadata file.
>
> **Column names**
>
> > -   May consist of any Unicode characters.
> > -   Cannot be empty (i.e. column names must consist of at least one
> >     character).
> > -   Must be unique (exact string matching is performed to detect
> >     duplicates).
> > -   Column names cannot use any of the reserved ID column names.
>
> **Column values**
>
> > -   May consist of any Unicode characters.
> > -   Empty cells represent missing data. Note that cells consisting
> >     solely of whitespace characters are also interpreted as missing
> >     data.
>
> QIIME 2 currently supports categorical and numeric metadata columns.
> By default, QIIME 2 will attempt to infer the type of each metadata
> column: if the column consists only of numbers or missing data, the
> column is inferred to be numeric. Otherwise, if the column contains
> any non-numeric values, the column is inferred to be categorical.
> Missing data (i.e. empty cells) are supported in categorical columns
> as well as numeric columns. For more details, and for how to define
> the nature of the data when needed, see the .
> :::

**Working with an existing metadata file**

> ::: tip
> ::: title
> Tip
> :::
>
> If you have your own metadata file, it will still need to be validated
> once uploaded to DNA Subway.
>
> > Using a spreadsheet editor, create a metadata sheet that provides
> > descriptions of the sequencing files used in your experiment. Export
> > this file as a tab-delimited **.txt** or **.tsv** file. following
> > the recommendations. (Optional: if you using your own metadata file
> > you can validate it using DNA Subway and or online QIIME2 validator
> > ).
> :::
>
> ::: tip
> ::: title
> Tip
> :::
>
> See an example metadata file used for our sample data here: . Click
> the `&Download`{.interpreted-text role="guilabel"} button on the
> linked page to download and examine the file. (**Note**: This is an
> Excel version of the metadata file, you must save Excel files as .TSV
> (tab-separated) to be compatible with the QIIME 2 workflow.)
> :::

**Creating a metadata file using DNA Subway**

> See [DNA Subway Purple Line - Metadata and
> QC](#dna-subway-purple-line---metadata-and-qc) section C

### *DNA Subway Purple Line - Create a Microbiome Analysis Project*

**A. Create a project in Subway**

> 1.  Log-in to DNA Subway (unregistered users may NOT use Purple Line,
>     register for a CyVerse account at )
> 2.  Click the purple square (\"Microbiome Analysis\") to begin a
>     project.
> 3.  For \'Select Project Type\' select either **Single End Reads** or
>     **Paired End Reads**
>
> > ::: admonition
> > Sample data
> >
> > *\"ubiome-test-data\"* dataset:
> >
> > Select **Single End Reads**
> > :::
>
> 4.  For \'Select File Format\' select the format the corresponds to
>     your sequence metadata.
>
> > ::: admonition
> > Sample data
> >
> > *\"ubiome-test-data\"* dataset:
> >
> > Select **Illumina Casava 1.8**
> > :::
> >
> > ::: tip
> > ::: title
> > Tip
> > :::
> >
> > Typically, microbiome/eDNA will be in the form of multiplexed FastQ
> > sequences. We support the following formats:
> >
> > -   
> > :::
>
> 5.  Enter a project title, and description; click
>     `&Continue`{.interpreted-text role="guilabel"}.

**B. Upload read data to CyVerse Data Store**

The sequence read files used in these experiments are too large to
upload using the Subway interface. You must upload your files (either
.fastq or .fastq.gz) directly to the CyVerse Data Store:

> 1.  Upload your
>     -   FASTQ sequence reads
>     -   Sample metadata file (.tsv or .txt formatted according to ) to
>         the CyVerse Data Store using Cyberduck. See instructions: .
>
> > (Optional: You can edit and change metadata using the Subway
> > interface in the [Manage data]{.title-ref} step once the project is
> > created.)

------------------------------------------------------------------------

### **A. Select files using Manage Data**

> 1.  Click on the \'Manage data stop: this opens a window where you can
>     add your FASTQ and metadata files. Click
>     `&+Add from CyVerse`{.interpreted-text role="guilabel"} to add the
>     FASTQ files uploaded to the CyVerse Data Store. Select your files
>     and then click `&Add selected files`{.interpreted-text
>     role="guilabel"} or
>     `&Add all FASTQ files in this directory`{.interpreted-text
>     role="guilabel"} as appropriate.
>
> > ::: admonition
> > Sample data
> >
> > *\"ubiome-test-data\"* dataset:
> >
> > Navigate to: Shared Data \> SEPA_microbiome_2016 \>
> > **ubiome-test-data** and click
> > `&Add all FASTQ files in this directory`{.interpreted-text
> > role="guilabel"}
> > :::
>
> 2.  To add your metadata file you may use one of three options:
>
> > -   *Add from CyVerse*: Add a metadata file you have uploaded to
> >     CyVerse Data store
> > -   *Upload locally*: Directly upload a metadata file from your
> >     local computer
> > -   *Create New*: Create a new metadata file using DNA Subway
> >
> > ::: tip
> > ::: title
> > Tip
> > :::
> >
> > **Creating a metadata file using DNA Subway**
> >
> > You can create a metadata file using DNA Subway. Creating the file
> > step-by-step will help you to avoid metadata errors. Be sure you
> > have consulted the so you can anticipate what the required fields
> > are. To use this feature under in the \'Manage data\' step under
> > \'Metadata Files\' click `&Create new`{.interpreted-text
> > role="guilabel"}
> >
> > **Sample IDs and adding/removing samples**
> >
> > These are unique IDs for each of your samples.
> >
> > All metadata files must have a column called **#SampleID**. Click
> > `&+Add samples`{.interpreted-text role="guilabel"} to add additional
> > rows. In the Subway form, these will be unique, arbitrary names
> > (roughly corresponding to well-positions on a 96-well microplate).
> > You can change these (including pasting in sample names from an
> > existing spreadsheet).
> >
> > ![metadata_add_samples](./img/dna_subway/metadata_add_samples.gif){width="450px"
> > height="250px"}
> >
> > Right-clicking on a row number allows you to remove or insert rows.
> >
> > ![metadata_rows](./img/dna_subway/metadata_rows.gif){width="450px"
> > height="250px"}
> >
> > **Adding columns, managing sample descriptions and data types**
> >
> > The very **last** column must be a sample description. You can click
> > the arrow on the right of this column to add a new column (which
> > will be added to the left). Column names must be unique, must not be
> > empty, cannot contain whitespace, can contain a maximum of 32
> > characters, cannot match a reserved column name. Notice that when
> > you click on a column name it is colored -pink for columns that have
> > numeric data (e.g. measurements) and cyan for everything else (e.g.
> > categorical descriptions in the form of words (i.e. strings)).
> > Clicking a column name will allow you to change its type.
> >
> > ![metadata_add_column](./img/dna_subway/metadata_add_column.gif){width="450px"
> > height="250px"}
> >
> > **Handling errors**
> >
> > If you violate one of the rules for metadata formatting, the entry
> > will turn red. Consult the help and or the to correct the error.
> >
> > ![metadata_error](./img/dna_subway/metadata_error.gif){width="450px"
> > height="250px"}
> >
> > Click `&Save`{.interpreted-text role="guilabel"} to save your
> > metadata file, and close the window.
> > :::
> >
> > ::: admonition
> > Sample data
> >
> > *\"ubiome-test-data\"* dataset:
> >
> > Click `&Add from CyVerse`{.interpreted-text role="guilabel"}
> >
> > Navigate to: Shared Data \> SEPA_microbiome_2016 \>
> > **ubiome-test-data**
> >
> > Select the **mappingfile_MT_corrected.tsv** and then click
> > `&Add selected files`{.interpreted-text role="guilabel"}.
> > :::
>
> 3.  As needed, you can edit or rename your metadata file. Before
>     proceeding, you must validate your metadata file. To validate,
>     click the \"validate\" link to the right of the metadata file you
>     wish to check. Once the validation completed, click
>     `&Run`{.interpreted-text role="guilabel"} to proceed. If you have
>     errors, you will be presented with an `&Edit`{.interpreted-text
>     role="guilabel"} button so that you can return to the file and
>     edit.

**B. Demultiplex reads**

At this step, reads will be grouped according to the sample metadata.
This includes separating reads according to their index sequences if
this was not done prior to running the Purple Line. For demultiplexing
based on index sequences, the index sequences must be defined in the
metadata file.

> ::: note
> ::: title
> Note
> :::
>
> Even if your files were previously demultimplexed (as will generally
> be the case with Illumina data) you must still complete this step to
> have your sequence read files appropriately associated with metadata.
> :::
>
> 1\. Click the \'Demultiplex reads\' and choose a number of reads to sample.
>
> :   When the job has completed click [Demultiplexing
>     Summary]{.title-ref} to view your results. In \'Random sequences
>     to sample for QC\', enter a value (1000 is recommended),
>
> ::: admonition
> Sample data
>
> *\"ubiome-test-data\"* dataset:
>
> Use the default of 1000 sequences
> :::
>
> 2\. When demultiplexing is complete, you will generate a file (.qzv) click
>
> :   this link to view a visualization and statistics on the sequence
>     and metadata for this project.
>
>     ::: tip
>     ::: title
>     Tip
>     :::
>
>     Several jobs on Purple Line will take several minutes to an hour
>     to complete. Each time you launch one of these steps you will get
>     a Job ID. You can click the `&View job info`{.interpreted-text
>     role="guilabel"} button to see a detailed status and
>     diagnostic/error messages. If needed There is a [stop this
>     job]{.title-ref} link at the bottom of the info page to cancel a
>     job.
>
>     ::: note
>     ::: title
>     Note
>     :::
>
>     **QIIME2 Visualizations**
>     :::
>
>     One of the features of QIIME 2 are the variety of visualizations
>     provided at several analysis steps. Although this guide will not
>     cover every feature of every visualization, here are some
>     important points to note.
>
>     > -   **QIIME2 View**: DNA Subway uses the QIIME 2 View plugin to
>     >     display visualizations. Like the standalone QIIME 2
>     >     software, you can navigate menus, and interact with several
>     >     visualizations. Importantly, many files and visualizations
>     >     can be directly download for your use outside of DNA Subway,
>     >     including in report generation, or in your custom QIIME 2
>     >     analyses. You can view downloaded .qza or .qzv files at .
>     :::
>
>     ::: tip
>     ::: title
>     Tip
>     :::
>
>     **Quality Graphs Explained**
>
>     After demultiplexing, you will be presented with a visualization
>     that displays the following tables and graphs:
>
>     > **Overview Tab**
>     >
>     > > -   *Demultiplexed sequence counts summary*: For each of the
>     > >     fastq files (each of which may generally correspond to a
>     > >     single sample), you are presented with comparative
>     > >     statistics on the number of sequences present. This is
>     > >     followed by a histogram that plots number of sequences by
>     > >     the number of samples.
>     > > -   *Per-sample sequence counts*: These are the actual counts
>     > >     of sequences per sample as indicated by the sample names
>     > >     you provided in your metadata sheet.
>     >
>     > ![overview_tab](./img/dna_subway/overview_tab.gif){width="450px"
>     > height="250px"}
>     >
>     > **Interactive Quality Plot**
>     >
>     > This is an interactive plot that gives you an average quality
>     > (y-axis) by the position along the read (x-axis). This box plot
>     > is derived from a random sampling of a subset of sequences. The
>     > number of sequences sampled will be indicated in the plot
>     > caption. You can use your mouse drag and zoom in to regions on
>     > the plot. Double-click your mouse to zoom out.
>     >
>     > ![quality_plot](./img/dna_subway/quality_plot.gif){width="450px"
>     > height="250px"}
>     :::
>
> 3\. Click the \"Interactive Quality Plot\" tab to view a histogram of sequence
>
> :   quality. Use this plot at the tip below to determine a location to
>     trim.
>
> ::: tip
> ::: title
> Tip
> :::
>
> **Tips on trimming for sequence quality**
>
> On the Interactive Quality Plot you are shown an histogram, plotting
> the average quality (X axis) vs. the position on the read (y axis) in
> base pairs for a **subsample** of reads.
>
> **Zooming to determine 3\' trim location**
>
> Click and drag your mouse around a collection of base pair positions
> you wish to examine. Clicking on a given histogram bar will also
> generate a text report and metrics in the table below the chart. Using
> these metrics, you can choose a position to trim on the right side
> (e.g. 3\' end of the sequence read). The 5\' (left trim) is specific
> to your choice of primers and sequencing adaptors (e.g. the sum of the
> adaptor sequence you expect to be attached to the 5\' end of the
> read). Poor quality metrics will generate a table colored in red, and
> those base positions will also be colored red in the histogram.
> Double-clicking will return the histogram to its original level of
> zoom.
>
> **Example plots**
>
> It is important to maximize the length of the reads while minimizing
> the use of low quality base calls. To this end, a good guideline is to
> trim the right end of reads to a length where the 25th percentile is
> at a quality score of 25 or more. However, the length of trimming will
> depend on the quality of the sequence, so you may have to use a lower
> quality threshold to retain enough sequence for informative sequence
> searches and alignments. This may require multiple runs of the
> analysis to find the optimal trim length for your data.
>
> *Quality drops significantly at base 35*
>
> ![histogram_poor](./img/dna_subway/histogram_poor.png){width="400px"
> height="250px"}
>
> *Improved quality sequence*
>
> ![histogram_good](./img/dna_subway/histogram_good.png){width="400px"
> height="250px"}
> :::

**C. Use DADA2 for Trimming and Error-correction of Reads**

It is important to only work with high quality data. This step will
generate a sequence quality histogram which can be used to determine
parameter for trimming.

> 1.  Click \'DADA2\' and choose the metadata file corresponding to the
>     samples you wish to analyze. Then choose values for trimming of
>     the reads. For \"trimLeft\" (the position starting from the left
>     you wish to trim) and \"TruncLen\" (this is the position where
>     reads should be trimmed, truncating the 3\' end of the read. Reads
>     shorter than this length will be discarded). Finally, click
>     `&Trim reads`{.interpreted-text role="guilabel"}.
>
> > ::: admonition
> > Sample data
> >
> > *\"ubiome-test-data\"* dataset:
> >
> > Based on the histogram for our sample, we recommend the following
> > parameters:
> >
> > -   **trimLeft: 17** (this is specific to primers and adaptors in
> >     this experiment)
> > -   **TruncLen: 200** (this is where low quality sequence begins, in
> >     this case because our sequence length is lower than the expected
> >     read length)
> > :::

**D. Check Results of Trimming** Once trimming is complete, the
following outputs are expected:

> 1.  Click on DADA2 and then click on the links in the *Results* table
>     to examine results.
>
> -   **Trim Table** (*Metric summary*, *Frequency per sample*,
>     *Frequency per feature*, ): Summarizes the dataset post-trimming
>     including the number of samples and the number of features per
>     sample. The \"Interactive Sample Detail\" tab contains a sampling
>     depth tool that will be used in computation of the core matrix.
>
>     ::: note
>     ::: title
>     Note
>     :::
>
>     **You will use the maximum frequency value for the Alpha
>     rarefaction step** So you may wish to record this value now for
>     the DNA Subway \'Clustering sequences\' step.
>     :::
>
> -   **Stats**: Sequencing statistics for each of the sample IDs
>     described in the original metadata file.
>
> -   **Representative Sequences** (*Sequence Length Statistics*,
>     *Seven-Number Summary of Sequence Lengths*, *Sequence Table*):
>     This table contains a listing of features observed in the sequence
>     data, as well as the DNA sequence that defines a feature. Clicking
>     on the DNA sequence will submit that sequence for BLAST at NCBI in
>     a separate browser tab.
>
> The feature table contains two columns output by DADA2. DADA2
> (Divisive Amplicon Denoising Algorithm 2) determines what sequences
> are in the samples. DADA2 filters the sequences and identifies
> probable amplification or sequencing errors, filters out chimeric
> reads, and can pair forward and reverse reads to create the best
> representation of the sequences actually found in the samples and
> eliminating erroneous sequences.
>
> > -   **Feature ID**: A unique identifier for sequences.
> > -   **Sequence**: A DNA Sequence associated with each identifier.
>
> Clicking on any given sequence will initiate at BLAST search on the
> NCBI website. Click \"View report\" on the BLAST search that opens in
> a new web browser tab to obtain your results. Keep in mind that if
> your sequences are short (due to read length or trimming) many BLAST
> searches may not return significant results.
>
> > ::: tip
> > ::: title
> > Tip
> > :::
> >
> > Although the term \"feature\" can (unfortunately) as used by the
> > QIIME2 documentation, unless otherwise noted in this documentation
> > it can be thought of as an OTU (); another substitution for the word
> > species. OTU is a convenient and common terminology for referring to
> > an unclassified or undetermined species. Ultimately, we are
> > attempting to identify an organism from a sample of DNA which may
> > not be informative enough to reach a definitive conclusion.
> > :::
> >
> > ::: tip
> > ::: title
> > Tip
> > :::
> >
> > If you want to redo the DADA2 step with different parameters, click
> > the \"New Job\" tab on the upper left of a DADA2 window to submit a
> > new job. New jobs appear as tabs on Subway steps that are typically
> > run several times. You can go back an see these jobs which are
> > labeled with a job number.
> >
> > ![dada_tabs](./img/dna_subway/dada_tabs.gif){width="450px"
> > height="250px"}
> > :::

------------------------------------------------------------------------

### *DNA Subway Purple Line - Alpha Rarefaction/Clustering Sequences*

**A. Alpha rarefaction**

At this step, you can visualize summaries of the data. A feature table
will generate summary statistics, including how many sequences are
associated with each sample.

> 1.  Click on \'Alpha rarefaction\'. Select \"run\" and designate the
>     minimum and maximum rarefaction depth. A minimum value should be
>     set at 1. The maximum value is specific to your data set. The
>     maximum value is specific to your data set. To determine what the
>     maximum value should be set to, open the \"Trim Table\" from the
>     \"DADA2\" step. You may not choose a value that is greater than
>     the maximum frequency per sample. In general, choosing a value
>     that is somewhere around the median frequency seems to work well,
>     but you may want to increase that value if the lines in the
>     resulting rarefaction plot don\'t appear to be leveling out, or
>     decrease that value if you seem to be losing many of your samples
>     due to low total frequencies closer to the minimum sampling depth
>     than the maximum sampling depth. Identify the maximum Sequence
>     Count value and enter that number as the maximum value. Click
>     `&Submit Job`{.interpreted-text role="guilabel"}.
>
> > ::: note
> > ::: title
> > Note
> > :::
> >
> > Since you may want to try Alpha rarefaction using different
> > combinations of results from DADA2 trimming and your choice of
> > rarefaction depths, your trim (DADA2) jobs are displayed on the
> > left, and each new Alpha rarefaction setting will appear as a tab on
> > the top.
> >
> > ![alpha_tabs](./img/dna_subway/alpha_tabs.gif){width="450px"
> > height="250px"}
> > :::
> >
> > ::: admonition
> > Sample data
> >
> > *\"ubiome-test-data\"* dataset:
> >
> > We recommend the following parameters:
> >
> > -   **Min. rarefaction depth**: 1
> > -   **Max. rarefaction depth**: 2938
> > :::
>
> 2.  Under \'Results\' click on **Alpha Rarefaction Plot** to view the
>     results.
>
> > ::: tip
> > ::: title
> > Tip
> > :::
> >
> > **Alpha rarefaction** generates an interactive plot of species
> > diversity by sampling depth by the categorical samplings described
> > in your sample metadata. You can use dropdown menus to change
> > metrics/conditions displayed and also export data as a CSV file.
> >
> > ![alpha_plot](./img/dna_subway/alpha_plot.gif){width="450px"
> > height="250px"}
> > :::

------------------------------------------------------------------------

### *DNA Subway Purple Line - Calculate Core Metrics/Alpha and Beta Diversity*

At this stop, you will examine *Alpha Diversity* (the diversity of
species/taxa present within a single sample) and *Beta Diversity* (a
comparison of species/taxa diversity between two or more samples).

-   Alpha diversity answers the question - \"How many species are in a
    sample?\"
-   Beta diversity answer the question - \"What are the differences in
    species between samples?\"

**A. Calculate core metrics**

> 1.  Click on \'Core metrics\' and then click the \"run\" link. Choose
>     a sampling depth based upon the \"Sampling depth\" tool (described
>     in Section D Step 1, in the *Trim Table* output; *Interactive
>     Sample Detail* tab). Choose an appropriate classifier (see
>     comments in the tip below) and click
>     `&Submit job`{.interpreted-text role="guilabel"}.
>
> > ::: tip
> > ::: title
> > Tip
> > :::
> >
> > **Choosing Core metrics parameters**
> >
> > *Sampling Depth*
> >
> > In downstream steps, you will need to choose a sampling depth for
> > your sample comparisons. You can choose by examining the table
> > generated at the **Trim reads** step. In the *Trim Table* output,
> > *Interactive Sample Detail* tab, use the \"Sampling depth\" tool to
> > explore how many sequences can be sampled during the Core matrix
> > computation. As you slide the bar to the right, more sequences are
> > sampled, but samples that do not have this many sequences will be
> > removed during analysis. The sampling depth affects the number of
> > sequences that will be analyzed for taxonomy in later steps: as the
> > sampling depth increases, a greater representation of the sequences
> > will be analyzed. However, high sampling depth could exclude
> > important samples, so a balance between depth and retaining samples
> > in the analysis must be found.
> >
> > *Classifier* Choose a classifier pertaining to your experiment type.
> >
> > -   **Microbiome** choose **Greengenes (515F/806R)** or **Greengenes
> >     (full sequences)** or **Sliva (16S rRNA)** classifier
> > -   **eDNA** experiment with marine fishes you may elect to choose
> >     the **Fish 12S/ecoPrimer** classifier
> > :::
> >
> > ::: admonition
> > Sample data
> >
> > *\"ubiome-test-data\"* dataset:
> >
> > We recommend the following parameters:
> >
> > -   **Sampling Depth**: 3000
> > -   **Classifier**: Grenegenes (full sequences)
> > :::

**B. Examine alpha and beta diversity**

> 2.  When core metrics is complete, you should generate several
>     visualization results. Click each of the following to get access:
>
>     -   **Alpha Diversity:**
>
>     > -   
>     >
>     >     *Pielou\'s Evenness*
>     >
>     >     :   -   Alpha Correlation: Measure of community evenness
>     >             using correlation tests
>     >         -   Group Significance: Analysis of differences between
>     >             features across group
>     >
>     > -   
>     >
>     >     *Faith\'s Phylogenetic Diversity*
>     >
>     >     :   -   Alpha Correlation: Faith Phylogenetic Diversity (a
>     >             measure of community richness) with correlation
>     >             tests
>     >         -   Group Significance: Faith Phylogenetic Diversity ( a
>     >             measure of community richness)
>
>     -   **Beta Diversity:**
>
>     > -   
>     >
>     >     *Bray Curtis Distance*
>     >
>     >     :   is a metric for describing the dissimilarity of species
>     >         in an ecological sampling.
>     >
>     >         -   Bioenv: Bray-Curtis test metrics
>     >         -   Emperor: Interactive PCoA plot of Bray-Curtis
>     >             metrics
>     >
>     > -   
>     >
>     >     *Jaccard Distance*
>     >
>     >     :   -   Emperor: Interactive PCoA plot calculated by
>     >             similarity index.
>     >
>     > -   
>     >
>     >     *Unweighted UniFrac Distance*
>     >
>     >     :   is a metric for describing the similarity of a
>     >         biological community, taking into account the
>     >         relatedness of community members.
>     >
>     >         -   Bioenv: UniFrac test metrics
>     >         -   Emperor: Unweighted interactive PCoA plot
>     >
>     > -   *Weighted UniFrac Distance* Unweighted UniFrac removes the
>     >     effect of low-abundance features in the calculation of
>     >     principal components.
>     >
>     >     > -   Emperor: Weighted interactive PCoA plot of UniFrac.
>
>     ::: tip
>     ::: title
>     Tip
>     :::
>
>     **Emperor Plots**
>
>     These plots are all interactive three-dimensional plots of an
>     analysis using .
>
>     **Customization**
>
>     You can customize Emperor plots, including altering the color of
>     and shape points, axes, and other parameters. You can also export
>     images from this visualization.
>
>     ![emperor_plots](./img/dna_subway/emperor_plots.gif){width="550px"
>     height="300px"}
>
>     **Bioenv**
>
>     These plots are tables of tests and descriptive metrics.
>     :::

**C. Taxonomic Diversity:**

> Taxonomic diversity is at the heart of many analyses. We suggest
> consulting the QIIME for a detailed explanation of how QIIME2
> calculates taxonomy and additional features of QIIME2 you may wish to
> explore beyond the functionalities DNA Subway has included.
>
> > -   *Bar Plots*
> >
> >     -   An interactive stacked bar plot of species diversity.
> >         Dropdown menus allow you to color by seven taxonomic
> >         levels 1) kingdom, 2) phylum,
> >         3\) class, 4) order, 5), family, 6) genus, 7) species. Plots
> >         can be further arranged/filtered/sorted accoridng to
> >         characteristics in the sample metadata. You may also
> >         download images and data used to create the barpot
> >         visualization.
> >
> >     > ![taxonomic_barplots](./img/dna_subway/taxonomic_barplots.gif){width="550px"
> >     > height="300px"}
> >
> > -   *Taxonomy*
> >
> >     -   A table indicating the identified "features", their taxa,
> >         and an indication of confidence.
> >
> > You can download and interact with any of the available plots.

**D. Calculate differential abundance**

> 1.  Click on the \'Differential abundance\' stop. Then click on the
>     \"Submit new \"Differential abundance\" job\" link. Choose a
>     metadata category to group by, and a level of taxonomy to
>     summarize by. Then click `&submit job`{.interpreted-text
>     role="guilabel"}.
>
> > ::: admonition
> > Sample data
> >
> > *\"ubiome-test-data\"* dataset:
> >
> > We recommend the following parameters:
> >
> > -   **Group data by**: CollectionMethod
> > -   **Level of taxonomy to summarize**: 5
> > :::
> >
> > ::: tip
> > ::: title
> > Tip
> > :::
> >
> > Download the provided CSV files so that you can generate customized
> > plots.
> > :::

------------------------------------------------------------------------

### *DNA Subway Purple Line - Visualize data with PiCrust and PhyloSeq*

**Under Development**

------------------------------------------------------------------------

**Summary**: Together, Kallisto and Sleuth are quick, powerful ways to
analyze RNA-Seq data.

**Fix or improve this documentation**

-   Search for an answer:
-   Ask us for help: click on the lower right-hand side of the page
-   Report an issue or submit a change:
-   Send feedback: [Tutorials@CyVerse.org](Tutorials@CyVerse.org)

------------------------------------------------------------------------

[Learning Center Home](http://learning.cyverse.org/)