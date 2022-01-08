package com.myblog.service;

import com.myblog.entity.Blog;
import com.myblog.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class BlogService {
    private final BlogRepository blogRepository;

    @Autowired
    public BlogService(BlogRepository blogRepository){
        this.blogRepository = blogRepository;
    }

    public List<Blog> getBlogs(){
        return blogRepository.findAll();
    }

    public void addBlog(Blog blog){
        Optional<Blog> blogByTitle = blogRepository.findBlogByTitle(blog.getTitle());
        if (blogByTitle.isPresent()){
            throw new IllegalStateException("Title was taken!");
        }
        blogRepository.save(blog);
    }

    public void deleteBlog(Long id){
        if (!blogRepository.existsById(id)){
            throw new IllegalStateException("Blog does not exist to be deleted");
        }
        else{
            blogRepository.deleteById(id);
        }
    }

    @Transactional
    public void updateBlog(Long id, Blog blog){
        if (!blogRepository.existsById(id)){
            throw new IllegalStateException("Student does not exist to be updated");
        }
        else{
            Blog foundBlog = blogRepository.getById(id);
            foundBlog.setTitle(blog.getTitle());
            foundBlog.setContent(blog.getContent());
            foundBlog.setDob(blog.getDob());
        };
    }
}
