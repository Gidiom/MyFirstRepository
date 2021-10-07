package com.example.Lab5.service;

import com.example.Lab5.domain.Post;
import com.example.Lab5.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService{

    @Autowired
    PostRepository postRepository;

    @Override
    public List<Post> getAll() {
        return postRepository.findAll();
    }

    @Override
    public Optional<Post> getPostByID(long id) {
        return postRepository.findById(id);
    }
//
    @Override
    public void addPost(Post post) {
        postRepository.save(post);
    }
//
    @Override
    public void deletePost(long id) {
        postRepository.deleteById(id);
    }
}
