import { Component, OnInit } from '@angular/core';
import { Part } from '../part';
import { PartService } from '../part.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'search-part',
  templateUrl: './search-part.component.html',
  styleUrls: ['./search-part.component.css']
})
export class SearchPartComponent implements OnInit {

  partname: string;
  part: Part;

  constructor(private partService: PartService,
              private router: Router) { }

  ngOnInit() {
    this.partname = "";
  }

  private searchParts() {
    this.partService.getPartByName(this.partname).subscribe(part => this.part = part);
  }

  onSubmit() {
    this.searchParts();
  }

  deletePart(part: Part) {
    this.partService.deletePart(part.id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
  }

  updatePart(part: Part) {
    if(part) {
      this.router.navigate(['/edit', part.id]);
    }
  }
}
