<template>
    <nav class="navbar">
        <div class="logo">
            <div class="aida">
                <a href="">ɐida</a>
            </div>
        </div>
        <div class="menu">
            <ul>
                <li><a href="">Project</a></li>
                <li><a href="">Resources</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
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
    padding: 1rem 8rem;
    background-color: $color-bg;
    .menu {
        ul{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>