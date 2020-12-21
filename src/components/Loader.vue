<template>
    <Suspense>
        <template #default>
            <router-view :name="name"></router-view>
        </template>
        <template #fallback>
            <div>
                loading
            </div>
        </template>
    </Suspense>
</template>

<script>
    import { onErrorCaptured } from 'vue';
    import { ElLoading } from 'element-plus';
    export default {
        props: {
            name
        },
        name: "Loader",
        setup({name}){
            onErrorCaptured(err => {
                alert("Ошибка")
            });

            return {
                name
            }
        },
        components: {
            ElLoading
        }
    }
</script>

<style scoped>

</style>