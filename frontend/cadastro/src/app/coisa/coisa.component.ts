import { Component, OnInit } from '@angular/core';
import { CoisaRestService } from '../coisa-rest.service';

@Component({
  selector: 'c-coisa',
  templateUrl: './coisa.component.html',
  styleUrls: ['./coisa.component.css']
})
export class CoisaComponent implements OnInit {
  
  constructor(private coisaRest: CoisaRestService) {
    this.list();
  }
  
  title = 'cadastro';

  coisa = {nome: '', tipo: ''};

  coisas: any;
  
  ngOnInit() {
  }

  public save() {
    this.coisaRest.save(this.coisa).subscribe(r => {
      this.list();
      this.coisa = {nome: '', tipo: ''};
    });
  }

  public list() {

    this.coisaRest.list().subscribe( c => {
      this.coisas = c;
      console.log(c);
    });
  }

  public edit(linha) {
    this.coisa = linha;
  }

  public delete(linha) {
    this.coisaRest.delete(linha.id).subscribe(p => {
      this.list();
    });
  }

}
