import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/core/service/character.service';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent implements OnInit {

  character: any;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.characterService.getOneCharacter(id).subscribe(item => {
      this.character = item
    })
  }
}
