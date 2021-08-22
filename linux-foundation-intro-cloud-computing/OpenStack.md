# OpenStack

> Some information on openstack

- Earlier in this chapter, we have seen examples for consuming the services of different cloud providers to provision our infrastructure. What if we want to become a cloud provider and offer cloud computing services?

- With OpenStack, we can build a cloud computing platform for public and private clouds. OpenStack was started as a joint project between Rackspace and NASA in 2010. In 2012, a non-profit corporate entity, the OpenStack Foundation, was formed and it is managing it since then while it receives the support of more than 500 organizations. OpenStack is an open source software platform released under an Apache 2.0 License.

- In addition to providing an IaaS solution, OpenStack has evolved over time to provide other services, such as Database, Storage, and Networking.

## How the openstack runs?

- The modular nature of OpenStack allows users to design and implement components for specific features or functionality. OpenStack components provide APIs for accessing infrastructure resources by cloud end users. The major components of OpenStack are:

- Nova
  Compute service that implements scalable and on-demand access to compute resources, including bare metal, virtual machines, and containers.
- Ironic
  Bare metal provisioning service part of Hardware lifecycle services.
- Swift
  Object store part of Storage services provides a highly available, distributed, eventually consistent object/blob store.
- Cinder
  Block storage part of Storage services provides an abstraction layer over the management of block storage devices through a self-service API.
- Manila
  Shared filesystem part of Storage services, provides coordinated access to shared or distributed file systems.
- Neutron
  Networking service, a Software Defined Networking (SDN) delivering networking as a service (NaaS) in virtual compute environments.
- Octavia
  Load balancer part of Networking services delivers on-demand and horizontal scaling load balancing as a service (LBaaS) to fleets of VMs, containers, or bare-metal serves.
- Keystone
  Identity service part of Shared services, provides authentication, service discovery, and authorization. It supports LDAP, OAuth, OpenID Connect, SAML, and SQL.
- Glance
  Image service part of Shared services, provides VM image discovery, registration, and retrieval.
- Searchlight
  Indexing and search service part of Shared services, provides near real-time indexing and flexible search capability, including authentication and RBAC authorization for data protection.
- Heat
  Orchestration service provides orchestration of infrastructure resources for cloud applications that also supports autoscaling.
- Senlin
  Clustering service part of Orchestration services eases the orchestration of clusters of similar objects.
- Magnum
  Container orchestration engine provisioning service part of Workload provisioning services provisions Docker Swarm, Kubernetes or Apache Mesos to run on a cluster of VMs or bare-metal servers.
- Freezer
  Backup, Restore, and Disaster Recovery service part of Application lifecycle services, provides efficient and flexible block-based backups, file-based incremental backups, synchronized backups over multiple nodes, while it supports multiple OSes (Linux, Windows, Mac OS-X).
- Horizon
  Dashboard service part of Web frontend services provides an extensible web-based user interface to manage OpenStack services.
- Ceilometer
  Metering and data collection service part of Monitoring tools, provides efficient data collection, normalization, and transformation for telemetry purposes.
- Monasca
  Monitoring service part of Monitoring tools, provides highly-scalable, fault-tolerant monitoring as a service solution (MaaS), together with high-speed metrics processing, querying, alarm, and notification engines.
- Cloudkitty
  Billing and chargeback service part of Billing and Business logic services introduces rating as a service (RaaS) to convert rating metrics into service pricing.
- Tricircle
  Networking automation for multi-region deployments part of Multi-region tools, for high-availability, traffic isolation, and ISP redundancy across Neutron.
