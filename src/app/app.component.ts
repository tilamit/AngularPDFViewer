import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReportService } from 'src/Services/ReportService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  title = 'AngularPdfApp';

  pdfSource: any;
  constructor(private reportService: ReportService) {

  }

  ngOnInit() {
    //this.pdfSource = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
    this.reportService.getSampleReport().subscribe(data => {
        this.pdfSource = data;
    });
  }
}
