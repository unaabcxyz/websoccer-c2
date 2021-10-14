import { Schedule } from "src/interface/schedule";
import { Team } from "src/interface/team";

export const SEASON_SCHEDULE:Schedule [] = [
    {id: 1, PlayingDate: new Date(2021,08,10), HomeTeam: 'Persija', 
    AwayTeam: 'Persib', HomeScore:3, AwayScore:4, 
    RefName:'Joko', notes:'Pertandingan overtime'},
    {id: 2, PlayingDate: new Date(2021,08,11), HomeTeam: 'Persipon', 
    AwayTeam: 'Persib', HomeScore:3, AwayScore:5, 
    RefName:'John', notes:'Pertandingan undertime'},
    {id: 3, PlayingDate: new Date(2021,08,12), HomeTeam: 'Persi', 
    AwayTeam: 'Persib', HomeScore:3, AwayScore:1, 
    RefName:'Jo', notes:'Pertandingan ontime'},
    {id: 4, PlayingDate: new Date(2021,08,13), HomeTeam: 'Evos', 
    AwayTeam: 'Persib', HomeScore:3, AwayScore:9, 
    RefName:'ko', notes:'Pertandingan overtime'},
    {id: 5, PlayingDate: new Date(2021,08,14), HomeTeam: 'MU', 
    AwayTeam: 'Persib', HomeScore:3, AwayScore:3, 
    RefName:'Jk', notes:'Pertandingan ontime'}
]

export const TEAMS: Team [] =[
   { id:1, name:'Evos', type:'Over 30'},
   { id:2, name:'Persib', type:'Over 30'},
   { id:3, name:'Persija', type:'Over 30'},
   { id:4, name:'Persipon', type:'Over 30'},
   { id:5, name:'Bali United', type:'Over 30'}
]