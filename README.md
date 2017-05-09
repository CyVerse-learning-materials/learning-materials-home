# CyVerse Materials Home

The repo is the homepage for CyVerse learning materials hosted by Read the Docs. 

## Goal of the Learning Center

The goal of the CyVerse Learning Center is to provide basic learning materials to help researchers, educators, and students effectively use CyVerse cyberinfrastructure. All documentation is a work-in-progress; even the best efforts will be incomplete, contain ambiguities, inaccuracies, and at some point, out of date. While we can't get everything perfect, we can make it easier for users to have the best possible versions of our documentation, and to contribute back by identifying errors and suggesting additional ways our documentation can improve. We also want to make it easy for users who are installing their own tools or who are using CyVerse in customized ways to contribute their documentation in a central place. 

## Guide to Authorship

In this guide we will cover all of the steps needed to complete a CyVerse Tutorial or Quick Start. Some parts of this process can only be completed by CyVerse staff with access to our ReadtheDocs account. The entire guide is public and open to revision and comment. 

### Step One: Starting a new documentation piece from a template

All tutorials and quoickstarts should start from one of our template repos:



- **Tutorials:** https://github.com/CyVerse-learning-materials/cyverse_tutorial_template

    - Tutorials teach. Users should be able to follow an example dataset through the steps of a tutorial and gain understanding about what is happening along those steps. 
 - These are in-depth guides that usually address a scientific question by covering the major steps of a scientific workflow. 
 - Tutorials are usually multi-page documents
 - Tutorials will usually have test data deposited in the CyVerse data commons
 - A tutorial is ‘successful’ when a user is able to follow the tutorial a second time with their own data and obtain reasonable results.
- **Quick Starts:** https://github.com/CyVerse-learning-materials/cyverse_quickstart_template

    - These materials are short tutorials that cover the minimal amount of information needed to complete an operational task (e.g. uploading data, reformatting a file, etc. ). 
    - There is no significant explanation of the science or interpretation of results. 
    - Quickstarts highlight available resources, answer common questions (derived from user forum), and refer users to the most appropriate materials.
    - Quickstarts can have multiple pages, but usually should be a single page covering a single topic.
    - Quickstarts might have test data deposited in the CyVerse data commons

Anyone may suggest updates to these templates, but there will remain largely the responsibility of CyVerse to maintain. 

#### Importing a template

Once a user has decided which template to begin from, they should import that template into their own GitHub account. From there they will edit the template, inserting their content. Each repo has a detailed README on the prerequisites and process of adding content. 

1. **Import** (not clone) the CyVerse base tutorial repo following GitHub's directions here: https://help.github.com/articles/importing-a-repository-with-github-importer/
    - The CyVerse base tutorial repo URL is **https://github.com/CyVerse-learning-materials/cyverse_quickstart_template**
    - Name your repo for the name of your quickstart e.g. 
    *'name_quickstart'* 
2. Edit the **index.rst**. Save images or other files in the appropriate directories.  **See our recommended style guide for writing documentation below.**
3. Where possible, we recommend keeping quickstart documentation on a single index.rst page.  If needed, a 'step2.rst' page is included and you can copy as needed. Either way, update the table of contents included in 'index.rst'. We will have **only one tutorial or quick start per repo.**
4. Save your work as  *'index.rst'*
5. Edit the *'conf.py'* file to set the project and author information
6. Build the tutorial:

        $ make html
7. Your HTML site will be in the _build directory that has been created (you can preview this in your web browser at this time).
8. Commit your changes and push the tutorial back to GitHub.
9. Notify [Tutorials@CyVerse.org](mailto:Tutorials@CyVerse.org) that your tutorial is ready for inclusion in the main CyVerse documentation repo. We will review and verify the contribution, and add you as a maintainer repo in the CyVerse collection. You should make future edits following the instructions above for 'Fixing and/or improving documentation via GitHub.' Alternatively, you can host your tutorial independently on ReadTheDocs following their [instructions for importing documentation](https://docs.readthedocs.io/en/latest/getting_started.html#import-your-docs). We will also follow up about ensuring test data associated with the documentation are available and open.


### Step Two: Adding Content to the CyVerse Learning Center















## License for CyVerse Documentation

Unless otherwise specified, all CyVerse learning materials in our GitHub organization are licensed CC BY 4.0. 

You may:

Share—copy and redistribute the material in any medium or format
Adapt—remix, transform, and build upon the material
for any purpose, even commercially. The licensor cannot revoke these freedoms as long as you follow these license terms:

Attribution— You must give appropriate credit (mentioning that your work is derived from work that is Copyright (c) CyVerse and, where practical, linking to http://www.cyverse.org/), provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

No additional restrictions—You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits. With the understanding that:

You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.

No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material.
This license is superseded by and subject to any and all other polices of CyVerse as described at: http://www.cyverse.org/policies; CyVerse is based upon work supported by the National Science Foundation under Grant No. DBI-0735191 and DBI-1265383.

Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.

## How CyVerse Learning Center documentation is built

Each CyVerse Tutorial or Quickstart has its own [ReadtheDocs](https://readthedocs.org/) page which in turn is built from its own repo (See the template repos at [https://github.com/CyVerse-learning-materials](https://github.com/CyVerse-learning-materials)). Starting from a [ResStructured text file](http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html) (index.rst) The documentation is built using [Sphinx](http://www.sphinx-doc.org/en/1.4.8/), and hosted on a repo configured with GitHub [Webhooks/Services](http://docs.readthedocs.io/en/latest/webhooks.html). Finally, the site is added to ReadtheDocs. Directions for completing this workflow are below **(See Building a Tutorial from Scratch)**.