<template>
    <div>
        <form class="new-comment" method="post">
            <slot></slot>
            <textarea name="comment-content"
                      placeholder="写下你的评论...">
            </textarea>
            <div class="write-function-block">
                <div class="emoji-model-wrap">
                    <a href="#" class="emoji">
                        <i class="fa fa-smile-o"></i>
                        <div class="emoji-model"></div>
                    </a>
                </div>
                <div class="hint">Ctrl+Enter发表</div>
                <a href="#" class="btn-send">发送</a>
                <a href="#" class="btn-cancel">取消</a>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "myForm",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>