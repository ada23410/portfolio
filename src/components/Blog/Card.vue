<template>
    <div class="wrap-box">
        <div class="card">
            <div class="card-head">
                <div class="img"></div>
            </div>
            <div class="card-body">
                <div class="title">
                    <div class="text">Title</div>
                    <div class="time">2025.06.01_______</div>
                </div>
                <div class="description">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure error assumenda non consequuntur natus! Expedita accusamus unde sit explicabo neque qui? Distinctio quos consectetur libero, reprehenderit at id aliquam possimus!</p>
                    <div class="tag">
                        <span>tag</span>
                        <span>tag</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-head">
                <div class="img"></div>
            </div>
            <div class="card-body">
                <div class="title">
                    <div class="text">Title</div>
                    <div class="time">2025.06.01_______</div>
                </div>
                <div class="description">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure error assumenda non consequuntur natus! Expedita accusamus unde sit explicabo neque qui? Distinctio quos consectetur libero, reprehenderit at id aliquam possimus!</p>
                    <div class="tag">
                        <span>tag</span>
                        <span>tag</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/css/components/variables" as *;

.wrap-box {
    position: relative;
    z-index: 1;     
    padding: 10rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem; 
    .card {
        max-width: 540px;
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