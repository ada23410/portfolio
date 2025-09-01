<template>
    <footer>
        <div class="contact">
            <div class="call-to-action">Let’s talk about your needs and vision.</div>
            <button class="contact-btn">Contact</button>
        </div>
        <div class="menu">
            <ul>
                <li><a href="">PROJECT</a></li>
                <li><a href="">RESOURCES</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "@/assets/css/components/variables" as *;

footer {
    padding: 6rem 14rem;
    min-height: 40vh;
    background-color: $color-bg-dark;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .contact {
        .call-to-action {
            font-size: $font-size-xxl;
            color: $color-text-white;
        }
        .contact-btn {
            background-color: $color-bg;
            font-size: $font-size-lg;
            margin-top: 2rem;
            padding: 1.5rem 3rem;
            border-radius: 50px;
        }
    }
    .menu {
        ul{
            li {
                margin-bottom: 1rem;
                a{
                    text-decoration: none;
                    font-size: $font-size-xl;
                    color: $color-text-white;
                }
            }
        }
    }
}
</style>