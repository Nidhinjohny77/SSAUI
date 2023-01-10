import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { City } from '../models';

@Injectable()
export class LocationService {

  constructor(private http: HttpClient,@Inject('API_BASE_URL') private baseUrl:string) { }


  getCities():Array<City>{

      let result=new Array<City>();
      var city1=new City();
      city1.uid=1;
      city1.name="All UK";
      result.push(city1);
      var city2=new City();
      city2.uid=2;
      city2.name="London";
      result.push(city2);
      var city3=new City();
      city3.uid=3;
      city3.name="Bristol";
      result.push(city3);
      var city4=new City();
      city4.uid=4;
      city4.name="Liverpool";
      result.push(city4);
      var city5=new City();
      city5.uid=5;
      city5.name="Manchester";
      result.push(city5);
      var city6=new City();
      city6.uid=6;
      city6.name="Birmingham";
      result.push(city6);
      var city7=new City();
      city7.uid=7;
      city7.name="Edinburgh";
      result.push(city7);
      var city8=new City();
      city8.uid=8;
      city8.name="Leeds";
      result.push(city8);
      var city9=new City();
      city9.uid=9;
      city9.name="Oxford";
      result.push(city9);
      var city10=new City();
      city10.uid=10;
      city10.name="Cambridge";
      result.push(city10);
      var city11=new City();
      city11.uid=11;
      city11.name="Coventry";
      result.push(city11);
      var city12=new City();
      city12.uid=12;
      city12.name="Derby";
      result.push(city12);
      var city13=new City();
      city13.uid=13;
      city13.name="Leicester";
      result.push(city13);
      var city14=new City();
      city14.uid=14;
      city14.name="Norwich";
      result.push(city14);
      var city15=new City();
      city15.uid=15;
      city15.name="Peterborough";
      result.push(city15);
      var city16=new City();
      city16.uid=16;
      city16.name="Plymouth";
      result.push(city16);
      var city17=new City();
      city17.uid=17;
      city17.name="Portsmouth";
      result.push(city17);
      var city18=new City();
      city18.uid=18;
      city18.name="Sheffield";
      result.push(city18);
      var city19=new City();
      city19.uid=19;
      city19.name="Southampton";
      result.push(city19);
      var city20=new City();
      city20.uid=20;
      city20.name="Wells";
      result.push(city20);
      var city21=new City();
      city21.uid=21;
      city21.name="York";
      result.push(city21);
      return result;
  }

}
