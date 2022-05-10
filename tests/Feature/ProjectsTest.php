<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProjectsTest extends TestCase
{
    public function test_projects_view()
    {
        $response = $this->get('/projects');

        $response->assertStatus(200);
    }

}
