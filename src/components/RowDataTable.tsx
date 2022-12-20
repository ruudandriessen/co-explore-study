import { Badge, Flex, Table, Tbody, Td, Thead, Tr } from "@chakra-ui/react";

interface RowDataTableProps<TRowContent extends Object> {
  rows: TRowContent[];
}

function CellRenderer({ value }: { value: any }) {
  if (Array.isArray(value)) {
    return (
      <Td>
        <Flex flexWrap={"wrap"} display="flex" gap={2}>
          {value.map((value) => (
            <Badge key={value}>{value}</Badge>
          ))}
        </Flex>
      </Td>
    );
  }

  return <Td>{value}</Td>;
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
              <CellRenderer key={cidx} value={cell} />
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
