# Kubernetes Handbook

> A brief discussion on kubernetes

## Introduction to Container Orchestration

> Container orchestration is the process of automating the deployment, management, scaling and networking tasks of containers

## Kubernetes installation

- 2 ways kubernetes can be installed
- to have multiple nodes and for production environment developers use **`kubernetes`**
- to test kubernetes and to run in development environment developers use **`minikube`**

## Minikube installation

- to run with minikube we also need kubectl

- installation

  - to install kubectl go [here](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)
  - to install minikube go [here](https://minikube.sigs.k8s.io/docs/start/)

- to verify kubectl installation run **`kubectl version --client`**
- After installing minikube we need to install kubectl separately. 


## Kubernetes Architecture

- It has a master node and some worker nodes. 
- The number of worker nodes can be defined by us. 

### Master Node
  - **API server**:
      We communicate the server with **api** via the **kubectl**.
  - **etcd**:
      Act as a cluster datastore, it provides high available key value store for persisting cluster state. It will sync data for all the master nodes.
  - **Kube Controller Manager**: 
      It watches the state of the cluster through API server & does as necessary for keeping the cluster on desired state. 
        - It four component
          1. Node Controller
          2. Replication Controller
          3. Endpoints Controller 
          4. Service Account & Token controller
  - **Kube Cloud Manager**: 
      It is a k8s control panel which manages cloud-specific control logic.
  - **Kube Scheduler**:
      It schedules the newly created pods to nodes with enough space to satisfy the pods resources needs.

### Worker Node
  - **Kubelet**:
      It runs on every node and reports everything to the **api server**, it ensures the health & monitors the pods. It act as intermediate between **kube api server** & **CRI** ( container runtime interface ). It is a service not a pod.
  - **Kubeproxy**:
      Handles the network and available everywhere.
  - **CRI**:
      To launch the containers on the nodes it is used. It is mainly docker but k8s supports other services too.


## Deploy pods using yml file

- To run something with kubernetes we need to create pods for our application. 
- It means that on kubernetes our applications will be called pods instead of applications and will be run on specific docker images. 
- For this we need to make sure that we create docker images for our applications and push them to docker hub or any kind of container hubs. 
- We should always remember that k8s is a **container orchestration system** so whatever we do it should contain docker.

### To create the pods 
- We need to create a yml file containing the instruction for our pods. 
- Sample yml file
```yml
apiVersion: v1
kind: Pod
metadata:
  name: myFirstpod
  labels:
    app: flask
spec:
  containers:
    - name: myFirstpod
      image: mfsiat/devops-test
```
- **Make sure minikube or kubernetes is running**
- To create the pod run the below commands
```bash
kubectl create -f pods.yml
```
- To get the list of available pods
```bash
kubectl get pods
```
- To get the list of all pods
```bash
kubectl get pods -A
```

### Creating Replication

- Two way we can create replica set. 
  1 - replica controller 
  2 - replica set
- Difference is the **selector label**
- Replication is for creating a backup for the pods, because when a pod gets deleted than with the replication set instruction k8s should launch new pods. 
- To do this create a file name **replica.yml** and add the below instructions. 
```yml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: myfirstpod
  labels:
    app: flask
spec:
  template: 
    metadata:
      name: myfirstpod
      labels:
        app: flask
    spec:
      containers:
        - name: myfirstpod
          image: mfsiat/devops-test
  replicas: 3
  selector:
    matchLabels:
      app: flask
```
- Create the replica pods using the below command
```bash
kubectl create -f replica.yml
```
- Check the replica sets
```
kubectl get rs
```
- Check the pods 
```bash
kubectl get pods
```


### Creating Deployment configs

- There should be another config named deployment which will run as a production build and always keeps updated to prevent the rollout.
- Sample deployment yml config
```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myfirstpod
  labels:
    app: flask
spec:
  template: 
    metadata:
      name: myfirstpod
      labels:
        app: flask
    spec:
      containers:
        - name: myfirstpod
          image: mfsiat/devops-test
  replicas: 4
  selector:
    matchLabels:
      app: flask
```
## Common Kubernetes Errors

- **CrashLoopBackOff**: 
        It means that our pod starts, crashes and restarts again. To prevent this error make sure that the docker image that you have provided is valid and it is in good state.
