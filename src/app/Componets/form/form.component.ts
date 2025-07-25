import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { DomandeServiceService } from '../../Service/domande-service.service';
import { domanda } from '../../Interfaces/interfaces';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

 formData = {
    amount: '',
    difficulty: ''
  };

  @Output() domandeGenerate = new EventEmitter<domanda[]>();
  @Output() formStatus = new EventEmitter<string | null>();

  @ViewChild('quizForm') quizForm!: NgForm;

  constructor(private domandeSvc: DomandeServiceService) {}

  onSubmit() {

    if (this.quizForm.invalid) {
      this.formStatus.emit('Compila tutti i campi correttamente!');
      return;
    }

    const { amount, difficulty } = this.formData;

    this.domandeSvc.getDomande(amount, difficulty).subscribe((res) => {
      console.log('risultato', res.results);
      this.domandeGenerate.emit(res.results);
      this.formStatus.emit(null);
    });
  }




}
