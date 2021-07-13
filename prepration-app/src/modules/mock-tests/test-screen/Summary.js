import React from "react";
import {Chip, Button} from "@material-ui/core";

const Summary = ({allQues, setActiveQues}) => {
    const navigateToQues = (quesNo) => {
        setActiveQues(quesNo)
    }
    return (
        <>
            <Chip
                size={"small"}
                color="primary"
                label={"Question Palette"}
                style={{display: "block", padding: 5, margin: 10}}
            />
            <div style={{marginLeft: 10}}>
                {
                    allQues.map((ques) => (
                        <Button
                            variant={"outlined"}
                            size={"small"}
                            color={"secondary"}
                            style={{margin: 4}}
                            onClick={() => navigateToQues(ques.id)}
                        >
                            {ques.id + 1}
                        </Button>
                    ))
                }
            </div>
        </>
    )
}

export default Summary