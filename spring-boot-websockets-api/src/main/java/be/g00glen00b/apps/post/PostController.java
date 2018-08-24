package be.g00glen00b.apps.post;

import be.g00glen00b.apps.author.AuthorNotFoundException;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@AllArgsConstructor
public class PostController {
    private final Logger logger = LoggerFactory.getLogger(getClass());
    private PostService service;

    @SubscribeMapping("/posts/get")
    public List<PostListingDTO> findAll() {
        return service.findAll();
    }

    @MessageMapping("/posts/create")
    @SendTo("/topic/posts/created")
    public PostListingDTO save(PostInputDTO post) {
        return service.save(post);
    }

    @SubscribeMapping("/posts/{id}/get")
    public PostInfoDTO findOne(@DestinationVariable Long id) {
        return service.findOne(id);
    }


    @SubscribeMapping("/author/{username}/posts/get")
    public List<PostListingDTO> findPostsByAuthor(@DestinationVariable("username") String username) {
        return service.findByAuthor(username);
    }

    @MessageExceptionHandler
    @SendToUser("/topic/error")
    public String handleException(PostNotFoundException ex) {
        logger.debug("Post not found", ex);
        return "The requested post was not found";
    }

    @MessageExceptionHandler
    @SendToUser("/topic/error")
    public String handleException(AuthorNotFoundException ex) {
        logger.debug("Author not found", ex);
        return "The given author was not found";
    }
}
