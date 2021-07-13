import React, {useState} from "react";
import {Radio, FormControlLabel, RadioGroup, Button, Container} from "@material-ui/core";
import Summary from "./Summary";
import Snackbar from "@material-ui/core/Snackbar";

const Questions = ({allQues}) => {
    const [activeQues, setActiveQues] = useState(0)
    const [disable, setDisable] = useState(false)
    const [snack, setSnack] = useState({
        open: false,
        message: ""
    })
    const renderQuestion = (activeQuestion) => (
        <Question question={allQues[activeQuestion]} disable={disable}/>
    )
    const handleClose = () => {
        setSnack({
            snack: false,
        })
    }
    const changeQues = () => {
        if (activeQues === (allQues.length - 1)) {
            setSnack({
                open: true,
                message: "No more Questions!!"
            })
        }
        const newActiveQues = activeQues !== (allQues.length - 1) ? activeQues + 1 : activeQues
        setActiveQues(newActiveQues)
    }
    const prevQues = () => {
        const newActiveQues = activeQues !== 0 ? activeQues - 1 : activeQues
        setActiveQues(newActiveQues)
    }
    const submitTest = () => {
        setSnack({
            open: true,
            message: "Test Submitted :)"
        })
        setDisable(true)
    }
    return (
        <Container fixed style={{display: "flex", justifyContent: "space-between"}}>
            <div style={{flex: "1"}}>
                {renderQuestion(activeQues)}
                <Button
                    variant={"outlined"}
                    size={"small"}
                    disabled={disable}
                    color={"secondary"}
                    style={{margin: 5}}
                    onClick={changeQues}
                >Next
                </Button>
                <Button
                    variant={"outlined"}
                    size={"small"}
                    disabled={disable}
                    color={"secondary"}
                    style={{margin: 5}}
                    onClick={prevQues}
                >Previous
                </Button>
                {
                    activeQues === allQues.length - 1 ?
                        <Button
                            variant={"outlined"}
                            size={"small"}
                            color={"secondary"}
                            style={{margin: 5}}
                            onClick={submitTest}
                        >Submit and Finish
                        </Button> : ""
                }
            </div>
            <div>
                <Summary allQues={allQues} setActiveQues={setActiveQues} />
            </div>
            {
                snack ? <Snackbar
                    open={snack.open}
                    onClose={handleClose}
                    message={snack.message}
                /> : ""
            }
        </Container>
    )
}

const Question = ({question, disable}) => {
    const [value, setValue] = useState([{id: question.id, ans: ""}])
    const changeValue = (e) => {
        const selectedAns = {id: question.id, ans: e.target.value}
        value.map((eachAns) => {
            if (eachAns.id === question.id) {
                value.splice(value.indexOf(eachAns), 1)
                return setValue([...value, selectedAns])
            }
            return setValue([...value, selectedAns])
        })
    }
    return (
        <>
            <div>
                <h3>Question {question.id + 1}: </h3>
                <p>{question.question}</p>
            </div>
            <RadioGroup
                value={value.filter((current) => (current.id === question.id))[0] ? value.filter((current) => (current.id === question.id))[0].ans : ""}
                onChange={changeValue}>
                {
                    question.options.map((option) => (
                        <FormControlLabel disabled={disable} value={option.option} control={<Radio/>} label={option.option}/>
                    ))
                }
            </RadioGroup>
            <p>{JSON.stringify(value)}</p>
        </>
    )
}
export default Questions;