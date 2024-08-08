<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    // 獲取 Vuex Store 實例
    const store = useStore();

    // 使用計算屬性從 Vuex Store 獲取待辦事項列表
    const todoItems = computed(() => store.getters.todoItems);

    // 定義刪除待辦事項的函數，調用 Vuex 的 action 來刪除待辦事項
    const deleteItem = (id) => {
    store.dispatch('deleteTodoItem', id);
    };
</script>

<template>
    <ul>
        <!-- 使用 v-for 指令遍歷待辦事項列表，生成每個待辦事項的列表項目 -->
        <li v-for="item in todoItems" :key="item.id">
        {{ item.text }}
        <!-- 點擊按鈕時調用 deleteItem 函數 -->
        <button @click="deleteItem(item.id)">完成</button>
        </li>
    </ul>
</template>

<style scoped>
    ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    list-style-type: none;
    }

    li {
    margin: 5px 0;
    }

    button {
    margin-left: 10px;
    }
</style>
