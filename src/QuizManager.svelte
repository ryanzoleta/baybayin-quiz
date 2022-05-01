<script>
  import LandingView from './views/LandingView.svelte';
  import QuizView from './views/QuizView.svelte';
  import { questions } from './stores/questions';

  const LANDING = 'LANDING';
  const QUIZ = 'QUIZ';
  const RESULTS = 'RESULTS';

  let view = LANDING;
  let score;
  let totalItems;

  function handleClickStart() {
    view = QUIZ;
  }

  function handleEndQuiz(score, totalItems) {
    view = RESULTS;
    score = score;
    totalItems = totalItems;
  }
</script>

{#if view === LANDING}
  <LandingView {handleClickStart} />
{:else if view === QUIZ}
  <QuizView {handleEndQuiz} bind:score bind:totalItems />
{:else if view === RESULTS}
  <h1>RESULTS</h1>
  <p>{score}</p>
  <p>{totalItems}</p>
{/if}

<style>
</style>
