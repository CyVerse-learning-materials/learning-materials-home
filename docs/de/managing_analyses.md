# Managing Analyses in the Discovery Environment

An analysis is the product of a launched app that has completed its computation of input data. The Discovery Environment maintains a history
of all your analyses, including a unique analysis ID, launch date, input files, and other details.


## Browsing and Checking the Status of Analyses in the Discovery Environment

1. Open the **Analyses** view by clicking on the (analyses icon) on the left sidebar of the DE interface to monitor the status of your submitted
analysis. The analysis launched most recently will be at the top of the list.

2. Analyses can be sorted by Name, Start date, End date or Status. To sort your analyses, hover your cursor over the name of the column you
wish to sort by and click on the arrow that appears beside the column name.

??? tip "Analyses Status"

    In the DE, an analyses can have one of the following status messages:

    -   **Submitted**: The analysis has been queued for running on CyVerse resources.
    -   **Running**: The analyses is now running - for most apps (non-interactive) the analysis will run until it is completed or a time limit is reached. For interactive (VICE) applications, you may now access your interactive application (check your notification icon for a link or click the link-out icon ).
    -   **Completed**: The application is completed and any logs and results have been written to the data store. Access the outputs by clicking the folder icon )
    -   **Canceled**: The analyses has been cancelled.
    -   **Failed**: The analyses has resulted in an error.


3. To filter your analyses by user, click on the View dropdown menu in the upper left corner and select either 'My analyses' or 'Shared with me'. The default view is 'My analyses'.

4. To further filter your analyses by app type, click on the Filter dropdown menu and select the type of analyses you would like to see (i.e., HPC, DE, VICE, or OSG).

5. To open and view the output folder of a completed analysis, click on the output folder icon at the right side of that particular analysis.

## Relaunching an Analyses in the Discovery Environment

You can relaunch an analyses to load an analyses you have previously done. Your analyses will load with the same inputs and parameters as previously used and you will then have the option to some, all, or none of the of those settings.

*To relaunch*

1.  Select an analysis from your history.
2.  Click the relaunch icon ().
3.  Alter any desired parameters and launch the application.

## Viewing Analyses Details in the Discovery Environment

Click the "Details" button or the (info icon) to view details of the analysis (e.g. parameters used).

## Sharing an Analyses in the Discovery Environment

Clicking the "Share" or "Add To Bag" button to share an analysis and its results with another CyVerse user.

## Additional Analyses Actions in the Discovery Environment

Clicking the "More Actions" button allows you to perform the following actions:

-   **Go to Output folder**: View the logs and outputs of a completed analysis
-   **Relaunch**: Relaunch an analysis (with the option to edit parameters)
-   **Rename**: Rename an analysis
-   **Update Comments...**: Add or edit comment notation on an analysis
-   **Go to analyses**: View an interactive analysis in a new tab
-   **Extend Time Limit**: Extend the time limit of an interactive analysis
-   **Terminate**: Stop a submitted or running analysis
-   **Delete**: Delete an analysis from your history
-   **Add to Bag**: Add to a "bag" for sharing

-----------------------------------------------------------------------

**Fix or improve this documentation**

  - Search for an answer:
     [CyVerse Learning Center](https://learning.cyverse.org)
  - Ask us for help:
    click the Intercom icon ![Intercom](../assets/intercom.png){ width="25" } on the lower right-hand side of the page
  - Report an issue or submit a change:
    [Github Repo Link](https://github.com/cyverse-learning-materials/)
  - Send feedback: <Tutorials@CyVerse.org>
  
------------------------------------------------------------------------