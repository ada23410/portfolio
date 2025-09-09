<template>
    <div class="container">
        <div class="resources-head">
            <div class="title">
                <h1>Recent Resources</h1>
                <div class="category">
                    <span>All</span>
                    <span>Vue.js</span>
                    <span>Nuxt.js</span>
                    <span>P5.js</span>
                    <span>JavaScript</span>
                    <span>Generative AI</span>
                    <span>UI / UX</span>
                </div>
            </div>
            <div>
                <p>專注於體驗細節與效能品質，將設計與開發融入可靠的數位服務，讓每一次互動都兼具人性的溫度與科技的精準。</p>
            </div>
        </div>
        <div class="resources-body">
            <Card :items="resources"/>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Card from '@/components/Blog/Card.vue'

// 先用假資料，之後換成 API 結果
const resources = ref([
  { id: 1, title: 'Designing with Empathy', published_at: '2025.06.01_______', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image_url: '', tags: ['Design','Frontend'] },
  { id: 2, title: 'Nuxt 3 Data Fetching',   published_at: '2025.06.01_______', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image_url: '', tags: ['Nuxt.js'] },
])
</script>
<style lang="scss" scoped>
@use "@/assets/css/components/variables" as *;

.container {
    padding: 10rem 14rem;
    background-color: $color-bg;
    .resources-head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .title {
            h1 {
                font-size: $font-size-giant;
                font-weight: 600;
            }
            .category {
                margin-top: 2.5rem;
                font-size: $font-size-base;
                font-weight: 400;
                color: $color-text-light;
                span {
                    padding: .5rem 1rem;
                    border: .5px solid $color-border;
                    border-radius: 50px;
                    margin-right: .5rem;
                }
            }
        }
        p {
            max-width: 26rem;
            font-size: $font-size-base;
            line-height: 2rem;
            font-weight: 400;
            color: $color-text;
        }
    }
}
</style>