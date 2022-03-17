/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as K8sIoApiCoreV1Generated from "../../k8s.io/api/core/v1/generated.pb"
import * as fm from "../applications/fetch.pb"
export type ListNamespacesRequest = {
}

export type ListNamespacesResponse = {
  namespaces?: K8sIoApiCoreV1Generated.Namespace[]
}

export class Core {
  static ListNamespaces(req: ListNamespacesRequest, initReq?: fm.InitReq): Promise<ListNamespacesResponse> {
    return fm.fetchReq<ListNamespacesRequest, ListNamespacesResponse>(`/core.v1.Core/ListNamespaces`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
}