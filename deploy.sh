#!/bin/bash

echo "$KUBE_CA_CERT" | base64 --decode > cert.crt
echo "APP VERSION: $TRAVIS_BUILD_NUMBER"

sed -i "s/VERSION/${TRAVIS_BUILD_NUMBER}/g" kubernetes/k8s-application-deployment.yml
cat kubernetes/k8s-application-deployment.yml

/usr/local/bin/kubectl \
  --kubeconfig=/dev/null \
  --server=$KUBE_ENDPOINT \
  --certificate-authority=cert.crt \
  --token=$KUBE_TOKEN \
  apply -f kubernetes/k8s-application-deployment.yml

/usr/local/bin/kubectl \
  --kubeconfig=/dev/null \
  --server=$KUBE_ENDPOINT \
  --certificate-authority=cert.crt \
  --token=$KUBE_TOKEN \
  set image deployment/risk-management risk-management=$DOCKER_USER/risk-management:${TRAVIS_BUILD_NUMBER} --record

echo "The deploy is Ready"