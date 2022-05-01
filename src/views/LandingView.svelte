<script>
    import LinkButton from '../components/LinkButton.svelte';

    export let handleClickStart;
</script>

<main>
    <h1>Baybabyin 101</h1>
    <p>Learn the native alphabet of the Philippines</p>
    <LinkButton text="Mag-simula" {handleClickStart} />
</main>

<style>
    /* your styles go here */
</style>
