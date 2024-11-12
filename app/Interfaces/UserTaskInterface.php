<?php 

namespace App\Interfaces;

interface UserTaskInterface 
{

    public function createTask($request);
    public function updateTask($request);
    public function updateTaskStatus($request);
    public function getUserTask($user_id);
    public function getAllTask();
    public function addComments($request);
    public function getComments($task_id);
    public function getTaskActivity($task_id);


}