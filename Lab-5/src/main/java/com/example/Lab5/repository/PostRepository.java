package com.example.Lab5.repository;

import com.example.Lab5.domain.Post;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends CrudRepository<Post, Long> {
    public List<Post> findAll();
//    public Optional<Post> getPostByID(long id);
//    public void addPost(Post post);
//    public void deletePost(long id);

    @Query(value = "select Post.title from Post ")
    public Post findName(Long id);

}
