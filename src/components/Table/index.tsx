import React from "react";
import { Table as TableStyled } from "./styles";

interface ITable {
  title: string;
  data: Array<any>;
  columns: Array<any>;

  moreOptions?: any;
}

export const Table: React.FC<ITable> = ({
  title,
  data,
  columns,
  moreOptions,
}) => {
  let options: any = {
    selectableRowsHeader: false,
    selectableRows: "none",
    download: false,
    print: false,
    textLabels: {
      body: {
        noMatch: "Desculpe, nenhum registro encontrado",
        toolTip: "Sort",
        columnHeaderTooltip: (column: any) => `Sort for ${column.label}`,
      },
      pagination: {
        next: "Próxima página",
        previous: "Página anterior",
        rowsPerPage: "Total por página:",
        displayRows: "de",
      },
      toolbar: {
        search: "Buscar",
        downloadCsv: "Baixar CSV",
        print: "Imprimir",
        viewColumns: "Ver colunas",
        filterTable: "Filtrar Tabela",
      },
      filter: {
        all: "Todos",
        title: "FILTROS",
        reset: "LIMPAR",
      },
      viewColumns: {
        title: "Mostrar colunas",
        titleAria: "Mostrar/Ocultar colunas",
      },
      selectedRows: {
        text: "linha(s) selecionada(s)",
        delete: "Deletar",
        deleteAria: "Deletar linhas selecionadas",
      },
    },
  };

  if (moreOptions) {
    options = {
      ...options,
      ...moreOptions,
    };
  }

  return (
    <TableStyled
      title={title}
      data={data}
      columns={columns}
      options={options}
    />
  );
};
