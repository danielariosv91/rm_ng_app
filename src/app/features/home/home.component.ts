import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, type OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharacterService } from 'src/app/core/service/character.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  mainCharacters: any[] = []

  constructor(
    private characterService: CharacterService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.characterService.getMainCharacters().subscribe(response => {
      this.mainCharacters = response;
      this.cdRef.markForCheck()
    })
  }
}
