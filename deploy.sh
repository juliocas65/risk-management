#!/bin/bash

echo "$KUBE_CA_CERT" | base64 --decode > cert.crt

/usr/local/bin/kubectl \
  --kubeconfig=/dev/null \
  --server=$KUBE_ENDPOINT \
  --certificate-authority=cert.crt \
  --insecure-skip-tls-verify \
  apply -f ./kubernetes/k8s-application-deployment.yml

echo "The deploy is Ready"