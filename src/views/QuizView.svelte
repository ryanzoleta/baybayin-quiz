<script>
  import { questions } from '../stores/questions';
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
    nextQuestion();
  }
</script>

<main>
  <h1>{remainingQuestion[0]}</h1>
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
</main>

<style>
  /* your styles go here */
</style>
