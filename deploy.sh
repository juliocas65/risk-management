#!/bin/bash

echo "$KUBE_CA_CERT" | base64 --decode > cert.crt
echo "$KUBE_ENDPOINT"
echo "$KUBE_USERNAME"
echo "$TRAVIS_BUILD_NUMBER"

/usr/local/bin/kubectl \
  --kubeconfig=/dev/null \
  --server=$KUBE_ENDPOINT \
  --certificate-authority=cert.crt \
  --token=$KUBE_TOKEN \
  apply -f kubernetes/k8s-application-deployment.yml

echo "The deploy is Ready"