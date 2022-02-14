# Frequently Asked Questions

## Account Questions

### *How do I update my account information?*

CyVerse users should update their account information annually for continued access to services. To update, go to the , log in, and click the account icon in the upper right corner.

In addition to updating your email, institution, occupation, preferences and other information that may have changed, please add your ORCID ID, a unique identifier which can help you receive credit for your work. Get an ORCID here <https://orcid.org/register>.

By keeping your account information current, our funders can see the value of CyVerse to our community and we learn which of our services and platforms are most helpful to you.

# Data Store FAQ

## Managing data

### *What if I need more space (storage) in the Data Store*

Typically, every user has a 100GB allocation in the Data Store. You can request more space by completing an [Allocation Increase Form](https://user.cyverse.org/forms/2/overview).

------------------------------------------------------------------------

## Sharing data

### *How do I publish a large set of public data?*

If you need assistance transferring a large dataset to CyVerse, please contact CyVerse Support (<support@cyverse.org> or use the blue Intercom icon at the bottom right). For more information on our policies, see CyVerse's [Collaboration Policy](http://www.cyverse.org/collaboration-policy) and [Data Management Policy](http://www.cyverse.org/data-management-policy). For more information on using data at CyVerse, see the Learning Center documentation pages on working with data.

------------------------------------------------------------------------

### *What public datasets are in CyVerse?*

CyVerse provides web access to its public datasets. Because the CyVerse Data Store underlies all CyVerse services, the public datasets may also be accessed through the Discovery Environment, Atmosphere, the Science APIs and iCommands. For more information on using data at CyVerse, see the Learning Center documentation pages on working with data.

------------------------------------------------------------------------

### *How do I request a Community Released Data Folder?*

Community Released Data folders are available for evolving datasets that individuals or communities want to make available as quickly as possible for research and reuse, especially within CyVerse analysis platforms. Community Released Data folders are intended for datasets that are growing or changing frequently or that may not need long-term preservation.

Before you request a folder, please read this wiki article on [publishing data through the Data Commons](https://wiki.cyverse.org/wiki/display/DC/Publishing+Data+through+the+Data+Commons), and this one on [preparing community-released data folders](https://wiki.cyverse.org/wiki/display/DC/Preparing+Community+Released+Data+Folders).

Then, if you meet the criteria, you can request a folder using [this form](https://user.cyverse.org/forms/7/overview).

------------------------------------------------------------------------

### *How do I connect to a shared or public folder with CyberDuck?*

If you follow the default configuration for you will automatically be connected to your home directory (/iplant/home/\$your_user_name). However, you can also open a new connection to any directory to which you have access permission. This includes folders that other users have shared with you, or public folder, such as those under /iplant/home/shared.

To do this read the instructions below:

**Open a connection to a public folder**

 1.  Open CyberDuck

 2.  If the browser is not already open, select File - New Browser

 3.  

     Create a new connection by clicking on the + in the lower right

     :   (next to the pencil and minus sign)

 4.  In the top dropdown menu, select iPlant Data Store

 5.  

     In the dialog box, name your connection something relevant, like the name

     :   of the folder you want to browse to

 6.  

     Enter your user name in the appropriate field. If you are connecting to

     :   public folder, you can also enter anonymous in this field

 7.  In the Path field, enter /iplant/home/shared, or some
     subdirectory.

 8.  

     Close the dialog window. Now, in your list of connections, you should see

     :   

         a new connection with the name you chose. Click on that, and you should go

         :   directly to the public folder.

Once you are connected to /iplant/home/shared, you can browse down to
any sub-directory.

> ::: warning
> ::: title
> Warning
> :::
>
> DO NOT try to browse up to /iplant/home/ because it contains \>50,000 folders
>
> :   (one for each CyVerse user) and it will hang up.
> :::

**Open a connection to a private folder that is shared with you**

Follow the same steps as above, except in step 7, enter the path to the
folder that was shared with you. For example, if user "janedoe" shares
a folder called "data" with you, enter
[/iplant/home/janedoe/data]{.title-ref} in the Path field. You cannot
connect as anonymous in this case, and must supply your own user name.
See also: documentation.
:::

------------------------------------------------------------------------

### *How do I make a folder public with iCommands?*

Although you can share files and folders in the DE and create public
links, you must use iCommands make them visible to everyone. Permissions
are set in iCommands by using ichmod
(<https://docs.irods.org/4.2.1/icommands/user/#ichmod>).

To make a folder public, you give read permission to two users:
'public' (anyone signed in with a CyVerse account) and 'anonymous'
(anyone on the web -no sign in required).

To recursively make a shared folder called 'myfolder' public, use the
instructions below

``` bash
ichmod -r read public /iplant/home/shared/myfolder
ichmod -r read anonymous /iplant/home/shared/myfolder
```

To remove public access to the folder, use:

``` bash
ichmod -r null public /iplant/home/shared/myfolder
ichmod -r null anonymous /iplant/home/shared/myfolder
```
