<script>
  export let text = 'Start';
  export let handleClick;
</script>

<button type="button" class="btn" on:click={handleClick}>{text}</button>

<style>
  /* your styles go here */
</style>
