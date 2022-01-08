package com.myblog.entity;

import com.myblog.entity.data.Content;

import javax.persistence.*;
import java.lang.reflect.Array;
import java.time.LocalDate;
import java.util.*;

@Entity
public class Blog {
    @Id
    //Create sequence
    @SequenceGenerator(
            name="blog_sequence",
            sequenceName= "blog_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy =  GenerationType.SEQUENCE,
            generator = "blog_sequence"
    )
    @Column(
            name="id",
            updatable = false  //cannot update the id
    )
    private Long id;
    @Column(
            name="title",
            nullable = false,   //user_name cannot be nullable
            columnDefinition = "TEXT",
            unique = true
    )
    private String title;
    @Column(
            name="content",
            nullable = false   //user_name cannot be nullable
    )
    private String content;
//    @ElementCollection
//    private ArrayList<String> type;
    private LocalDate dob;

    public Blog(){}
    public Blog(String title, String content, LocalDate dob){
        this.title = title;
        this.content= content;
//        this.type = type;
        this.dob = dob;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

//    public ArrayList<String> getType(){
//        return this.type;
//    }
}
