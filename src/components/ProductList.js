import React from "react";
import PropTypes from "prop-types";
import { Table, Popconfirm, Button } from "antd";
const ProductList = ({ onDelete, productsData }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Action",
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={productsData} columns={columns} />;
};
ProductList.PropTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;
