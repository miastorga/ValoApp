export interface Weather {
  status: number;
  data: MatchData;
}
export interface MatchData {
  metadata: Metadata;
  players: Players;
  observers?: (null)[] | null;
  coaches?: (null)[] | null;
  teams: Teams;
  rounds?: (RoundsEntity)[] | null;
  kills?: (KillsEntity)[] | null;
}
export interface Metadata {
  map: string;
  game_version: string;
  game_length: number;
  game_start: number;
  game_start_patched: string;
  rounds_played: number;
  mode: string;
  mode_id: string;
  queue: string;
  season_id: string;
  platform: string;
  matchid: string;
  premier_info: PremierInfo;
  region: string | null;
  cluster: string;
}
export interface PremierInfo {
  tournament_id: string | null;
  matchup_id: string | null;
}
export interface Players {
  all_players?: (AllPlayersEntityOrRedEntityOrBlueEntity)[] | null;
  red?: (AllPlayersEntityOrRedEntityOrBlueEntity)[] | null;
  blue?: (AllPlayersEntityOrRedEntityOrBlueEntity)[] | null;
}
export interface AllPlayersEntityOrRedEntityOrBlueEntity {
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
  behavior: Behavior;
  platform: Platform;
  ability_casts: AbilityCasts;
  assets: Assets;
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
export interface Behavior {
  afk_rounds: number;
  friendly_fire: FriendlyFire;
  rounds_in_spawn: number;
}
export interface FriendlyFire {
  incoming: number;
  outgoing: number;
}
export interface Platform {
  type: string;
  os: Os;
}
export interface Os {
  name: string;
  version: string;
}
export interface AbilityCasts {
  c_cast: number;
  q_cast: number;
  e_cast: number;
  x_cast: number;
}
export interface Assets {
  card: Card;
  agent: Agent;
}
export interface Card {
  small: string;
  large: string;
  wide: string;
}
export interface Agent {
  small: string;
  bust: string;
  full: string;
  killfeed: string;
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
  spent: SpentOrLoadoutValue;
  loadout_value: SpentOrLoadoutValue;
}
export interface SpentOrLoadoutValue {
  overall: number;
  average: number;
}
export interface Teams {
  red: RedOrBlue;
  blue: RedOrBlue;
}
export interface RedOrBlue {
  has_won: boolean;
  rounds_won: number;
  rounds_lost: number;
  roster?: null;
}
export interface RoundsEntity {
  winning_team: string;
  end_type: string;
  bomb_planted: boolean;
  bomb_defused: boolean;
  plant_events: PlantEvents;
  defuse_events: DefuseEvents;
  player_stats?: (PlayerStatsEntity)[] | null;
}
export interface PlantEvents {
  plant_location?: PlantLocationOrVictimDeathLocationOrDefuseLocation | null;
  planted_by?: PlantedByOrDefusedBy | null;
  plant_site?: string | null;
  plant_time_in_round?: number | null;
  player_locations_on_plant?: (null)[] | null;
}
export interface PlantLocationOrVictimDeathLocationOrDefuseLocation {
  x: number;
  y: number;
}
export interface PlantedByOrDefusedBy {
  puuid: string;
  display_name: string;
  team: string;
}
export interface DefuseEvents {
  defuse_location?: PlantLocationOrVictimDeathLocationOrDefuseLocation1 | null;
  defused_by?: PlantedByOrDefusedBy1 | null;
  defuse_time_in_round?: number | null;
  player_locations_on_defuse?: (null)[] | null;
}
export interface PlantLocationOrVictimDeathLocationOrDefuseLocation1 {
  x: number;
  y: number;
}
export interface PlantedByOrDefusedBy1 {
  puuid: string;
  display_name: string;
  team: string;
}
export interface PlayerStatsEntity {
  ability_casts: AbilityCasts1;
  player_puuid: string;
  player_display_name: string;
  player_team: string;
  damage_events?: (DamageEventsEntity | null)[] | null;
  damage: number;
  bodyshots: number;
  headshots: number;
  legshots: number;
  kill_events?: (KillEventsEntity | null)[] | null;
  kills: number;
  score: number;
  economy: Economy1;
  was_afk: boolean;
  was_penalized: boolean;
  stayed_in_spawn: boolean;
}
export interface AbilityCasts1 {
  c_casts?: null;
  q_casts?: null;
  e_cast?: null;
  x_cast?: null;
}
export interface DamageEventsEntity {
  receiver_puuid: string;
  receiver_display_name: string;
  receiver_team: string;
  bodyshots: number;
  damage: number;
  headshots: number;
  legshots: number;
}
export interface KillEventsEntity {
  kill_time_in_round: number;
  kill_time_in_match: number;
  killer_puuid: string;
  killer_display_name: string;
  killer_team: string;
  victim_puuid: string;
  victim_display_name: string;
  victim_team: string;
  victim_death_location: PlantLocationOrVictimDeathLocationOrDefuseLocation2;
  damage_weapon_id: string;
  damage_weapon_name?: string | null;
  damage_weapon_assets: DamageWeaponAssets;
  secondary_fire_mode: boolean;
  player_locations_on_kill?: (null)[] | null;
  assistants?: (AssistantsEntity | null)[] | null;
}
export interface PlantLocationOrVictimDeathLocationOrDefuseLocation2 {
  x: number;
  y: number;
}
export interface DamageWeaponAssets {
  display_icon?: string | null;
  killfeed_icon?: string | null;
}
export interface AssistantsEntity {
  assistant_puuid: string;
  assistant_display_name: string;
  assistant_team: string;
}
export interface Economy1 {
  loadout_value: number;
  weapon: Weapon;
  armor: Armor;
  remaining: number;
  spent: number;
}
export interface Weapon {
  id: string;
  name: string;
  assets: AssetsOrDamageWeaponAssets;
}
export interface AssetsOrDamageWeaponAssets {
  display_icon: string;
  killfeed_icon: string;
}
export interface Armor {
  id?: string | null;
  name?: string | null;
  assets: Assets1;
}
export interface Assets1 {
  display_icon?: string | null;
}
export interface KillsEntity {
  kill_time_in_round: number;
  kill_time_in_match: number;
  round: number;
  killer_puuid: string;
  killer_display_name: string;
  killer_team: string;
  victim_puuid: string;
  victim_display_name: string;
  victim_team: string;
  victim_death_location: PlantLocationOrVictimDeathLocationOrDefuseLocation2;
  damage_weapon_id: string;
  damage_weapon_name?: string | null;
  damage_weapon_assets: DamageWeaponAssets;
  secondary_fire_mode: boolean;
  player_locations_on_kill?: (null)[] | null;
  assistants?: (AssistantsEntity1 | null)[] | null;
}
export interface AssistantsEntity1 {
  assistant_puuid: string;
  assistant_display_name: string;
  assistant_team: string;
}
