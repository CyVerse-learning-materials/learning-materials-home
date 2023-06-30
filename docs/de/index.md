# Types of Analyses in the Discovery Environment 

## Contents

- [![de](../assets/de/logos/deIcon.svg){ width="25" } Logging into the Discovery Environment](../de/login.md)
- [![apps](../assets/de/menu_items/appsIcon.svg){ width="25" } Finding and Launching Apps](../de/using_apps.md)
- [![analysis](../assets/de/menu_items/analysisIcon.svg){ width="25" }  Managing your Analyses](../de/managing_analyses.md)
- [![vice](../assets/de/logos/deviceIcon.png){ width="25" } Interactive Analyses](../de/vice.md)
- [![bags](../assets/de/icons/bagIcon.svg){ width="25" }Sharing and Using Bags](../de/bags.md)

## About

Discovery Environment (DE) is an all-purpose data science work bench and fills several major modalities for research computing (Table 1). 

The DE can be used for individual research applications that require small to moderate amount of computing in an interactive environment. It can also be used for teaching workshops or classes, where students can each start their own instances with replicated container environments that ensure reproducibility. Last, the DE is connected to the [OpenScienceGrid (High Throughput Computing)](https://osg-htc.org/){target=_blank}, and the [Texas Advanced Computing Center (High Performance Computing)](https://www.tacc.utexas.edu/){target=_blank}, allowing users to launch large HTC and HPC applications with no command line experience.

**Table 1**: Types of research computing environments which the Discovery Environment helps manage for a user.

| Type of Analysis | Cores | RAM | Use Cases |
|------------------|-------|-----|-----------|
| Small | 1-16 | 2-64 GB | Suitable for smaller applications and services, teaching, and long running analyses |
| Moderate | 32-256 | 128 GB - 1 TB | Suitable for larger applications and services that require more resources than a typical laptop |
| High Performance Computing | 1 - 10s thousands | 2 GB to 10s TBs | Used for computationally intensive tasks, such as simulations, data analysis, etc |
| High Throughput Computing | 100s to 100s thousands | Varies | Primarily focused on the efficient execution of a large number of tasks. The emphasis is on high throughput rather than on the speed of any single task |
| Computing Clusters | Varies | Varies | Clusters (Kubernetes) providing Jupyter/Rstudio notebook service to many users |

Discovery Environment's graphical interface is tailored to the needs of researchers who analyze big data but who may also lack command line expertise or the compute resources to run their software tools and analyses at appropriate scale.

## Benefits

-   All data in [your own personal space](https://de.cyverse.org/data/ds/){target=_blank}, [Shared with you](https://de.cyverse.org/data/ds/iplant/home?selectedOrder=asc&selectedOrderBy=name&selectedPage=0&selectedRowsPerPage=100){target=_blank}, and public [Community Released](https://de.cyverse.org/data/ds/iplant/home/shared?selectedOrder=asc&selectedOrderBy=name&selectedPage=0&selectedRowsPerPage=100){target=_blank} or [Published (Curated)](https://de.cyverse.org/data/ds/iplant/home/shared/commons_repo/curated?selectedOrder=asc&selectedOrderBy=name&selectedPage=0&selectedRowsPerPage=100){target=_blank} ) stored in CyVerse's cloud-based ![data](../assets/de/menu_items/dataIcon.svg){ width="25" } Data Store and are accessible in the Discovery Environment. See more info about [Data in CyVerse](../manage_data){target=_blank}

- Internet accessible data can be downloaded / streamed into running analyses.
  
-   All analyses run on CyVerse's Cloud based Kubernetes Cluster enabling you to run analyses that are small (1-16 cores, 2 - 64 GB RAM) to moderate (16-128 cores, 128 GB - 1 TB RAM), and beyond on High Performance Computing and High Throughput Computing resources.

-   For most tasks (e.g., launching an app or importing data from a URL) you can log out or navigate to another page or operation after you start the task; an automated email notification is sent to you when the task is completed.

[de]: ../assets/de/logos/deIcon.svg
[home]: ../assets/de/menu_items/homeIcon.svg
[data]: ../assets/de/menu_items/dataIcon.svg
[apps]: ../assets/de/menu_items/appsIcon.svg
[analyses]: ../assets/de/menu_items/analysisIcon.svg
[vice]: ../assets/de/logos/deviceIcon.png

