import Card from "../../shared/components/card/card";
import styles from './question.module.scss';
import {useState} from "react";
import Button from "../../shared/components/button/button";

const Question = () => {
    const [selectedAnswerId, setSelectedAnswerId] = useState(2);
    const renderQuestionTitle = ()=>{
        return <div className={styles.questionTitle}>
            You’re really busy at work and a colleague is telling you their life story and personal woes. You:
        </div>
    }

    const renderAnswerOptions = ()=>{
        const answers = [
            {text: 'Don’t dare to interrupt them', id: 1, alphabet:'A'},
            {text: 'Think it’s more important to give them some of your time; work can wait', id: 2, alphabet:'B'},
            {text: 'Listen, but with only with half an ear', id: 3, alphabet:'C'},
            {text: 'Interrupt and explain that you are really busy at the moment', id: 4, alphabet:'D'}
        ]
        return <div className={styles.answerOptions}>
            {answers.map((answer)=>{
                return <div
                    onClick={()=>setSelectedAnswerId(answer.id)}
                    className={`${styles.answerOption} ${selectedAnswerId === answer.id ? styles.selected: ''}`} key={answer.id}>
                    <span>
                        {answer.alphabet}. &nbsp; {answer.text}
                    </span>
                    {selectedAnswerId === answer.id ?
                    <img src={'images/test/selected-icon.svg'} /> : null}
                </div>
            })}
        </div>
    }

    const renderNextPreviousButtons = ()=>{
        return <div className={styles.buttonContainer}>
            <Button type='secondary'>Previous</Button>
            <Button type='primary'>Next</Button>
        </div>
    }

    return (
        <Card className={styles.question}>
            {renderQuestionTitle()}
            {renderAnswerOptions()}
            {renderNextPreviousButtons()}
        </Card>
    )
}

export default Question
