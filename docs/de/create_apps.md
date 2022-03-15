#Tool integration in the Discovery Environment (DE)


##Why use the DE?

-   Use hundreds of bioinformatics Apps without the command line (or
    with, if you prefer)
-   Batch and interactive modes
-   Seamlessly integrated with data and high performance computing --
    not dependent on your hardware
-   Create and publish Apps and workflows so anyone can use them
-   Analysis history and provenance -- "avoid forensic bioinformatics"
-   Securely and easily manage, share, and publish data

##Types of apps

**CyVerse tool:** Software program that is integrated into the back end
of the DE for use in DE apps

**CyVerse app:** graphic interface of a tool made available for use in
the DE

 -   **Executable**: user starts an analysis and when the analysis
     finishes they can find the output files in their `\Analyses\`
     folder

      -   **DE**: run locally on our cluster
      -   **HPC**: labeled as 'Agave' in the DE. Run on XSEDE
          rsources at Texas Advanced Computing Center (TACC)
      -   **OSG**: run on the Open Science Grid

 -   **Interactive**: also called Visual and Interactive Computing
     Environment (VICE). Allows users to open Integrated Development
     Environments (IDEs) including RStudio, Project Jupyter and RShiny
     and work interactively within them.

The (containerized) tool must be integrated into the Cyverse DE first.
Then an app (interface) can be built for that tool.

##Building an App for Your Tool

You can build an app for any tool that:

-   is private to you
-   is shared with you
-   is public

**Note:**
It is a good idea to check if the tool you want is already
integrated before you start. The tool may be there already and you can
build an app using it.

From the 'Apps' tab click on the 'Manage Tools' button in the upper right.
In the 'Manage Tools' interface search for 'porechop' in the search bar
at the top. If you find the tool you want then you can build an app using that app. For more information about the app (including other apps already using this tool) you can select it (using the checkbox to the left) and then click 'details'.

![manage_tools](../assets/de/manage_tools.png){width="600"}

Step 1: App Info

From the 'Apps' tab click on the 'Create' button in the top right corner and select 'Add App'. Choose an informative app name and description (eg. tool
name and version). Select the tool you want to build the app on buy clicking the 'select' button. This will open the 'search tools' window. Search for and select your tool.

![create_app](../assets/de/create_app.png){width="600"}


![buildapp_step1](../assets/de/buildapp_step1.png){width="600"}

Step 2: Parameters

Divide the app into sections appropriate for that tool (input, options and output are usually
sufficient sections for simple apps). You can add a section by clicking on the 'Add Section'. Once you have added a section you can edit the name by clicking on the pencil icon (right side). Within a section you can add the parameters necessary for your tool by clicking on 'Add Parameter' and choosing the type of parameter you want to add (e.g. input file). For each option you add, you will need to specify what the option is,
the argument option (if there is one) and whether that option is required. If an
option is not required be sure to check the 'exclude if nothing is
entered' box. For tools that have positional agruments (no argument option, eg.
-i) you can leave argument option blank but you will need to make sure your arguments are in the proper order in step 4.

![buildapp_step2](../assets/de/buildapp_step2.png){width="600"}

**Note:**
Although it is best to add all of the options for your tool, as it makes
the app the most useful, you can expose as many or as few options as you
like (as long as you add all the required options).


Step 3: Preview App
Make sure your app looks the way you want it to and that you have included all of the required options. If you need to make changes use the back button to return to the previous step.

![buildapp_step3](../assets/de/buildapp_step3.png){width="600"}

Step 4: Command Line Order

This will provide a preview of what your options will look like on the command line. In the list of options below, use the up and down arrows to the right of the option to move it up or down in the list. You should see these changes reflected in the command line preview box. This order is especially important if your tool uses positional arguments.

![buildapp_step4](../assets/de/buildapp_step4.png){width="600"}

Step 5: Completion

Click 'Save' (upper right) to save your work. Then click 'Launch App' at the bottom of the page and test your app with appropriate data.

If you need to make changes to your app after testing, you can find it under the 'Apps under development' section of the 'Apps' tab. Click on the three dots menu (to the right of your app) and select 'edit app'. This will re-open the apps editor and allow you to make changes.

![buildapp_step5](../assets/de/buildapp_step5.png){width="600"}

Once you know your app works correctly you can share or publish it as
you wish. Public apps must have example data located in an appropriately
named folder here:

    `/iplant/home/shared/iplantcollaborative/example_data`


All public apps also have a brief documentation page on the [CyVerse
Wiki](https://wiki.cyverse.org/wiki/display/DEapps/List+of+Applications)

To publish your app click on the three dots menu (at the right of your app) 
and select 'Publish'. You will need to supply:

-   location of the example data
-   brief description of inputs, required options and outputs
-   link to CyVerse Wiki documentation page
-   link to docmentation for the tool (provided by the developers)

