# Conclusion

In this tutorial, we have demonstrated some key features of CyVerse that
enable reproducible science at scale. Key functionality areas included:

**1) Data upload**: Data can be imported and uploaded to the CyVerse
Data Store. Our tutorial dataset and analyses total 80 GB of disk
space. CyVerse supports terabyte-scale datasets for active analysis
with appropriate justification and documentation.

**2) Data sharing**: These datasets can be shared with fine-grained
permissions to other CyVerse users (by username) nearly
instantaneously.

**3) Metadata**: Metadata can be applied to files (either following a
template, or by designing a spreadsheet of arbitrary attributes). Once
applied, these metadata can be used to search rapidly (via
elasticsearch). The Data Store documentation also details how metadata
can be directly edited in the Discovery Environment (or by command
line through the iCommands interface), and how filters and other
features can be used to automate the organization of your files.

**4) Reproducible analyses**: Software tools used in the Discovery
Environment are containerized (Docker) versions of open source
software, making it possible to select the desired versions of
software and reproduce previous analyses. The DE's analyses functions
keep detailed histories of analyses and parameters.

**5) Interactive analyses**: Through the DE's VICE platform,
interactive sessions such as RStudio and R Shiny are used to directly
interact with and analyze data.

**6) Computational capacity**: Although not directly highlighted, all
applications make use of the underlying CyVerse compute
infrastructure. Additionally, some applications in the DE catalog
directly make use of XSEDE supercomputing resources.

Taken together, these features provide a high level of functionality
that is tailor-made to support data-intensive research and
collaboration, all in one place.
