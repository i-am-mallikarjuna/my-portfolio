import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wildcard',
  imports: [RouterModule,MatIcon],
  templateUrl: './wildcard.html',
  styleUrl: './wildcard.scss',
})
export class Wildcard {}
