<template>
    <div>
        <form class="new-comment" method="post">
            <slot></slot>
            <textarea name="comment-content"
                      placeholder="写下你的评论...">
            </textarea>
            <div class="write-function-block">
                <div class="emoji-model-wrap" >
                    <popover :always="false" placement="bottomLeft">
                        <a href="javascript:void(0)" class="emoji button">
                        <i class="fa fa-smile-o"></i>
                    </a>
                        <div class="emoji-modal" slot="content">
                            <emoji-vue></emoji-vue>
                        </div>
                    </popover>
                </div>
                <div class="hint">Ctrl+Enter发表</div>
                <a href="#" class="btn-send">发送</a>
                <a href="#" class="btn-cancel">取消</a>
            </div>
        </form>
    </div>
</template>

<script>
    import emojiVue from '~/components/emoji'

    export default {
        name: "myForm",
        components: {
            emojiVue
        }
        ,
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>