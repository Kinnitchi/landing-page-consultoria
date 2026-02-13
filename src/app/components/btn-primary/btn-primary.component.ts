import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariants = 'primary' | 'secondary';
@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss',
})
export class BtnPrimaryComponent {
  @Input('loading') loading: boolean = false;
  @Input('buttonText') buttonText: string = '';
  @Input('disabled') disabled: boolean = false;
  @Input('variant') variant: BtnVariants = 'primary';
  @Output('submit') buttonClick = new EventEmitter();

  submit() {
    this.buttonClick.emit();
  }
}
