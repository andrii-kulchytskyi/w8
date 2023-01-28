import React, {useState} from 'react';


const removeTodoList = (state: any, action: any) => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {

        }
    }
}
const removeTodoListAC = (id: string) => {
    return {
        type: "REMOVE-TODOLIST",
        payload: {
            id: id
        }
    }
}