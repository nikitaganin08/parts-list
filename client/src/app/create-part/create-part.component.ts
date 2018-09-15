import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Part } from '../part';
import { PartService } from '../part.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'create-part',
  templateUrl: './create-part.component.html',
  styleUrls: ['./create-part.component.css'],
  providers: [PartService]
})

export class CreatePartComponent implements OnInit, OnDestroy {

  id: number;
  part: Part;

  partForm: FormGroup;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private partService: PartService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.partForm = new FormGroup({
      name: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      necessity: new FormControl('')
    });

    if (this.id) {
      this.partService.getPart(this.id).subscribe(
        part => {
          this.id = part.id;
          this.partForm.patchValue({
            name: part.name,
            quantity: part.quantity,
            necessity: part.necessity,
          });
        },error => {
          console.log(error);
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {

    if (this.partForm.valid) {
      if (this.id) {
        let part: Part = new Part(null,
          this.partForm.controls['name'].value,
          this.partForm.controls['necessity'].value,
          this.partForm.controls['quantity'].value);
        this.partService.updatePart(this.id, part).subscribe();
      }
      else {
        let part: Part = new Part(null,
          this.partForm.controls['name'].value,
          this.partForm.controls['necessity'].value,
          this.partForm.controls['quantity'].value);
        this.partService.createPart(part).subscribe();

      }
      this.partForm.reset();
      setTimeout(() => {
          this.router.navigate(['/part'])
        }
        , 500);
    }
  }

  redirectUserPage() {
    this.router.navigate(['/part']);
  }
}
