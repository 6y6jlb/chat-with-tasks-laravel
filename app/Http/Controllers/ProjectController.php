<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
 
    public function index()
    {
        return view('project');
    }

    public function add(Request $request)
    {
        {
            $valid = $request->validate([
                'title' => 'required | min:3 | max:50',
                'author' => 'max:50',
                'description' => 'max:999',
            ]);

            $project = new Project();
            $project->title = $request->input('title');
            $project->author = $request->input('author');
            $project->description = $request->input('description');

            $project->save();
            return redirect('projects');
        }
    }

}
