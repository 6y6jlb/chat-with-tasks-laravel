<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class ProjectsController extends Controller
{
    public function index()
    {
        $projects = new Project();
        return view('projects', [
            'data' => $projects->all()
        ]);
    }


}
