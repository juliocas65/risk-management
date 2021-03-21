# Risk Management



### Kubernetes Steps

eksctl create iamserviceaccount \
  --cluster=juliocas \
  --namespace=kube-system \
  --name=aws-load-balancer-controller \
  --attach-policy-arn=arn:aws:iam::AKIAZSSALG23KVQST3ED:policy/AWSLoadBalancerControllerIAMPolicy \
  --override-existing-serviceaccounts \
  --approve

  aws eks describe-cluster --name juliocas --query "cluster.identity.oidc.issuer" --output text

  https://oidc.eks.us-east-1.amazonaws.com/id/6733198BF3330A73AA0C6CB9DF49A2D2

  aws iam list-open-id-connect-providers | grep 6733198BF3330A73AA0C6CB9DF49A2D2

  "Arn": "arn:aws:iam::658338690742:oidc-provider/oidc.eks.us-east-1.amazonaws.com/id/6733198BF3330A73AA0C6CB9DF49A2D2"

  eksctl-juliocas-cluster

  aws iam attach-role-policy \
  --role-name eksctl-juliocas-cluster-ServiceRole-1N2UQOJHFSIGR\
  --policy-arn arn:aws:iam::658338690742:policy/AWSLoadBalancerControllerAdditionalIAMPolicy

  eksctl create fargateprofile --cluster juliocas --region us-east-1 --name <alb-sample-app> --namespace game-2048


  kubectl get deployment -n kube-system aws-load-balancer-controller -oyaml |grep "juliocas"


  export KUBE_CA_CERT=$(kubectl config view --flatten --output=json | jq --raw-output '.clusters[1] .cluster ["certificate-authority-data"]')
  export KUBE_ENDPOINT=$(kubectl config view --flatten --output=json | jq --raw-output '.clusters[1] .cluster ["server"]')
  export KUBE_ADMIN_CERT=$(kubectl config view --flatten --output=json | jq --raw-output '.users[1] .user ["client-certificate-data"]')
  export KUBE_ADMIN_KEY=$(kubectl config view --flatten --output=json | jq --raw-output '.users[1] .user ["client-key-data"]')
  export KUBE_USERNAME=$(kubectl config view --flatten --output=json | jq --raw-output '.users[1] .user ["username"]')