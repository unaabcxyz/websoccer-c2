//soccer service ini

import { Injectable } from "@angular/core";
// import { from } from "rxjs";
import { SEASON_SCHEDULE, TEAMS } from "./ScheduleData";

@Injectable({
    providedIn: 'root',
})
export class SoccerService {
    getScheduleAsync(){
        return Promise.resolve(SEASON_SCHEDULE);
    }
    getSchedule(){
        return SEASON_SCHEDULE;
    }
    getAllTeamsAsync(){
        return Promise.resolve(TEAMS)
    }
    getAllTeams(){
        return TEAMS;
    }
}