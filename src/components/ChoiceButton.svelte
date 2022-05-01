<script>
    export let text = 'Start';
    export let isCorrect;
    export let handleClickChoice;

    function handleClick() {
        handleClickChoice(isCorrect);
    }
</script>

<button type="button" class="btn" on:click={handleClick}>{text}</button>

<style>
    /* your styles go here */
</style>
