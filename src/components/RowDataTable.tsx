import { Table, Tbody, Td, Thead, Tr } from "@chakra-ui/react";

interface RowDataTableProps<TRowContent extends Object> {
  rows: TRowContent[];
}

export function RowDataTable<TRowContent extends Object>({
  rows,
}: RowDataTableProps<TRowContent>) {
  if (rows.length === 0) {
    return <div>No data</div>;
  }

  const keys = Object.keys(rows[0]);
  return (
    <Table maxWidth={"100%"} variant="striped" size="sm">
      <Thead>
        <Tr>
          {keys.map((col, hidx) => (
            <Td key={hidx}>{col}</Td>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, ridx) => (
          <Tr key={ridx}>
            {Object.values(row).map((cell, cidx) => (
              <Td key={cidx}>{cell}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
