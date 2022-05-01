<script>
    export let text = 'Start';
    export let handleClickStart;
</script>

<button type="button" class="btn" on:click={handleClickStart}>{text}</button>

<style>
    /* your styles go here */
</style>
