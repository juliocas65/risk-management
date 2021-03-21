#!/bin/bash

echo "$KUBE_CA_CERT" | base64 --decode > cert.crt
echo "APP VERSION: $TRAVIS_BUILD_NUMBER"

sed -i "s/VERSION/${TRAVIS_BUILD_NUMBER}/g" kubernetes/k8s-application-deployment.yml
cat kubernetes/k8s-application-deployment.yml

echo "APP VERSION UPDATED: $TRAVIS_BUILD_NUMBER"

/usr/local/bin/kubectl \
  --kubeconfig=/dev/null \
  --server=$KUBE_ENDPOINT \
  --certificate-authority=cert.crt \
  --token=$KUBE_TOKEN \
  apply -f kubernetes/k8s-application-deployment.yml

echo "DEPLOYMENT APPLIED"

echo "DEPLOYMENT READY"