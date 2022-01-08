package com.myblog.repository;

import com.myblog.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface BlogRepository extends JpaRepository<Blog, Long> {
    Optional<Blog> findBlogByTitle(String title);
}
