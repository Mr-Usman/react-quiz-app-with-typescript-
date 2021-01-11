import { QuestionType, QuizType} from "../types/quiz_types";

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

export const getQuizData = async (totalQuestions: number, level: string): Promise<QuizType[]> => {
    const apiResult = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
    let { results } = await apiResult.json();
    const quiz: QuizType[] = results.map((questionObject: QuestionType) => {
        return {
            question: questionObject.question,
            answer: questionObject.correct_answer,
            options: shuffleArray(questionObject.incorrect_answers.concat(questionObject.correct_answer))
        }
    });
    return quiz;
};