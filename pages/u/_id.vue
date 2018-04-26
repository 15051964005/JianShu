<template>
    <div>
        <my-header></my-header>
        <div class="container person">
            <div class="row">
                <div class="col-xs-16 main">
                    <div class="main-top">
                        <nuxt-link class="avatar" to="/u/123">
                            <img src="~assets/img/default-avatar.jpg">
                        </nuxt-link>
                        <a href="#" class="btn btn-follow">
                            <i class="fa fa-plus"></i>
                            <span>关注</span>
                        </a>
                        <nuxt-link class="btn btn-hollow" to="/notify/123">
                            发简信
                        </nuxt-link>
                        <div class="title">
                            <nuxt-link to="/u/123" class="name">雨落荒原</nuxt-link>
                            <i class="fa fa-mars"></i>
                        </div>
                        <div class="info">
                            <ul>
                                <li>
                                    <div class="meta-block">
                                        <nuxt-link to="/user/123">
                                            <p>118</p>
                                            <span>关注</span>
                                            <i class="fa fa-angle-right"></i>
                                        </nuxt-link>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <nuxt-link to="/user/123">
                                            <p>15031</p>
                                            <span>粉丝</span>
                                            <i class="fa fa-angle-right"></i>
                                        </nuxt-link>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <nuxt-link to="/u/123">
                                            <p>15031</p>
                                            <span>粉丝</span>
                                            <i class="fa fa-angle-right"></i>
                                        </nuxt-link>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <p>25554</p>
                                        <span>字数</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <p>2554</p>
                                        <span>收获喜欢</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul class="trigger-menu">
                        <li class="active">
                            <a href="#">
                                <i class="fa fa-file-text"></i>
                            </a>
                        </li>
                    </ul>
                    <div class="list-container"></div>
                </div>
                <div class="col-xs-7 col-xs-offset-1 aside"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import myHeader from '~/components/myHeader'
    export default {
        head:{
            title:"简书作者页面-创作你的创作",
            meta:[
                {charset:'utf-8'},
                {name:'keywords',content:'作者详情页面'},
                {name:'description',content:'作者页面'},
                {name:'author',content:'许星'}
            ]
        },
        components:{
            myHeader
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>