<script>
  import LinkButton from './components/LinkButton.svelte';
  import QuizManager from './QuizManager.svelte';
</script>

<svelte:head>
  <title>Hello</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <style>
    body {
      background-color: #a2d2ff;
    }

    @font-face {
      font-family: arial-rounded;
      src: url(fonts/arial-rounded.ttf);
    }
  </style>
</svelte:head>

<main>
  <QuizManager />
</main>
