<script>
  import { pulse } from '../common/animate';

  export let text = 'Start';
  export let handleClick;
  export let type;
</script>

<button
  type="button"
  class="btn"
  class:secondary={type == 'secondary'}
  on:click={handleClick}
  on:mouseenter={pulse}>{text}</button
>

<style>
  button {
    width: 100%;
    background-color: #ffafcc;
    font-size: 36px;
    border-radius: 20px;
    color: white;
    font-family: 'Arial Rounded MT Bold';
    --animate-duration: 0.5s;
    margin-top: 20px;
  }

  .secondary {
    background-color: #ececec;
    color: #474747;
  }
</style>
