import React, {useEffect, useState} from "react";
import {Grid, Paper} from "@material-ui/core";
import {data as APIData} from './test-screen/TestingData';
import Questions from "./test-screen/Questions";

const TestScreen = () => {
    const [data, setData] = useState({
        passage: APIData.passage,
        questions: APIData.set
    })
    useEffect(() => {
        return setData({
            passage: APIData.passage,
            questions: APIData.set
        })
    }, [])
    return <Grid container spacing={1}>
        <Grid item xs={4}>
            <Paper style={{padding: 10}}>
                <h1>Passage: </h1>
                <p>{data.passage}</p>
            </Paper>
        </Grid>
        <Grid item xs={8}>
            <Paper style={{padding: 10}}>
                {<Questions allQues={data.questions}/>}
            </Paper>
        </Grid>
    </Grid>;
};

export default TestScreen;
