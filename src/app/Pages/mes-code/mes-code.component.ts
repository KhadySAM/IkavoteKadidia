import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CodeVotantServiceService } from 'src/app/Services/code-votant-service.service';
import { EvenementService } from 'src/app/Services/evenement.service';

import  jsPDF from 'jspdf'
import html2canvas from 'html2canvas';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-mes-code',
  templateUrl: './mes-code.component.html',
  styleUrls: ['./mes-code.component.css']
})
export class MesCodeComponent implements OnInit {


  


  idEvents:any
  p:number=1
  allCodeVotant:any
  nbrCodeVotant:any
  allEvents:any
  libelleEvents:any



  

  constructor(
    private serviceCodeVotant: CodeVotantServiceService,
    private route: ActivatedRoute,
    private evenementService: EvenementService
  ) { }

  ngOnInit(): void {

    

    this.idEvents = this.route.snapshot.params['idEvents'] 
    this.serviceCodeVotant.getCodeVotantByEvents(this.idEvents).subscribe(data =>{
      this.allCodeVotant = data
      this.nbrCodeVotant = data.length;
      
    });  

    
    

    //:::::::::::::::::::::::::::::::::: get event ::::::::::::::::::::::
  

    this.evenementService.getEventsById(this.idEvents).subscribe(data =>{
      this.allEvents = data
      this.libelleEvents=data.libelle
      this.idEvents = data.id

      console.log(this.idEvents)
      
    });
  }


  generatePDF() {
    const doc = new jsPDF();
  
    const qrCodes = document.querySelectorAll<HTMLElement>('#qr-code');
    const rows = 3; // nombre d'éléments à afficher par ligne
    const cols = 1; // nombre d'éléments à afficher par colonne
    let row = 0;
    let col = 0;
  
    qrCodes.forEach((qrCode, index) => {
      html2canvas(qrCode).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 150; // largeur de chaque élément
        const imgHeight = 50; // hauteur de chaque élément
        const margin = 2; // marge entre les éléments
        const x = (col * (imgWidth));
        const y = (row * (imgHeight));
        doc.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
        col++;
        if (col >= cols) {
          col = 0;
          row++;
        }
        if (row >= rows) {
          doc.addPage();
          row = 0;
        }
        if (index === qrCodes.length - 1) {
          doc.save('document.pdf');
        }
      });
    });
  }  
  
}
  







