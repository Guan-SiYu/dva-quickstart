//✅ 页面 connect model 和 UI
import React from "react";
import ProductList from "../components/ProductList";
import { connect } from "dva";

const ProductsPage = (para) => {
  //被 connect 的 Component 会自动在 props 中拥有 dispatch 方法
  //{ table_data: paraIn.productsData }
  console.log("page_para=>", para);
  function handleDelete(id) {
    para.dispatch({
      type: "productsData/delete",
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} productsData={para.table_data} />
    </div>
  );
};

export default connect((paraIn) => {
  //paraIn=>index.js中app.model注册的全部
  console.log("paraIn=>", paraIn);
  return { table_data: paraIn.productsData }; //取出paraIn.productsData这个数据给ProductsPage页面来使用
})(ProductsPage);
