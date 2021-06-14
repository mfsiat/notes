# Virtualization

- Virtualization can be achieved at different hardware and software layers, such as the Central Processing Unit (CPU), storage (disk), memory (RAM), filesystems, etc. In this chapter, we will explore a few tools that allow us to create Virtual Machines (VMs) after emulating essential hardware components that support the installation of a guest Operating System (OS) on them. A VM represents an isolated collection of emulated resources, behaving like an actual physical system.

- Virtual Machines are created with the help of a hypervisor, that runs on a host machine. The hypervisor is a piece of software capable of creating multiple isolated virtual operating environments, each composed of emulated resources that are then made available to guest systems. Hypervisors are classified into two main categories:

  - Type-1 hypervisor (native or bare-metal) runs directly on top of a physical host machine's hardware, without the need for a host OS. Typically, they are found in enterprise settings. Examples of type-1 hypervisors:

        - IBM z/VM
        - Microsoft Hyper-V
        - Nutanix AHV
        - Oracle VM Server for SPARC
        - Oracle VM Server for x86
        - VMware ESXi
        - AWS Nitro
        - Xen.

  - Type-2 hypervisor (hosted) runs on top of the host's OS. Typically, they are for end-users, but they may be found in enterprise settings as well. Examples of type-2 hypervisors:

        - VirtualBox
        - VMware Player
        - VMware Workstation
        - Parallels Desktop for Mac.

  - And then there are the exceptions - hypervisors matching both categories, which can be listed redundantly under hypervisors of both type-1 and type-2. They are Linux kernel modules that act as both type-1 and type-2 hypervisors at the same time. Examples are:

        - KVM
        - bhyve.

  - Hypervisors enable the virtualization of computer hardware such as CPU, disk, network, RAM, etc., and allow the installation of guest VMs on top of them. We can create multiple guest VMs with different Operating Systems on a single hypervisor. For example, we can use a native Linux machine as a host, running on bare-metal, and after setting up a type-2 hypervisor we can create multiple guest machines with different OSes, commonly Linux and Windows.

  - Hardware virtualization is supported by most modern CPUs, and it is the feature that allows hypervisors to virtualize the physical hardware of a host system, thus sharing the host system's processing resources with multiple guest systems in a safe and efficient manner. In addition, most modern CPUs also support nested virtualization, which allows us to have VMs inside a VM.
