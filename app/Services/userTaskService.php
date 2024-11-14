<?php 
namespace App\Services;

use App\Interfaces\UserTaskInterface;
use App\Models\TaskActivity;
use App\Models\TaskComment;
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

       $task =  UserTask::create($data);
       if($task) {
        TaskActivity::create([
            'task_id' => $task->id,
            'activity' => ucfirst(auth_name()).' assigned this task to '.ucfirst(getUserName($request->user_id))
        ]);
        return $task;
       }
       return false;
    }
    public function updateTask($request)
    {
        $task = UserTask::where('id', $request->task_id)->first();
        if($task)
        {
            $data = $this->checkifEdited($request, $task);
            // 
            if($data){
              TaskActivity::create([
                'task_id' => $task->id,
                'activity' => ucfirst(auth_name()).' changed '.$data['title'].' to: '.$data['data']
            ]);
         }
  
           
            $task->update([ 
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
            TaskActivity::create([
                'task_id' => $task->id,
                'activity' => ucfirst(auth_name()).' changed the status of this task to '.$request->status
            ]);
            return $task;
        }
        return false;
    }
    public function getUserTask($user_id)
    {
        $task = UserTask::where('user_id', $user_id)->latest()->paginate(10);
        $task->load('UserTask');
        return $task;
    }
    public function getAllTask()
    {
       $task = UserTask::latest()->paginate(10);
       return $task->load('UserTask');
    }


    public function addComments($request)
    {
        $task = UserTask::where('id', $request->task_id)->exists();
        if(!$task) return false;
        $comment = TaskComment::create([
            'task_id' => $request->task_id,
            'comment' => $request->comment,
            'sender_id' => auth_user()
        ]);
        if($comment) return $comment;
        return false;
    }

    public function getComments($task_id)
    {
        $comment = TaskComment::where('task_id', $task_id)->latest()->paginate(10);
        $comment->load('Users');
        if($comment) return $comment;
        return false;
    }

    public function getTaskActivity($task_id)
    {
        $activities = TaskActivity::where('task_id', $task_id)->latest()->paginate(10);
        if($activities) return $activities;
        return false;
    }

    public function checkifEdited($request, $new)
    {
        
            if(isset($request->title)){
            if(strtolower($request->title) != strtolower(($new->title))){
           return [
              'title' => 'Title',
              'data'=>$request->title
              ];
            }
        }
           if(isset($request->content)){
            if(strtolower($request->content) != strtolower(($new->content)))
            {
                return [
                    'title' => 'Content',
                    'data'=>$request->content
                    ];
            }
           }
            if(isset($request->priority)){
            if(strtolower($request->priority) != strtolower(($new->priority)))
            {
                return [
                    'title' => 'Priority',
                    'data'=>$request->priority
                    ];
            }
            }
            if(isset( $request->due_date)){
            if(strtolower($request->due_date) != strtolower(($new->due_date))) 
            {
                return [
                    'title' => 'Due Date',
                    'data'=>$request->due_date
                    ];
            }
            }

}
}