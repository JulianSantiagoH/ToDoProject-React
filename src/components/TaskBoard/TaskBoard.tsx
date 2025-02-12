function TaskBoard({ taskData }) {
  return (
    <>
      {Object.values(taskData.map((item) => {
        return (
            <div key={item.id}>
                <h1>{item.taskDescription}</h1>
            </div>
        );
      }))}
    </>
  );
}

export default TaskBoard;
