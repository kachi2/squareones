<?php
namespace App\Dtos;

use App\Dtos\BaseDto;

class UserTaskDto extends BaseDto
{

    public function __construct(
        public readonly ?string $user_id= null,
        public readonly ?string $title= null,
        public readonly ?string $content= null,
        public readonly ?string $priority= null,
        public readonly ?string $status = null,
        public readonly ?string $assigned_by= null,
        public readonly ?string $task_id = null,
        public readonly ?string $due_date = null,
    )
    {
        
    }

}