# Using Apps in the Discovery Environment

[de]: ../assets/de/logos/deIcon.svg
[apps]: ../assets/de/menu_items/appsIcon.svg
[vice]: ../assets/de/logos/deviceIcon.svg

You can select from several hundred applications (Apps) available in the [![de]{width="25"} Discovery Environment](https://de.cyverse.org){target=_blank} when you are ready to analyze your data.

!!! tip "When launching [![apps]{width="10"} Apps](https://de.cyverse.org/apps){target=_blank}, you can log out or navigate to another page or operation after you start the task; an automated email notification is sent to you when those tasks are completed"

## Browsing Apps in the Discovery Environment

You must be logged in to browse and use apps.

1. Click in the left sidebar of the DE to see the [![apps]{width="25"} Apps](https://de.cyverse.org/apps){target=_blank} view. When you first access the Apps view, you may be prompted to log in. After logging in, you will see a screen that looks something like this:

<figure markdown>
![](../assets/de/de_apps_screen.png){ width="600" }
<figcaption>The Apps page.</figcaption>
</figure>

## Sorting and Filtering Apps in the Discovery Environment

To sort the list of apps in ascending or descending order by app name, the name of the person who integrated the app, or its average rating, click on the column headings. 

You can navigate between pages and change how many apps are listed on a page by using the < or > controls at the bottom of the page.

By default, the Apps view displays "**Featured Apps**" which are interactive.

All "**Public Apps**" are available to you. 

With hundreds of apps and sometimes many versions of an app in the DE, you may want to view a subset of all available apps. There are two ways to do this. 

First, in the upper left corner of the [![apps]{width="25"} Apps](https://de.cyverse.org/apps){target=_blank} view, the currently active subset of apps is shown as the primary filter. 

Click the drop-down arrow next to the currently active subset to select a different apps subset to display:

The currently selected app subset is highlighted in gray. The available app subsets are:

| Application type | Description |
|------------------|-------------|
| Apps under development | Apps that you have added to the DE that have not been made public |
| Favorite apps | Apps that you have marked as favorite apps in the DE |
| My public apps | Apps that you have added to the DE that have been made publicly available |
| Shared with me | Apps that other users have shared with you |
| High-Performance Computing | Apps that run at the Texas Advanced Computing Center using the Tapis API |
| Browse All Apps | All apps available to you in the DE |

You can further reduce the list of the apps displayed by selecting a filter. 

Click the drop-down arrow in the Filter control (upper right corner of the Apps view) to select the type of apps you'd like to see in the listing:

The currently selected filter is displayed in the Filter control itself.

If no filter is selected, the control will be empty. The currently available app filters are:

| Application filter | Description |
|--------------------|-------------|
| HPC | High Performance Computing apps that run using the Tapis API |
| DE | Executable (non-interactive apps) that run on CyVerse computing resources |
| VICE | Interactive development environments (e.g., Jupyter, RStudio, R Shiny) and other apps with their own interactive interfaces |
| Open Science Grid (OSG) | Executable (non-interactive apps) that run on OSG resources |

The app filter you selected will be displayed in the Filter control.

## Viewing App Details in the Discovery Environment

When you've found an app of interest, select it by clicking the checkbox to the left of the app name. 

A *Details* button will appear in the upper right corner of the Apps view, just to the right of the Filter control.

Click the Details button to see additional information about the app (e.g., description, number of times run, etc.).

The Details panel has several controls available. 

Click the Heart icon to add that app to your list of favorite apps (to remove from your favorite list, click the heart again). 

The heart will be solid blue if the app is already on your list of favorites. 

Click the Link icon to display a link to the app that you can copy and share with other CyVerse users. 

The Stars icon labeled `Your rating` allows you to rate the app. 

The `Tools used by this App` tab contains information about the underlying tools (steps) the app uses to perform an analysis. 

To dismiss the App Details view, click anywhere outside the panel.

??? tip "Create a Favorites list"

    Favorite your frequently used apps to make them easier and faster to find next time.

## About VICE Apps in the Discovery Environment

One type of app that you can filter for in the [![de]{width="25"} Discovery Environment](https://de.cyverse.org){target=_blank} are [![vice]{width="25"}](https://de.cyverse.org){target=_blank} (VICE stands for Visual Interactive Computing Environment). VICE apps are interactive apps that include a Graphical User Interface (GUI) or an Integrated Development Environment (IDE) such as Project Jupyter, RStudio, or remote desktops to the DE.

You must request special access and be approved to use VICE apps through the CyVerse User Portal .

## About HPC Apps in the Discovery Environment

Most CyVerse Discovery Environment (DE) applications that are listed in the High-Performance Computing (HPC) category,
as well as CyVerse applications which run through our [Agave API](http://agaveapi.co),
run at [TACC](https://www.tacc.utexas.edu) (the Texas Advanced Computing Center),
part of the [XSEDE](https://www.xsede.org) (Extreme Science and Engineering Discovery Environment) national supercomputing network.
Access to this powerful resource is made available to CyVerse users at no cost to the user through a grant from the National Science Foundation.

In order to fairly distribute this high-demand resource,
both XSEDE and TACC follow allocation policies that limit how long any single analysis can be run
(usually 24 or 48 hours, depending on the queue),
how many analyses a user can have running simultaneously,
and the total amount of computational time any one user can access over the course of a year.
Analyses (also known as jobs) submitted through the CyVerse DE run on XSEDE using the same queues as every other scientist in the country uses.
Thus, if there are many analyses or a few very large analyses in the queue,
the wait time for each analysis can be very long,
up to several days for certain applications.

### Understanding HPC queues

Queues on HPC systems are much like queues at the coffee shop:
the first analysis submitted is the first one to run.
However, to efficiently exploit resources,
HPC queues also have features similar to amusement parks that squeeze single riders in with larger groups.
On an HPC system, this consists of scheduling jobs that are shorter or that use fewer nodes into smaller blocks that can be placed in between longer jobs.
XSEDE supercomputing centers generally have more than one supercomputer,
and the supercomputers have multiple queues for different types of analyses
(e.g., serial, parallel, large memory).
Each center/computer/queue has its own rules and algorithms for ensuring fair and efficient allocation of resources.

Users or groups who have very large computational needs are likely to run into bottlenecks using standard CyVerse infrastructure.
We recommend that these users
[apply for their own XSEDE allocation](https://portal.xsede.org/allocation-policies),
which will allow them to run CyVerse tools and applications on XSEDE with fewer restrictions.
Users or groups with very large computational needs should first apply for a startup allocation and use it to benchmark their jobs,
thereby collecting data on efficiency of resource use which must be part of a full XSEDE allocation request.

Want to learn more about XSEDE?
Visit the [XSEDE Getting Started](https://portal.xsede.org/documentation-overview)
documentation or consider signing up for
[XSEDE online training](https://www.xsede.org/web/xup/online-training).

## Advanced Features in the Discovery Environment

The Discovery Environment also supports advanced features for apps such as integrating different types of apps into the DE, creating and running containers, and using Application Programming Interfaces (APIs) for programmatic backend access to CyVerse services. 

For how-to information on these features, see our [Developer Manuals](../dev/manuals.md), [Extending VICE Apps](vice/extend_apps.md), and our [Powered By](../home/powered_by.md) documentation.
