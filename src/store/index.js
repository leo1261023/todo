import { createStore } from 'vuex';

// 創建並導出 Vuex Store
export default createStore({
  // 定義應用的狀態
  state: {
    // 初始化的待辦事項列表
    todoItems: [
      { id: 1, text: '寫作業' },
      { id: 2, text: '洗衣服' },
      { id: 3, text: '看電視' }
    ]
  },
  // 定義變更狀態的函數（同步操作）
  mutations: {
    // 添加待辦事項的變更函數
    addTodoItem(state, newItem) {
      // 如果新項目不是空字符串，則添加到待辦事項列表
      if (newItem.trim() !== '') {
        state.todoItems.push({ id: Date.now(), text: newItem });
      }
    },
    // 刪除待辦事項的變更函數
    deleteTodoItem(state, id) {
      // 過濾掉具有指定 id 的待辦事項
      state.todoItems = state.todoItems.filter(item => item.id !== id);
    }
  },
  // 定義可執行異步操作的函數（異步操作）
  actions: {
    // 添加待辦事項的操作函數，提交對應的變更函數
    addTodoItem({ commit }, newItem) {
      commit('addTodoItem', newItem);
    },
    // 刪除待辦事項的操作函數，提交對應的變更函數
    deleteTodoItem({ commit }, id) {
      commit('deleteTodoItem', id);
    }
  },
  // 定義從狀態中派生數據的函數
  getters: {
    // 返回待辦事項列表
    todoItems: state => state.todoItems
  }
});
