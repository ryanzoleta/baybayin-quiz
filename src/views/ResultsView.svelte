<script>
  import LinkButton from '../components/LinkButton.svelte';

  export let score = 0;
  export let totalItems = 0;
  export let restartQuiz;
  export let gotoHome;

  function handleClickAgain() {
    restartQuiz();
  }
</script>

<main>
  <div
    class="container d-flex flex-column min-vh-100 justify-content-center align-items-center animate__animated animate__slideInUp"
    id="entireView"
  >
    <div class="row ">
      <div class="col">
        <div id="resultsBox">
          <h3>Results</h3>
          <h1>{score} / {totalItems}</h1>
          <LinkButton text="Try again" handleClick={handleClickAgain} />
          <LinkButton
            text="Back to Home"
            handleClick={gotoHome}
            type="secondary"
          />
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  .container {
    height: 100vh;
  }

  #resultsBox {
    background-color: white;
    border-radius: 50px;
    padding: 70px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    width: 851px;
  }

  #resultsBox h3 {
    font-family: 'Arial Rounded MT Bold';
    font-size: 48px;
    color: #979797;
  }

  #resultsBox h1 {
    font-family: 'Arial Rounded MT Bold';
    font-size: 100px;
    color: #474747;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  #resultsBox {
    --animate-duration: 1s;
  }
</style>
