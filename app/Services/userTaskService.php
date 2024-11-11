<?php 
namespace App\Services;

use App\Interfaces\UserTaskInterface;
use App\Models\UserTask;

class userTaskService implements UserTaskInterface

{
    public function createTask($request)
    {

        $data = 
        [
            'user_id' => $request->user_id,
            'title' => $request->title,
            'content' => $request->content,
            'priority' => $request->priority,
            'status' => $request->status??'TO-DO',
            'assigned_by' => auth_user(),
            'due_date' => $request->due_date
        ];

        // dd($request);

       $task =  UserTask::create($data);
       if($task) {
        return $task;
       }
       return false;
    }
    public function updateTask($request)
    {
        $task = UserTask::where('id', $request->task_id)->first();
        if($task)
        {
            $task->update([ 
                'user_id' => $request->user_id,
                'title' => $request->title,
                'content' => $request->content,
                'priority' => $request->priority,
                'assigned_by' => auth_user(),
                'due_date' => $request->due_date
            ]);  
            return $task;
        }
        return false;
    }
    public function updateTaskStatus($request)
    {
        $task = UserTask::where(['user_id' => auth_user(), 'id' => $request->task_id])->first();
        if($task)
        {
            $task->update(['status' => $request->status]);
            return $task;
        }
        return false;
    }
    public function getUserTask($user_id)
    {
        $task = UserTask::where('user_id', $user_id)->latest()->paginate(10);
        return $task;
    }
    public function getAllTask()
    {
       $task = UserTask::latest()->paginate(10);
       return $task->load('UserTask');
    }

}