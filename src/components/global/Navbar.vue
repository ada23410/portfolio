<template>
    <nav class="navbar">
        <div class="logo">
            <div class="aida">
                <a href="">ɐida</a>
            </div>
        </div>
        <div class="menu">
            <ul>
                <li><a href="">PROJECT</a></li>
                <li><a href="">RESOURCES</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use "@/assets/css/components/variables" as *;

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 14rem;
    background-color: $color-bg;
    .logo {
        a {
            text-decoration: none;
            font-size: $font-size-xl;
            color: $color-text;
        }
    }
    .menu {
        ul{
            display: flex;
            justify-content: space-between;
            align-items: center;
            li {
                padding: 0 1rem;
                a{
                    text-decoration: none;
                    font-size: $font-size-base;
                    color: $color-text;
                }
            }
        }
    }
}
</style>