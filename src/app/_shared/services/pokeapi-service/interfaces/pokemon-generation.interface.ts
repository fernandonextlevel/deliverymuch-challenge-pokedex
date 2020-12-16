export interface PokemonGenerationsResponse {
    count: number
    next: null
    previous: null
    results: PokemonGenerationRef[]
}

export interface PokemonGenerationRef {
    name: string,
    url: string
}

export interface PokemonGenerationMenuItem {
    name: string,
    url: string
}

export interface PokemonGeneration {
    id: number,
    name: string,
    abilities: GenerationAbility[],
    main_region: GenerationMainRegion,
    moves: GenerationMove[],
    names: GenerationName[],
    pokemon_species: PokemonSpecies[],
    types: PokemonType[],
    version_groups: GenerationVersionGroup[]
}

export interface GenerationInfo {
    enName: string,
    mainRegionName: string,
    pokemonsAmount: number
}

export interface GenerationAbility {
    id: number
    name: string
    is_main_series: boolean
}

export interface GenerationMainRegion {
    name: string,
    url: string
}

export interface GenerationMove {
    name: string,
    url: string
}

export interface GenerationName {
    name: string,
    language: GenerationLanguage
}

export interface GenerationLanguage {
    name: string,
    url: string
}

export interface PokemonSpecies {
    name: string,
    url: string
}

export interface PokemonType {
    name: string,
    url: string
}

export interface GenerationVersionGroup {
    name: string,
    url: string
}