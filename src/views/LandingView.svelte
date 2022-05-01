<script>
  import LinkButton from '../components/LinkButton.svelte';

  export let handleClickStart;
</script>

<main>
  <div
    class="container d-flex flex-column min-vh-100 justify-content-center align-items-center"
  >
    <div class="row ">
      <div class="col title-box animate__animated animate__slideInDown">
        <h2>ᜊᜌ᜔ᜊᜌᜒᜈ᜔</h2>
        <h1>Baybayin 101</h1>
        <p>Learn the native alphabet of the Philippines</p>
        <LinkButton text="start" handleClick={handleClickStart} />
      </div>
    </div>
  </div>
</main>

<style>
  .title-box {
    background-color: white;
    border-radius: 50px;
    padding: 70px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    --animate-duration: 0.4s;
  }

  .container {
    height: 100vh;
  }

  h1 {
    margin-bottom: 50px;
    font-size: 72px;
    color: #474747;
  }

  h2 {
    text-align: center;
    color: #979797;
    font-size: 48px;
    margin-bottom: 30px;
  }

  p {
    margin-bottom: 50px;
    font-size: 24px;
    color: #979797;
    padding-left: 50px;
    padding-right: 50px;
  }

  h1,
  p {
    text-align: center;
    font-family: 'Arial Rounded MT Bold';
  }
</style>
