import { AgentsResponse, AgentResponse } from '../models/agents.d'
import useSWR from 'swr'

type ApiResponse = {
  agents: AgentsResponse | undefined
  isLoading: boolean
}

type AgentResponseApi = {
  agent: AgentResponse | undefined
  isLoading: boolean
}

const AGENTS = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true'
const AGENT = 'https://valorant-api.com/v1/agents'

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function getAgents(): ApiResponse {
  const { data: agents, isLoading } = useSWR<AgentsResponse>(AGENTS, fetcher);
  console.log(agents, isLoading)
  return { agents, isLoading }
}

export function getAgent(uuid: string | undefined): AgentResponseApi {
  const { data: agent, isLoading } = useSWR<AgentResponse>(`${AGENT}/${uuid}`, fetcher);
  console.log(agent, isLoading)
  return {
    agent, isLoading
  }
}