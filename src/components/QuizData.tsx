import React from 'react';
import { questionPropsType } from '../types/quiz_types';

const QuizData: React.FC<questionPropsType> = ({ 
    submitQuestion,
    onSelectOption,
    question, 
    options,
    answer
}) => {
    return(
         <div>
             <span>Question: {question}</span>

             <form onSubmit={submitQuestion}>
                {
                    options.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input
                                        type="radio"
                                        name="opt"
                                        // required
                                        value={opt}
                                        onChange={(e) => onSelectOption(e.target.value, answer)}
                                        // checked={selectedAns === opt}
                                    />
                                    {opt}
                                </label>
                            </div>
                        )
                    })
                }
                  <button type="submit">Next</button>
             </form>
         </div>
    )
};

export default QuizData;