export interface AgentsResponse {
  status: number
  data: Agent[]
}
export type AgentResponse = {
  status: number,
  data: Agent
}

export interface Agent {
  uuid: string
  displayName: string
  description: string
  developerName: string
  characterTags: any
  displayIcon: string
  displayIconSmall: string
  bustPortrait: string
  fullPortrait: string
  fullPortraitV2: string
  killfeedPortrait: string
  background: string
  backgroundGradientColors: string[]
  assetPath: string
  isFullPortraitRightFacing: boolean
  isPlayableCharacter: boolean
  isAvailableForTest: boolean
  isBaseContent: boolean
  role: Role
  recruitmentData: any
  abilities: Ability[]
  voiceLine: VoiceLine
}

export interface Role {
  uuid: string
  displayName: string
  description: string
  displayIcon: string
  assetPath: string
}

export interface Ability {
  slot: string
  displayName: string
  description: string
  displayIcon: string
}

export interface VoiceLine {
  minDuration: number
  maxDuration: number
  mediaList: MediaList[]
}

export interface MediaList {
  id: number
  wwise: string
  wave: string
}

export type Error = {
  status: number
  error: string
}