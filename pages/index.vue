<template>
    <div class="main_container">
        <ul id="showtxt_ph" class="nav --ph">
            <li @click="show(1)" class="nav__btn">萌果君</li>
            <li @click="show(2)" class="nav__btn">夯吉喵</li>
            <li @click="show(3)" class="nav__btn">柴寶</li>
        </ul>
        <main class="main">
            <div id="showtxt_pc" class="intro">
                <div class="intro__item --mango">
                    <img
                        class="intro__img"
                        src="~/assets/images/home/mangoking.svg"
                        alt=""
                    />
                    <img
                        @click="show(1)"
                        class="intro__detail --mango"
                        src="~/assets/images/home/etc.svg"
                        alt=""
                    />
                    <p
                        @click="show(null)"
                        :class="[
                            'intro__txt',
                            '--mango',
                            this.nowActive == 1 ? '--active' : '',
                        ]"
                    >
                        在神秘樹上掉下來的萌果君，喜歡料理，但煮的不一定能吃，沒東西煮就會到森林裡探索找食材。<br />之後在森林裡開了一家店，專門做料理給大家吃。
                    </p>
                </div>
                <div class="intro__item --chabao">
                    <img
                        class="intro__img"
                        src="~/assets/images/home/chabao.svg"
                        alt=""
                    />
                    <img
                        @click="show(2)"
                        class="intro__detail --chabao"
                        src="~/assets/images/home/etc.svg"
                        alt=""
                    />
                    <p
                        @click="show(null)"
                        :class="[
                            'intro__txt',
                            '--chabao',
                            this.nowActive == 2 ? '--active' : '',
                        ]"
                    >
                        去家族旅遊途中聞到萌果君在煮東西的味道而被吸引，跑到廚房裡偷吃，被發現後則留下來還飯錢，結果越吃越多，一直到現在。自以為是松鼠界的帥哥，卻常常被誤認為是柴犬。
                    </p>
                </div>
                <div class="intro__item --hanji">
                    <img
                        class="intro__img"
                        src="~/assets/images/home/hanji.svg"
                        alt=""
                    />
                    <img
                        @click="show(3)"
                        class="intro__detail --hanji"
                        src="~/assets/images/home/etc.svg"
                        alt=""
                    />
                    <p
                        @click="show(null)"
                        :class="[
                            'intro__txt',
                            '--hanji',
                            this.nowActive == 3 ? '--active' : '',
                        ]"
                    >
                        夯吉喵，萌果君的主人，性格激動容易感到驚訝，喜歡去遛市集、釣魚跟發呆，只吃美食。總是隨身攜帶一把小刀，最常說的話”把食物交出來”。
                    </p>
                </div>
            </div>
            <img
                class="slogan_img"
                src="~/assets/images/home/slogan.svg"
                alt=""
            />
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nowActive: null,
        };
    },
    methods: {
        show(index) {
            if (index == this.nowActive) {
                this.nowActive = null;
            } else {
                this.nowActive = index;
            }
        },
    },
};
</script>

<style>
</style>
