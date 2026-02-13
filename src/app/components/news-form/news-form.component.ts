import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-news-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  providers: [ContactService],
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.scss',
})
export class NewsFormComponent {
  newsLetterForm!: FormGroup;
  loading = signal(false);
  constructor(private service: ContactService) {
    this.newsLetterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.newsLetterForm.value);
    this.loading.set(true);
    if (this.newsLetterForm.valid) {
      const { name, email } = this.newsLetterForm.value;

      this.service.sendData(name, email).subscribe({
        next: (response) => {
          console.log('Resposta do servidor:', response);
          this.loading.set(false);
        },
        error: (error) => {
          console.error('Erro ao enviar dados:', error);
          this.loading.set(false);
        },
      });
    }
  }
}
