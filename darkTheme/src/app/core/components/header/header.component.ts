import { Component, OnInit } from '@angular/core';
import { ETheme } from '../../enums/ETheme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public icon: string = ETheme.ICON_MOON;
  public textTheme:string = ETheme.MON_TEXT;

  constructor() { }

  ngOnInit(): void {
  }

  public toggle(){
    const theme = document.body.classList.toggle('dark-theme');
    if(theme){
      this.textTheme = ETheme.SUN_TEXT;
      return this.icon = ETheme.ICON_SUN;
    }
    this.textTheme = ETheme.MON_TEXT;
    return this.icon = ETheme.ICON_MOON;
  }
}
