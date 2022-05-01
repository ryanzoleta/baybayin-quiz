<script>
  import LandingView from './views/LandingView.svelte';
  import QuizView from './views/QuizView.svelte';
  import ResultsView from './views/ResultsView.svelte';
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

  function restartQuiz() {
    view = QUIZ;
  }

  function gotoHome() {
    view = LANDING;
  }
</script>

{#if view === LANDING}
  <LandingView {handleClickStart} />
{:else if view === QUIZ}
  <QuizView {handleEndQuiz} bind:score bind:totalItems />
{:else if view === RESULTS}
  <ResultsView {score} {totalItems} {restartQuiz} {gotoHome} />
{/if}

<style>
</style>
