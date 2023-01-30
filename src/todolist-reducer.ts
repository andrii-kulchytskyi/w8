import React, {useState} from 'react';
import {TodolistType} from "./App";
import {v1} from "uuid";


const removeTodoList = (state: TodolistType[], action: BatyaType) => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            // setTodolists(todolists.filter(tl => tl.id != id));
            // // удалим таски для этого тудулиста из второго стейта, где мы храним отдельно таски
            // delete tasks[id]; // удаляем св-во из объекта... значением которого являлся массив тасок
            // // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
            // setTasks({...tasks});
            return state.filter(tl => tl.id != action.payload.id)
        }
        case "ADD-TODOLIST": {
            // let newTodolistId = v1();
            // let newTodolist: TodolistType = {id: newTodolistId, title: title, filter: 'all'};
            // setTodolists([newTodolist, ...todolists]);
            // setTasks({
            //     ...tasks,
            //     [newTodolistId]: []
            // })
            let newTodoListId = v1();
            let newTodoList: TodolistType = {id: newTodoListId, title: action.payload.title, filter: 'all'}
            return [...state, newTodoList]
        }
        case "CHANGE-TODOLIST-TITLE": {
            // const todolist = todolists.find(tl => tl.id === id);
            // if (todolist) {
            //     // если нашёлся - изменим ему заголовок
            //     todolist.title = title;
            //     setTodolists([...todolists]);
            // }

            return state.map(el => el.id === action.payload.id ? {...el, title: action.payload.title} : el)
        }

        default:
            return state
    }
}
type BatyaType = removeTodoListTypeAC | addTodoListTypeAC | changeTodoListTitleTypeAC;

type removeTodoListTypeAC = ReturnType<typeof removeTodoListAC>
type addTodoListTypeAC = ReturnType<typeof addTodoListAC>
type changeTodoListTitleTypeAC = ReturnType<typeof changeTodoListTitleAC>


const removeTodoListAC = (id: string) => {
    return {
        type: "REMOVE-TODOLIST",
        payload: {
            id: id
        }
    } as const
}
const addTodoListAC = (title: string) => {
    return {
        type: "ADD-TODOLIST",
        payload: {
            title: title
        }
    } as const
}
const changeTodoListTitleAC = (id: string, title: string) => {
    return {
        type: "CHANGE-TODOLIST-TITLE",
        payload: {
            title: title,
            id: id
        }
    } as const
}