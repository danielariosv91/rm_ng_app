import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from 'src/app/components/common/navbar/navbar.component';

@Component({
  selector: 'app-content-layout',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  templateUrl: './contentLayout.component.html',
  styleUrl: './contentLayout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentLayoutComponent implements OnInit {

  ngOnInit(): void { }

}
