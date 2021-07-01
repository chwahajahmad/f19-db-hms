import { Table } from "antd";
import React from "react";

export default function TableComp({
  columns,
  data,
  loading = true,
  paginationSize = 6,
}) {
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
        loading={loading}
        pagination={{ pageSize: `${paginationSize}` }}
      />
    </div>
  );
}
