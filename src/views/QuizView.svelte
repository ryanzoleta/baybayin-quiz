<script>
  import { questions } from '../stores/questions';
  import { slideOutLeft, shake, bounce } from '../common/animate';
  import ChoiceButton from '../components/ChoiceButton.svelte';

  // Retrieve 10 random letters from the questions store
  let remainingQuestion = $questions
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  // Get 3 random items from the questions store, add the correct one, and shuffle
  let choices = $questions.sort(() => 0.5 - Math.random()).slice(0, 3);
  choices = [...choices, remainingQuestion[0]];
  choices = choices.sort(() => 0.5 - Math.random());

  export let handleEndQuiz;
  export let score = 0;
  export let totalItems = 0;

  function nextQuestion() {
    // Get the next question and update the choices
    remainingQuestion = remainingQuestion.slice(1);
    choices = $questions.sort(() => 0.5 - Math.random()).slice(0, 3);
    choices = [...choices, remainingQuestion[0]];
    choices = choices.sort(() => 0.5 - Math.random());

    const currentProgress = document
      .getElementById('progressBar')
      .style.width.replace('%', '');
    document.getElementById('progressBar').style.width =
      parseInt(currentProgress) + 10 + '%';
    console.log(document.getElementById('progressBar').style.width);

    if (remainingQuestion.length <= 0) {
      handleEndQuiz();
    }
  }

  function handleClickChoice(isCorrect) {
    if (isCorrect) {
      score += 1;
    }
    totalItems += 1;
    slideOutLeft(document.getElementById('questionRow'));
    setTimeout(() => nextQuestion(), 500);
  }

  function broadcastResult(isCorrect) {
    if (isCorrect) {
      bounce(document.getElementById('question'));
    } else {
      shake(document.getElementById('question'));
    }
  }
</script>

<main>
  <div class="container " id="entireView">
    <div class="row animate__animated animate__slideInRight" id="questionRow">
      <div class="col" />
      <div class="col title-box">
        <div id="questionBox">
          <div id="question">
            <h1 class="vertical-middle">{remainingQuestion[0]}</h1>
          </div>
          {#each choices as choice}
            <div>
              <ChoiceButton
                text={choice}
                isCorrect={choice === remainingQuestion[0] ? true : false}
                {handleClickChoice}
                {broadcastResult}
              />
              <br />
            </div>
          {/each}
        </div>
      </div>
      <div class="col" />
    </div>
    <div class="row">
      <div class="col" />
      <div class="col">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width:0%"
            id="progressBar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </div>
      <div class="col" />
    </div>
  </div>
</main>

<style>
  .container {
    height: 100vh;
  }

  #question {
    background: #ffffff;
    border: 29px solid #ffafcc;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;

    width: 400px;
    height: 400px;
  }

  #question h1 {
    font-size: 56px;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  #question {
    --animate-duration: 1s;
  }

  #entireView {
    --animate-duration: 0.5s;
  }

  #questionBox {
    margin-top: 100px;
    /* width: 490px; */
  }

  .progress {
    margin-top: 50px;
  }

  .progress-bar {
    background-color: #cfbaf0;
  }
</style>
