//dva通过model的概念把一个领域的模型管理起来，包含同步更新state的reducers,处理异步逻辑的effects,订阅数据源的subscriptions

export default {
  namespace: "productsData", //对应reducer的initialState的productsData  //对应reducer在combine到rootReducer时的key值
  state: [
    //当前 model 的 state 对象 该 Model 当前的状态
    { name: "apple", id: 1 },
    { name: "banana", id: 2 },
    { name: "pear", id: 3 },
  ],
  reducers: {
    //对应redux里的reducer，接收action，同步更新state
    delete(state, { payload: id }) {
      //state是上面的state 也就是对应index.js中initialState的productsData(index中没有也行)
      console.log(state);
      return state.filter((item) => item.id !== id);
    },
  },
};
