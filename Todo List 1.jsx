import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (!task.trim()) return;
    setTasks((prevTasks) => [...prevTasks, task]);
    setTask("");
  };

  const handleRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className=" mx-auto mt-10 p-5  rounded-lg bg-white">
      <h2 className="text-xl font-bold mb-4">To-Do List</h2>
      <div className="flex gap-2 mb-4">
        <Input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <Button onClick={handleAddTask} disabled={!task.trim()}>
          Add
        </Button>
      </div>
      <div>
        {tasks.length > 0 ? (
          tasks.map((t, index) => (
            <Card key={index} className="mb-2 flex justify-between items-center p-2">
              <CardContent className="p-0">{t}</CardContent>
              <Button variant="ghost" onClick={() => handleRemoveTask(index)}>
                <Trash2 className="w-4 h-4 text-red-500" />
              </Button>
            </Card>
          ))
        ) : (
          <p className="text-gray-500 text-center">No tasks yet. Start by adding one! 🎯</p>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
