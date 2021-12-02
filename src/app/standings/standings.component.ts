//import modul yang dibutuhkan
//cari modul nama atau file dan tentukan
import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
//interface
import { Team } from 'src/interface/team';
import { Ranking } from 'src/interface/ranking';
import { Schedule } from 'src/interface/schedule';
import { SoccerService } from '../service/SoccerService';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  public LeagueName:string;
  public UsingAsync:boolean = false;
  public MyTeams: Team[];
  public MySchedule : Schedule[];
  public Standings: Ranking[];

  constructor(private _titleService:Title,private _soccerService:SoccerService) {
    this._titleService.setTitle('c2 League')
    this.LeagueName = "wow League";
    this.MyTeams=[];
    this.MySchedule=[];
    this.Standings=[];
    this.getSchedule();
    this.computeRankings();
  }

  getTeams(){
    if(this.UsingAsync){
      let xx = this._soccerService.getAllTeamsAsync();
      xx.then((Teams:Team[])=>this.MyTeams = Teams);
    }
    else {
      this.MyTeams = this._soccerService.getAllTeams();
    }
  }

  private getSchedule(){
    if (this.UsingAsync){
      let xx = this._soccerService.getScheduleAsync();
        xx.then((Schedules:Schedule[])=> this.MySchedule = Schedules);
    }else{
      this.MySchedule = this._soccerService.getSchedule();
    }
  }
  public computeRankings(){
    var curDate : Date= new Date();
    var TeamAt: number;
    this.Standings= [];
    this.MySchedule.forEach(element=>{
      //jika game telah dimainkan
      if(element.PlayingDate< curDate && element.HomeScore>=0){
        TeamAt = this.FindTeam(element.HomeTeam);
        if(TeamAt <0){
          this.Standings.push({
            TeamName:element.HomeTeam,
            GamesPLayed:0,Wins:0,Ties:0,
            GoalsFor:0,GoalsAgaints:0
          })
          TeamAt = this.Standings.length-1;
        }
        this.UpCurrentArrow(element,TeamAt,'H');
      }
    });
  }
  ngOnInit(): void {
  }
  private UpCurrentArrow(element:Schedule, TeamAt:number,HomeAway:string){
    this.Standings[TeamAt].GamesPLayed++;
    if(HomeAway=='H'){
      this.Standings[TeamAt].GoalsFor+= element.HomeScore;
      this.Standings[TeamAt].GoalsAgaints+= element.AwayScore;
      //menang win
      if(element.HomeScore>element.AwayScore){
        this.Standings[TeamAt].Wins++;
      }
    }
    if(element.HomeScore==element.AwayScore){
      this.Standings[TeamAt].Ties++;
    }
  }
  private FindTeam(TeamName:string):number{
    var FoundAt: number = -1;
    for(var _x=0; _x<this.Standings.length; _x++){
      if(this.Standings[_x].TeamName==TeamName){
        return _x;
      }
    }
    return FoundAt;
  }
}
