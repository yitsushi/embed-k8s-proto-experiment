#!/usr/bin/env zsh


mkdir -p api/k8s.io/kubernetes/pkg/api/core/v1/
curl -L -o api/k8s.io/kubernetes/pkg/api/core/v1/generated.proto https://raw.githubusercontent.com/kubernetes/api/master/core/v1/generated.proto
