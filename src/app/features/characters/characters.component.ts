import { ChangeDetectionStrategy, ChangeDetectorRef, Component, type OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { CharacterService } from 'src/app/core/service/character.service';

export interface CharactersElement {
  name: string;
  status: string;
  species: string;
}

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatPaginatorModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent implements OnInit {

  currentPage = 1;
  total_items = 0;
  total_pages = 0;
  filteredItems: any[] = [];
  items_per_page = 5;
  dataSource: CharactersElement[] = []
  displayedColumns: string[] = ['name', 'status', 'species'];
  //dataSource = ELEMENT_DATA;

  constructor(
    private characterService: CharacterService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(response => {
      this.dataSource = response.results;

      this.cdRef.markForCheck()
      this.initPagination();
    })
  }

  initPagination() {
    this.total_items = this.dataSource.length;
    this.total_pages = Math.ceil(this.total_items / this.items_per_page)

    this.filteredItems = this.dataSource.slice(
      (this.currentPage - 1) * this.items_per_page,
      this.currentPage * this.items_per_page
    );
  }
}
