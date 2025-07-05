import './App.css'
import ClassComponents from './components/ClassComponent'
import Student from './components/Student'
import EventsExample from './components/EventsExample'
import HooksExample from './components/HooksExample'
import StudentLists from './components/StudentLists'
import UseEffectHook from './components/useEffectHook'
import Parent from './components/UseContext/parent'
import { Provider } from './components/UseContext/MyContext'
import HttpExample from './components/Http/HttpExample'
import BasicForm from './components/Forms/BasicForm'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import UseReducerHook from './components/useReducerHook'
import UseImperativeHook from './components/ImpertativeHooks/ImperativeHandleHook'

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/class" element={<ClassComponents />} />
        <Route path="/events" element={<EventsExample />} />
        <Route path="/hooks" element={<HooksExample />} />
        <Route path="/student" element={<StudentLists />} />
        <Route path="/github" element={<HttpExample />} />
      </Routes> */}
      {/* <Provider> */}
      {/* <UseEffectHook /> */}
      {/* </Provider> */}
      {/* <UseReducerHook /> */}
      <UseImperativeHook />
    </>
  )
}

export default App
