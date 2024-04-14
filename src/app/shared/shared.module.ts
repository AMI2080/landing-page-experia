import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page/page.component';
import { HeaderComponent } from './components/page/header/header.component';
import { FooterComponent } from './components/page/footer/footer.component';

const sharedComponents = [PageComponent, HeaderComponent, FooterComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [
    // components
    ...sharedComponents,
  ],
  exports: [
    // components
    ...sharedComponents,
  ],
})
export class SharedModule {}