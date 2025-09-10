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
            <div class="content">
                <div class="author">
                    <div class="name">
                        <span>&ensp;Author / </span>
                        <span>Aida Wu</span>
                    </div>
                    <div class="tag">
                        <span>Website</span>
                        <span>UI / UX</span>
                    </div>
                </div>
                <div class="contents">
                    <div class="subtitle">Subtitle</div>
                    <p class="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat pariatur incidunt necessitatibus nostrum nobis culpa, asperiores perferendis molestias voluptates illo est quidem sequi doloribus veniam debitis sed accusantium sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla quaerat quidem iste dolorum amet dignissimos voluptatem vero magni vel quia reprehenderit laboriosam ut quasi, neque dicta earum expedita. Quisquam.</p>
                    <p class="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat pariatur incidunt necessitatibus nostrum nobis culpa, asperiores perferendis molestias voluptates illo est quidem sequi doloribus veniam debitis sed accusantium sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla quaerat quidem iste dolorum amet dignissimos voluptatem vero magni vel quia reprehenderit laboriosam ut quasi, neque dicta earum expedita. Quisquam.</p>
                    <p class="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat pariatur incidunt necessitatibus nostrum nobis culpa, asperiores perferendis molestias voluptates illo est quidem sequi doloribus veniam debitis sed accusantium sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla quaerat quidem iste dolorum amet dignissimos voluptatem vero magni vel quia reprehenderit laboriosam ut quasi, neque dicta earum expedita. Quisquam.</p>
                    <div class="subtitle">Subtitle</div>
                    <p class="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat pariatur incidunt necessitatibus nostrum nobis culpa, asperiores perferendis molestias voluptates illo est quidem sequi doloribus veniam debitis sed accusantium sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla quaerat quidem iste dolorum amet dignissimos voluptatem vero magni vel quia reprehenderit laboriosam ut quasi, neque dicta earum expedita. Quisquam.</p>
                    <p class="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat pariatur incidunt necessitatibus nostrum nobis culpa, asperiores perferendis molestias voluptates illo est quidem sequi doloribus veniam debitis sed accusantium sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla quaerat quidem iste dolorum amet dignissimos voluptatem vero magni vel quia reprehenderit laboriosam ut quasi, neque dicta earum expedita. Quisquam.</p>
                    <p class="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat pariatur incidunt necessitatibus nostrum nobis culpa, asperiores perferendis molestias voluptates illo est quidem sequi doloribus veniam debitis sed accusantium sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla quaerat quidem iste dolorum amet dignissimos voluptatem vero magni vel quia reprehenderit laboriosam ut quasi, neque dicta earum expedita. Quisquam.</p>
                    <div class="subtitle">Subtitle</div>
                    <p class="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat pariatur incidunt necessitatibus nostrum nobis culpa, asperiores perferendis molestias voluptates illo est quidem sequi doloribus veniam debitis sed accusantium sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla quaerat quidem iste dolorum amet dignissimos voluptatem vero magni vel quia reprehenderit laboriosam ut quasi, neque dicta earum expedita. Quisquam.</p>
                    <p class="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat pariatur incidunt necessitatibus nostrum nobis culpa, asperiores perferendis molestias voluptates illo est quidem sequi doloribus veniam debitis sed accusantium sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla quaerat quidem iste dolorum amet dignissimos voluptatem vero magni vel quia reprehenderit laboriosam ut quasi, neque dicta earum expedita. Quisquam.</p>
                    <p class="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quaerat pariatur incidunt necessitatibus nostrum nobis culpa, asperiores perferendis molestias voluptates illo est quidem sequi doloribus veniam debitis sed accusantium sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nulla quaerat quidem iste dolorum amet dignissimos voluptatem vero magni vel quia reprehenderit laboriosam ut quasi, neque dicta earum expedita. Quisquam.</p>
                    <div class="img"></div>
                </div>
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
    .article-body {
        .img {
            margin: 5rem 0;
            width: 100%;
            max-height: 540px;
            aspect-ratio: 1 / 1; 
            border-radius: 60px;     
            background-color:  $color-text-light;
        }
        .content {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 5rem;
            .author {
                flex: 1;
                .name {
                    font-size: $font-size-lg;
                    font-weight: 500;
                }
                .tag {
                    margin-top: 2rem;
                    font-size: $font-size-sm;
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
            .contents {
                flex: 4;
                .subtitle {
                    font-size: $font-size-xxl;
                    font-weight: 500;
                    margin-bottom: 1rem;
                }
                .paragraph {
                    font-size: $font-size-base;
                    font-weight: 300;
                    color: $color-text-light;
                    text-align: justify;
                    line-height: 1.5rem;
                    margin-bottom: 2rem;
                }
                .img {
                    margin: 5rem 0;
                    width: 100%;
                    max-height: 540px;
                    aspect-ratio: 1 / 1; 
                    border-radius: 60px;     
                    background-color:  $color-text-light;
                }
            }
        }
    }
}
</style>