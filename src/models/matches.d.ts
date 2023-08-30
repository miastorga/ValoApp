export interface MatchesResponse {
  status: number;
  data: GameData[];
}

export type GameData = {
  metadata: Metadata;
  players: Players;
  observers?: any[]; // Use appropriate type if available
  coaches?: any[];  // Use appropriate type if available
  teams: Teams;
  rounds: Round[];
  kills?: any[];  // Use appropriate type if available
};
// metadata

export interface Metadata {
  map: Map;
  game_version: string;
  game_length: number;
  game_start: number;
  game_start_patched: string;
  rounds_played: number;
  mode: Mode;
  mode_id: ModeID;
  queue: string;
  season_id: string;
  platform: string;
  matchid: string;
  premier_info: PremierInfo;
  region: Region;
  cluster: string;
}

export type Map = "Ascent" | "Split" | "Fracture" | "Bind" | "Breeze" | "District" | "Kasbah" | "Piazza" | "Lotus" | "Pearl" | "Icebox" | "Haven";

export type Mode = "Competitive" | "Custom Game" | "Deathmatch" | "Escalation" | "Team Deathmatch" | "New Map" | "Replication" | "Snowball Fight" | "Spike Rush" | "Swiftplay" | "Unrated";

export type ModeID = "competitive" | "custom" | "deathmatch" | "ggteam" | "hurm" | "newmap" | "onefa" | "snowball" | "spikerush" | "swiftplay" | "unrated";

export type Region = "eu" | "na" | "ap" | "kr";

export interface PremierInfo {
  tournament_id?: string;  // nullable
  matchup_id?: string;    // nullable
}

// players
export type Players = {
  all_players: Player[],
  red: Player[],
  blue: Player[]
};

export interface Player {
  puuid: string;
  name: string;
  tag: string;
  team: string;
  level: number;
  character: string;
  currenttier: number;
  currenttier_patched: string;
  player_card: string;
  player_title: string;
  party_id: string;
  session_playtime: SessionPlaytime;
  assets: Assets;
  behaviour?: Behaviour;
  platform: Platform;
  ability_casts: AbilityCasts;
  stats: Stats;
  economy: Economy;
  damage_made: number;
  damage_received: number;
}
export interface SessionPlaytime {
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export interface CardAssets {
  small: string;
  large: string;
  wide: string;
}

export interface AgentAssets {
  small: string;
  full: string;
  bust: string;
  killfeed: string;
}

export interface Assets {
  card: CardAssets;
  agent: AgentAssets;
}

export interface Behaviour {
  afk_rounds: number;
  friendly_fire: {
    incoming: number;
    outgoing: number;
  };
  rounds_in_spawn: number;
}

export interface Platform {
  type: string;
  os: {
    name: string;
    version: string;
  };
}

export interface AbilityCasts {
  c_cast?: number | null;
  q_cast?: number | null;
  e_cast?: number | null;
  x_cast?: number | null;
}

export interface Stats {
  score: number;
  kills: number;
  deaths: number;
  assists: number;
  bodyshots: number;
  headshots: number;
  legshots: number;
}

export interface Economy {
  spent: {
    overall: number;
    average: number;
  };
  loadout_value: {
    overall: number;
    average: number;
  };
  weapon?: Weapon;
  armor?: Armor;
  remaining?: number;
}
export type PlayersList = Player[];

// teams
export type Teams = {
  red: Team
  blue: Team
}

export interface Customization {
  icon: string;
  image: string;
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface Roaster {
  members: string[];
  name: string;
  tag: string;
  customization: Customization;
}

export interface Team {
  has_won?: boolean; // Nullable, por lo que es opcional.
  rounds_won?: number; // Nullable, por lo que es opcional.
  rounds_lost?: number; // Nullable, por lo que es opcional.
  roaster?: Roaster | null; // Nullable, por lo que puede ser el tipo Roaster o null.
}

//rounds
export const rounds: Round[] = [];
export interface Coordinate {
  x: number;
  y: number;
}

export interface PlayerActionDetails {
  puuid: string;
  display_name: string;
  team: string;
}

export interface PlantEvents {
  plant_location?: Coordinate;
  planted_by?: PlayerActionDetails;
  plant_site?: string;
  plant_time_in_round?: number;
  player_locations_on_plant?: PlayerLocation[];
}

export interface PlayerLocation {
  player_puuid: string;
  player_display_name: string;
  player_team: string;
  location: Coordinate;
  view_radians: number;
}

export interface DefuseEvents {
  defuse_location?: Coordinate;
  defused_by?: PlayerActionDetails;
  defuse_time_in_round?: number;
  player_locations_on_defuse?: PlayerLocation[];
}

export interface AbilityCastsDetails {
  c_casts: any;
  q_casts: any;
  e_casts: any;
  x_casts: any;
}

export interface DamageEvent {
  receiver_puuid: string;
  receiver_display_name: string;
  receiver_team: string;
  bodyshots: number;
  damage: number;
  headshots: number;
  legshots: number;
}

export interface WeaponAssets {
  display_icon: string;
  killfeed_icon: string;
}

export interface Weapon {
  id: string;
  name: string;
  assets: WeaponAssets;
}

export interface Armor {
  id: string;
  name: string;
  assets: WeaponAssets;
}

export interface Economy {
  loadout_value: number;
  weapon: Weapon;
  armor: Armor;
  remaining: number;
  spent: number;
}

export interface KillEvent {
  kill_time_in_round: number;
  kill_time_in_match: number;
  killer_puuid: string;
  killer_display_name: string;
  killer_team: string;
  victim_puuid: string;
  victim_display_name: string;
  victim_team: string;
  victim_death_location: Coordinate;
  damage_weapon_id: string;
  damage_weapon_name: string;
  damage_weapon_assets: WeaponAssets;
  secondary_fire_mode: boolean;
  player_locations_on_kill: PlayerLocation[];
  assistants: PlayerActionDetails[];
}

export interface PlayerStat {
  ability_casts: AbilityCastsDetails;
  player_puuid: string;
  player_display_name: string;
  player_team: string;
  damage_events: DamageEvent[];
  damage: number;
  bodyshots: number;
  headshots: number;
  legshots: number;
  kill_events: KillEvent[];
  kills: number;
  score: number;
  economy: Economy;
  was_afk: boolean;
  was_penalized: boolean;
  stayed_in_spawn: boolean;
}

export interface Round {
  winning_team: string;
  end_type: string;
  bomb_planted?: boolean;
  bomb_defused?: boolean;
  plant_events?: PlantEvents;
  defuse_events?: DefuseEvents;
  player_stats: PlayerStat[];
}


