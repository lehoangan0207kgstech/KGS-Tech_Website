<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('blogs')->insert([
            [
                'title' => 'Cách mạng công nghệ 4.0',
                'date' => '2025-01-01',
                'description' => 'Khám phá cách KGS-Tech đang dẫn đầu trong cuộc cách mạng công nghệ 4.0.',
                'image' => 'https://th.bing.com/th/id/OIP.OQoQytoTUoRYHFyaPX8eBAHaE8?rs=1&pid=ImgDetMain',
                'link' => '/blog/tech-revolution',
                'category' => 'Công nghệ',
            ],
            [
                'title' => 'Sức mạnh của trí tuệ nhân tạo',
                'date' => '2024-12-15',
                'description' => 'AI không chỉ là xu hướng mà còn là tương lai của công nghệ.',
                'image' => 'https://th.bing.com/th/id/R.8abbfef792896a4577d062bee9ef3fd2?rik=t%2bhUQVctHYqORw&pid=ImgRaw&r=0',
                'link' => '/blog/ai-power',
                'category' => 'AI',
            ],
        ]);
    }
}
