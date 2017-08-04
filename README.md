# CyVerse Materials Home

The repo is the homepage for CyVerse learning materials hosted by Read the Docs. 

## Goal of the Learning Center

The goal of the CyVerse Learning Center is to provide basic learning materials to help researchers, educators, and students effectively use CyVerse cyberinfrastructure. All documentation is a work-in-progress; even the best efforts will be incomplete, contain ambiguities, inaccuracies, and at some point, out of date. While we can't get everything perfect, we can make it easier for users to have the best possible versions of our documentation, and to contribute back by identifying errors and suggesting additional ways our documentation can improve. We also want to make it easy for users who are installing their own tools or who are using CyVerse in customized ways to contribute their documentation in a central place. 

## How CyVerse Learning Center documentation is built

Each CyVerse Tutorial or Quickstart has its own [ReadtheDocs](https://readthedocs.org/) page which in turn is built from its own repo (See the template repos at [https://github.com/CyVerse-learning-materials](https://github.com/CyVerse-learning-materials)). Starting from a [ResStructured text file](http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html) (index.rst) The documentation is built using [Sphinx](http://www.sphinx-doc.org/en/1.4.8/), and hosted on a repo configured with GitHub [Webhooks/Services](http://docs.readthedocs.io/en/latest/webhooks.html). Finally, the site is added to ReadtheDocs. Directions for completing this workflow are below **(See Building a Tutorial from Scratch)**.

## Maintained templates

We maintain the following templates. All documentation in the Learning Center should be derived from these. They can be adapted slightly, but documentation should strive to be consistently formatted. 

- **Tutorials**: Tutorials teach. Users should be able to follow an example dataset through the steps of a tutorial and gain understanding about what is happening along those steps. These are in-depth guides that usually address a scientific question by covering the major steps of a scientific workflow. A tutorial is ‘successful’ when a user is able to follow the tutorial a second time with their own data and obtain reasonable results.
    - URL: https://github.com/CyVerse-learning-materials/cyverse_tutorial_template
- **Platform Guide**: A Platform Guide is a slightly modified form of tutorial that covers an entire platform or service
    - URL: https://github.com/CyVerse-learning-materials/cyverse_guide_template
- **Quick Starts**: These materials are short tutorials that cover the minimal amount of information needed to complete an operational task (e.g. uploading data, reformatting a file, etc. ); there is no significant explanation of the science or interpretation of results. QSs highlight available resources, answer common questions (derived from user forum), and refer users to the most appropriate materials.
    - URL: https://github.com/CyVerse-learning-materials/cyverse_quickstart_template

## Guide to Authorship

In this guide we will cover all of the steps needed to complete a CyVerse Tutorial or Quick Start. Some parts of this process can only be completed by CyVerse staff with access to our ReadtheDocs account. The entire guide is public and open to revision and comment. 

### Overview

The process from content creation to publication is as follows:

1. An author chooses a GitHub-based template (tutorial or quickstart) and edits that template to include the new content. 
2. The author requests for that content to become part of the CyVerse Learning Center. 
3. Upon review, the CyVerse Learning Center admins (LCA) review the content. The LCA will make any needed changes, or ask for revisions to submitted content including:
    - Ensuring proper formatting/style (Restructured Text)
    - Ensuring (where applicable) test data is available and public
    - Ensuring tutorial/quickstart steps execute as written
4. If accepted, the author will transfer ownership to the CyVerse Learning Materials GitHub organization (The author must agree to the CC BY4.0 License, and will be a maintainer with admin privileges on their submitted repository)
5. LCA will import repo to ReadTheDocs and add to listing on Learning Center Home.  

### Step One: Starting a new documentation piece from a template

All tutorials and quickstarts should start from one of our template repos:

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


#### Note: Adding example data to the CyVerse Data Commons

Wherever possible, example data should be made available in a public location on the CyVerse Data Commons. Example data should be placed in the [cyverse_training](http://datacommons.cyverse.org/browse/iplant/home/shared/cyverse_training) folder, in the appropriate directory. Every inputs and outputs for every step should be in numbered folders (e.g. 00_input ... 01_output). 


### Step Two: Adding Content to the CyVerse Learning Center

Once a content piece is ready the Learning Center Admin will take the following steps to make the content available through the learning center:

**A. Ensure Content Formatting and Style**

We want to ensure that all pages within the Learning Center conforms to the following guidelines. As you encounter a new situation, please suggest additions to these guidelines. Some guidelines are general, some platforms may have specific requirements. 

**Markup Language**

The final version of all documentation must be in **[ResStructured text](http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html)**. We currently (but maybe not permanently) will accept documentation in Markdown (Common Mark would be the best MD format to use http://commonmark.org/) but this requires lots of work to convert and check. 


**Learning Center Documentation Style Guide**

- Write instructions in short numbered steps. 
- Where possible limit step to one action; small final actions such as 'press submit' should be separated by a semicolon
- Limit the use of screenshots; where they are needed, use ReStructured text directives for [substitution of images](http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html#substitution-definitions) and label them in numbered order in the text (e.g. |image1|)
- Example data associated with documentation should be anonymously available on CyVerse Data Commons (Tutorials@cyverse.org can help you with this)
- Discovery Environment applications should be directly linked to documentation (clicking the 'info' button on any application will give you the 'App URL')
- Atmosphere images should be directly linked to documentation (e.g. "atmo.cyverse.org/application/images/####". 

*Specific examples*

|Instruction|Example|
|-----------|-------|
|Steps generally begin with a verb or preposition|<ul><li>Click on the button<li>Under the "Result" menu</ul>|
|Locations of files are given in absolute paths|<ul><li>/dir1/dir2/file.extension</ul>|
|Top-level menus in Discovery Environment Apps in double quotes|<ul><li>Under "Input" select...</ul>|
|Subheadings/steps in Discovery Environment Apps in single quotes|<ul><li>For 'sensitivity' enter...</ul>|
|Buttons and keywords in bold|<ul><li>Click on **Apps**<li>Select **Arabidopsis**<li>Set 'sensitivity' to **Medium**</ul>|

Where possible, these edits can be submitted as suggested pull requests to the Author so that they can check and approve of formatting. Issues may need to be opened to inquire about missing test data, etc. 

**B. Transfer Ownership of Repo**

We ask the documentation be transferred to the CyVerse Learning Materials organization so that all future updates may be made within the organization, and so that multiple people can maintain content. 

1. Follow the instructions for transferring ownership of a GitHub repo here: https://help.github.com/articles/transferring-a-repository-owned-by-your-personal-account/ 
2. Once the repo has been transferred, the author should be made a collaborator on the transferred repo. The author (assuming they are not on the CyVerse LC admin team) should retain push access so that they can update their materials - Thanks for your contribution!
3. The Contributors_maintainers.md file in the repo should be updated.
4. Extraneous files (e.g. the template README.md, and _build folders, or unused .rst templates) should be removed. 

**C. Add Repo to ReadTheDocs**

1. Login to readthedocs.com (make sure you are also logged into Github and have access to the CyVerse Learning Materials account)
2. On the dashboard, click on 'Import a Project'
3. Select the repo you wish to import and click the icon to import. 
    - You can accept all defaults on the project Details page
4. Click on the 'Build' button to see the status of the build (will take a min or so the first time). 
5. Once the build passes, click on 'View Docs' to verify that the documentation is rendered as you expected. 
6. Back on the organizational page (https://readthedocs.com/organizations/cyverse/), click on the project you added to adjust project settings. 
7. Click on Admin to access the administrative settings. 
8. On the side menu, under 'Advanced Settings', uncheck 'Enable PDF build' and 'Enable EPUB build'
9. Ensure 'Privacy Level' is set to 'Public'. 
10. On the side menu, under 'Versions', ensure 'latest' is checked and set to 'Public'. 
    - **Tip:** When the documentation is added, RTD also placed web hooks on the GitHub repo. When you make future commits in GitHub, the documentation will automatically update here (within a min or so). 

**D. Verify documentation formatting**

There are several things that need to be checked to ensure the documentation is consistent, and that placeholders are defaults have been properly edited. Here is a checklist:

1. Ensure documentation is appropriately named (Left-hand column should NOT be 'YOUR PROJECT NAME HERE...'
    - Fix: Edit project name in repos' conf.py file
2. CyVerse logo should hyperlink to Learning Center Home
3. The top and bottom of each page should have a 'home' icon and link to Learning Center Home
4. At bottom of page, link to 'Fix or improve documentation on Github' should be correctly linked. 
5. If your documentation has a table of contents, verify section headings. 

    >**Tip:** The best way to preview the documentation it to use the `make` command to preview how it should build on ReadTheDocs. This can save you several commits and rebuilds. At the terminal:
            
             
   >     $ make html
   > A `_build` directory will be created, and an `_/build/html/index.html` file will be created which you can view in a web browser. Delete the `_build` file before committing back to GitHub. 
   > Also **Indentation and spacing** matter a lot in ReStructured Text. If you have a formatting problem, start there. 
        


**E. Add documentation to Learning Center project as a sub project**

You will need to add imported documentation as a subproject to the learning-materials-home project and to the site code itself. Adding as a subproject makes that content searchable. 

1. Ensure your project is visible and passes build on https://readthedocs.com/dashboard/
2. Click on the project you wish to add to the homepage
3. Copy the url starting from /projects/_your_documentation_name/
4. Go back to the dashboard - https://readthedocs.com/dashboard/ and click on the learning-materials-home project
5. At the learning-materials-home (https://readthedocs.com/projects/cyverse-learning-materials-home/)
6. Click on the 'Admin' menu and then click on 'Subprojects'
7. In the 'Subproject' field, paste the path from step 3 (e.g. /projects/_your_documentation_name/); you can enter an alias that is the the '_your_documentation_name' string of your path. Click Submit. 
8. Your added subproject should now appear on the 'Sub Projects' menu on the right-hand side of the https://readthedocs.com/projects/cyverse-learning-materials-home/ page. 


**F. Add link to Learning Center Home**

You now need to edit the Learning Center homepage

1. Ensure you have a local copy (cloned from GitHub) of https://github.com/CyVerse-learning-materials/learning-materials-home
2. Edit the index.rst page to include a link to your project
    - Once you have made it a subproject, the link can be added as a relative path (e.g. /projects/_your_documentation_name/)
3. Commit and push your changes to GitHub. 
4. Verify that your link appears on http://learning.cyverse.org/en/latest/ and works properly. 

