<script>
  import { pulse } from '../common/animate';

  export let text = 'Start';
  export let isCorrect;
  export let showCorrect = false;
  export let showWrong = false;
  export let handleClickChoice;
  export let broadcastResult;

  function handleClick() {
    broadcastResult(isCorrect);
    showCorrect = isCorrect ? true : false;
    showWrong = isCorrect ? false : true;
    setTimeout(() => {
      handleClickChoice(isCorrect);
      showCorrect = false;
      showWrong = false;
    }, 1500);
  }
</script>

<button
  type="button"
  class="btn "
  class:correct={showCorrect}
  class:wrong={showWrong}
  on:click={handleClick}
  on:mouseenter={pulse}
  >{text}
</button>

<style>
  button {
    background: #ffffff;
    border: 4px solid #cfcfcf;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 100%;
    margin-top: 22px;
    font-size: 24px;
    font-family: 'Arial';
    --animate-duration: 0.5s;
  }

  .correct {
    background: #84ffb5;
    border: 4px solid #62e797;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }

  .wrong {
    background: #ffa2a2;
    border: 4px solid #dc8b8b;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
</style>
