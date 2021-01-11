import React from 'react';

export type QuestionType = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type QuizType = {
    question: string
    answer: string
    options: string[]
}

export type questionPropsType = {
    submitQuestion: (selectedOption: string, answer: string) => void
    options: string []
    question: string
    answer: string
}