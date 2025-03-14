# Cloud Services

CyVerse offers two types of cloud service:

- Cloud Automation & Continuous Analysis Orchestration via ![](../assets/atmosphere/cacao.png){ width="20" } CACAO
- Event Driven Services via ![](../assets/de/icons/datawatchIcon.svg){ width="20"} DataWatch

CyVerse is partnered with [Jetstream 2](https://jetstream-cloud.org/){target=_blank} to develop its web interface, and to manage cloud-native applications such as Terraform, Argo Workflows, and Kubernetes.

Access to [Jetstream 2 login](https://use.jetstream-cloud.org/application){target=_blank} is managed through [ACCESS-CI](https://allocations.access-ci.org){target=_blank}.

[Documentation for CACAO on Jetstream 2 Cloud](https://docs.jetstream-cloud.org/ui/cacao/overview).

## Cloud Automation & Continuous Analysis Orchestration

[atmo]: ../assets/atmosphere/cacao-04.png
[cacao]: ../assets/atmosphere/cacao.png

CyVerse has built continuous frameworks for its own [![][atmo]{width=25}](https://atmo.cyverse.org){target=_blank} [Atmosphere](https://atmo.cyverse.org){target=_blank} cloud and for [Jetstream 2](https://jetstream-cloud.org){target=_blank}

[![][cacao]{width=30}](https://gitlab.com/cyverse/cacao/-/blob/master/README.md){target=_blank} [CACAO](https://gitlab.com/cyverse/cacao/-/blob/master/README.md){target=_blank} is a project enabling Continuous Analysis on Kubernetes clusters.

## [DataWatch](../cloud/datawatch.md)

[DataWatch](https://gitlab.com/cyverse/datawatch) is a service that is integrated with CyVerse DataStore, it will trigger actions (HTTP webhook, WebDAV, Email) based on files changes in iRODS(DataStore).
