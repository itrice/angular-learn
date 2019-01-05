import { Injectable } from '@angular/core';
import { Hero } from "../app/hero";

export interface IService{    
    getHeroes():Hero[];

    getHero(id:number):Hero;
}