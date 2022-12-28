# Author

Claude NGASSA

# Part 7 Deployment using istio

### Prerequisites

a. Instructions about istio download and installation - https://istio.io/docs/setup/getting-started/

b. Refer to the [Kubernetes instalation for additionals features](https://github.com/eptec-lab/DEVOPS_FINAL/tree/main/k8s#1-installation-of-minikube-kubectl)



## Installation and run

Deploy userapi app:

```bash
kubectl apply -f deployment.yaml
```

To check if the application is running run the following command:

```bash
kubectl get services
```

and

```bash
kubectl get pods
```

Re-run the previous command and wait until all pods report **READY 2/2** and STATUS **Running** before you go to the next step. This might take a few minutes depending on your platform.

### Open the application to outside traffic

To open the application to outside traffic we need to execute the following command:

1. To add the port 3000 in the ingress gateway:

```bash
istioctl install -f allow-port-3000.yaml
```

2. To add all the destinations rules:

```bash
kubectl apply -f destination-rule-all.yaml
```

3. To create the gateway to allow to access to our app from outside traffic:

```bash
kubectl apply -f gateway.yaml
```

4. Check if everything is ok with the command:

```bash
istioctl analyze
```

5. Then to get a variable which print the url to access to the app:

```bash
export INGRESS_HOST=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
export INGRESS_PORT=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.spec.ports[?(@.name=="http-custom-1")].port}')
export GATEWAY_URL=$INGRESS_HOST:$INGRESS_PORT
echo "http://$GATEWAY_URL/"
```

Then you can access to a web server in your browser with the url print which is by default the version 1.0 of it.


### Useful links for this part 

- [Cloud applications with Istio](https://github.com/adaltas/ece-devops-2022-fall/blob/main/modules/09.cloud-native/index.md#cloud-native-applications-microservice-architecture--with-istio)
- [What can you do with Istio](https://github.com/adaltas/ece-devops-2022-fall/blob/main/modules/09.cloud-native/index.md#what-can-you-do-with-istio)


##### [Get back to the root README](https://github.com/eptec-lab/DEVOPS_FINAL#readme)