import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Language {
  code: string;
  label: string;
}

@Component({
  selector: 'app-lang-dropdwon',
  templateUrl: './lang-dropdwon.component.html',
  standalone: true,
  imports: [CommonModule, TranslateModule, NgbModule],
})
export class LangDropdwonComponent {
  public languages: Language[] = [
    { code: 'ar', label: 'translate_arabic_in_arabic' },
    { code: 'en', label: 'translate_english_in_english' },
  ];

  public constructor(public readonly translateService: TranslateService) {}

  public changeLanguage(language: string): void {
    this.translateService.use(language);
  }
}
