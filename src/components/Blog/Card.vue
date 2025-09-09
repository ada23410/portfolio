<template>
    <div class="wrap-box">
        <RouterLink
            v-for="item in items"
            :key="item.id"
            class="card-link"
            :to="{ name: 'resource-info', params: { resourceId: String(item.id) } }"
            custom
            v-slot="{ navigate }"
            >
            <article
                class="card"
                role="link"
                tabindex="0"
                @click="navigate"
                @keydown.enter.space.prevent="navigate"
                :aria-label="`Open resource ${item.title}`"
            >
                <div class="card-head">
                <div class="img" :style="{ backgroundImage: item.image_url ? `url(${item.image_url})` : '' }"></div>
                </div>
                <div class="card-body">
                <div class="title">
                    <div class="text">{{ item.title }}</div>
                    <div class="time">{{ item.published_at }}</div>
                </div>
                <div class="description">
                    <p>{{ item.description }}</p>
                    <div class="tag">
                    <span v-for="(t, i) in item.tags" :key="i">{{ t }}</span>
                    </div>
                </div>
                </div>
            </article>
        </RouterLink>
    </div>
</template>

<script setup>
const { items } = defineProps({
    items: { 
        type: Array, 
        default: () => [] 
    }
})
console.log('Card items =>', items) // 檢查看看是否有資料
</script>

<style lang="scss" scoped>
@use "@/assets/css/components/variables" as *;

.wrap-box {
    position: relative;
    z-index: 1;     
    padding: 10rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    justify-items: center;  
    align-items: center;   
    gap: 5rem; 
    .card {
        max-width: 540px;
        width: 100%;
        .img {
            width: 100%;
            aspect-ratio: 1 / 1; 
            border-radius: 60px;
            background-color: $color-text-light;
        }
        .card-body {
            margin-top: 1.5rem;
            .title {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                .text {
                    font-size: $font-size-xxl;
                    font-weight: 500;
                }
                .time {
                    font-size: $font-size-lg;
                    font-weight: 400;
                    color: $color-text-light;
                }
            }
            .description {
                margin-top: 1rem;
                p {
                    font-size: $font-size-base;
                    font-weight: 300;
                    color: $color-text-light;
                    text-align: justify;
                    line-height: 1.5rem;
                }
            }
            .tag {
                margin-top: 1.5rem;
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
    }
}
</style>