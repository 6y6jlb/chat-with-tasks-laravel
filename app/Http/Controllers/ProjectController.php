<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function table_index()
    {
        $projects = new Project();
        return view('projects', [
            'data' => $projects->all()
        ]);
    }


    public function project_index($id)
    {
        $project = Project::where('id',$id)
        ->get();
        return view('project', [
            'data' => $project[0]
        ]);
    }

    public function project_new_card()
    {
        return view('add-project');
    }

    public function project_add(Request $request)
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
