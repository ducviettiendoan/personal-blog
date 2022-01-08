package com.myblog.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.myblog.entity.Blog;
import com.myblog.repository.BlogRepository;
import com.myblog.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONObject;

@RestController
@RequestMapping(path="/blog")
@CrossOrigin("*")
public class BlogController {
    private BlogService blogService;
    @Autowired

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @GetMapping
    public List<Blog> getAllBlogs(){
        return blogService.getBlogs();
    }

    @PostMapping(path = "/post")
    public void addBlog(@RequestBody Blog blog){
//        ObjectMapper mapper = new ObjectMapper();
//        ArrayList<String> strings = mapper.readValue("[\"string1\",\"string2\",\"string3\"]", ArrayList.class);

//        Blog addedBlog = new Blog(blog.getTitle(), null, null, blog.getDob());
//        JSONArray jsonArray = new JSONArray(blog.getContent());
//        ArrayList<String> javaContent = new ArrayList<String>();
//        if (jsonArray != null) {
//
//            //Iterating JSON array
//            for (int i=0;i<jsonArray.length();i++){
//                javaContent.add(jsonArray.getString(i));
//            }
//        };
//
//        for(int i=0;i<javaContent.size();i++){
//            System.out.println(javaContent.get(i));
//        }
//        addedBlog.setContent(javaContent);
//        JSONArray jsonArray2 = new JSONArray(blog.getType());
//        ArrayList<String> javaType = new ArrayList<String>();
//        if (jsonArray != null) {
//            //Iterating JSON array
//            for (int i=0;i<jsonArray2.length();i++){
//                javaType.add(jsonArray2.getString(i));
//            }
//        };
//        addedBlog.setContent(javaType);
        blogService.addBlog(blog);
    }

    @DeleteMapping(path = "/delete/{blogId}")
    public void deleteBlog(@PathVariable Long blogId){
        blogService.deleteBlog(blogId);
    }

    @PutMapping(path="/update/{blogId}")
    public void updateBlog(@PathVariable Long blogId, @RequestBody Blog blog){
        blogService.updateBlog(blogId, blog);
    }
}
