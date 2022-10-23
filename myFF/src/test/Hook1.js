import React, { useReducer, useState } from 'react';
import Hook2 from './Hook2';

const reducer = (state, action) => {
  // 기존 state, 앞으로 실행할 action을 가져온다
  // return 값은 studentsInfo 에 담긴다
  // studentsInfo state가 변경되면서 렌더링
  switch (action.type){
    case 'add-student':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case 'delete-student':
      return {
        count: state.count - 1,
        students: state.students?.filter(
          (student) => student.id != action.payload.id
        ),
      };
    case 'mark-student':
      return {
        count: state.count,
        students: state.students?.map((student) => {
          if(student.id == action.payload.id){
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      }; 
    default: 
      return state;
  }
}

const initialState = {
  count: 0,
  students: [],
}

const Hook = () => {
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);
  
  return(
    <div>
      <h1>출석부</h1>
      <p>총 학생수 : {studentsInfo.count}</p>
      <input
        type="text"
        placeholder='이름을 입력해주세요'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: 'add-student', payload: { name } });
        }}
      >
        추가
      </button>
      {studentsInfo.students.map((student) => {
        return (
          <Hook2 
            key={student.id} 
            name={student.name} 
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </div>
  );
}

export default Hook;