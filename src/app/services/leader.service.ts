import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { BrowserPlatformLocation } from '@angular/platform-browser/src/browser/location/browser_platform_location';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders():Leader[]{
    return LEADERS;
  }
  getPromotion(id: string): Leader {
    return LEADERS.filter((lead) => { lead.id == id })[0];
  }
  getFeaturedLeader(): Leader {
      return LEADERS.filter((lead) => lead.featured)[0];
  }
}
