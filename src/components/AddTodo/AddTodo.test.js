import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./AddTodo";

const dispatch = jest.fn();

describe("check render", ()=>{

    test("input render check", ()=>{
        render(<Search />)
        const input = screen.getAllByTestId("todo_input")
        
    })

    test("button render check", ()=>{
        render(<Search />)
        const button = screen.getAllByTestId("todo_button")
    })

    // test("button click check", ()=>{
    //     render(<Search />)
    //     const buttonClick = screen.getAllByTestId("todo_button")
    //     expect(buttonClick).toHaveTextContent("Add Todo")
    // })

})