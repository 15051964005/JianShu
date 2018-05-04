<template>
    <div>
        <my-header></my-header>
        <!--其他注册用户信息界面-->
        <div class="container person">
            <div class="row">
                <div class="col-xs-16 main">
                    <!--顶部粉丝关注部分-->
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
                    <!--切换文章排序部分-->
                    <ul class="trigger-menu">
                        <li :class="{active:currentTab=='MyArticle'}">
                            <a href="javascript:void(0)"
                               @click="toggleTab('MyArticle')">
                                <i class="fa fa-file-text"></i>
                                文章
                            </a>
                        </li>
                        <li :class="{active:currentTab=='MyNew'}">
                            <a href="javascript:void(0)"
                               @click="toggleTab('MyNew')">
                                <i class="fa fa-bell"></i>
                                动态
                            </a>
                        </li>
                        <li :class="{active:currentTab=='MyComment'}">
                            <a href="javascript:void(0)"
                               @click="toggleTab('MyComment')">
                                <i class="fa fa-comment"></i>
                                最新评论
                            </a>
                        </li>
                        <li :class="{active:currentTab=='MyHot'}">
                            <a href="javascript:void(0)"
                               @click="toggleTab('MyHot')">
                                <i class="fa fa-fire"></i>
                                热门
                            </a>
                        </li>

                    </ul>
                    <!--文章列表模块-->
                    <div class="list-container">
                        <!--动态组件-->
                        <component :is="currentTab" keep-alive></component>
                    </div>
                </div>
                <div class="col-xs-7 col-xs-offset-1 aside">
                    <div class="title">个人介绍</div>
                    <div class="description">
                        <div class="js-intro">
                            逃跑医生，预防医学专家，抗衰老顾问，创业者，奶爸！人生意义思考者，东方智慧践行者。非著名作家坯子。
                        </div>
                    </div>
                    <ul class="list user-dynamic">
                        <li>
                            <nuxt-link to="/users/123/collection">
                                <i class="fa fa-book"></i>
                                <span>他关注的专题/文集/连载</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/users/123/like">
                                <i class="fa fa-heart-o"></i>
                                <span>他喜欢的文章</span>
                            </nuxt-link>
                        </li>
                    </ul>
                    <div>
                        <!--专题和文集-->
                        <div>
                            <!--创建的专题-->
                            <div>
                                <div class="title">他创建的专题</div>
                                <ul class="list">
                                    <li>
                                        <nuxt-link to="/collection/123"
                                                   class="avatar-collection">
                                            <img src="~/assets/img/movie.png">
                                        </nuxt-link>
                                        <nuxt-link to="/collection/123"
                                                   class="name">
                                            内容营销
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </div>
                            <!--管理的专题-->
                            <div>
                                <div class="title">他管理的专题</div>
                                <ul class="list">
                                    <li>
                                        <nuxt-link to="/collection/123"
                                                   class="avatar-collection">
                                            <img src="~/assets/img/movie.png">
                                        </nuxt-link>
                                        <nuxt-link to="/collection/123"
                                                   class="name">
                                            阅后即焚
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <!--文集-->
                            <div class="title">他的文集</div>
                            <ul class="list">
                                <li>
                                    <nuxt-link to="/note/123">
                                        <i class="fa fa-book"></i>
                                    </nuxt-link>
                                    <nuxt-link to="/note/123"
                                               class="name">
                                        随笔
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/note/123">
                                        <i class="fa fa-book"></i>
                                    </nuxt-link>
                                    <nuxt-link to="/note/123"
                                               class="name">
                                        感想
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import myHeader from '~/components/myHeader'
    import MyArticle from '~/components/user/MyArticle'
    import MyNew from '~/components/user/MyNew'
    import MyComment from '~/components/user/MyComment'
    import MyHot from '~/components/user/MyHot'

    export default {
        head: {
            title: "简书作者页面-创作你的创作",
            meta: [
                {charset: 'utf-8'},
                {name: 'keywords', content: '作者详情页面'},
                {name: 'description', content: '作者页面'},
                {name: 'author', content: '许星'}
            ]
        },
        components: {
            myHeader,
            MyArticle,
            MyNew,
            MyComment,
            MyHot
        },
        data() {
            return {
                currentTab: 'MyArticle'
            }
        },
        methods: {
            toggleTab: function (tab) {
                this.currentTab = tab
            }
        }
    }
</script>

<style scoped>

</style>