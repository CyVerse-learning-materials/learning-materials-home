# Evaluate Differential Expression with Sleuth

**Description:**

In this final section of the tutorial, we will use the R package Sleuth
to visualize our data and perform differential expression analysis. We
will summarize the R analysis steps, but the tutorial itself is provided
in the form of an RMarkdown notebook.

------------------------------------------------------------------------

**Input Data:**

| Input | Description | Example |
|---|---|---|
| Kallisto quantification results (abundances.h5, abundances.tsv, run_info.json for each FastQ file analyzed ) | See detailed description below  | [Kallisto outputs](https://datacommons.cyverse.org/browse/iplant/home/shared/cyverse_training/tutorials/pbv3/rna-seq-tutorial/Kallisto-v.0.43.1_analysis1-2020-10-07-23-37-53.1/kallisto_qaunt_output) |

## *Use Sleuth in RStudio App to Calculate and Visualize Results*

1.  In the [Discovery Environment](https://de.cyverse.org/) click on the **Data** icon and navigate to your
    **rna-seq-tutorial** tutorial folder and create a folder to store
    outputs, name the folder **sleuth_analysis**.

2.  In the **Apps** view, search for and launch the **RStudio Sleuth
    pb** app. You can use this direct link: [Sleuth app](https://de.cyverse.org/de/?type=quick-launch&quick-launch-id=afd0da48-455d-4201-aafb-fe92d38f7986&app-id=4809de5a-037b-11eb-a1cc-008cfa5ae621).

3.  In **Analysis Info** you can name this analysis and provide any
    comments (optional). Under **Output folder**, navigate to the
    **sleuth_analysis** folder created earlier. Your outputs will
    automatically be placed in this folder; click **Next**.

4.  In **Parameters** for **Notebooks** a default folder containing
    notebook specific to this tutorial will be loaded
    (**/iplant/home/shared/cyverse_training/tutorials/pbv3/R**) by
    default. You may change this if you have an alternative notebook.

5.  Under **Datasets** and **Data for analysis** navigate to the
    **rna-seq-tutorial** folder created earlier, go into the folder
    containing your Kallisto output, and select the
    **Kallisto_quant_output** folder.

6.  Under **Datasets and Study design file** navigate to the
    **rna-seq-tutorial** folder created earlier, go into the
    **metadata** folder and select the experimental design file (i.e.,
    **experimental_design.tsv**); click **Next**.

7.  Click **Next** again to skip **Advanced Settings (optional)**; under
    **Review and Launch** click **Launch Analysis**.

8.  Click on **Analyses** view to see the current status of the job; you
    can also click on the **Analyses** icon to navigate to this section.
    When the job has the status Running you will be able to access the
    RStudio session. There will be a link icon immediately to the left
    of the analysis name. Click this to open the RStudio session in a
    new browser tab.

!!! Tip
        Although the job has Running status, it may take a few minutes to
        access the RStudio session, the amount of is related to the size
        of the files being transferred into the RStudio environment.
        :::

## *Working in RStudio*

9\. In the RStudio session we must modify our RStudio home directory to
make it easier to save files. Open the **Terminal** tab. Paste in the
following command and hit enter:

```
sudo chown -R rstudio /home/rstudio
```

10. In the RStudio Files tab, go to the R folder and click
    **sleuth_pb_tutorial.Rmd** to open the notebook.
11. Follow the notebook by clicking the green "play" button in each
    section (chunk) of R code. You can follow along with the notebooks
    explanations and then press play to run each code chunk. The final
    code chunk will launch the interactive visualizations in the R Shiny
    application.

**Rstudio Outline**

Without replicating the actual code presented in the notebook, here are
the major steps presented:

(a) **Step 1**: The Sleuth library and additional libraries for
    plotting and retrieving data from Ensembl are loaded.

(b) **Step 2**: The experimental design file is loaded, and a table is
    created that maps this metadata with the Kallisto outputs.

(c) **Step 3**: We use the biomaRt package to load gene names from
    Ensembl so that we can more descriptively annotate our
    transcripts.

(d) **Step 4**: We indicate the variables we want to compare and use
    the Sleuth functions to create the data model.

(e) **Step 5**: We do an exploratory visualization of the dataset
    using PCA plotting.

(f) **Step 6**: A liner model is created, and the results of the
    analysis are displayed in an interactive R Shiny application. The
    R Shiny application will generate tables of results and figures
    that can be downloaded and further analyzed. Note: The test table
    available from the R Shiny application contains a complete list of
    gene names, quantifications, and other statistics. You can
    download this directly from the R Shiny app.

!!! Note
        Your web browser must have pop-up blocking disabled to view the
        Shiny application.

12. When you have finished with your RStudio session, return to the
    **Analysis** view and select (checkbox) the RStudio analysis. Go to
    the Analysis view and select **Complete and Save Outputs**. Any
    files created during your RStudio analysis will be saved.

!!! Note
        VICE applications (Like this RStudio application) typically have a
        48 hour run time on CyVerse. The application will automatically
        terminate and save outputs at this time.


**Output/Results**

| Output | Description | Example | 
|---|---|---|
|Varies | In the Sleuth Shiny application you can export tables with your differential testing results and a variety of graphs. | NA |

------------------------------------------------------------------------

**Description of output and results**

Sleuth Shiny application allows you to interactively examine and tailor
tables of differential testing results as well as graphs of gene
expression and other metrics. The application also allows you to export
and save these outputs.
