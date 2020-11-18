import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mflix-visualizer';
  results : Object[];
  obs : Observable<object>;
  constructor(private http : HttpClient, private sanitizer: DomSanitizer){}

  load10Movies()
  {
    this.obs = this.http.get("https://3000-dc4d878f-b2ef-48ad-ad14-1f2fc8ae6984.ws-eu01.gitpod.io/movies/list/10");
    this.obs.subscribe(this.getData);
  }

  getData = (data) => {
    this.results = data;
  }
  photoURL(urltoSanitize) {
    console.log(urltoSanitize);
    return this.sanitizer.bypassSecurityTrustUrl(urltoSanitize);

}
    RoMovies()
    {
      this.obs = this.http.get("https://3000-dc4d878f-b2ef-48ad-ad14-1f2fc8ae6984.ws-eu01.gitpod.io/movies/genere/Romance");
      this.obs.subscribe(this.getData);
    }

   HyMovies()
    {
      this.obs = this.http.get("https://3000-dc4d878f-b2ef-48ad-ad14-1f2fc8ae6984.ws-eu01.gitpod.io/movies/genere/History");
      this.obs.subscribe(this.getData);
    }

    HoMovies()
    {
      this.obs = this.http.get("https://3000-dc4d878f-b2ef-48ad-ad14-1f2fc8ae6984.ws-eu01.gitpod.io/movies/genere/Horror");
      this.obs.subscribe(this.getData);
    }}

