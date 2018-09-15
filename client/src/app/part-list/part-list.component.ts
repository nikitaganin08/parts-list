import { Component, OnInit } from '@angular/core';
import { PartService } from '../part.service';
import { Part } from '../part';
import { Router } from '@angular/router';


@Component({
  selector: 'parts-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css']
})
export class PartListComponent implements OnInit {

  parts: Part[];
  minPart: number;

  constructor(private router: Router, private partService: PartService) { }

  ngOnInit() {
    this.reloadData();
    this.getMinRequiredPart();
  }

  reloadData() {
    this.partService.getPartsList().subscribe(part => this.parts = part);
    this.getMinRequiredPart();
  }

  getRequiredPartsList(necessity: boolean) {
      this.partService.getRequiredPartsList(necessity).subscribe(part => this.parts = part);
  }

  getMinRequiredPart() {
      this.partService.getMinRequiredPart().subscribe(min => this.minPart = min);
  }

  updatePart(part: Part) {
    if(part) {
      this.router.navigate(['/edit', part.id]);
    }
  }

  deletePart(part: Part) {
    this.partService.deletePart(part.id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
