package com.example.Lab5.service;

import com.example.Lab5.domain.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {
    public List<Post> getAll();
    public Optional<Post> getPostByID(long id);
    public void addPost(Post post);
    public void deletePost(long id);


}
