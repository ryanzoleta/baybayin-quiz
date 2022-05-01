<script>
  import { questions } from '../stores/questions';
  import { slideOutLeft } from '../common/animate';
  import ChoiceButton from '../components/ChoiceButton.svelte';

  // Retrieve 10 random letters from the questions store
  let remainingQuestion = $questions
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

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

    if (remainingQuestion.length <= 0) {
      handleEndQuiz();
    }
  }

  function handleClickChoice(isCorrect) {
    if (isCorrect) {
      score += 1;
    }
    totalItems += 1;
    slideOutLeft(document.getElementById('entireView'));
    setTimeout(() => nextQuestion(), 500);
  }
</script>

<main>
  <div
    class="container d-flex flex-column min-vh-100 justify-content-center align-items-center animate__animated animate__slideInRight"
    id="entireView"
  >
    <div class="row ">
      <div class="col title-box">
        <div class="question">
          <h1 class="vertical-middle">{remainingQuestion[0]}</h1>
        </div>
        {#each choices as choice}
          <div>
            <ChoiceButton
              text={choice}
              isCorrect={choice === remainingQuestion[0] ? true : false}
              {handleClickChoice}
            />
            <br />
          </div>
        {/each}
      </div>
    </div>
  </div>
</main>

<style>
  .container {
    height: 100vh;
  }

  .question {
    background: #ffffff;
    border: 29px solid #ffafcc;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;

    width: 400px;
    height: 400px;
  }

  .question h1 {
    font-size: 56px;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  #entireView {
    --animate-duration: 0.5s;
  }
</style>
