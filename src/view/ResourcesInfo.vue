<template>
    <div class="container">
        <div class="article-head">
            <div class="title">
                <h1>Nuxt 3 Data Fetching</h1>
                <h2>2025.06.01_______</h2>
            </div>
        </div>
        <div class="article-body">
            <div class="img"></div>
            <div class="author">
            </div>
        </div>
    </div>
</template>

<script setup>
const { items } = defineProps({
    items: { 
        type: Array, 
        default: () => [] 
    }
})

console.log('Card items =>', items)
</script>

<style lang="scss" scoped>
@use "@/assets/css/components/variables" as *;

.container {
    padding: 10rem 14rem;
    background-color: $color-bg;
    .article-head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .title {
            h1 {
                font-size: $font-size-giant;
                font-weight: 600;
                margin-bottom: 1rem;
            }
            h2 {
                font-size: $font-size-xl;
                font-weight: 500;
                color: $color-text-light;
            }
        }
    }
}
</style>