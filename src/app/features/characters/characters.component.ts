import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { CharacterService } from 'src/app/core/service/character.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent implements OnInit {

  chacarters: any[] = []


  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(response => {
      this.chacarters = response.data
    })
  }
}
