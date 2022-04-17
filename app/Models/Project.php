<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{

    protected $filable = ['title','description'];

    use HasFactory;
    private mixed $title;
    private mixed $author;
    private mixed $description;
}
