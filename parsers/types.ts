export type RealChangesetDate = CommonData &
  (
    | RealChangesetDataNodeCreate
    | RealChangesetDataNodeModify
    | RealChangesetDataNodeDelete
    | RealChangesetDataRelationCreate
    | RealChangesetDataRelationInRelation
    | RealChangesetDataRelationModify
    | RealChangesetDataWayCreate
    | RealChangesetDataWayDelete
    | RealChangesetDatawayModify
  )

type CommonData = {
  id: string
  version: string
  timestamp: string
  changeset: string
  uid: string
  user: string
  tags: Record<string, unknown>
}

type RealChangesetDataNodeCreate = {
  action: 'create'
  type: 'node'
  lat: string
  lon: string
}

type RealChangesetDataNodeModify = {
  old: OldDataNode
  action: 'modify'
  type: 'node'
  lat: string
  lon: string
}

type RealChangesetDataNodeDelete = {
  visible: 'false'
  old: OldDataNode
  action: 'delete'
  type: 'node'
}

type MemberNode = {
  lat: string
  lon: string
}

type Member = {
  ref: string
  role: string
} & (MemberTypeNode | MemberTypeWay | MemberTypeRelation)

type MemberTypeNode = {
  type: 'node'
  lat: string
  lon: string
  nodes: never[]
}
type MemberTypeWay = {
  type: 'way'
  nodes: MemberNode[]
}
type MemberTypeRelation = {
  type: 'relation'
  nodes: never[]
}

type RealChangesetDataRelationCreate = {
  action: 'create'
  type: 'relation'
  members: Member[]
}

type SharedOldData = {
  id: string
  version: string
  timestamp: string
  changeset: string
  uid: string
  user: string
  tags: Record<string, unknown>
}

type OldDataNode = SharedOldData & {
  action: 'delete' | 'modify'
  type: 'node'
  lat: string
  lon: string
}

type OldDataWay = SharedOldData & {
  action: 'delete' | 'modify'
  type: 'way'
  nodes: ChangesetNode[]
}

type OldDataRelation = SharedOldData & {
  action: 'modify'
  type: 'relation'
  members: Member[]
}

type OldDataRoute = {
  from: string
  to: string
  name: string
  operator: string
  'public_transport:version': string
  ref: string
  route: string
  type: 'route'
  tags: Record<string, unknown>
  members: Member[]
}

type RealChangesetDataRelationInRelation = {
  old: OldDataRelation
  action: 'modify'
  type: 'relation'
}

type RealChangesetDataRelationModify = {
  old: OldDataRoute
  action: 'modify'
  type: 'relation'
  members: Member[]
}

type ChangesetNode =
  | {
      ref: string
      lat: string
      lon: string
    }
  | {
      ref: string
    }

type RealChangesetDataWayCreate = {
  action: 'create'
  type: 'way'
  nodes: ChangesetNode[]
}

type RealChangesetDataWayDelete = {
  visible: 'false'
  old: OldDataWay
  action: 'delete'
  type: 'way'
  nodes: ChangesetNode[]
}

type RealChangesetDatawayModify = {
  old: OldDataWay
  action: 'modify'
  type: 'way'
  nodes: ChangesetNode[]
}
