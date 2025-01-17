import styled from 'styled-components'
import React, { useState } from 'react';

const AddTask = () => {

    const [inputValue, setInputValue] = React.useState("");

    const onChangeHandler = event => {
        setInputValue(event.target.value);
      };

    const addTask = (e) => {
        e.preventDefault();
        console.log(inputValue);
        setInputValue("");
    }

    return (
        <Container>
            <Heading>Add Task</Heading>
            <FormBox>
                <form onSubmit={addTask}>
                    <input
                    type="text"
                    name="name"
                    onChange={onChangeHandler}
                    value={inputValue}
                />
                    <button className="primary__btn" type="submit">
                        Submit
                    </button>
                </form>
            </FormBox>

        </Container>
    )
}

export default AddTask

const FormBox = styled.div`
    position: fixed;
    width: 30%;
    top: 100px;
    left: 5%;

    @media screen and (max-width: 800px) {
     {
         width: 100%;
    }

`

const Container = styled.div`
    width: 50%;
    height: 400px;
    background-color: #D6C48F;
    position: fixed;
    z-index: 100;
    top: 0;
    border-radius: 0px 0px 0px 0px;

    @media screen and (max-width: 800px) {
     {
         width: 100%;
    }
`

const Heading = styled.div`
    padding-left: 30px;
    font-size: 2em;
    font-weight: 800;
    width: 50%;
    min-width: 250px;
    height: 100%;
    line-height: 3em;
    color: white;
`