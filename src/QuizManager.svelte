<script>
    import LandingView from './views/LandingView.svelte';

    const LANDING = 'LANDING';
    const QUIZ = 'QUIZ';
    const RESULTS = 'RESULTS';

    let view = LANDING;

    function handleClickStart() {
        view = QUIZ;
    }
</script>

{#if view === LANDING}
    <LandingView {handleClickStart} />
{:else if view === QUIZ}
    <h1>QUIZ</h1>
{:else if view === RESULTS}
    <h1>RESULTS</h1>
{/if}

<style>
</style>
