<template>
    <div class="container">
        <div class="Hero-section">
            <div>
                <h1>Designing with Empathy,</h1>
                <h2>Developing with Precision.</h2>
            </div>
            <div>
                <p>專注於體驗細節與效能品質，將設計與開發融入可靠的數位服務，讓每一次互動都兼具人性的溫度與科技的精準。</p>
            </div>
        </div>
        <div class="kv-section">
            <div class="title">Project</div>
            <div class="project-card">
                <div class="square"></div>
                <div class="circle"></div>
                <div class="triangle"></div>
            </div>
            <div class="look-more">
                <a href="">
                    <div class="description">DISCOVER PROJECTS</div>
                    <div class="arrow">-></div>
                </a>
            </div>
        </div>
        <div class="resources">
            <div class="resources-title">Resourse</div>
            <Card />
            <div class="look-more">
                <a href="">
                    <div class="description">DISCOVER RESOURCES</div>
                    <div class="arrow">-></div>
                </a>
            </div>
        </div>
        <div class="about">
            <div class="about-title">About</div>
            <div class="inorganic">
                <span class="pill"></span>
                <span class="pill"></span>
                <span class="pill"></span> 
                <span class="pill"></span>
                <span class="pill"></span>
                <span class="pill"></span>
            </div>
            <div class="look-more">
                <a href="">
                    <div class="description">DISCOVER ABOUT ME</div>
                    <div class="arrow">-></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import Card from '@/components/Blog/Card.vue'
</script>

<style lang="scss" scoped>
@use "@/assets/css/components/variables" as *;


.container {
    padding: 10rem 14rem;
    background-color: $color-bg;
    .Hero-section {
        display: flex;
        justify-content: space-between;
        align-items: end;
        h1 {
            font-size: $font-size-giant;
            font-family: "La Belle Aurore", cursive;
            line-height: 5.5rem;
        }
        h2 {
            font-size: $font-size-giant;
            font-weight: 600;
            line-height: 5rem;
            width: 70%;
        }
        p {
            max-width: 26rem;
            font-size: $font-size-base;
            line-height: 2rem;
            font-weight: 400;
            color: $color-text;
        }
    }
    .kv-section, .resources, .about{
        position: relative;
        margin-bottom: 8rem;
        .title {
            position: absolute;
            left: 50%;
            top: 15%;
            transform: translateX(-50%);
            font-size: 15rem;
            font-weight: 800;
            letter-spacing: -10px;
            font-style: italic;
            color: $color-bg-alt;
            z-index: 0;  
        }
        .resources-title {
            position: absolute;
            left: 50%;
            top: -3%;
            transform: translateX(-50%);
            font-size: 15rem;
            font-weight: 800;
            letter-spacing: -10px;
            font-style: italic;
            color: $color-bg-alt;
            z-index: 0;  
        }
        .about-title {
            position: absolute;
            left: 50%;
            top: 0%;
            transform: translateX(-50%);
            font-size: 15rem;
            font-weight: 800;
            letter-spacing: -10px;
            font-style: italic;
            color: $color-bg-alt;
            z-index: 0;  
        }
        .project-card {
            position: relative;
            z-index: 1;     
            padding: 10rem 0;
            width: 100%;
            min-height: 600px;
            display: flex;
            justify-content: space-between;
            gap: 2rem;
            .square {
                width: 100%;
                max-width: 387px;                
                aspect-ratio: 1 / 1;      
                background-color: $color-text-light;
                border-radius: 60px;
                align-self: center;
            }
            .circle {
                width: 100%;
                max-width: 387px; 
                aspect-ratio: 1 / 1;
                background-color: $color-text-light;
                border-radius: 50%;
                align-self: flex-end;
            }
            .triangle{
                width: 100%;
                max-width: 387px; 
                aspect-ratio: 387 / 370;   // 原始比例 (大概 1.05:1)
                background-color: $color-text-light;
                -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                align-self: flex-start;
            }
        }
        .inorganic {
            --h: clamp(540px, 30vw, 630px);   // 整體高度（響應式）
            --w: clamp(260px, 20vw, 260px);   // 每個膠囊寬度
            --r: 90px;                         // 膠囊的圓角
            --overlap: 10px;                   // 重疊量（越大縫隙越小）
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10rem 0;
            .pill {
                width: var(--w);
                height: var(--h);
                border-radius: calc(var(--r) * 1.5);
                background: $color-text-light;                  // 灰色底
                position: relative;
            }
            .pill + .pill {
                margin-left: calc(-1 * var(--overlap));
            }
        }
        .look-more {
            a {
                display: inline-flex;
                justify-content: flex-end;
                align-items: center;
                text-decoration: none;
                color: $color-text;
                .description {
                    font-size: $font-size-xxl;
                    margin-right: 1rem;
                }
                .arrow {
                    font-size: $font-size-xxl;
                }
            }
        }
    }
}
</style>