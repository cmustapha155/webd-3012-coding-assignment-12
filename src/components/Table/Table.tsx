import React from "react";
import { TableProps } from "./Table.types.ts";

const Table: React.FC<TableProps> = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>{props.heading1}</th>
          <th>{props.heading2}</th>
          <th>{props.heading3}</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{props.data1}</td>
          <td>{props.data2}</td>
          <td>{props.data3}</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>props.footer1</td>
          <td>props.footer2</td>
          <td>props.footer3</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;