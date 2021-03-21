#!/bin/bash

echo "$KUBE_CA_CERT" | base64 --decode > cert.crt
echo "$KUBE_ENDPOINT"
echo "$KUBE_USERNAME"

/usr/local/bin/kubectl  --kubeconfig=/dev/null \
  --server=$KUBE_ENDPOINT \
  --certificate-authority=$KUBE_CA_CERT \
  --username=$KUBE_USERNAME \
  apply -f kubernetes/k8s-application-deployment.yml

echo "The deploy is Ready"