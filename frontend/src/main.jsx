import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import TaskListPage from './pages/TaskListPage';
import TaskDetailPage from './pages/TaskDetailPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<TaskListPage />} />

      <Route
        path="/tasks/:id"
        element={<TaskDetailPage />}
      />

    </Routes>

  </BrowserRouter>
)