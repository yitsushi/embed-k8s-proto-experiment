package main

import (
	"fmt"

	v1 "k8s.io/api/core/v1"

	pb "experiment/api/core"
)

func main() {
	ns := v1.Namespace{}
	ns.SetName("something")

	resp := pb.ListNamespacesResponse{
		Namespaces: []*v1.Namespace{
			&ns,
		},
	}

	fmt.Printf("%+v", resp)
}
