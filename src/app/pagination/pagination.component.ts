import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule,MatListModule ],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() totalItems: number = 0;  // Total de items que se van a paginar
  @Input() itemsPerPage: number = 10;  // Cantidad de items por página
  @Input() currentPage: number = 1;  // Página actual

  // Evento que emitimos para cambiar la página
  @Output() pageChange = new EventEmitter<number>();
  //onPageSelected(page: number): void {
   // this.pageChange.emit(page);
  //}

  // Calcula el total de páginas
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  // Método para cambiar a una página específica
  goToPage(page: number): void {
    this.pageChange.emit(page);
  }

  // Método para avanzar a la siguiente página
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  // Método para retroceder a la página anterior
  previousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

}
