package com.example.Lab5.controller;

import com.example.Lab5.domain.Post;
import com.example.Lab5.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/posts")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {
    @Autowired
    PostService postService;

    @GetMapping
    public List<Post> getAllPosts() {
        return postService.getAll();
    }

        @GetMapping("/{id}")
        public Optional<Post> getPostById(@PathVariable("id") long id) {
            return postService.getPostByID(id);

        }

        @PostMapping
        @ResponseStatus(value = HttpStatus.CREATED)
        public void addPost(@RequestBody Post post){
    //        System.out.println(post.getTitle());
            postService.addPost(post);

        }

    //    @GetMapping("/{id}")
        @DeleteMapping("/{id}")
        public void deletePost(@PathVariable("id") long id) {
            postService.deletePost(id);
        }
}
