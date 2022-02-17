[Learning Center Home](http://learning.cyverse.org/)

# Associate Data with Metadata

The Data Store supports a variety of solutions that allow you to
associate your raw data with metadata. Metadata is of critical
importance to a quality research (see this article on ), yet it is often
given less consideration until the time of publication and sharing. Here
are a few metadata features that you can adopt and be aware of at the
outset, see more of CyVerse\'s capabilities on the page.

**Some things to remember about the platform**

-   You can add metadata to a single file/folder, or in bulk to large
    collections of data. You can use your own metadata schema, or apply
    one of our metadata templates.
-   The Discovery Environment supports several metadata templates that
    can be used for submission of metadata. Additional templates you may
    wish to use can be found at resources like .
-   Metadata can be managed through a graphical interface in the
    Discovery Environment or using iCommands at the command line. We
    will only cover the Discovery Environment in this guide. See
    instructions for on the CyVerse wiki.

------------------------------------------------------------------------

## *Viewing and Editing Metadata for a Single File/folder in the Discovery Environment*

> ::: note
> ::: title
> Note
> :::
>
> You must have [write]{.title-ref} or [own]{.title-ref} permission to
> edit an object\'s metadata.
> :::
>
> 1.  Log into the .
>
> 2\. Click on the (Data Icon) to view to browse for data. Select
>
> :   (checkbox) a single file/folder to add metadata to.
>
> 3\. Under the **More Actions** menu, click on the **\`Metadata\`** choice.
>
> :   You will see existing metadata for the file/folder in the
>     Attribute, Value, Unit (AVU) format.
>
>     ::: tip
>     ::: title
>     Tip
>     :::
>
>     A single piece of metadata, or an AVU, is made up of attributes,
>     values, and units. An attribute is a changeable property or
>     characteristic of the file or folder you have selected that can be
>     set to a value. For example, \"time point\" might be an attribute
>     of a file, while \'7\' could be its value, and hour a unit of
>     time.
>     :::

*Adding metadata*

1.  Click the \"+ Add Metadata\" button to add a new entry. Then follow
    the directions for editing metadata below.

*Editing or deleting metadata*

1.  You may use the \"pencil\" icon to edit an existing entry or the
    \"trash can\" icon to delete an entry.
2.  After you have made any edits or deletion, click \'Save\' (on the
    top right of the screen) to save all entries and apply the metadata.

## *Adding Metadata to Multiple Files/folder in the Discovery Environment*

**Adding Metadata using a CyVerse Template**

1.  Log into the .

2.  Click on the (Data Icon) to open a Data window. Select (checkbox) a
    single file/folder to add metadata to. Next,

3.  Under the **More Actions** menu, click on the **Metadata**. Click on
    the subsequent **More Actions** menu and select **View in
    Template**. You have two choices in using the template:

    > A)  Choose a template and clicking **Select** will allow you to
    >     apply the template and edit the metadata manually in the DE
    >     interface.
    > B)  Clicking the (Download icon) will download a .csv file you can
    >     edit and upload (See applying Bulk metadata below).

    click [OK]{.title-ref} to download. (In this example, we will use
    the [DOI Request - DataCite Metadata]{.title-ref}) template.

*Editing metadata template in DE*

1.  Follow the steps in the \"Editing or deleting metadata\" from the
    previous section above

*Editing a downloaded metadata template*

1.  Unzip the downloaded template; it will contain two files
    [blank.csv]{.title-ref} and [guide.csv]{.title-ref}. Open these
    files using the spreadsheet editor of your choice.

    ::: tip
    ::: title
    Tip
    :::

    -   [blank.csv]{.title-ref} is the metadata template that you will
        complete for your data.
    -   [gude.csv]{.title-ref} contains instructions for your template,
        and will usually include controlled vocabulary terms for
        metadata descriptors.
    :::

2.  Edit the template in one of two ways:

> -   *If all data will be in a single folder*
>     a.  In the [blank.csv]{.title-ref} spreadsheet, in the *\'file
>         name or path\'* column, enter the file names of all the
>         files/folder in that folder you wish to annotate with
>         metadata.
>
>         ::: tip
>         ::: title
>         Tip
>         :::
>
>         **Finding the file path in the DE**
>
>         In any data window click the (kebab menu or 3-dots menu) next
>         to any file or folder; choose **copy path** to get the path to
>         that item in the Data Store.
>         :::
>
>     b.  In the remaining columns of the template, enter the values for
>         each file/attribute combination that apply.
>
>     c.  If desired, add additional columns to the end of the template.
>         The metadata in the additional columns will be saved in the
>         Data Store but will not be stored as part of the template.
>
>     d.  Save the file in **CSV format**. Make sure none of the names
>         of the files or the parent folder includes spaces or special
>         characters. You may name this metadata file anything you wish,
>         but keep it in CSV format.
> -   *If data will be in multiple folders*
>     a.  In the [blank.csv]{.title-ref} spreadsheet, in the *\'file
>         name or path\'* column, enter the full path of the top-level
>         folder (e.g.
>         [/iplant/home/YOURUSERNAME/FOLDERNAME]{.title-ref})
>     b.  In the remaining columns in the first row, enter the values
>         for each file/attribute combinations
>     c.  Repeat for each file, but make sure to add the full file path
>         (e.g. [/ iplant/home/YOURUSERNAME/FOLDERNAME]{.title-ref}) for
>         each file.
>     d.  If desired, add additional columns to the end of the template.
>         The metadata in the columns will be saved in the Data Store
>         but will not be stored as part of the template.
>     e.  Save the file in **CSV format**. Make sure none of the names
>         of the files or the parent folder includes spaces or special
>         characters. You may name this metadata file anything you wish,
>         but keep it in CSV format.

3.  In an open \'Data\' window in the Discovery Environment, navigate to
    appropriate location for uploading the template:
    -   If the first column of your metadata file contains only file
        names (that is, all data files are in the same folder), navigate
        to the folder and use the **Upload** button (Browse local) or
        your choice of upload tool to upload the metadata (csv file) to
        that folder.

    -   If the first column of your metadata file contains the full path
        to each file (that is, the data files are in different folders),
        it does not matter where the metadata file is located on the
        Data Store. Use he **Upload** button (Browse local) or your
        choice of upload tool to upload the metadata (csv file) to an
        appropriate location on the Data Store.

        > ::: tip
        > ::: title
        > Tip
        > :::
        >
        > If you commit to using absolute file paths (e.g.
        > [/iplant/home/your_file_location]{.title-ref}) you can keep
        > all of your metadata spreadsheets in one location on the Data
        > Store for convenient management and editing.
        > :::
4.  To apply the metadata, in the Data window, select (checkbox) the
    name of the **folder** containing the data files to which you want
    to apply the metadata in bulk.
5.  Click the **More Actions** menu select \'Apply Bulk Metadata\';
    brows to the uploaded metadata spreadsheet and select it.

Your metadata should now be applied to your files. You should receive a
notification in the Discovery Environment and you can confirm the
metadata has been correctly applied by following the steps in the
preceding section to view metadata.

------------------------------------------------------------------------

**Fix or improve this documentation**

-   Search for an answer: [CyVerse Learning Center](https://cyverse-learning-materials.github.io/learning-materials-home)
-   Ask us for help: click on the lower right-hand side of the page
-   Report an issue or submit a change: [Github Repo](https://github.com/CyVerse-learning-materials/data_store_guide)
-   Send feedback: [learning@CyVerse.org](learning@CyVerse.org)

------------------------------------------------------------------------

> [Learning Center Home](http://learning.cyverse.org/)
