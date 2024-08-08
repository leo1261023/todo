<script setup>
    import { ref } from 'vue';
    import { useStore } from 'vuex';
    const store = useStore();

    // 創建一個響應式變量來存儲新待辦事項的輸入值
    const newItem = ref('');

    // 定義新增待辦事項的函數，調用 Vuex 的 action 來添加待辦事項
    const addItem = () => {
    if (newItem.value.trim() !== '') {
        store.dispatch('addTodoItem', newItem.value);
        newItem.value = '';
    }
    };
</script>

<template>
    <div class="add">
        <!-- 輸入框，使用 v-model 雙向綁定 newItem 變量 -->
        <input type="text" v-model="newItem" placeholder="新增代辦事項" />
        <!-- 點擊按鈕時調用 addItem 函數 -->
        <button @click="addItem">加入</button>
    </div>
</template>

<style scoped>
    .add {
    display: flex;
    justify-content: center;
    }
</style>
