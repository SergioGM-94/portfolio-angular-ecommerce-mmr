import { MatPaginatorIntl } from "@angular/material/paginator";

export class SpanishPaginatorIntl extends MatPaginatorIntl{
  override itemsPerPageLabel = 'Elementos por página';
  override nextPageLabel = 'Página siguiente';
  override previousPageLabel = 'Página anterior';
  override firstPageLabel = 'Primera página';
  override lastPageLabel = 'Última página';

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
      if (length === 0 || pageSize === 0) {
        return `0 de ${length}`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;

      const endIndex = Math.min(startIndex + pageSize, length);
      return `${startIndex + 1} de ${length}`;
    }
}
