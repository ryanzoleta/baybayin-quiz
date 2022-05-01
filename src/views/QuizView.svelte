<script>
    import { questions } from '../stores/questions';
    import ChoiceButton from '../components/ChoiceButton.svelte';

    let remainingQuestion = $questions;
    export let handleEndQuiz;
    export let score = 0;
    export let totalItems = 0;

    function nextQuestion() {
        remainingQuestion = remainingQuestion.slice(1);

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
    <ChoiceButton text="ka" isCorrect={true} {handleClickChoice} />
    <ChoiceButton text="ba" isCorrect={false} {handleClickChoice} />
    <ChoiceButton text="sa" isCorrect={false} {handleClickChoice} />
    <ChoiceButton text="na" isCorrect={false} {handleClickChoice} />
</main>

<style>
    /* your styles go here */
</style>
