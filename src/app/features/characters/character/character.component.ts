import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, type OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/core/service/character.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../components/common/dialog/dialog.component';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent implements OnInit {

  character: any;
  dialog = inject(MatDialog);

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;

    this.characterService.getOneCharacter(id).subscribe(item => {
      this.character = item
      this.cdRef.markForCheck()
    })
  }

  onShowModal() {
    this.dialog.open(DialogComponent, {
      data: {
        animal: 'panda'
      }
    })
  }
}
