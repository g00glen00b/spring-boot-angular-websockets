package be.g00glen00b.apps.comment;

import lombok.AllArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
@AllArgsConstructor
public class CommentController {
    private CommentService service;

    @MessageMapping("/posts/{id}/comment")
    @SendTo("/topic/posts/{id}/comment")
    public CommentDTO createComment(@DestinationVariable("id") Long postId, CommentDTO comment) {
        return service.createComment(postId, comment);
    }
}
