import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    console.log('task: ' + newTaskTitle);

    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks(oldTasks => [...oldTasks, data]);

    console.log(tasks);
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists

    let task = tasks.find(oldTask => oldTask.id == id);
    if(task){

      let updatedTasks: Task[] = []; 
      tasks.forEach(task => {
        if(task.id == id) {
          task.done = !task.done;
        }
        updatedTasks.push(task);
      });

      setTasks(updatedTasks);

    }
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state

    const newTasks = tasks.filter(task => task.id != id);
    setTasks(newTasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})